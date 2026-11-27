/**
 * Refresh the public, explicitly uncurated OpenAlex catalogue at deployment time.
 * No API credentials or raw network responses are shipped to the browser.
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(import.meta.dirname, '..');
const apiRoot = 'https://api.openalex.org';
const allowedTypes = new Set(['article', 'review']);
// The renewed INEO proposal (CNPq 408449/2024-1) states a project start of May 1, 2025.
export const RENEWED_INEO_START_DATE = '2025-05-01';
const pause = ms => new Promise(resolve => setTimeout(resolve, ms));

export function isValidOrcid(value) {
  if (!/^\d{4}-\d{4}-\d{4}-[\dX]{4}$/.test(value)) return false;
  const digits = value.replaceAll('-', '');
  let total = 0;
  for (const char of digits.slice(0, 15)) total = (total + Number(char)) * 2;
  const check = (12 - (total % 11)) % 11;
  return (check === 10 ? 'X' : String(check)) === digits[15];
}

export function validateResearchers(researchers) {
  if (!Array.isArray(researchers) || researchers.length === 0) throw new Error('Empty researcher cohort');
  const seen = new Set();
  for (const researcher of researchers) {
    if (!researcher.name?.trim() || !researcher.institution?.trim() || !isValidOrcid(researcher.orcid)) {
      throw new Error(`Invalid researcher record: ${JSON.stringify(researcher)}`);
    }
    if (seen.has(researcher.orcid)) throw new Error(`Duplicate ORCID: ${researcher.orcid}`);
    seen.add(researcher.orcid);
  }
}

function apiUrl(route, parameters = {}) {
  const url = new URL(route, apiRoot);
  Object.entries(parameters).forEach(([key, value]) => url.searchParams.set(key, String(value)));
  return url;
}

async function requestJson(url, { fetchImpl, apiKey, wait }) {
  const headers = { Accept: 'application/json', 'User-Agent': 'INEO-publication-catalogue/1.0' };
  if (apiKey) headers.Authorization = `Bearer ${apiKey}`;
  for (let attempt = 0; attempt < 5; attempt++) {
    let response;
    try {
      response = await fetchImpl(url, { headers, signal: AbortSignal.timeout(30000) });
    } catch (error) {
      if (attempt === 4) throw error;
      await wait(Math.min(1000 * 2 ** attempt, 12000));
      continue;
    }
    if (response.status === 404) return null;
    if (response.ok) return response.json();
    if ((response.status === 429 || response.status >= 500) && attempt < 4) {
      const retryAfter = Number(response.headers.get('retry-after'));
      const delay = Number.isFinite(retryAfter) && retryAfter > 0
        ? Math.min(retryAfter * 1000, 30000) : Math.min(1000 * 2 ** attempt, 12000);
      await wait(delay);
      continue;
    }
    throw new Error(`OpenAlex API responded ${response.status} at ${url.pathname}; check API key, quota or request syntax`);
  }
  throw new Error('OpenAlex retry limit exceeded');
}

export function formatWork(work, researcher) {
  const title = String(work.title || work.display_name || '').trim();
  const year = Number(work.publication_year);
  if (!title || !Number.isInteger(year) || year < 1900 || year > 2100 || !allowedTypes.has(work.type)) return null;
  // For the first project year, a missing exact publication date cannot establish eligibility.
  const date = /^\d{4}-\d{2}-\d{2}$/.test(work.publication_date ?? '') ? work.publication_date : `${year}-01-01`;
  if (date < RENEWED_INEO_START_DATE) return null;
  const doi = String(work.doi ?? '').replace(/^https?:\/\/(?:dx\.)?doi\.org\//i, '').trim();
  const authors = (work.authorships ?? []).map(item => item.author?.display_name).filter(Boolean);
  const openalexId = String(work.id ?? '');
  if (!doi && !/^https:\/\/openalex\.org\/W\d+$/.test(openalexId)) return null;
  return {
    openalexId,
    title,
    year,
    date,
    authors,
    journal: work.primary_location?.source?.display_name ?? '',
    topic: work.primary_topic?.display_name ?? '',
    type: work.type,
    doi,
    openAccess: work.open_access?.is_oa === true,
    matchedResearchers: [researcher.orcid],
    source: 'openalex',
    verified: false
  };
}

export async function collectOpenAlex(researchers, { fetchImpl = fetch, apiKey = '', wait = pause, now = new Date(), log = console.log } = {}) {
  validateResearchers(researchers);
  const works = new Map();
  const resolved = [];
  const unresolved = [];

  for (const researcher of researchers) {
    const author = await requestJson(apiUrl(`/authors/orcid:${researcher.orcid}`, {
      select: 'id,display_name,orcid,works_count'
    }), { fetchImpl, apiKey, wait });
    const identity = {
      name: researcher.name,
      institution: researcher.institution,
      orcid: researcher.orcid,
      openalexId: author?.id ?? null,
      openalexName: author?.display_name ?? null,
      collected: 0
    };
    if (!author) unresolved.push({ orcid: researcher.orcid, name: researcher.name, reason: 'author-profile-not-found' });

    let page = 1;
    let expected = Infinity;
    while ((page - 1) * 100 < expected) {
      if (page > 100) throw new Error(`OpenAlex basic pagination limit reached for ${researcher.orcid}`);
      const result = await requestJson(apiUrl('/works', {
        filter: `authorships.author.orcid:${researcher.orcid},type:article|review,from_publication_date:${RENEWED_INEO_START_DATE}`,
        sort: 'publication_date:desc',
        per_page: 100,
        page,
        select: 'id,doi,title,display_name,publication_year,publication_date,type,authorships,primary_location,primary_topic,open_access'
      }), { fetchImpl, apiKey, wait });
      if (!Array.isArray(result?.results) || !Number.isFinite(result?.meta?.count)) {
        throw new Error(`Invalid OpenAlex works response for ${researcher.orcid}, page ${page}`);
      }
      expected = result.meta.count;
      identity.collected += result.results.length;
      for (const raw of result.results) {
        const work = formatWork(raw, researcher);
        if (!work) continue;
        const key = work.doi ? `doi:${work.doi.toLowerCase()}` : `openalex:${work.openalexId}`;
        const existing = works.get(key);
        if (existing) {
          if (!existing.matchedResearchers.includes(researcher.orcid)) existing.matchedResearchers.push(researcher.orcid);
        } else {
          works.set(key, work);
        }
      }
      if (!result.results.length || result.results.length < 100) break;
      page++;
    }
    resolved.push(identity);
    log(`OpenAlex: ${researcher.name} (${researcher.orcid}), ${identity.collected} results, profile ${author ? 'resolved' : 'not found'}`);
  }

  const publications = Array.from(works.values()).sort((a, b) =>
    b.year - a.year || b.date.localeCompare(a.date) || a.title.localeCompare(b.title)
  );
  return {
    schemaVersion: 1,
    source: 'OpenAlex',
    generatedAt: now.toISOString(),
    periodStart: RENEWED_INEO_START_DATE,
    selection: 'Articles and reviews published since the renewed INEO project start (2025-05-01) by the supplied ORCID search cohort; project attribution not verified.',
    researchers: resolved,
    unresolved,
    publications
  };
}

async function main() {
  const args = process.argv.slice(2);
  const outputIndex = args.indexOf('--output');
  if (outputIndex < 0 || !args[outputIndex + 1]) throw new Error('Usage: node scripts/sync-openalex.mjs --output dist/content/openalex.json');
  const registry = JSON.parse(await fs.readFile(path.join(root, 'content/researchers.json'), 'utf8'));
  const data = await collectOpenAlex(registry.researchers, { apiKey: process.env.OPENALEX_API_KEY ?? '' });
  if (!data.publications.length) throw new Error('OpenAlex returned no publications; existing deployment will be preserved');
  const destination = path.resolve(outputIndex >= 0 ? args[outputIndex + 1] : '');
  await fs.mkdir(path.dirname(destination), { recursive: true });
  await fs.writeFile(destination, `${JSON.stringify(data)}\n`, 'utf8');
  console.log(`OpenAlex sync complete: ${data.researchers.length} profiles, ${data.unresolved.length} unresolved, ${data.publications.length} unique articles/reviews`);
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  main().catch(error => { console.error(error.message); process.exitCode = 1; });
}

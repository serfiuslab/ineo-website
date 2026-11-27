import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { collectOpenAlex, formatWork, isValidOrcid, validateResearchers } from './sync-openalex.mjs';

const root = path.resolve(import.meta.dirname, '..');
const registry = JSON.parse(fs.readFileSync(path.join(root, 'content/researchers.json'), 'utf8'));
validateResearchers(registry.researchers);
assert.equal(registry.researchers.length, 16);
assert.ok(!isValidOrcid('0000-0000-0000-0000'));

const [one, two] = registry.researchers;
const work = (number, year = 2026) => ({
  id: `https://openalex.org/W${100000 + number}`,
  doi: `https://doi.org/10.1234/STUDY-${number}`,
  title: `Study ${number}`,
  publication_year: year,
  publication_date: `${year}-05-02`,
  type: 'article',
  authorships: [{ author: { display_name: 'Test Author' } }],
  primary_location: { source: { display_name: 'Example Journal' } },
  primary_topic: { display_name: 'Materials science' },
  open_access: { is_oa: true }
});
assert.equal(formatWork({ ...work(1), type: 'preprint' }, one), null);
assert.equal(formatWork(work(1), one).doi, '10.1234/STUDY-1');

let retried = false;
let requestedSecondPage = false;
const fetchImpl = async url => {
  const slug = String(url);
  const target = new URL(slug);
  const success = body => ({ status: 200, ok: true, headers: new Headers(), json: async () => body });
  if (target.pathname.startsWith('/authors/orcid:')) {
    if (target.pathname.endsWith(two.orcid) && !retried) {
      retried = true;
      return { status: 429, ok: false, headers: new Headers({ 'retry-after': '0' }) };
    }
    return success({ id: `https://openalex.org/A${target.pathname.endsWith(one.orcid) ? 1 : 2}`, display_name: 'Test Author' });
  }
  const researcher = target.searchParams.get('filter')?.match(/orcid:([^,]+)/)?.[1];
  const page = Number(target.searchParams.get('page'));
  if (researcher === one.orcid) {
    if (page === 2) requestedSecondPage = true;
    return success({
      meta: { count: 101 },
      results: page === 1 ? Array.from({ length: 100 }, (_, i) => work(i + 1)) : [work(101, 2025)]
    });
  }
  if (researcher === two.orcid) return success({ meta: { count: 2 }, results: [work(1), work(102, 2024)] });
  throw new Error(`Unexpected mock URL: ${slug}`);
};

const result = await collectOpenAlex([one, two], {
  fetchImpl, wait: async () => {}, now: new Date('2026-11-27T12:00:00Z'), log: () => {}
});
assert.ok(retried, 'HTTP 429 recovery was not exercised');
assert.ok(requestedSecondPage, 'Basic page-based pagination was not exercised');
assert.equal(result.researchers.length, 2);
assert.equal(result.publications.length, 102, 'Duplicate DOI should appear once');
assert.equal(result.publications[0].year, 2026);
assert.equal(result.publications.at(-1).year, 2024);
assert.deepEqual(result.publications.find(item => item.doi === '10.1234/STUDY-1').matchedResearchers, [one.orcid, two.orcid]);
assert.equal(result.generatedAt, '2026-11-27T12:00:00.000Z');
assert.ok(result.publications.every(item => item.source === 'openalex' && item.verified === false));

console.log(`OpenAlex sync tests passed: ${registry.researchers.length} valid ORCIDs, retries, pagination and DOI deduplication.`);

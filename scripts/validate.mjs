import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

const root = path.resolve(import.meta.dirname, '..');
const htmlFiles = ['index.html', 'historia.html', 'galeria.html', 'encontro.html'];
const htmlSources = Object.fromEntries(htmlFiles.map(file => [file, fs.readFileSync(path.join(root, file), 'utf8')]));
const html = htmlSources['index.html'];
const js = fs.readFileSync(path.join(root, 'app.js'), 'utf8');
const css = fs.readFileSync(path.join(root, 'styles.css'), 'utf8');
const subpageCss = fs.readFileSync(path.join(root, 'subpages.css'), 'utf8');
const historyJs = fs.readFileSync(path.join(root, 'history.js'), 'utf8');
const galleryJs = fs.readFileSync(path.join(root, 'gallery.js'), 'utf8');
const publications = JSON.parse(fs.readFileSync(path.join(root, 'content/publications.json'), 'utf8'));
const researchers = JSON.parse(fs.readFileSync(path.join(root, 'content/researchers.json'), 'utf8'));
const openalex = JSON.parse(fs.readFileSync(path.join(root, 'content/openalex.json'), 'utf8'));

for (const [filename, source] of Object.entries(htmlSources)) {
  assert.ok(source.startsWith('<!doctype html>'), `Missing HTML doctype in ${filename}`);
  assert.ok(source.includes('assets/ineo-logo.png'), `Missing official logo in ${filename}`);
  const localIds = new Set([...source.matchAll(/\bid="([^"]+)"/g)].map(item => item[1]));
  for (const [, target] of source.matchAll(/href="#([^"]+)"/g)) {
    assert.ok(localIds.has(target), `Missing anchor #${target} in ${filename}`);
  }
  for (const [, target] of source.matchAll(/(?:href|src)="([^"#]+\.html)(?:#[^"]*)?"/g)) {
    assert.ok(htmlFiles.includes(target), `Unknown internal page ${target} in ${filename}`);
  }
}
assert.ok(css.includes('@media (prefers-reduced-motion: reduce)'), 'Reduced-motion styles missing');
assert.ok(subpageCss.includes('@media (prefers-reduced-motion: reduce)'), 'Reduced-motion styles missing for editorial pages');
assert.ok(fs.existsSync(path.join(root, 'assets/ineo-logo.png')), 'Official logo is missing');
assert.ok(Array.isArray(publications.publications), 'Invalid publications file');
assert.equal(researchers.schemaVersion, 1, 'Unknown researcher registry version');
assert.equal(researchers.researchers.length, 16, 'Expected 16 initial ORCID search profiles');
assert.equal(new Set(researchers.researchers.map(person => person.orcid)).size, 16, 'Repeated researcher ORCIDs');
assert.equal(openalex.schemaVersion, 1, 'Unknown OpenAlex cache schema version');
assert.equal(openalex.periodStart, '2025-05-01', 'Renewed INEO project cutoff must be documented');
assert.ok(Array.isArray(openalex.publications), 'OpenAlex cache must contain a publications array');
assert.ok(html.includes('id="publication-researcher"'), 'Researcher filter is missing');
assert.ok(html.includes('id="publication-load-more"'), 'Publication pagination is missing');
assert.ok(html.includes('data-i18n="catalogPeriod"'), 'Catalogue date range must be visible');
assert.ok(js.includes("renewedIneoStartDate = '2025-05-01'"), 'Browser must enforce the project-period cutoff');

const match = js.match(/const translations = ([\s\S]+?);\s+const stages =/);
assert.ok(match, 'Cannot locate translations');
const dictionary = vm.runInNewContext(`(${match[1]})`);

const allKeys = new Set(Object.values(htmlSources).flatMap(source => [
  ...source.matchAll(/data-i18n(?:-html|-placeholder|-aria|-alt|-svg)?="([^"]+)"/g)
].map(item => item[1])));

const pt = Object.keys(dictionary.pt).sort();
const en = Object.keys(dictionary.en).sort();
assert.deepEqual(pt, en, 'PT and EN translations must contain the same keys');
for (const key of allKeys) assert.ok(pt.includes(key), `Missing translation for ${key}`);

const ids = new Set([...html.matchAll(/\bid="([^"]+)"/g)].map(item => item[1]));

const historyMatch = historyJs.match(/const historyNarratives = ([\s\S]+?);\s+const historyReferences =/);
assert.ok(historyMatch, 'Cannot locate historical narratives');
const narratives = vm.runInNewContext(`(${historyMatch[1]})`);
assert.deepEqual(Object.keys(narratives.pt).sort(), Object.keys(narratives.en).sort(), 'Historical PT/EN sections must match');
for (const key of Object.keys(narratives.pt)) {
  assert.equal(narratives.pt[key].length, narratives.en[key].length, `Historical PT/EN paragraphs differ: ${key}`);
  assert.ok(narratives.pt[key].every(item => item.length > 90), `Unexpectedly short historical paragraph: ${key}`);
}
assert.equal((historyJs.match(/^  '.*\(\d{4}\).*',?$/gm) ?? []).length, 11, 'Expected 11 supplied historical references');

const galleryMatch = galleryJs.match(/const galleryPhotos = ([\s\S]+?);\s+const photoCaptions =/);
assert.ok(galleryMatch, 'Cannot locate gallery data');
const galleryPhotos = vm.runInNewContext(`(${galleryMatch[1]})`);
assert.equal(galleryPhotos.length, 5, 'Expected five photographs from the historical carousel');
assert.ok(galleryPhotos.every(src => src.startsWith('assets/gallery/') && fs.existsSync(path.join(root, src))), 'Gallery photos must be bundled locally');
assert.ok(galleryPhotos.every(src => fs.statSync(path.join(root, src)).size > 10000), 'Gallery photo files must not be empty');
assert.ok(historyJs.includes("'assets/gallery/research-network-group.jpg'"), 'History photograph must be bundled locally');

for (const item of publications.publications) {
  assert.equal(typeof item.verified, 'boolean', 'Every publication needs a verified flag');
  assert.equal(typeof item.title, 'string', 'Every publication needs a title');
  assert.ok(Number.isInteger(item.year), 'Every publication needs an integer year');
}

console.log(`INEO validation passed: ${htmlFiles.length} pages, ${pt.length} bilingual strings, ${ids.size} homepage IDs, ${galleryPhotos.length} archival photographs, ${researchers.researchers.length} researcher ORCIDs, ${publications.publications.length} curated records.`);

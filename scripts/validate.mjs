import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

const root = path.resolve(import.meta.dirname, '..');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const js = fs.readFileSync(path.join(root, 'app.js'), 'utf8');
const css = fs.readFileSync(path.join(root, 'styles.css'), 'utf8');
const publications = JSON.parse(fs.readFileSync(path.join(root, 'content/publications.json'), 'utf8'));

assert.ok(html.startsWith('<!doctype html>'), 'Missing HTML doctype');
assert.ok(css.includes('@media (prefers-reduced-motion: reduce)'), 'Reduced-motion styles missing');
assert.ok(fs.existsSync(path.join(root, 'assets/ineo-logo.png')), 'Official logo is missing');
assert.ok(Array.isArray(publications.publications), 'Invalid publications file');

const match = js.match(/const translations = ([\s\S]+?);\s+const stages =/);
assert.ok(match, 'Cannot locate translations');
const dictionary = vm.runInNewContext(`(${match[1]})`);

const allKeys = new Set([
  ...html.matchAll(/data-i18n(?:-html|-placeholder|-aria|-alt|-svg)?="([^"]+)"/g)
].map(item => item[1]));

const pt = Object.keys(dictionary.pt).sort();
const en = Object.keys(dictionary.en).sort();
assert.deepEqual(pt, en, 'PT and EN translations must contain the same keys');
for (const key of allKeys) assert.ok(pt.includes(key), `Missing translation for ${key}`);

const ids = new Set([...html.matchAll(/\bid="([^"]+)"/g)].map(item => item[1]));
for (const [, target] of html.matchAll(/href="#([^"]+)"/g)) {
  assert.ok(ids.has(target), `Missing anchor destination #${target}`);
}

for (const item of publications.publications) {
  assert.equal(typeof item.verified, 'boolean', 'Every publication needs a verified flag');
  assert.equal(typeof item.title, 'string', 'Every publication needs a title');
  assert.ok(Number.isInteger(item.year), 'Every publication needs an integer year');
}

console.log(`INEO validation passed: ${pt.length} bilingual strings, ${ids.size} element IDs, ${publications.publications.length} publication records.`);

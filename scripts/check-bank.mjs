import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { resolve } from 'node:path';
import vm from 'node:vm';

const root = fileURLToPath(new URL('../', import.meta.url));
const files = ['questions.js', 'new-trade-questions.js', 'new-law-questions.js'];
const context = vm.createContext({});
for (const file of files) vm.runInContext(readFileSync(resolve(root, file), 'utf8'), context, { filename: file });
const { legacy, trade, law } = vm.runInContext('({legacy: QUESTIONS, trade: ADVANCED_TRADE_QUESTIONS, law: ADVANCED_LAW_QUESTIONS})', context);
const updated = [...trade, ...law];
const all = [...legacy, ...updated];
assert.equal(legacy.length, 65);
assert.equal(trade.length, 60);
assert.equal(law.length, 35);
assert.equal(new Set(all.map(q => q.id)).size, 160, 'Question IDs must remain unique across banks');
assert.equal(new Set(updated.map(q => q.questionEn)).size, 95, 'Duplicate English stems');
for (const q of all) {
  assert.equal(q.options.length, 4, `Q${q.id} choices`);
  assert.equal(new Set(q.options).size, 4, `Q${q.id} duplicate choices`);
  assert.ok(Number.isInteger(q.answer) && q.answer >= 0 && q.answer <= 3, `Q${q.id} answer`);
  for (const field of ['question', 'questionEn', 'categoryName', 'explanation']) assert.ok(q[field]?.trim(), `Q${q.id} ${field}`);
}
const domains = {
  B: { planning: 9, framing: 12, core: 18, finish: 12, safety: 9 },
  LAW: { business: 5, finance: 5, employment: 7, insurance: 4, contracts: 7, public: 2, safety: 5 },
};
for (const [exam, sections] of Object.entries(domains)) {
  for (const [section, expected] of Object.entries(sections)) {
    assert.equal(updated.filter(q => q.exam === exam && q.section === section).length, expected, `${exam}/${section} allocation`);
  }
}
for (const q of updated) {
  assert.ok(q.original === true && q.verifiedOn === '2026-10-25', `Q${q.id} provenance`);
  assert.ok(['intermediate', 'advanced'].includes(q.difficulty), `Q${q.id} difficulty`);
  assert.ok(['scenario', 'calculation'].includes(q.kind), `Q${q.id} kind`);
  assert.ok(q.sources.length > 0, `Q${q.id} sources`);
  for (const source of q.sources) {
    assert.equal(new URL(source.url).protocol, 'https:');
    assert.ok(source.title && source.note, `Q${q.id} source purpose`);
  }
}
assert.equal(updated.filter(q => q.kind === 'calculation').length, 40);
// Independently check selected traps: units, margin vs markup, CPM, month-end cash.
const expectedOptions = new Map([
  [1001, '16.0 yd³'], [1003, '15天'], [1005, '216 ft²'], [1006, '$60,000'],
  [1011, '19根'], [1014, '1,280 BF'], [1016, '5,400 lb'], [2009, '$8,000 / $8,000'],
]);
for (const [id, expected] of expectedOptions) {
  const q = updated.find(item => item.id === id);
  assert.equal(q.options[q.answer], expected, `Q${id} calculation result`);
}
for (const file of ['index.html', 'licensing.html']) {
  const html = readFileSync(resolve(root, file), 'utf8');
  for (const match of html.matchAll(/(?:src|href)="([^"#]+)"/g)) {
    const path = match[1].split('#')[0].split('?')[0];
    if (/^(https?:|mailto:|data:)/.test(path)) continue;
    assert.ok(existsSync(resolve(root, path)), `${file}: missing local asset ${path}`);
  }
  for (const match of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) JSON.parse(match[1]);
}
const licensing = readFileSync(resolve(root, 'licensing.html'), 'utf8');
assert.ok(licensing.includes('13A-64a'), 'Owner-builder uses distinct project form');
assert.ok(!/13A-64(?!a)/.test(licensing), 'Do not confuse owner-builder and other project forms');
console.log('PASS: 160 unique questions; 95 sourced originals; B/LAW allocations; 40 calculations; selected numeric traps; local assets; JSON-LD; owner-builder form.');

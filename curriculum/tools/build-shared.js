// Rebuilds _sidebar.md and glossary.md from lessons/ and curriculum/glossary-inbox/.
const fs = require('fs'), path = require('path');
const root = path.resolve(__dirname, '..', '..');
const modules = {
  1: "When the ambulance isn't coming", 2: 'Bleeding beyond EMT', 3: 'Airway and chest beyond EMT',
  4: 'Circulation, resuscitation and field drugs', 5: 'War injuries',
  6: 'Attack scenes, CBRN and moving casualties', 7: 'Keeping a casualty alive for 72 hours',
  8: 'What goes wrong after the first hour', 9: 'Wound closure and minor surgery',
  10: 'Dislocations and orthopaedics without X-ray', 11: 'Fluids, diarrhoea and outbreaks',
  12: 'Medicine without a doctor', 13: 'People, the dead, and running a casualty point for days',
  14: 'Capstone: 72-hour scenarios' };
const stages = { 1: 'Stage 1 — Under threat: war and attack trauma', 7: 'Stage 2 — Hours to days: prolonged field care', 11: 'Stage 3 — When the system is down: low-resource medicine' };
const done = n => { try { return /module done/.test(fs.readFileSync(path.join(root, 'curriculum/status', `module-${String(n).padStart(2,'0')}.log`), 'utf8')); } catch { return false; } };
let out = ['- [Home](/)', '- [Glossary](glossary.md)', ''], k = 0;
for (let n = 1; n <= 14; n++) {
  if (!done(n)) break;               // sidebar only lists finished modules, in order
  const nn = String(n).padStart(2, '0'), dir = path.join(root, 'lessons', `module-${nn}`);
  if (stages[n]) out.push(`- ${stages[n]}`);
  out.push(`- **Module ${n} — ${modules[n]}**`);
  for (const f of fs.readdirSync(dir).filter(f => /^lesson-\d\d\.md$/.test(f)).sort()) {
    const h1 = fs.readFileSync(path.join(dir, f), 'utf8').match(/^# \d\d\.\d+ · (.+)$/m)[1].trim();
    out.push(`  - [${String(++k).padStart(2, '0')} · ${h1}](lessons/module-${nn}/${f})`);
  }
  out.push(`  - [Module ${n} quiz](assessments/module-${nn}-quiz.md)`);
}
fs.writeFileSync(path.join(root, '_sidebar.md'), out.join('\n') + '\n');
const terms = new Map(), inbox = path.join(root, 'curriculum/glossary-inbox');
for (const f of fs.readdirSync(inbox).sort()) for (const line of fs.readFileSync(path.join(inbox, f), 'utf8').split(/\r?\n/)) {
  const m = line.match(/^- (.+?) — (.+)$/); if (!m) continue;
  const key = m[1].trim().toLowerCase(); if (!terms.has(key)) terms.set(key, [m[1].trim(), m[2].trim()]);
}
const g = ['# Glossary', '', 'Terms used in the course, in alphabetical order.', ''];
for (const [t, d] of [...terms.values()].sort((a, b) => a[0].localeCompare(b[0], 'en', { sensitivity: 'base' }))) g.push(`- **${t}** — ${d}`);
fs.writeFileSync(path.join(root, 'glossary.md'), g.join('\n') + '\n');
console.log(`sidebar: ${k} lessons; glossary: ${terms.size} terms`);

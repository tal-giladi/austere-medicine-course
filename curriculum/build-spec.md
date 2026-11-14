# Build spec — Austere & War Medicine

Binding, in this order: `C:\Users\TalGiladi\OneDrive\repos\tals-academy\docs\new-course-instructions.md`,
then `curriculum/plan.md`, then this file. Starting facts and sources: `curriculum/research-notes.md`
(starting points only: verify every number against the primary source before using it).

## Learner

Finished an Israeli EMT course. Do not re-teach plan §3 items; a one-line recap is the most.
Teach everything beyond EMT completely: indications, equipment, every step, success signs, failure
and what next, aftercare, documentation. Full drug doses (adult, plus child where relevant).
No ECG, cardiac drugs or anything that needs a monitor or hospital.
Standalone course: never mention or link the survival course.

## Lesson file

Front-matter as in the guidelines §4 (`id`, `module`, `minutes`, `practice_minutes`,
`prerequisites` as earlier lesson ids, `objectives`, `volatility`, `sources`, `last_verified: "2026-11-14"`
or the actual date you checked).

Body, in this exact order:

```markdown
# NN.M · Title

One plain intro paragraph (what the learner will be able to do by the end).

> [!CAUTION]
> Performing these procedures on people without the required state certification is illegal.
> This lesson is for educational purposes only. Practise only on models and animal tissue.

## Why it matters
## What to do
## Improvise it
## When it goes wrong
## Scope and law
## Practice
## Sources
```

- The CAUTION block is identical in every lesson (copy it exactly).
- `## What to do`: numbered steps, `###` sub-sections allowed. Doses in tables (drug, route, adult
  dose, child dose, repeat, max, notes). Mermaid decision flowcharts where they help.
- `## Improvise it` (every lesson, never empty): how to do the same thing with only household
  items, e.g. household needle and thread and how to sterilise them, antisepsis with no medical
  alcohol (boiled/cooled water, soap, diluted household bleach with exact dilution, high-proof
  spirits, salt water, honey), improvised tourniquet/binder/splint/airway/suction/needle/IO/
  dressings/sterile field/urine collection/litter/ORS. For each: what works, what fails, the risk,
  and how to tell it is failing.
- `## When it goes wrong`: common mistakes, complications, how to recover.
- `## Scope and law`: 2-5 sentences. Israeli scope (Duty to Rescue Law 1998 gives NO immunity; link to ../module-01/lesson-05.md for the legal basis instead of repeating it; reasonable lay
  aid; NDC, cric, IO/IV drugs, prescription drugs are paramedic/physician powers) and when acting
  beyond it is the last resort (it's this or death and no one more qualified can be reached).
- `## Practice`: a concrete drill with what you need (kosher-butcher tissue only, never pork: lamb or
  beef ribs for NDC, lamb or calf trachea+larynx for cric, chicken with skin or beef tongue for
  suturing/abscess, turkey leg for IO; or household items, a partner, paper scenarios), time, and
  "how you know it worked". Every module's last lesson's practice is the module scenario.
- Videos: for every procedure, 2-4 different YouTube videos (different instructors, angles,
  models: e.g. official TCCC/Deployed Medicine, a hospital/university, an EMS educator, a
  manufacturer). Each URL alone on its own line under a short `### Watch` sub-section inside
  `## What to do` (or `## Improvise it` for improvised versions), with one plain line before it
  saying who made it and what angle it shows. Verify every video exists with
  `https://www.youtube.com/oembed?url=<video url>&format=json` (must return a title). Never invent a
  video id. Prefer reputable sources; skip videos that teach outdated practice, or flag what is outdated.
- Simulations: none for now (plan §8 later). Don't link any.
- Images: only if you create an SVG under `assets/` (name `mNN-...svg`); no hotlinked images.
- English only, UTF-8, LF line endings. No HTML except `<details>`, `<summary>`, `<kbd>`, `<sub>`, `<sup>`, `<br>`.

## Quizzes

- `lessons/module-NN/lesson-MM.quiz.yaml`: 4-5 questions per lesson. Realistic field decisions, not
  recall. Rules in guidelines §5 exactly (4 options, one correct, spread 0-3, similar lengths,
  explanation, `>-` scalars).
- `assessments/module-NN-quiz.md` (short intro, revisit-by-topic links, no answers) and
  `assessments/module-NN-quiz.quiz.yaml` with 10 scenario questions.
- Parse every YAML after writing (`node -e "require('js-yaml')..."` from the tals-academy folder, or
  run the dry-run import).

## Workflow for a module agent

1. Read the guidelines, plan, this spec, research-notes. Read `curriculum/status/module-NN.log` and
   skip finished lessons.
2. For each lesson: verify current sources (web), write the `.md`, write the `.quiz.yaml`, parse it,
   append `lesson-MM done` to `curriculum/status/module-NN.log`.
3. Write the module quiz page + yaml; append `module done`.
4. Glossary terms go to `curriculum/glossary-inbox/module-NN.md` (term — one-line definition).
   Never edit `_sidebar.md`, `glossary.md`, `README.md`, `BUILD_PROGRESS.md`.
5. Return the list of lesson titles (exact H1 titles) so the main session can update `_sidebar.md`.
6. Do not spawn sub-agents. Do not commit (the main session commits).

Lesson numbering in sidebar link text runs across the course; H1 uses `NN.M` (module.lesson).

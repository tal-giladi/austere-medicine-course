# Build progress — Austere & War Medicine

Goal: build the course in `curriculum/plan.md` under `tals-academy/docs/new-course-instructions.md` and `curriculum/build-spec.md`.

## Resume procedure
1. Read `tals-academy/docs/new-course-instructions.md`, `curriculum/plan.md`, `curriculum/build-spec.md`, this file, `curriculum/status/*.log`.
2. Skip finished units. Never more than 2 agents at once; sub-agents never spawn agents.
3. Main session merges `curriculum/glossary-inbox/*.md` into `glossary.md`, updates `_sidebar.md`, runs `npm run check-course -- ../course-creator/austere-medicine-course` from tals-academy, commits and pushes after each module.

## Units
- [x] Plan, build spec, research notes, course details
- [x] Foundations (README, _sidebar, glossary, PUBLISHING_WARNING)
- [ ] Module 01 — When the ambulance isn't coming
- [ ] Module 02 — Bleeding beyond EMT
- [ ] Module 03 — Airway and chest beyond EMT
- [ ] Module 04 — Circulation, resuscitation and field drugs
- [ ] Module 05 — War injuries
- [ ] Module 06 — Attack scenes, CBRN and moving casualties
- [ ] Module 07 — Keeping a casualty alive for 72 hours
- [ ] Module 08 — What goes wrong after the first hour
- [ ] Module 09 — Wound closure and minor surgery
- [ ] Module 10 — Dislocations and orthopaedics without X-ray
- [ ] Module 11 — Fluids, diarrhoea and outbreaks
- [ ] Module 12 — Medicine without a doctor
- [ ] Module 13 — People, the dead, and running a casualty point for days
- [ ] Module 14 — Capstone: 72-hour scenarios
- [ ] Final QA: check-course 0 problems, link check, TODO_FOR_TAL

## Now working
- Modules 01 and 02 (one agent each).

## Decisions
- 2026-11-14: see plan §9 (slug, free+hidden, videos instead of outside courses, full doses, no pork, improvise everything, warning in every lesson).

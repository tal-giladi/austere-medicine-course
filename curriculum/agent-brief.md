# Brief for a module-writing agent

- Do NOT spawn sub-agents. Do NOT commit. Another agent may be writing another module at the same
  time: touch only your module's files (lessons/module-NN/, assessments/module-NN-quiz.*,
  curriculum/glossary-inbox/module-NN.md, curriculum/status/module-NN.log). Never edit _sidebar.md,
  glossary.md, README.md, BUILD_PROGRESS.md or other modules. Helper scripts: your own uniquely named
  file (e.g. mNNcheck.js) in the scratchpad.
- Read in full first: C:\Users\TalGiladi\OneDrive\repos\tals-academy\docs\new-course-instructions.md,
  curriculum/plan.md, curriculum/build-spec.md (binding template, video and workflow rules),
  curriculum/research-notes.md (starting facts only; verify every number against current primary
  sources on the web). Style reference: lessons/module-03/lesson-04.md and its .quiz.yaml.
- Learner finished an Israeli EMT course; don't re-teach plan §3. Teach beyond-EMT content completely,
  full drug doses (adult and child), and a real "Improvise it" section in every lesson.
- Scope and law: the Duty to Rescue Law gives NO immunity. State the procedure's level and link to
  ../module-01/lesson-05.md for the legal basis; don't repeat it.
- Videos: 2-4 per procedure, verified with YouTube oembed; never invent ids; flag outdated practice.
- Don't claim facts you could not source; label course rules and reasoning as such.
- Final lesson's Practice = the module scenario from plan §6.
- When done: parse every YAML with js-yaml (node, from C:\Users\TalGiladi\OneDrive\repos\tals-academy),
  append `module done` to the status log, and return: exact H1 titles, number of videos, and a short
  list of facts you could not verify.

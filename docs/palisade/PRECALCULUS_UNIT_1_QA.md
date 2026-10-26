# Precalculus Unit 1 — Authoring and verification

## Scope and source

The supplied **1.1 — Precalculus: Course Syllabus** is integrated at `content/courses/precalculus/syllabus/index.md`. All twelve units, their topic order, course learning objectives, Unit 1 core competencies, and the prerequisites (Algebra I, Algebra II, Euclidean Geometry) are preserved. The requested assessment rules override the source's problem counts, worked practice solutions, and recommended examination durations. No other course's materials or later unit's content are authored here. Finals remain placeholders until all twelve units are complete and verified.

The course is designed for learners with the stated prerequisite mathematics. Integer division and unique prime factorization are explicitly stated foundational arithmetic facts in Article 1.4. The real arithmetic/order laws are prerequisite facts, not a construction of the reals. Well-ordering is introduced explicitly in Article 1.6; Article 1.7 uses it to justify induction. The elementary sequence, sum, factorial, and product notation needed by this unit is defined before use. Later precalculus topics are not assumed.

## Completed assessments

| Article                             |   Easy | Medium |   Hard | Olympiad |   Total | End answers |
| ----------------------------------- | -----: | -----: | -----: | -------: | ------: | ----------: |
| 1.1 Statements and connectives      |      6 |      6 |      6 |        2 |      20 |          20 |
| 1.2 Quantifiers and equivalence     |      6 |      6 |      6 |        2 |      20 |          20 |
| 1.3 Sets and operations             |      6 |      6 |      6 |        2 |      20 |          20 |
| 1.4 Number systems                  |      6 |      6 |      6 |        2 |      20 |          20 |
| 1.5 Direct proof and contrapositive |      6 |      6 |      6 |        2 |      20 |          20 |
| 1.6 Contradiction                   |      6 |      6 |      6 |        2 |      20 |          20 |
| 1.7 Induction                       |      6 |      6 |      6 |        2 |      20 |          20 |
| 1.8 Counterexamples                 |      6 |      6 |      6 |        2 |      20 |          20 |
| **Practice total**                  | **48** | **48** | **48** |   **16** | **160** |     **160** |

The unit examination has **15 Medium + 15 Hard = 30** free-response problems and a separate 30-entry answer key. Practice answers supply final results or essential proof ideas, without worked solutions. The exam key supplies concise reasoning checkpoints and grading guidance. Each exam problem is worth 10 points, with mastery at 270/300; the attempt is untimed and self-paced, preferably closed-book, without a calculator.

## Syllabus coverage

| Core competency                                          | Instruction             | Examination coverage            |
| -------------------------------------------------------- | ----------------------- | ------------------------------- |
| Distinguish valid arguments from invalid reasoning       | 1.1, 1.2, 1.5, 1.6, 1.8 | 1, 15, 16, 27, 28               |
| Translate statements into precise logical language       | 1.1–1.3                 | 2, 3, 5, 16–18                  |
| Construct elementary proofs using appropriate techniques | 1.3–1.7                 | 5, 7, 10–14, 17, 20–26, 29, 30  |
| Apply induction to identities and inequalities           | 1.7                     | 14, 17, 24, 25                  |
| Identify assumptions and construct counterexamples       | 1.2, 1.4, 1.8           | 3, 8, 13, 15, 17, 21–23, 27, 28 |

Sets, finite counting, rationality, parity, divisibility, and exact algebra are also assessed throughout. Olympiad practice asks for synthesis; the examination contains no Olympiad-designated questions and does not rely on having solved those challenges.

## Mathematical review

Each article was authored and reviewed before moving to the next; the examination was authored after the articles. The review checked truth conditions, quantifier scope, existence versus uniqueness, hypotheses, integer/real domains, nonzero divisors, signs, equality boundaries, zero and negative cases, empty sets, and completeness of classifications. Every practice answer and every exam checkpoint was checked against its question. Computations supplement these arguments; finite searches are not represented as proofs of infinite assertions.

Additional exact checks included:

- Exhaustive propositional truth assignments and all two-object predicates for the quantified logic constructions.
- All 32,768 six-person acquaintance configurations, independently confirming the triangle guarantee; the written proof handles the general reasoning.
- Rational arithmetic, set-region formulas, and realizable disjoint-region constructions.
- Exact remainder calculations and coprimality checks for the integer characterizations.
- Induction identities, Fibonacci identities, factorial thresholds, and the recursive product/reciprocal invariants using integer and fraction arithmetic.
- The polynomial finite-data construction at its specified roots, negative exception, and subsequent positive integer values, with a general sign argument.
- Exam truth assignments, coprime factor distributions, integer-square classifications, finite set-pair counts, the cubic identity, and rational instances of the induction inequality including its endpoint and equality cases.

## Repository checks

`scripts/precalculus-unit-1.test.js` checks the eight article counts and difficulty distributions; answer placement/counts; the 30-question exam and key; complete syllabus topic-order agreement with the curriculum; publication and stable progress metadata; relative links; and rendering all authored mathematics through the actual configured KaTeX transformer in strict mode. Existing curriculum tests continue to enforce empty, nontrackable placeholders while allowing reviewed authored pages.

The nine eligible completion records use `precalculus-unit-01-article-01` through `-08` and `precalculus-unit-01-examination`. The syllabus, overview, course landing, and answer key are nontrackable. The content branch depends on the universal-progress implementation; it does not duplicate or modify the progress engine.

Validation commands:

```sh
node --import tsx --test
npm run typecheck
npm run build
python -m unittest discover -s scripts -p 'test_*.py'
```

`node --import tsx --test` uses the same test runner as `npm test` while avoiding its CLI IPC socket in restricted environments. Formatting is checked on all changed files. The two existing reference-file Prettier failures are unrelated and remain unchanged. Browser visual inspection is not claimed; strict math rendering and generated-HTML checks verify the static output.

Results: all 191 JavaScript tests and the existing Python test pass; TypeScript checking passes. The production build processes 870 Markdown files and emits 902 files. The changed-file formatting and whitespace checks pass. Full browser visual inspection remains unperformed; no mathematical claims or required Unit 1 materials remain unresolved after the author review.

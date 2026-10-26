---
title: "1.1 — Mathematical Statements and Logical Connectives"
course: "1.1"
unit: "01"
topic: "1.1"
kind: article
progressId: precalculus-unit-01-article-01
trackable: true
---

## From assertions to arguments

A mathematical argument must survive every situation allowed by its assumptions. Logic lets us check that requirement without being distracted by the subject matter.

A **statement** is an assertion with a definite truth value, true (T) or false (F). “$7$ is prime” is a statement; “solve this equation” is not. “$x>2$” is an **open sentence** until $x$ is specified or otherwise bound. We use ordinary arithmetic from Algebra I and II; the formal number-system conventions appear in Article 1.4.

## Connectives

For statements $p,q$, the truth values of the compound statements are defined by this table:

| $p$ | $q$ | $\neg p$ | $p\land q$ | $p\lor q$ | $p\Rightarrow q$ | $p\Leftrightarrow q$ |
| --- | --- | -------- | ---------- | --------- | ---------------- | -------------------- |
| T   | T   | F        | T          | T         | T                | T                    |
| T   | F   | F        | F          | T         | F                | F                    |
| F   | T   | T        | F          | T         | T                | F                    |
| F   | F   | T        | F          | F         | T                | T                    |

- **Negation** $\neg p$: not $p$.
- **Conjunction** $p\land q$: both $p$ and $q$.
- **Inclusive disjunction** $p\lor q$: at least one is true, possibly both. “Exactly one” must be stated separately.
- **Conditional** $p\Rightarrow q$: if $p$, then $q$. Only a true hypothesis with a false conclusion violates it.
- **Biconditional** $p\Leftrightarrow q$: $p$ if and only if $q$; both have the same truth value.

A conditional asserts no causal connection. If its hypothesis is false, it is true **vacuously**: the forbidden combination has not occurred. Whether the hypothesis actually holds is a separate question.

Write parentheses whenever grouping might be unclear. Here negation binds most tightly, then $\land$, then $\lor$; always parenthesize combinations involving $\Rightarrow$ or $\Leftrightarrow$.

**Example.** Let $p$ mean “the integer is divisible by $4$,” and $q$ mean “it is even.” The claim is $p\Rightarrow q$. An odd integer does not violate this claim; an odd multiple of $4$ would. The converse $q\Rightarrow p$ is a different claim, violated by $6$.

## Checking an argument

A compound statement true on every truth-table row is a **tautology**; one false on every row is a **contradiction**. An argument is **valid** when no assignment makes every premise true and the conclusion false. Validity concerns the inference, not whether its premises happen to be true.

**Example.** From $p\Rightarrow q$ and $p$, infer $q$ (**modus ponens**). On every row where both premises are true, $p$ is true; the conditional then forces $q$ true. Inferring $p$ from $p\Rightarrow q$ and $q$ is invalid: $p=\mathrm F,q=\mathrm T$ defeats it.

To analyze a device or puzzle, assign one variable to each independent assertion and translate the rules. A truth table with $n$ variables has $2^n$ rows because each variable has two choices. Checking every row proves a propositional claim; checking a few rows does not.

[Unit overview](../) · [Next: Quantifiers and equivalence](../02-quantifiers-negation-and-logical-equivalence/)

## Practice problems

Give reasons, not just truth values. In problems about truth-tellers and liars, a truth-teller's statement is true and a liar's statement is false.

### Easy

1. Explain which are statements: “$9<4$”; “$x+1=3$” with $x$ unspecified; “Draw a circle”; “Every square has four sides.”
2. With $p=\mathrm T,q=\mathrm F$, evaluate $\neg q$, $p\land q$, $p\lor q$, and $p\Rightarrow q$.
3. Write “the alarm sounds exactly when the door is open and the system is armed” using $a,d,s$ for those assertions.
4. List all truth assignments satisfying $p\lor q$ but not $p\land q$.
5. When is $p\Rightarrow\neg q$ false?
6. Evaluate both $(p\lor q)\land r$ and $p\lor(q\land r)$ at $p=\mathrm T,q=\mathrm F,r=\mathrm F$.

### Medium

7. Build the truth table of $(p\Rightarrow q)\land(q\Rightarrow p)$. When is it true?
8. Determine whether $(p\land q)\Rightarrow p$ is a tautology, contradiction, or neither.
9. Determine whether $(p\lor q)\Rightarrow p$ is a tautology, contradiction, or neither; identify every false row.
10. Translate “$p$ is sufficient for $q$” and “$p$ is necessary for $q$.” Explain the difference.
11. Is the argument with premises $p\lor q$ and $\neg p$ and conclusion $q$ valid? Check all possible counterexample rows.
12. Is the argument with premises $p\Rightarrow q$ and $\neg p$ and conclusion $\neg q$ valid? Supply a decisive assignment.

### Hard

13. Find all assignments making $(p\Rightarrow q)\land(q\Rightarrow r)\land\neg(p\Rightarrow r)$ true, or prove none exist.
14. Find all assignments satisfying $p\lor q$, $\neg(p\land q)$, and $q\Rightarrow r$.
15. A system has rules $p\Rightarrow q$, $q\Rightarrow r$, and $r\Rightarrow\neg p$. What truth value must $p$ have? Determine all allowed triples.
16. Speakers A and B make these statements: A: “B is a liar”; B: “A and I are both liars.” Determine their types.
17. Construct a formula in $p,q,r$, using only $\neg,\land,\lor$, that is true exactly when an odd number of the three variables are true. Verify its true rows.
18. A report asserts $p\Leftrightarrow q$ and $q\Leftrightarrow\neg r$. Describe all possible truth values of $p$ and $r$, and decide whether $p\Leftrightarrow r$ can hold.

### Olympiad

19. Five speakers make one statement each. A: “B is a liar and C is truthful.” B: “C and D have the same type.” C: “Exactly one of A and E is truthful.” D: “At least one of A and B is truthful.” E: “D is a liar.” Determine every consistent assignment of types and justify completeness.
20. A circuit may use only the two-input gate $N(u,v)=\neg(u\land v)$, with repeated inputs allowed. Design a circuit that is true exactly when two of $p,q,r$ are true. Specify its intermediate signals using only $N$ and explain why they implement the required rule.

## Answers

1. The first and fourth are statements; the second is open and the third is a command.
2. T, F, T, F, respectively.
3. $a\Leftrightarrow(d\land s)$.
4. $(\mathrm T,\mathrm F)$ and $(\mathrm F,\mathrm T)$.
5. Exactly when $p=q=\mathrm T$.
6. F and T, respectively.
7. True precisely on TT and FF; false on TF and FT.
8. Tautology.
9. Neither; its only false row is $p=\mathrm F,q=\mathrm T$.
10. $p\Rightarrow q$ and $q\Rightarrow p$, respectively.
11. Valid: a false $q$ together with $p\lor q$ forces $p$, contradicting $\neg p$.
12. Invalid: $p=\mathrm F,q=\mathrm T$.
13. None: a false final conditional would force $p=\mathrm T,r=\mathrm F$, incompatible with the first two premises.
14. $(p,q,r)=(\mathrm T,\mathrm F,\mathrm F),(\mathrm T,\mathrm F,\mathrm T),(\mathrm F,\mathrm T,\mathrm T)$.
15. $p=\mathrm F$; allowed triples are FFF, FFT, FTT.
16. A truthful; B a liar.
17. $(p\land\neg q\land\neg r)\lor(\neg p\land q\land\neg r)\lor(\neg p\land\neg q\land r)\lor(p\land q\land r)$; true rows TFF, FTF, FFT, TTT.
18. $p$ and $r$ are opposite; the biconditional cannot hold.
19. No consistent assignment; substituting the last two statements into the others eliminates both possibilities for A.
20. Use $\operatorname{Not}(u)=N(u,u)$, $\operatorname{And}(u,v)=N(N(u,v),N(u,v))$, and $\operatorname{Or}(u,v)=N(N(u,u),N(v,v))$ as named gate constructions; assemble $(p\land q\land\neg r)\lor(p\land\neg q\land r)\lor(\neg p\land q\land r)$ with these constructions. These names abbreviate circuits containing only $N$.

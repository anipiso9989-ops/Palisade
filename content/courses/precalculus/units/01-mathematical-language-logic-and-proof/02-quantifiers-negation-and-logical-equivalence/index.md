---
title: "1.2 — Quantifiers, Negation, and Logical Equivalence"
course: "1.1"
unit: "01"
topic: "1.2"
kind: article
progressId: precalculus-unit-01-article-02
trackable: true
---

## What does “every” promise?

A universal claim promises there are no exceptions. An existence claim promises at least one witness. Confusing these promises—or allowing a witness to depend on the wrong variable—changes the mathematics.

A **predicate** $P(x)$ is an open sentence evaluated on a specified **domain** $D$. Write

$$
\forall x\in D,\ P(x) \qquad\text{and}\qquad \exists x\in D,\ P(x)
$$

for “for every $x$ in $D$” and “for at least one $x$ in $D$.” Variables controlled by a quantifier are **bound**; any others remain **free**. The notation $\exists!x\in D,\ P(x)$ means exactly one witness: one exists, and any two witnesses are equal. It does not mean that we know how to find it.

**Example.** Over the real numbers, $\exists x,\ x^2=9$ is true but uniqueness fails: $3$ and $-3$ are distinct witnesses. Restricting the domain to positive reals makes the witness unique.

Quantifiers apply to the entire parenthesized predicate. On an empty domain, a universal assertion is true and an existence assertion false: there is neither a violating object nor a witness. This convention makes restricted universal statements behave consistently.

## Negation and equivalence

To deny “every,” exhibit an exception; to deny “some,” exclude all witnesses:

$$
\neg(\forall x\in D,\ P(x))\equiv\exists x\in D,\neg P(x),\qquad
\neg(\exists x\in D,\ P(x))\equiv\forall x\in D,\neg P(x).
$$

Here $\equiv$ means **logical equivalence**: the two expressions agree for every interpretation of their variables and predicates. In contrast, $\Leftrightarrow$ builds a statement whose truth can then be tested.

Truth tables from Article 1.1 establish the following equivalences:

$$
\begin{aligned}
\neg(p\land q)&\equiv\neg p\lor\neg q,&
\neg(p\lor q)&\equiv\neg p\land\neg q,\\
p\Rightarrow q&\equiv\neg p\lor q,&
\neg(p\Rightarrow q)&\equiv p\land\neg q,\\
p\Rightarrow q&\equiv\neg q\Rightarrow\neg p.
\end{aligned}
$$

The first line gives **De Morgan's laws**. For instance, a conjunction fails exactly when at least one constituent fails. The final line says a conditional and its **contrapositive** agree. The **converse** $q\Rightarrow p$ and **inverse** $\neg p\Rightarrow\neg q$ agree with each other, but need not agree with the original conditional.

**Example.** The negation of “for every real $x$, if $x>2$ then $x^2>4$” is

$$
\exists x\text{ real},\quad x>2\ \land\ x^2\le4.
$$

Negating does not merely replace $>$ with $\le$ in the conclusion: it must also change the quantifier and require the hypothesis.

## Order and dependence

The sentence $\forall x\,\exists y,\ y>x$ over the reals is true: after seeing $x$, choose $y=x+1$. The sentence $\exists y\,\forall x,\ y>x$ is false: no fixed $y$ exceeds itself. A witness chosen after $x$ may depend on $x$; one chosen before $x$ may not.

Quantifiers of the same type can be interchanged. Mixed quantifiers generally cannot. To negate a chain, reverse each quantifier's type without changing its order, then negate its predicate.

**Restricted statements.** “Every $x$ satisfying $A(x)$ satisfies $B(x)$” means $\forall x,\ A(x)\Rightarrow B(x)$. “Some $x$ satisfies both” means $\exists x,\ A(x)\land B(x)$. Using an implication in the second sentence could supply a vacuous “witness” that does not satisfy $A$.

[Previous: Statements](../01-mathematical-statements-and-logical-connectives/) · [Unit overview](../) · [Next: Sets](../03-sets-subsets-and-set-operations/)

## Practice problems

All numerical domains below are explicitly stated; ordinary real and integer arithmetic are prerequisites.

### Easy

1. Translate “every integer has an even square” into quantified notation. Is it true?
2. Over the reals, negate $\exists x,\ x^2=-2$ and determine the truth of both sentences.
3. Negate $\forall x\in D,\ P(x)\Rightarrow Q(x)$.
4. Express “exactly one of $p,q$ is true” using $\land,\lor,\neg$.
5. Over the real numbers, is $\exists!x,\ 5x-4=11$ true? Give its witness.
6. State the truth values of $\forall x\in D,\ P(x)$ and $\exists x\in D,\ P(x)$ when $D$ is empty.

### Medium

7. Negate $\forall x\,\exists y\,\forall z,\ R(x,y,z)$, preserving the order of variables.
8. Over the integers, compare $\forall x\,\exists y,\ x+y=0$ with $\exists y\,\forall x,\ x+y=0$. Give witnesses or obstructions.
9. Write the converse, inverse, and contrapositive of “if an integer is divisible by $6$, then it is divisible by $3$.” Which are true?
10. Prove by a truth table that $p\Rightarrow(q\Rightarrow r)$ agrees with $(p\land q)\Rightarrow r$.
11. Express “$P$ has exactly one witness in $D$” using only $\exists,\forall,\land,\Rightarrow$, and equality.
12. Over the reals, classify $\forall x,\ x^2>0$ and $\forall x,\ x\ne0\Rightarrow x^2>0$. Explain the role of zero.

### Hard

13. Prove $\forall x\in D,\ (P(x)\land Q(x))$ is equivalent to $(\forall x\in D,\ P(x))\land(\forall x\in D,\ Q(x))$, including an empty domain.
14. Give predicates on the two-object domain $D=\{a,b\}$ for which $\forall x\in D,\ (P(x)\lor Q(x))$ holds but neither predicate holds universally.
15. On that same two-object domain, give predicates for which both $\exists x,\ P(x)$ and $\exists x,\ Q(x)$ hold but $\exists x,\ (P(x)\land Q(x))$ fails.
16. For real $a$, determine when $\forall x\text{ real},\ x^2+a>0$ is true, and supply a counterexample otherwise.
17. Over the integers, compare $\forall x\,\exists!y,\ y=x+2$ and $\exists!y\,\forall x,\ y=x+2$. Justify both classifications.
18. Negate “every real $x$ has a real $y$ such that both $y>x$ and every real $z>y$ satisfies $z>x$.” Express the negation without negating a compound statement.

### Olympiad

19. For predicates $P,Q$ on a domain $D$, prove
    $\forall x\in D\,\forall y\in D,\ (P(x)\lor Q(y))$
    is equivalent to $(\forall x\in D,\ P(x))\lor(\forall y\in D,\ Q(y))$. Account separately for an empty domain. Explain why replacing $Q(y)$ with $Q(x)$ would invalidate the assertion in general.
20. Let $R(x,y)$ be any two-variable predicate on a nonempty domain $D$. Prove that the sentence
    $\forall x\in D\,\exists y\in D\,\forall z\in D,\ (R(x,y)\lor\neg R(x,z))$
    is always true. State why the witness may depend on $x$, and whether the sentence is also true when $D$ is empty.

## Answers

1. $\forall n\text{ integer},\ n^2\text{ is even}$; false at $n=1$.
2. $\forall x\text{ real},\ x^2\ne-2$; original false, negation true.
3. $\exists x\in D,\ P(x)\land\neg Q(x)$.
4. $(p\land\neg q)\lor(\neg p\land q)$.
5. True; $x=3$.
6. True and false, respectively.
7. $\exists x\,\forall y\,\exists z,\neg R(x,y,z)$.
8. First true with $y=-x$; second false since $x=0$ and $x=1$ require different fixed values of $y$.
9. Converse: divisible by $3\Rightarrow$ divisible by $6$ (false). Inverse: not divisible by $6\Rightarrow$ not divisible by $3$ (false). Contrapositive: not divisible by $3\Rightarrow$ not divisible by $6$ (true). The integer $3$ refutes the false claims.
10. Both are false exactly when $p=q=\mathrm T,r=\mathrm F$.
11. $\exists x\in D,\bigl(P(x)\land\forall y\in D,(P(y)\Rightarrow y=x)\bigr)$.
12. First false at zero; second true, with its zero case vacuous.
13. Equivalent: both require both predicates at every object; on an empty domain all three universal clauses are true.
14. $P$ true only at $a$ and $Q$ true only at $b$.
15. The predicates in answer 14.
16. Exactly $a>0$; use $x=0$ otherwise.
17. First true with unique $y=x+2$; second false since $x=0,1$ would force $y=2,3$.
18. $\exists x\,\forall y,\bigl(y\le x\lor\exists z,(z>y\land z\le x)\bigr)$, all variables real.
19. Equivalent: if $P$ fails at one object, the premise forces $Q$ everywhere. For an empty domain both sides are true. The predicates in answer 14 refute the same-variable version.
20. For each $x$, choose a witness to $R(x,y)$ if one exists; otherwise any $y$ works because all $R(x,z)$ are false. Dependence on $x$ is allowed. On an empty domain the outer universal makes the sentence vacuously true.

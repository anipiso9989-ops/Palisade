---
title: "1.6 — Proof by Contradiction"
course: "1.1"
unit: "01"
topic: "1.6"
kind: article
progressId: precalculus-unit-01-article-06
trackable: true
---

## When an assumption cannot survive

Sometimes denying the desired conclusion forces an impossibility. A **proof by contradiction** of $S$ assumes $\neg S$ and derives a statement incompatible with the hypotheses or an established fact. In classical logic, the assumption must then be false, so $S$ is true.

For $P\Rightarrow Q$, assume both $P$ and $\neg Q$. The contradiction must genuinely follow from these assumptions; an unexplained claim that something is “impossible” is not a proof. To prove no object with a property exists, assume one exists and exploit its defining conditions.

This differs in presentation from contrapositive: there we assume $\neg Q$ and explicitly establish $\neg P$. Both methods reflect the logical equivalences of Article 1.2.

## A complete example

**Claim.** $\sqrt5$ is irrational.

Suppose $\sqrt5=a/b$ in lowest terms, with positive integers $a,b$. Then $a^2=5b^2$. Unique prime factorization implies $5\mid a$; write $a=5k$. Substitution gives $b^2=5k^2$, hence $5\mid b$. This contradicts the assumed reduction. Every possible rational representation can be reduced, so none exists.

The contradiction is the pair of incompatible claims: $a,b$ are coprime, and both are divisible by $5$. This also illustrates the integer-root lemma from Article 1.4.

**A failed argument.** “Assume $x=y\ne0$. Divide $x^2=xy$ by $x-y$ to obtain a contradiction.” The division is undefined. A contradiction reached through an invalid operation establishes nothing.

## Finite obstruction and minimality

A contradiction can come from counting. For example, if four objects occupy three classes and each class contained at most one object, there would be at most three objects. This is the pigeonhole principle from Article 1.3.

For positive integers we use the **well-ordering principle**: every nonempty subset of $\mathbb N$ has a least member. This fundamental property of the natural numbers supports **infinite descent**: assume integer solutions exist, choose one minimizing a positive integer measure, and construct a solution with smaller measure. That contradicts minimality. It is not enough merely to assert that numbers “keep getting smaller”: specify the measure and verify the new solution remains admissible.

**Example.** Suppose positive integers satisfy $u^2=2v^2$, and choose a solution with least $v$. Evenness of $u^2$ gives $u=2w$, so $v^2=2w^2$ and $v$ is even as well. The pair $(v,w)$ is another positive solution, with second coordinate $w=u/2<v$, since $w^2=v^2/2$. This contradicts minimality. No such solution exists.

Well-ordering is a property of positive integers, not of arbitrary positive reals: there is no least positive real because halving produces a smaller one.

[Previous: Direct proof](../05-direct-proof-and-proof-by-contrapositive/) · [Unit overview](../) · [Next: Induction](../07-mathematical-induction/)

## Practice problems

### Easy

1. State the assumption needed to prove by contradiction that no integer has negative square.
2. To prove $\sqrt7$ irrational by contradiction, specify a reduced rational representation and all restrictions on its numerator and denominator.
3. Explain why the simultaneous assumptions $x>4$ and $x\le1$ for real $x$ form a contradiction.
4. Prove there is no largest integer by contradiction.
5. For real $a\ne0$, prove $a^2>0$ by assuming the conclusion false.
6. Prove there is no real solution of $x^2+1=0$ by contradiction.

### Medium

7. For finite sets $A\subsetneq B$, prove $|A|<|B|$ by ruling out the opposite inequality.
8. Prove there is no smallest positive rational number.
9. Prove there is no integer $n$ with $0<n<1$, stating the relevant order property of $\mathbb Z$.
10. If real $x+y>12$, prove at least one of $x,y$ exceeds $6$.
11. If positive real $a,b$ satisfy $ab>1$, prove at least one exceeds $1$.
12. Prove that at least one of $\sqrt7+\sqrt2$ and $\sqrt7-\sqrt2$ is irrational; do not assume that a sum of irrationals is always irrational.

### Hard

13. Prove $\sqrt2+\sqrt3+\sqrt6$ is irrational.
14. Prove $a^2+b^2$ cannot have remainder $3$ on division by $4$, for any integers $a,b$.
15. Integers $a,b,c$ satisfy $a^2+b^2=c^2$. Prove $6\mid ab$. Zero and negative entries are permitted.
16. A finite nonempty subset $A$ of $\mathbb R$ satisfies $x+y\in A$ whenever $x,y\in A$. Prove $A=\{0\}$ by considering its largest and smallest members.
17. At a gathering of $n\ge2$ people, acquaintance is mutual and nobody counts themselves. Prove that two people have the same number of acquaintances within the gathering.
18. Prove that the positive numbers of the form $a+b\sqrt2$, with $a,b\in\mathbb Z$, have no least member. Construct a smaller positive number of the same form from any proposed minimum.

### Olympiad

19. Prove that $x^2+y^2=3z^2$ has no solution in positive integers. Give a descent argument with an explicit minimized coordinate and verify that it decreases.
20. Six people each either know or do not know each other person, with acquaintance mutual. Prove there are three who all know one another or three no two of whom know one another. Do not assume those alternatives are mutually exclusive.

## Answers

1. Assume there exists $n\in\mathbb Z$ with $n^2<0$.
2. $\sqrt7=a/b$ with $a,b$ positive coprime integers.
3. They imply $4<x\le1$, contradicting $1<4$.
4. A proposed largest integer $M$ is exceeded by the integer $M+1$.
5. Nonnegativity and the assumed $a^2\le0$ force $a^2=0$, hence $a=0$.
6. It would force $x^2=-1<0$.
7. The nonempty difference $B\setminus A$ gives $|B|=|A|+|B\setminus A|>|A|$.
8. A proposed minimum $r$ is exceeded downward by the positive rational $r/2$.
9. Every positive integer is at least $1$, so the two strict inequalities are incompatible.
10. If both were at most $6$, their sum would be at most $12$.
11. If both were at most $1$, their positive product would be at most $1$.
12. If both were rational, their difference $2\sqrt2$ would be rational.
13. A rational sum $q>0$ would give $\sqrt6=(q^2+1)/(2(q+1))$, contradicting the integer-root lemma.
14. Squares have remainders $0,1$ modulo $4$, so their sum cannot have remainder $3$.
15. If both $a,b$ were odd, the square remainders modulo $4$ would conflict. If neither were divisible by $3$, the square remainders modulo $3$ would conflict. Thus $2\mid ab$ and $3\mid ab$, hence $6\mid ab$.
16. A positive maximum would have a larger double in $A$; a negative minimum would have a smaller double. Nonemptiness then forces exactly $\{0\}$.
17. Counts range from $0$ to $n-1$, but those two extremes cannot both occur; apply the pigeonhole principle to at most $n-1$ possible counts.
18. Multiply a proposed positive minimum by $\sqrt2-1\in(0,1)$. The result is $(2b-a)+(a-b)\sqrt2$.
19. Minimize positive $z$. Square remainders modulo $3$ force $3\mid x,y$, then $3\mid z$; dividing all three by $3$ gives another positive solution with smaller $z$.
20. One person has at least three acquaintances or at least three nonacquaintances. Among those three, a pair of the first relation completes a triangle with that person; otherwise the three form a triangle of the opposite relation.

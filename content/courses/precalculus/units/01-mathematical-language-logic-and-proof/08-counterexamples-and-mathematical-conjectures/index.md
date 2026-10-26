---
title: "1.8 — Counterexamples and Mathematical Conjectures"
course: "1.1"
unit: "01"
topic: "1.8"
kind: article
progressId: precalculus-unit-01-article-08
trackable: true
---

## Evidence has a logical scope

A **conjecture** is a proposed statement not yet established. A **counterexample** to $\forall x\in D,\ P(x)$ is an object $c\in D$ for which $P(c)$ is false. To refute $P\Rightarrow Q$, the example must satisfy $P$ and violate $Q$. An example outside the domain, or one with a false hypothesis, refutes nothing.

**Example.** “Every real $x$ satisfies $x^2\ge x$” fails at $x=1/2$. A precise repair is

$$
x^2\ge x\quad\Longleftrightarrow\quad x\le0\ \text{or}\ x\ge1.
$$

Indeed, $x^2-x=x(x-1)$ is negative exactly between its two roots. A counterexample can reveal the missing restriction rather than merely end the investigation.

Checking cases can refute a universal statement, but finitely many successful cases cannot prove one over an infinite domain unless an argument reduces all possibilities to those cases. A full truth table is a proof because there are only finitely many truth assignments; testing the first hundred integers is not a proof about all integers.

## Where should we look?

Start with zero, one, negative values, equality boundaries, empty sets, and cases where a proposed divisor vanishes. Then test whether hypotheses have been strengthened or weakened without justification.

**Example: cancellation.** From $x(x-4)=0$, cancelling $x$ would lose the admissible solution $x=0$. The correct split is $x=0$ or $x\ne0$; only the second case permits division and yields $x=4$.

**Example: invalid converse.** The true statement “if $4\mid n$, then $2\mid n$” does not establish its converse. The integer $2$ satisfies the converse's hypothesis but not its conclusion.

**Example: existence.** One witness proves an existence claim. To refute $\exists x\in D,\ P(x)$, one must exclude every witness, not merely test an unsuccessful candidate. To refute a uniqueness claim, either show there is no witness or provide two distinct witnesses.

## Repair and verification

A repaired statement needs its own proof. Adding a hypothesis can make an implication true vacuously; that alone may produce a mathematically uninformative repair. Prefer the weakest accurately characterized restriction when it can be established.

An invalid proof does not automatically make its conclusion false. Conversely, a correct answer reached through an invalid operation does not validate the reasoning. Check the argument and the claim separately.

A useful investigation records: the exact quantified claim and domain; the failed example or proof obstruction; a revised statement; and a proof of the revision. Article 1.7 supplies induction when a pattern must hold at every later integer; Articles 1.5–1.6 supply direct, contrapositive, and contradiction arguments.

[Previous: Induction](../07-mathematical-induction/) · [Unit overview](../) · [Next: Unit examination](../examination/)

## Practice problems

### Easy

1. Refute “for every integer $n$, $n^2>n$.” Your example must be an integer.
2. Refute “for every real $x$, $x^2=9$ implies $x=3$.”
3. Refute “the sum of any two irrational numbers is irrational.”
4. Refute “$A\subseteq B$ implies $A=B$” using finite sets.
5. Refute “$2^n$ is odd for every positive integer $n$.”
6. A student lists $2,3,5,7$ and concludes that every prime is odd. Which item in the student's own evidence disproves the conclusion?

### Medium

7. Find the largest subset of $\mathbb R$ on which $x^2\ge x$ always holds. Prove your characterization.
8. Refute $a+b\ge ab$ for arbitrary positive reals, then prove it under the stronger restriction $0\le a,b\le1$.
9. Refute “if $ab$ is even, then both integers $a,b$ are even.” Repair “both” without changing the domain, and prove the revision.
10. Refute “equal cardinality forces equal finite sets.” Prove the revised claim when $A\subseteq B$ is also assumed.
11. A student cancels $x$ from $x(x-4)=0$. State the missing solution and the condition under which that cancellation is allowed.
12. On a domain of exactly two objects, construct a predicate $R(x,y)$ for which $\forall x\,\exists y,\ R(x,y)$ holds but $\exists y\,\forall x,\ R(x,y)$ fails.

### Hard

13. Determine all real $c$ for which $x^2-2cx+1\ge0$ for every real $x$. For each excluded $c$, give a counterexample $x$.
14. Characterize all $n\in\mathbb N_0$ for which $n^2+n+1$ is divisible by $3$. Use this to construct infinitely many composite values of that expression, explaining why divisibility alone does not settle the smallest case.
15. Give a counterexample to $A\cup B=A\cup C\Rightarrow B=C$. Prove that the hypothesis is equivalent to $B\setminus A=C\setminus A$, and state what additional equality would force $B=C$.
16. Refute “if $a^2+b^2$ is even, then the nonzero integers $a,b$ have a common divisor greater than $1$.” Prove that replacing “even” with “divisible by $4$” gives a true claim.
17. A student claims to induct on the number of positive real numbers with product $1$ to prove their sum is at least that number. In the step, the student applies the induction hypothesis to the first $k$ entries of a $(k+1)$-entry list with product $1$. Explain the gap with an explicit three-entry list. Independently prove the two-entry claim.
18. Refute “if positive integers $a,b,c>1$ are pairwise coprime, then $a+b$ and $c$ are coprime.” Construct counterexamples with fixed $a,b$ and arbitrarily large $c$, proving every required coprimality condition.

### Olympiad

19. For any prescribed positive integers $L,N$, construct $L$ consecutive composite integers all greater than $N$. Give a formula and prove that every member is composite; do not appeal to a search.
20. For every integer $m\ge2$, construct a polynomial $P$ with integer coefficients such that $P(k)=k^2$ for $k=1,\ldots,m$, while $P(m+1)<0$ and $P(n)>0$ for every integer $n\ge m+2$. Explain what this demonstrates about extrapolating from finite data.

## Answers

1. $n=0$ (or $n=1$).
2. $x=-3$.
3. $\sqrt2+(-\sqrt2)=0$.
4. $A=\varnothing,B=\{1\}$.
5. $n=1$.
6. The prime $2$ is even.
7. Exactly $x\le0$ or $x\ge1$; use the sign of $x(x-1)$.
8. $a=b=3$ refutes the original. Under the restriction, $ab\le a\le a+b$.
9. $a=1,b=2$ refutes “both.” Replace it by “at least one”; the product of two odd integers is odd.
10. $\{1\}$ and $\{2\}$ refute the original. Inclusion with equal finite size forces an empty difference, hence equality.
11. $x=0$ is missing; cancellation requires $x\ne0$.
12. Let $R(x,y)$ mean $x\ne y$.
13. Exactly $-1\le c\le1$; complete the square as $(x-c)^2+1-c^2$. For $|c|>1$, use $x=c$.
14. Exactly $n=3k+1$ with $k\in\mathbb N_0$. The values with $k\ge1$ are composite multiples of $3$ greater than $3$; $k=0$ gives the prime $3$.
15. Example $A=\{1,2\},B=\{1\},C=\{2\}$. Outside $A$, the unions agree exactly when the differences agree. Adding $A\cap B=A\cap C$ forces equality inside as well.
16. $a=b=1$ refutes the original. Square remainders $0,1$ modulo $4$ show that a sum divisible by $4$ requires both entries even, so $2$ is a common divisor.
17. The first $k$ entries need not have product $1$; $(2,2,1/4)$ is an example. For two entries $ab=1$, $(a-b)^2\ge0$ gives $(a+b)^2\ge4$, and positivity gives $a+b\ge2$.
18. $a=2,b=3,c=30t+5$ for $t\in\mathbb N_0$. The last number is odd, not divisible by $3$, and divisible by $5=a+b$; it is unbounded.
19. Let $M=\max\{L+1,N+1,3\}$. The integers $M!+2,\ldots,M!+(L+1)$ work: each is divisible by its offset, which lies between $2$ and $M$, and exceeds that offset.
20. One construction is $P(x)=x^2+(m+1)^2(2x-2m-3)\prod_{j=1}^m(x-j)$. The vanishing product preserves the sampled values; its sign controls the exceptions. Finite agreement alone does not establish a universal formula.

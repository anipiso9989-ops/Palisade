---
title: "Unit 1 Examination — Mathematical Language, Logic, and Proof"
course: "1.1"
unit: "01"
kind: examination
progressId: precalculus-unit-01-examination
trackable: true
---

## Conditions and standard

This examination is **untimed and self-paced**. Attempt it closed-book without a calculator. Use only the prerequisites and Articles 1.1–1.8. Give complete reasoning, state domains and restrictions, and use exact answers. A counterexample must satisfy every hypothesis of the claim it refutes.

There are exactly **30 free-response problems: 15 Medium and 15 Hard**. Each is worth 10 points, for 300 total. The mastery threshold is **270/300 (90%)**. A numerical answer without the requested justification does not demonstrate mastery. After marking, revisit the relevant articles and write corrected arguments for missed problems.

[Unit overview](../) · [Syllabus](../../../syllabus/)

## Medium

1. Use a truth table or an exhaustive logical argument to prove that $(p\Rightarrow r)\land(q\Rightarrow r)$ is equivalent to $(p\lor q)\Rightarrow r$. Identify every assignment where these expressions are false.
2. Translate “every real $x$ has a positive real $y$ such that $y^2>x$” into quantified notation. Negate the sentence without negating a compound expression, and prove the original by an explicit witness depending on $x$.
3. Express in quantified notation and prove: for every integer $n$, there is exactly one integer $m$ with $0\le m<5$ for which $5\mid n+m$. Your proof must establish existence and uniqueness, including negative $n$.
4. In a fifteen-element universe, sets $A,B$ have sizes $9,10$ and intersection size $6$. Determine the number of elements in each of the four regions: both sets, only $A$, only $B$, and neither. Construct disjoint regions demonstrating that these data are consistent.
5. Prove $A\setminus(B\cap C)=(A\setminus B)\cup(A\setminus C)$ by membership equivalences for arbitrary sets, including empty sets.
6. A five-element set contains three specified distinct elements $u,v,w$. How many of its subsets exclude $w$ but contain at least one of $u,v$? Justify your count without listing every subset.
7. Rational numbers $a,b$ satisfy $a+b\sqrt3=2-\sqrt3$. Determine $a,b$ and prove their uniqueness.
8. Find every real solution of $x^2-6x+7=0$ and prove none is rational.
9. Determine all ordered pairs of coprime positive integers $(a,b)$ with $ab=72$. Explain why no prime power in the prime factorization of $72$ can be split between the two entries in your enumeration.
10. If the integer $n$ is odd and not divisible by $3$, prove $24\mid(n^2-1)$.
11. Real numbers $x,y$ satisfy $x+y=5$ and $x^2+y^2<13$. Prove $xy>6$ and determine the resulting strict bounds on each variable.
12. Prove that if $a^2+ab+b^2$ is even for integers $a,b$, then both $a$ and $b$ are even. Make the parity cases exhaustive.
13. Let $a,b$ be nonnegative integers. Prove that if $\sqrt a+\sqrt b$ is rational, then both square roots are integers. Treat a zero sum separately rather than dividing by it.
14. Prove by induction that $\sum_{j=1}^n j(2j-1)=n(n+1)(4n-1)/6$ for every $n\ge1$.
15. A student claims every integer $n\ge2$ is a power of one prime. In a strong-induction step, a composite $n=ab$ is split into smaller factors, each assumed to be a prime power; the student concludes that $ab$ is a prime power. Identify the exact logical gap, provide a counterexample, and state a valid conclusion that the same decomposition can establish.

## Hard

16. Four speakers are each either a truth-teller or a liar. A says: “B and C have the same type.” B says: “D is a liar.” C says: “At least one of A and D is truthful.” D says: “Exactly two of us are truthful.” Determine every consistent assignment, including why your list is exhaustive.
17. For a nonempty finite subset $D$ of $\mathbb R$, write and prove the statement that $D$ has a largest member using induction on $|D|$. Negate the quantified statement, and explain why that negation is true for $D=\mathbb N$ instead.
18. Prove $(A\triangle B)\triangle C=A\triangle(B\triangle C)$ for arbitrary sets. Characterize exactly when $A\triangle B=A\cup B$, and exactly when $A\triangle B=A\cap B$.
19. Let $U$ have $n\ge1$ elements. Count the unordered pairs of **distinct** subsets $A,B$ with $A\cup B=U$ and $|A\cap B|=1$. An unordered pair counts $\{A,B\}$ and $\{B,A\}$ only once. Treat $n=1$ separately.
20. Classify all rational pairs $(a,b)$ for which $(a+b\sqrt2)^2$ is rational. Then prove there is no rational pair $(a,b)$ for which $(a+b\sqrt2)^2=3$.
21. Determine every integer $n$ for which $n^2+n+1$ is a perfect square. Your proof must cover negative integers as well as nonnegative integers.
22. Prove that no rational numbers $x,y$ satisfy $x^2+y^2=3$. Use a common positive denominator and a descent argument, explaining why the denominator decreases. Zero and negative numerators must be covered.
23. At a gathering of seven people, acquaintance is mutual and nobody counts themselves. Prove it is impossible for every person to have exactly three acquaintances within the gathering. Then construct a configuration in which every person has exactly two acquaintances, verifying both mutuality and each count.
24. Prove $(1+t)^n\ge1+nt$ for every real $t\ge-1$ and integer $n\ge1$. Determine every equality case. Check explicitly that your induction remains valid at $t=-1$.
25. Prove that every positive integer has a unique representation $\sum_{j=0}^k\varepsilon_j3^j$, where each $\varepsilon_j\in\{0,1,2\}$ and $\varepsilon_k\ne0$. Give an existence argument using strong induction and a separate uniqueness argument.
26. For every integer $M\ge2$, prove that $M!+1$ has a prime divisor greater than $M$. Deduce that there are infinitely many primes; do not assume that $M!+1$ itself is prime.
27. Refute the claim that rational $x+y$ and rational $x^2+y^2$ force real $x,y$ individually rational. Your example must also have $x+y\ne0$ and $xy\ne0$. Prove the conclusion becomes valid if $x-y$ is also assumed rational.
28. Refute: “if real $a+b+c=0$, then $a^3+b^3+c^3=0$.” Derive the correct identity under the given hypothesis, and characterize exactly when the original conclusion does hold.
29. Let $U$ have $n\ge1$ elements. Prove that every strict chain $A_0\subsetneq A_1\subsetneq\cdots\subsetneq A_k$ of subsets of $U$ has $k\le n$. Characterize equality and count the chains having $k=n$.
30. Let $n\ge2$ and let $x_1,\ldots,x_n>1$ be pairwise coprime integers. Put $P=\prod_{i=1}^n x_i$. Prove that the greatest common divisor of all $n$ integers $P/x_i$ is $1$, but for $n\ge3$ no two of them are coprime. Find the greatest common divisor of any pair $P/x_i,P/x_j$ with $i\ne j$.

## After your attempt

[Separate answer key and grading guidance](./answer-key/). This is a public self-assessment key; finish your independent attempt before consulting it.

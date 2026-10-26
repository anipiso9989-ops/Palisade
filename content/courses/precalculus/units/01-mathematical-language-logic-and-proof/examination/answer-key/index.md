---
title: "Unit 1 Examination — Answer Key"
course: "1.1"
unit: "01"
kind: answer-key
trackable: false
---

[Return to the examination](../) · [Unit overview](../../)

## Grading

Each problem is worth **10 points**: 2 for a correct setup or model, 5 for the essential reasoning, 2 for restrictions, cases, or completeness, and 1 for a clear conclusion. Adapt these categories to equivalent valid approaches; the checkpoints below identify essential mathematical content, not a required wording. A bare answer without the requested reasoning earns at most 2 points. A circular proof or an invalid operation cannot receive the reasoning points. An unaddressed part loses the points attributable to it; do not penalize the same error twice.

Mastery is **270/300 or higher**, together with the ability to explain and independently reproduce the arguments. Rework weaknesses before advancing.

## Medium: answers and checkpoints

1. Both expressions are false exactly when $r=\mathrm F$ and at least one of $p,q$ is true: the triples $(p,q,r)$ are TTF, TFF, FTF. Otherwise both are true. Credit an exhaustive table or a correct equivalence through $(\neg p\lor r)\land(\neg q\lor r)$.
2. $\forall x\in\mathbb R\,\exists y\in\mathbb R,\ (y>0\land y^2>x)$. Negation: $\exists x\in\mathbb R\,\forall y\in\mathbb R,\ (y\le0\lor y^2\le x)$. A witness is $y=|x|+1$, where $|x|$ is the nonnegative distance of $x$ from zero. Set $s=|x|\ge0$; then $(s+1)^2>s\ge x$. Require positivity and the correct quantifier dependence.
3. $\forall n\in\mathbb Z\,\exists!m\in\mathbb Z,\ (0\le m<5\land5\mid n+m)$. Write $n=5q+r$ with $0\le r<5$. Take $m=0$ for $r=0$, otherwise $m=5-r$. Two permissible witnesses differ by a multiple of $5$ of absolute value less than $5$, so coincide. Require both directions and negative-$n$ coverage through the division algorithm.
4. Both: $6$; only $A$: $3$; only $B$: $4$; neither: $2$. A construction partitions the universe into disjoint blocks of sizes $6,3,4,2$ and assigns the first block to both sets. Require consistency, not just the union size $13$.
5. Membership means $x\in A$ and not both $x\in B,x\in C$, equivalently $(x\in A\land x\notin B)\lor(x\in A\land x\notin C)$. This also covers empty sets. Require the common $A$ condition on both branches.
6. $12$. With $w$ excluded, there are $2^4$ subsets; the $2^2$ containing neither $u$ nor $v$ are removed. Credit the equivalent count $3\cdot2^2$ from the three nonempty choices among $u,v$.
7. $a=2,b=-1$. Otherwise $(b+1)\sqrt3=2-a$ with nonzero rational coefficient would make $\sqrt3$ rational; after $b=-1$, $a=2$. Require the nonzero-coefficient case and verification.
8. $x=3\pm\sqrt2$, both irrational. Completing the square gives $(x-3)^2=2$; a rational $x$ would make $\sqrt2$ rational. Require both real roots and the rationality conclusion.
9. $(1,72),(8,9),(9,8),(72,1)$. Since $72=2^3\cdot3^2$, coprimality requires each entire prime power to be assigned to one entry. Four independent assignments exhaust the pairs.
10. Write $n=2k+1$, giving $n^2-1=4k(k+1)$ divisible by $8$. A nonmultiple of $3$ has square remainder $1$, so $3\mid n^2-1$. Coprimality of $8,3$ yields divisibility by $24$. Require both factors; oddness alone is insufficient.
11. $xy>6$ and $2<x<3,\ 2<y<3$. Use $x^2+y^2=25-2xy$ and then $x(5-x)>6$, equivalent to $(x-2)(x-3)<0$. The same bound holds for $y=5-x$. Require strict endpoints.
12. In each case other than even-even, the expression is odd: odd-even and even-odd contribute one odd square; odd-odd contributes three odd terms. Require exhaustive cases or their equivalent remainder calculation.
13. Put $s=\sqrt a+\sqrt b$. If $s=0$, nonnegativity forces both roots zero. If $s>0$ is rational, their difference $(a-b)/s$ is rational; adding and subtracting gives rational individual roots. The integer-root lemma makes both integers. Require the zero case and the rational-to-integer step.
14. Base $n=1$: both sides are $1$. Adding $(k+1)(2k+1)$ to $k(k+1)(4k-1)/6$ gives $(k+1)(k+2)(4k+3)/6$, the desired next case. Require a valid hypothesis and the explicit next formula.
15. Prime-power factors may have different prime bases. The integer $6=2\cdot3$ refutes the claim. The decomposition proves instead that every integer at least $2$ is a product of primes, not necessarily powers of the same prime. Require identification of the gap, not merely a counterexample.

## Hard: answers and checkpoints

16. In order A, B, C, D: **FFTT, FTFF, TTTF**. If D is truthful, B is false, C true, and A false, giving exactly two truthful speakers. If D is false, B is true and C has A's type; A's biconditional is then satisfied for either type of A. These cases have one or three truthful speakers, so D's statement is indeed false. Require checking every speaker and exhausting both cases for D.
17. $\exists m\in D\,\forall x\in D,\ x\le m$. Base: a singleton. Remove one member from a larger finite set, take a maximum of the remainder by induction, and compare it with the removed member. Negation: $\forall m\in D\,\exists x\in D,\ x>m$. For $D=\mathbb N$, choose $x=m+1$. Require nonemptiness, the finite induction, and correct quantifier order.
18. Membership in either iterated symmetric difference means membership in an odd number of $A,B,C$, proving associativity by the eight membership possibilities. The union equality holds exactly when $A\cap B=\varnothing$. The intersection equality holds exactly when $A=B=\varnothing$, since the two sides are disjoint and together cover $A\cup B$. Require both characterizations, including their converses.
19. $0$ when $n=1$; $n2^{n-2}$ when $n\ge2$. For ordered pairs, choose the unique common element in $n$ ways and assign each remaining element exclusively to $A$ or $B$, giving $n2^{n-1}$. For $n\ge2$ the two subsets are distinct, so swapping gives exactly two ordered versions of each unordered pair. Require the exceptional singleton universe; blindly dividing there counts an impermissible equal pair.
20. Rationality holds exactly when $ab=0$, since the square is $a^2+2b^2+2ab\sqrt2$. For a square equal to $3$, $b=0$ would require rational $a$ with $a^2=3$; $a=0$ would require rational $2b$ with $(2b)^2=6$. Both violate the integer-root lemma. Require both possible zero-factor cases.
21. Only $n=-1,0$, each giving $1$. For $n\ge1$, $n^2<n^2+n+1<(n+1)^2$. For $n\le-2$, put $m=-n-1\ge1$; the expression becomes $m^2+m+1$, already excluded. Require both negative and nonnegative cases.
22. If rational solutions exist, choose a common positive denominator $d$ as small as possible and write $x=a/d,y=b/d$ with integers $a,b$. Then $a^2+b^2=3d^2$. Remainders modulo $3$ force $3\mid a,b$; substitution gives $3\mid d^2$, hence $3\mid d$. The same rational pair has denominator $d/3$, a contradiction. This reasoning permits zero and negative numerators; $d/3$ remains a positive integer. Require a specified minimum and legitimate descent.
23. Exactly three acquaintances each is impossible: the sum of the seven counts would be $21$, but every acquainted pair contributes exactly $2$ to that sum, so it must be even. For exactly two each, label people $0,1,\ldots,6$ around a cycle and let each know only its two neighbors, including the pair $6,0$. Require the double-counting contradiction and verification that the construction has distinct neighbors and mutual acquaintance.
24. Equality exactly when $n=1$ or $t=0$. Base $n=1$ is equality. Multiply the induction hypothesis by $1+t\ge0$, obtaining $(1+t)^{k+1}\ge1+(k+1)t+kt^2\ge1+(k+1)t$. For $t\ne0$, $k\ge1$ makes the extra term positive, so all cases $n\ge2$ are strict. At $t=-1$ multiplication by zero is valid and $n>1$ gives $0>1-n$. Require the domain and equality analysis.
25. Base integers $1,2$ are single digits. For $n\ge3$, divide as $n=3q+r$, $0\le r<3$ and $1\le q<n$; append digit $r$ to the inductively obtained expansion of $q$. For uniqueness, the lowest digit is the remainder modulo $3$; subtract it and divide by $3$, repeating until the leading nonzero digit. Require termination, digit restrictions, and exclusion of leading zero padding.
26. The integer $M!+1>1$ has a prime divisor $p$. If $p\le M$, it also divides $M!$, and hence would divide $1$, impossible. Thus primes exceed every proposed finite bound; a finite list would have a largest member. Require the distinction between having a prime factor and being prime itself.
27. Example $x=1+\sqrt2,y=1-\sqrt2$: sum $2$, squared sum $6$, product $-1$, with both entries irrational. With rational sum $s$ and rational difference $d$, the entries $(s+d)/2,(s-d)/2$ are rational. Require every additional condition on the counterexample.
28. Example $(a,b,c)=(1,1,-2)$ gives cubic sum $-6$. Substituting $c=-a-b$ yields $a^3+b^3+c^3=3abc$. Under the original sum constraint, the cubic sum is zero exactly when $abc=0$, meaning one entry is zero and the others are opposites. Require the identity's derivation and necessity as well as sufficiency.
29. Strict finite inclusion gives $|A_{i+1}|\ge|A_i|+1$, so $n\ge|A_k|\ge|A_0|+k\ge k$. Equality $k=n$ forces $A_0=\varnothing,A_n=U$ and exactly one new member at each step. Such chains correspond to the $n!$ orders of adding the elements. Require the full equality characterization and the one-to-one counting correspondence.
30. The common gcd of all quotients is $1$. If a prime divided all of them, it would divide $P$ and thus exactly one $x_i$, by pairwise coprimality; it cannot then divide $P/x_i$. For $i\ne j$, the pairwise gcd is $P/(x_ix_j)$: after factoring this integer out, the remaining factors are $x_j,x_i$, which are coprime. For $n\ge3$ the gcd contains at least one factor greater than $1$; for $n=2$ it is the empty product $1$. Require the simultaneous-gcd argument separately from the pairwise one.

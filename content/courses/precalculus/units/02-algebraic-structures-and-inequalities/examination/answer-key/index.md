---
title: "Unit 2 Examination — Answer Key and Grading Guidance"
course: "1.1"
unit: "02"
kind: answer-key
trackable: false
---

## Use after an independent attempt

[Return to examination](../) · [Unit overview](../../)

This public key records verified results and grading checkpoints. Each question is worth 10 points. Unless a more specific allocation appears below, award 3 points for a valid setup with domains or hypotheses, 5 for correct reasoning, and 2 for the complete conclusion including endpoints or equality cases. Accept any mathematically sound alternative. A correct final answer alone earns at most 2 points; a proof question without a valid argument cannot earn mastery credit. Do not double-penalize a carried arithmetic slip when the subsequent reasoning is valid. The mastery threshold is 270/300 (90%).

For proof questions, award the reasoning points only for a general argument covering the stated domain. Numerical checks are not proofs. For parameter classifications, missing exceptional cases or reversed signs lose the points attached to those cases.

## Medium: answers and checkpoints

1. **$257$.** From $(x+y)^2$, obtain $x^2+y^2=17$, then $x^4+y^4=17^2-2\cdot4^2$. The pair $(1,4)$ establishes consistency. Give 3 points for the squared-sum reduction, 4 for the fourth-power calculation, 3 for consistency and result.
2. **$(x^2+2x-1)(x^2+2x-4)$; roots $-1\pm\sqrt2,-1\pm\sqrt5$.** Set $u=x^2+2x$, giving $(u-1)(u-4)$. Both quadratics give two distinct real roots. Award 4 points for the structural factorization, 4 for exact roots, 2 for completeness.
3. **$(x-2)/(x+2)$ on $\mathbb R\setminus\{-3,-2,2,3\}$; no zeros.** The first denominator excludes $3,-2$, the divisor's denominator excludes $2$, and its numerator excludes $-3$. The reduced numerator vanishes only at the already excluded $2$. Allocate 4 points to the complete domain, 4 to simplification, 2 to zeros.
4. **$x=(5\pm\sqrt{33})/4$.** Exclude $\pm1$; clearing denominators gives $2x^2-5x-1=0$. Both roots are allowed and all clearing steps are reversible on the domain.
5. **$x=-1,0$.** Record $x\ge-4/3$ and $x+2\ge0$. Squaring gives $x(x+1)=0$; direct checks yield $1=1$ and $2=2$.
6. **$x=\pm1,\pm8$.** Put $u=x^{2/3}\ge0$. Then $u=1,4$; writing $v=\sqrt[3]x$ gives $v^2=u$ and hence both signs. Do not discard negative real $x$.
7. **$x=-7/3,13/3$.** The three intervals cut by $-1/2,4$ give respectively $3-3x$, $x+5$, and $3x-3$. The middle candidate $5$ does not lie in its interval. Require both accepted candidates to satisfy their sign assumptions.
8. **$t=-1$, greatest distance $3$.** Triangle inequality gives $6\le|t+4|+|t-2|\le2\max\{|t+4|,|t-2|\}$. At $-1$ both distances are $3$. For uniqueness, the two distance conditions $\le3$ intersect only at $-1$. Give 5 reasoning points for the universal bound and 3 for attainment and uniqueness, with 2 for result.
9. **$[-3,-2)$.** Exclude $\pm2$, then reduce to $(x+3)/(x+2)\le0$. Include the numerator zero $-3$, exclude the pole $-2$; cancellation does not reinstate $2$.
10. **$[-3,-1/2)\cup(2,\infty)$.** Exclude $2,-1/2$ and compare $(x+3)/((x-2)(2x+1))$ with zero. Require all four interval signs and the allowed numerator-zero endpoint.
11. **$64$, only at $a=b=4$.** AM–GM on $a,b,b$ gives $ab^2\le((a+2b)/3)^3=64$. Equality requires all three entries equal; zero entries do not attain the maximum. Allocate 6 points to the bound, 2 to equality, 2 to result.
12. **$7$ at $(x,y)=(2,5)$.** Positive-denominator Cauchy–Schwarz gives the bound $49/7$. Equality requires $x/2=y/5$, which together with the sum yields the stated pair. Real entries of either sign are allowed in the inequality.
13. **If $a=-2$, all real $x$; otherwise only $x=a-2$.** A factor cancels only in the nonzero-coefficient case. At $-2$ the original equation is $0=0$.
14. **Two roots $t\pm\sqrt{t^2-4}$ for $|t|>2$; one root $t$ for $|t|=2$; none for $|t|<2$.** Use discriminant $4(t^2-4)$; “one” means one distinct root. Require both boundary parameter values.
15. **Equality exactly when $u=v$ or $uv=0$.** By symmetry assume $u\ge v$. Squaring the nonnegative sides reduces to $v\le\sqrt{uv}$, true because $u\ge v\ge0$. Equality occurs when $v=0$ or $u=v$. Give 3 points for symmetry and legitimate squaring, 4 for the general inequality, 3 for complete equality cases.

## Hard: answers and checkpoints

16. **$(1,2),(2,1),(-1,-2),(-2,-1)$.** Set $s=x+y=\pm3,p=xy$. The fourth-power relation gives $p^2-18p+32=0$, hence $p=2$ or $16$. Real $x,y$ force $p\le s^2/4=9/4$ by $(x-y)^2\ge0$, rejecting $16$. Then reconstruct each pair from sum and product, or solve the corresponding quadratic. Award 3 points for invariant reduction, 3 for rejecting the nonreal branch, 4 for reconstruction and completeness.
17. **At least two distinct primes.** Factor as $(n^2+n+1)(n^2-n+1)$. Each factor exceeds $1$ for $n\ge2$, and both are odd. A common divisor divides their difference $2n$ and is coprime to $n$, because either factor is $1$ modulo $n$; being odd, it must be $1$. Each factor therefore has a prime divisor absent from the other. Award 3 points for factors/nontriviality, 4 for coprimality, 3 for the prime-divisor conclusion.
18. **$x=(-5\pm\sqrt3)/2$.** Exclude $-1,-2,-3,-4$. Pair the differences with gaps $3$ and $1$: $3/((x+1)(x+4))+1/((x+2)(x+3))=0$. With $u=x+5/2$, this is $3/(u^2-9/4)+1/(u^2-1/4)=0$, giving $4u^2-3=0$. Both candidates are permitted, and clearing denominators is reversible there. Allocate 3 points to domain/regrouping, 5 to reduction, 2 to complete answers.
19. **Only $x=6$.** Domain $x\ge3$ makes every radical defined. Squaring yields $\sqrt{(x+6)(x-3)}=x$; the right side is nonnegative. A further square gives $3x-18=0$. Check $\sqrt{12}+\sqrt3=\sqrt{27}$. Require both sign justifications and the original check.
20. **$[-1,1)\cup[3,\infty)$.** Domain $x\ge-1$, $x\ne1$. For $x<1$ the quotient is nonpositive. For $x>1$ multiply by the positive denominator and square nonnegative sides, giving $x+1\le(x-1)^2$, or $x(x-3)\ge0$. Intersect with $x>1$. Allocate 3 points to the domain/sign split, 5 to the two branches, 2 to endpoints.
21. **$(-\infty,-5]\cup[-1,5]$.** On the intervals cut by $-3,2$, the left side is $-5$, $2x+1$, and $5$ respectively. Intersect $-5\ge x$, $2x+1\ge x$, and $5\ge x$ with their own intervals. The breakpoints are correctly included only when they satisfy the original inequality.
22. **None for $t<0$; only $2$ for $t=0$; only $1/2$ for $t=1$; two roots $(2+t)/(1-t),(2-t)/(1+t)$ for $t>0,t\ne1$.** For $t<0$, opposite signs would force both absolute values zero, impossible. For positive $t$, split $x-2=\pm t(x+1)$; $t=1$ makes one branch inconsistent. Give 2 points for each exceptional case $t<0,0,1$, and 4 for the general two-root case and distinctness.
23. **For $t<1$, $x<t$; for $t=1$, none; for $t>1$, $x>t$.** Subtraction gives $(t-1)/(x-t)>0$ with $x\ne t$. A solution in $[-1,1]$ exists exactly for **$-1<t<1$**. At $t=-1$, the strict inequality excludes the endpoint. Award 6 points to the full classification, 4 to the interval-existence condition and boundaries.
24. **$-3\le t\le T=(1+\sqrt{13})/2$.** For $t\le0$, write $x^2-2tx+t+3$ as a sum minimized at $x=0$ on $x\ge0$, requiring $t\ge-3$. For $t>0$, the permitted minimum is at $x=t$, requiring $t+3-t^2\ge0$, hence $t\le T$. Equality only at $(t,x)=(-3,0)$ or $(T,T)$. Award 3 points per sign case, 2 for necessity, 2 for complete equality cases.
25. **$C=38/3$; equality triples $(a,b,c)=s(1,-8,7)$ for all real $s$.** Since the variables sum to zero, replace coefficients $(1,-2,3)$ by $(1/3,-8/3,7/3)$. Cauchy–Schwarz gives squared coefficient sum $38/3$. The equality list is proportional to these coefficients, has sum zero, and its nonzero members demonstrate that a smaller $C$ fails. Allocate 3 points to the shift, 4 to the bound, 3 to equality and sharpness.
26. **Strict sharp lower bound $3$.** Positive-denominator Cauchy–Schwarz gives the non-strict bound $(1+2+3)^2/12=3$. Equality would require $(x+y):(y+z):(z+x)=1:2:3$, forcing $y=0$, so is impossible. For sharpness take $(x,y,z)=(2,h,4-h)$ with $0<h<1$. The sum minus $3$ is $2h^2/((2+h)(6-h))<h^2/5$. Choose also $h<\sqrt{5\varepsilon}$. This constructs the requested triple without a limit theorem. Award 4 points for the bound, 2 for strictness, 4 for the explicit arbitrary-$\varepsilon$ construction.
27. **Only $(1,1,1)$.** Let $S=a+b+c=a^2+b^2+c^2>0$. AM–GM gives $S\ge3$, while Cauchy–Schwarz gives $S^2\le3S$, hence $S\le3$. Equality in either appropriate inequality forces $a=b=c=1$; verify the triple. Allocate 4 points to each bound, 2 to equality and verification.
28. **If $t=1$, only $x=1$; otherwise $x=1,(t+1)/(t-1)$, distinct.** Factor as $(x-1)((t-1)x-(t+1))$. For $t<-1$ or $t>1$ both roots are positive; for $-1<t<1$ the second is negative; for $t=-1$ the roots are $1,0$. Thus exactly **$t=-1,1$** meet the final condition. Award 5 points to the complete root classification and degeneration, 5 to the sign classification and requested parameter set.
29. **$0\le t\le1$.** At $(x,y)=(1,1)$ the expression is $2t$, so $t\ge0$ is necessary. If $t>1$, take $x=-y$ with $x^2>1/(t-1)$ to make it negative. For sufficiency decompose it as $(1-t)((x-1)^2+(y-1)^2)+t((x+y-1)^2+1)$. All terms are nonnegative on $[0,1]$. Equality occurs only for $t=0,x=y=1$; when $t>0$ the last summand is strictly positive. Award 4 points to necessity, 4 to sufficiency, 2 to equality.
30. **Always retain $x=2$.** For the additional roots: if $t\le-4$, only $t-2$ (two total); if $-4<t<0$, $t-2,-t-2$ (three total); if $t=0$, only $-2$ (two total); if $0<t\le4$, none (one total); if $t>4$, only $t-2$ (two total). For $x>2$, division gives $x+2=t$ and requires $t>4$. For $x<2$, it gives $|x+2|=-t$, requiring $t\le0$, with the second candidate meeting $2$ at $t=-4$. Allocate 2 points to preserving $2$, 3 to each sign branch, 2 to all boundary counts. At $t=4$ a would-be additional root is the already counted $2$.

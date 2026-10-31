---
title: "2.4 — Radicals, Rational Exponents, and Algebraic Equations"
course: "1.1"
kind: "article"
progressId: precalculus-unit-02-article-04
unit: "02"
topic: "2.4"
---

## A root has a chosen meaning

Squaring forgets a sign. Taking a square root therefore needs a convention: $\sqrt A$ is the unique **nonnegative** real number whose square is $A$, and is defined over the reals exactly when $A\ge0$. Thus $\sqrt{25}=5$, whereas $u^2=25$ has two solutions, $u=\pm5$.

For an integer $n\ge2$, the **principal $n$th root** $\sqrt[n]A$ is the nonnegative root for even $n$ (requiring $A\ge0$), and the unique real root for odd $n$ (allowing all real $A$). Existence of these real roots is a foundational real-number fact assumed from prerequisite algebra. Uniqueness follows from strict increase of positive integer powers on nonnegative numbers, and of odd powers on all real numbers. On $u>v\ge0$, factor $u^n-v^n$: its factors are positive. Odd powers also preserve signs and compare negative inputs by negation.

For any real $u$, $\sqrt{u^2}$ is $u$ when $u\ge0$ and $-u$ when $u<0$. In particular, replacing $\sqrt{u^2}$ by $u$ without a sign condition is invalid.

## Laws and restrictions

For $A,B\ge0$,

$$
\sqrt{AB}=\sqrt A\sqrt B;
\qquad
\sqrt{A/B}=\frac{\sqrt A}{\sqrt B}\quad(B>0).
$$

The product on the right is nonnegative and its square is $AB$, which proves the first by uniqueness. The quotient proof is identical. There is no corresponding sum law: $\sqrt{1+1}\ne\sqrt1+\sqrt1$.

A **rational exponent** $a^{p/q}$ uses $p/q$ in lowest terms, $q>0$. For $a>0$ set $a^{p/q}=(\sqrt[q]a)^p$. Allow $a=0$ only for $p>0$. For $a<0$, allow the definition only when the reduced denominator $q$ is odd. For example $(-8)^{2/3}=4$, whereas $(-8)^{1/2}$ has no real value. We leave $0^0$ undefined as a numerical power; a constant polynomial term is simply $1$.

For positive bases, $a^{r+s}=a^ra^s$, $(a^r)^s=a^{rs}$, and $(ab)^r=a^rb^r$ for rational $r,s$. Put exponents over a common denominator and use uniqueness of positive roots to justify these laws. Do not extend them blindly to negative bases: $((-1)^2)^{1/2}=1$ but $(-1)^{2(1/2)}=-1$.

**Example.** $16^{-3/4}=1/(\sqrt[4]{16})^3=1/8$. The negative exponent requires a nonzero base.

Multiplying by a conjugate uses a difference of squares:

$$
\frac1{\sqrt5-\sqrt2}
=\frac{\sqrt5+\sqrt2}{5-2}
=\frac{\sqrt5+\sqrt2}{3}.
$$

The original and conjugate denominators are nonzero; rationalization must preserve this condition.

## Equations: isolate, constrain, then square

For real expressions $A,B$,

$$
\sqrt A=B\quad\Longleftrightarrow\quad A=B^2\ \text{and}\ B\ge0.
$$

The right side implies $A\ge0$ automatically. If the sign condition is dropped, the polynomial equation merely supplies candidates.

**Example.** Solve $\sqrt{x+6}=x$. The right side forces $x\ge0$. Squaring gives $x^2-x-6=(x-3)(x+2)=0$; only $3$ meets the sign condition. It satisfies the original equation, since $\sqrt9=3$.

With two radicals, retain the domain before successive squarings.

**Example.** $\sqrt{x+5}-\sqrt{x-3}=2$ requires $x\ge3$. Isolating the first root and squaring gives $4=4\sqrt{x-3}$, hence $x=4$. Substitution gives $3-1=2$, proving sufficiency as well as necessity.

For a rational-power equation, a substitution must retain its sign or range. In $x^{2/3}-3x^{1/3}+2=0$, put $u=\sqrt[3]x\in\mathbb R$. Then $(u-1)(u-2)=0$, giving $x=1,8$. A square-root substitution would instead require $u\ge0$.

## Quadratics from a square

For $a\ne0$, completing the square yields

$$
ax^2+bx+c=0
\quad\Longleftrightarrow\quad
(2ax+b)^2=b^2-4ac.
$$

Thus with **discriminant** $\Delta=b^2-4ac$, there are no real roots if $\Delta<0$, one if $\Delta=0$, and two if $\Delta>0$. In the last two cases,

$$
x=\frac{-b\pm\sqrt\Delta}{2a}.
$$

This proves the formula and its real-domain condition. If $a=0$, the equation is linear or constant and must be handled separately.

[Previous: Rational expressions](../03-rational-expressions-and-domain-restrictions/) · [Unit overview](../) · [Next: Absolute value](../05-absolute-value-and-distance/)

## Practice problems

Find complete real solution sets and justify restrictions. Rational exponents use the convention above.

### Easy

1. Evaluate $\sqrt{81}$ and solve $x^2=81$; explain the distinction.
2. Evaluate $(-27)^{2/3}$ and $32^{-2/5}$.
3. Simplify $\sqrt{50}$ and $\sqrt{18}\sqrt8$.
4. Simplify $\sqrt{(x-4)^2}$ separately for $x\ge4$ and $x<4$.
5. Determine the domain of $\sqrt{3x-6}/(x+1)$.
6. Solve $\sqrt{x+2}=4$.

### Medium

7. Solve $\sqrt{2x+3}=x$.
8. Solve $\sqrt{x+7}-\sqrt{x-2}=3$.
9. Rationalize $1/(\sqrt7+\sqrt3)$.
10. Solve $x^{2/3}+x^{1/3}-6=0$.
11. Solve $3x^2-4x-2=0$ and identify the discriminant.
12. Simplify $\sqrt{7-4\sqrt3}$ without a nested radical.

### Hard

13. Solve $\sqrt{x+1}+\sqrt{x-2}=3$.
14. Solve $\sqrt{x+4}=\sqrt{2x-1}-1$.
15. Solve $\sqrt{x+\sqrt{2x-1}}+\sqrt{x-\sqrt{2x-1}}=\sqrt6$.
16. Solve $x^{1/2}+x^{1/4}+x^{-1/4}+x^{-1/2}=10$. Seek a reciprocal structure and justify the range of each substitution.
17. Determine all ordered pairs of nonnegative integers $(a,b)$ satisfying $\sqrt a+\sqrt b=\sqrt{48}$. Prove your list is exhaustive without numerical approximation.
18. Determine exactly when $\sqrt{u+2\sqrt{u-1}}=1+\sqrt{u-1}$ is a valid real identity in $u$; then simplify the companion $\sqrt{u-2\sqrt{u-1}}$ on that domain, including its change of sign case.

### Olympiad

19. Classify all rational $r\ge1$ for which $\sqrt{r+1}+\sqrt{r-1}$ is rational. Give a rational-parameter description with precise parameter restrictions, proving both necessity and sufficiency.
20. Determine all rational pairs $(a,b)$ for which $a\sqrt{2+\sqrt3}+b\sqrt{2-\sqrt3}$ is rational. Establish that your list is complete without assuming an unproved independence of radicals.

## Answers

1. $9$; $x=\pm9$. The principal root is nonnegative.
2. $9$ and $1/4$.
3. $5\sqrt2$ and $12$.
4. $x-4$ for $x\ge4$, $4-x$ for $x<4$.
5. $[2,\infty)$.
6. $x=14$.
7. Only $x=3$; $-1$ fails the required sign.
8. $x=2$.
9. $(\sqrt7-\sqrt3)/4$.
10. $x=8,-27$.
11. $x=(2\pm\sqrt{10})/3$, $\Delta=40$.
12. $2-\sqrt3$.
13. $x=3$.
14. $x=8+2\sqrt{11}$; the other squared candidate fails $x\ge6$ from the isolated radical equation.
15. $x=2$; the domain is $x\ge1/2$, and squaring gives $x+\sqrt{(x-1)^2}=3$.
16. $x=((3+\sqrt5)/2)^4$ or $x=((3-\sqrt5)/2)^4$; use $u=x^{1/4}+x^{-1/4}\ge2$.
17. $(0,48),(3,27),(12,12),(27,3),(48,0)$. Essential idea: isolating a root makes $\sqrt{3a},\sqrt{3b}$ rational, hence integers; then $a=3r^2,b=3s^2$ with nonnegative integers $r+s=4$.
18. Domain $u\ge1$; the companion is $1-\sqrt{u-1}$ on $[1,2]$, $\sqrt{u-1}-1$ on $[2,\infty)$.
19. Exactly $r=q^2/4+1/q^2$ with rational $q>0$ and $q^2>2$. Essential idea: the difference of the two roots is $2/q$, so each root is rational.
20. Only $(0,0)$. Squaring a rational value forces $a^2=b^2$ by irrationality of $\sqrt3$; the cases $a=b$ and $a=-b$ reduce to rational multiples of $\sqrt6$ and $\sqrt2$.

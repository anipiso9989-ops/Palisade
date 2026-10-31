---
title: "2.3 — Rational Expressions and Domain Restrictions"
course: "1.1"
kind: "article"
progressId: precalculus-unit-02-article-03
unit: "02"
topic: "2.3"
---

## A formula comes with a domain

Cancelling a factor changes how an expression looks; it does not make division by zero legitimate. The expression $(x^2-4)/(x-2)$ equals $x+2$ wherever the original is defined, but the original still excludes $x=2$.

A **rational expression** is a quotient $P/Q$ of polynomials, where $Q$ is not the zero polynomial. Its **natural real domain** consists of the real inputs for which its denominator is nonzero. For a compound expression, every intermediate operation must be defined: an inner denominator cannot vanish, and an expression used as a divisor cannot be zero.

Keep a domain record before simplifying. Two expressions can have equal values on their common domain without having the same natural domain.

## Why cancellation works

If $B\ne0$ and $C\ne0$, then

$$
\frac{AC}{BC}=\frac AB
$$

because multiplying numerator and denominator by $C^{-1}$ preserves the quotient. This cancels a **factor of the whole numerator and denominator**, not terms in sums. For example, $(x+2)/(x+3)$ cannot be simplified by cancelling $x$.

**Example.**

$$
\frac{x^2-x-6}{x^2-9}
=\frac{(x-3)(x+2)}{(x-3)(x+3)}
=\frac{x+2}{x+3},\qquad x\ne-3,3.
$$

The simplified expression alone has a value at $3$, but it does not represent an allowed original input there.

For defined fractions,

$$
\frac AB+\frac CD=\frac{AD+BC}{BD}\quad(BD\ne0),
\qquad
\frac{A/B}{C/D}=\frac{AD}{BC}\quad(BD\ne0,\ C\ne0).
$$

The second follows by multiplying by the reciprocal of the nonzero divisor. Its restrictions include $D\ne0$ even though $D$ has moved to the numerator.

**Example.**

$$
\frac{1/x+1}{1/x-1}=\frac{1+x}{1-x},\qquad x\ne0,1.
$$

Multiplication of the inner numerator and denominator by $x$ is valid because $x\ne0$ was already required. The original divisor also requires $1/x-1\ne0$.

## Rational equations

On the recorded domain, multiplication by a common denominator is reversible because that denominator is nonzero. Solve the resulting polynomial equation, then retain only candidates in the original domain. This is a logical filter, not a numerical afterthought.

**Example.** Solve

$$
\frac{x+1}{x-1}=\frac2{x-1}+x-1.
$$

The domain is $x\ne1$. Multiplying by $x-1$ gives $x+1=2+(x-1)^2$, equivalent to $(x-1)(x-2)=0$. Only $x=2$ belongs to the original domain; substitution gives $3=2+1$.

An equation can also be true at every point of its domain. For example, $1/(x-1)-1/(x+1)=2/(x^2-1)$ holds exactly for all $x\ne\pm1$. A polynomial identity after clearing denominators does not restore excluded inputs.

## Zeros and reciprocal structure

A fraction $P/Q$ equals zero exactly when $P=0$ and $Q\ne0$. Its reciprocal exists only where both $P,Q$ are nonzero.

For $t\ne0$, writing $s=t+1/t$ gives

$$
t^2+t^{-2}=s^2-2,\qquad t^3+t^{-3}=s^3-3s.
$$

Here $t^{-k}=1/t^k$ for positive integers $k$. The formulas follow from Article 2.1 with $a=t,b=1/t$, whose product is $1$. They simplify expressions without assuming that every arbitrary real value of $s$ comes from a real $t$.

[Previous: Factorization](../02-factorization-and-polynomial-identities/) · [Unit overview](../) · [Next: Radicals and equations](../04-radicals-rational-exponents-and-algebraic-equations/)

## Practice problems

Work over $\mathbb R$. For every simplification, give the original domain; for every equation, give the complete solution set.

### Easy

1. State the natural domain of $3/(x^2-16)$.
2. Simplify $(x^2+5x)/x$.
3. Simplify $(y^2-9)/(y+3)$.
4. Combine $2/x+3/x^2$ into one fraction.
5. Find all zeros of $(t-2)/(t^2-4)$.
6. Explain why $(x+4)/(x+1)$ cannot be simplified to $4$ by cancelling $x$.

### Medium

7. Simplify $(x^2-4x+4)/(x^2-4)$.
8. Simplify $(1/a-1/b)/(1/a+1/b)$.
9. Solve $1/(x-2)+1/(x+2)=1$.
10. Solve $(x^2-1)/(x-1)=2$.
11. Determine the domain and simplify $\dfrac{x/(x-1)}{x^2/(x^2-1)}$.
12. If $t\ne0$ and $t+1/t=4$, determine $t^3+t^{-3}$.

### Hard

13. Solve $\dfrac1{x(x+1)}+\dfrac1{(x+1)(x+2)}=\dfrac13$.
14. Determine every real $x$ where $\dfrac{x^2-1}{x^2-3x+2}$ is defined and equals its reciprocal.
15. Prove that $1/(a-b)+1/(b-c)+1/(c-a)$ is nonzero whenever $a,b,c$ are pairwise distinct reals.
16. Find all real constants $A,B,C$ such that $\dfrac{x^2+1}{x(x-1)(x+1)}=\dfrac A x+\dfrac B{x-1}+\dfrac C{x+1}$ for all permitted $x$. Prove uniqueness.
17. If $t\ne0$ and $t-1/t=3$, determine $t^4+t^{-4}$ without finding $t$.
18. For pairwise distinct reals $a,b,c$, prove $\dfrac{a^2}{(a-b)(a-c)}+\dfrac{b^2}{(b-a)(b-c)}+\dfrac{c^2}{(c-a)(c-b)}=1$.

### Olympiad

19. For pairwise distinct nonzero reals $a,b,c$, evaluate $\dfrac1{a(a-b)(a-c)}+\dfrac1{b(b-a)(b-c)}+\dfrac1{c(c-a)(c-b)}$. Prove your answer by common-denominator algebra.
20. Let nonzero real $x,y,z$ satisfy $x+y+z=0$. Prove $\dfrac{x^2}{y^2+z^2-x^2}+\dfrac{y^2}{z^2+x^2-y^2}+\dfrac{z^2}{x^2+y^2-z^2}=\dfrac32$, first establishing that all three denominators are nonzero.

## Answers

1. $\mathbb R\setminus\{-4,4\}$.
2. $x+5$, $x\ne0$.
3. $y-3$, $y\ne-3$.
4. $(2x+3)/x^2$, $x\ne0$.
5. None; the only numerator zero is excluded.
6. Cancellation requires a common factor, not a common summand; $x=0$ already gives $4$, but $x=1$ gives $5/2$.
7. $(x-2)/(x+2)$, $x\ne\pm2$.
8. $(b-a)/(b+a)$, $ab\ne0$ and $a+b\ne0$.
9. $x=1\pm\sqrt5$; $x\ne\pm2$.
10. No solutions; the sole polynomial candidate is $x=1$, excluded.
11. $(x+1)/x$, $x\notin\{-1,0,1\}$.
12. $52$.
13. $x=-1\pm\sqrt7$, with the original exclusions $-2,-1,0$.
14. Only $x=1/2$; the original expression excludes $1,2$, and taking its reciprocal also excludes $-1$.
15. Put $u=a-b,v=b-c,w=c-a$; $u+v+w=0$ and $uv+vw+wu=-\tfrac12(u^2+v^2+w^2)<0$.
16. $(A,B,C)=(-1,1,1)$; clear denominators and compare coefficients for existence and uniqueness.
17. $119$.
18. Combine over $(a-b)(a-c)(b-c)$; the resulting numerator equals that denominator.
19. $1/(abc)$; clear denominators and factor the numerator.
20. The denominators are $-2yz,-2zx,-2xy$; use $x^3+y^3+z^3=3xyz$.

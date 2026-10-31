---
title: "2.2 — Factorization and Polynomial Identities"
course: "1.1"
kind: "article"
progressId: precalculus-unit-02-article-02
unit: "02"
topic: "2.2"
---

## Factoring reveals the pieces

Expansion answers “what are the terms?” Factoring answers “what multiplies to give this?” A product exposes zeros, signs, and divisibility that a sum may hide. A factorization must multiply back to the original expression.

A **polynomial in $x$ over $\mathbb R$** is a finite sum $a_0+a_1x+\cdots+a_nx^n$, where the coefficients $a_i$ are real and the exponents are nonnegative integers. Its degree is the highest exponent with nonzero coefficient; the zero polynomial has no degree here. A **polynomial identity** is an equality valid for every real $x$. Collecting coefficients verifies identities without testing selected values.

To **factor** an expression over a specified number system is to express it as a product with factors from that system. The system matters: $x^2-2$ has no linear factors with rational coefficients, but equals $(x-\sqrt2)(x+\sqrt2)$ over $\mathbb R$. Factoring over the integers means integer coefficients; extracting a constant alone is not a factorization into lower-degree polynomials.

## Reverse distribution first

A common factor is the simplest structure:

$$
6x^3-9x^2=3x^2(2x-3).
$$

When no common factor is visible, group terms to create one.

**Example.**

$$
x^3+2x^2-9x-18=x^2(x+2)-9(x+2)=(x+2)(x-3)(x+3).
$$

Each equality is distribution in reverse. Hence the corresponding equation has exactly the real solutions $-2,3,-3$ by the zero-product property.

For a monic quadratic,

$$
(x+r)(x+s)=x^2+(r+s)x+rs.
$$

Thus $x^2-3x-10=(x-5)(x+2)$ because $-5+2=-3$ and $(-5)2=-10$. If a convenient integer pair does not exist, forcing one is not a method; completing the square remains available.

## Identities as tools

Distribution proves the identities

$$
\begin{aligned}
a^2-b^2&=(a-b)(a+b),\\
a^3-b^3&=(a-b)(a^2+ab+b^2),\\
a^3+b^3&=(a+b)(a^2-ab+b^2).
\end{aligned}
$$

The second and third factors have different middle signs. Derive them by expansion when uncertain. Iterating the first identity gives $a^4-b^4=(a-b)(a+b)(a^2+b^2)$.

For an integer $n\ge1$,

$$
a^n-b^n=(a-b)(a^{n-1}+a^{n-2}b+\cdots+b^{n-1}).
$$

The sum has $n$ terms. On multiplying, every intermediate term cancels; only $a^n-b^n$ remains. This is a polynomial identity even at $a=b$. Dividing by $a-b$, in contrast, requires $a\ne b$. A power with exponent zero is interpreted as $1$ in these polynomial expressions, including constant terms at zero.

## Create a familiar pattern

An expression need not arrive as a difference of squares. Adding and subtracting the same term can create one.

**Example.**

$$
x^4+x^2+1=(x^2+1)^2-x^2=(x^2-x+1)(x^2+x+1).
$$

The intermediate square is chosen because its leading and constant terms match. Both quadratic factors are positive for real $x$, since $x^2\pm x+1=(x\pm\tfrac12)^2+\tfrac34$. Consequently the original polynomial has no real zero, even though it factors over the integers.

A substitution can expose a quadratic pattern: $x^6-7x^3+6=(x^3-1)(x^3-6)$. The substitution is organizational; it does not create a new variable free to ignore $x$.

## Symmetry and sums of squares

Article 2.1's cubic identity also has the form

$$
a^3+b^3+c^3-3abc
=\tfrac12(a+b+c)((a-b)^2+(b-c)^2+(c-a)^2).
$$

Combining the two established identities proves this factorization. Over the reals the expression is zero exactly when $a+b+c=0$ or $a=b=c$. This conclusion uses both the zero-product property and the fact that a sum of nonnegative squares is zero only when each square is zero.

[Previous: Structural identities](../01-algebraic-operations-and-structural-identities/) · [Unit overview](../) · [Next: Rational expressions](../03-rational-expressions-and-domain-restrictions/)

## Practice problems

Unless specified, variables are real. Verify factorizations by multiplication and justify complete solution sets.

### Easy

1. Factor $10x^3-15x^2$ over the integers.
2. Factor $9u^2-16v^2$.
3. Factor $x^2+x-12$ over the integers.
4. Factor $8t^3-27$.
5. Solve $x^2-7x+12=0$.
6. Explain why $(x-2)^2=x^2-4$ is not an identity, using the missing term and a counterexample.

### Medium

7. Factor $x^3-4x^2-4x+16$ completely over the integers.
8. Solve $x^4-10x^2+9=0$ over $\mathbb R$.
9. Factor $a^6-b^6$ into integer-coefficient factors of degree at most two.
10. Prove that $7\mid(8^n-1)$ for every integer $n\ge1$ by a factorization.
11. Factor $x^4+2x^2+9$ as a product of two monic quadratics with integer coefficients.
12. Find all real $x$ such that $x^3+8=(x+2)^2$.

### Hard

13. Factor $a^4+b^4+4a^2b^2$ into two real-coefficient quadratic factors by completing a square. State why the same construction does not give rational coefficients.
14. Determine all real pairs $(r,s)$ for which $(x^2+rx+s)(x^2-rx+s)=x^4+x^2+1$ is an identity.
15. For distinct real $a,b$, simplify $(a^5-b^5)/(a-b)$. Prove its value is strictly positive, without calculus.
16. Determine all real triples with $a+b+c=3$ and $a^3+b^3+c^3=3abc$.
17. Factor $x^8+x^4+1$ into integer-coefficient polynomials of degree at most four, then prove it has no real roots.
18. Prove that $n^5-n$ is divisible by $30$ for every integer $n$, including negative integers, using factorization and remainders.

### Olympiad

19. Prove $n^4+4n^2+16$ is composite for every positive integer $n$. For the factors $n^2-2n+4$ and $n^2+2n+4$, determine their greatest common divisor for every positive integer $n$ and prove your classification.
20. Classify all real pairs $(u,v)$ satisfying $u^3+v^3+1=3uv$. Then determine exactly which of those pairs have $u,v$ both positive. A complete argument must exclude any additional real branch.

## Answers

1. $5x^2(2x-3)$.
2. $(3u-4v)(3u+4v)$.
3. $(x+4)(x-3)$.
4. $(2t-3)(4t^2+6t+9)$.
5. $x=3,4$.
6. The correct expansion is $x^2-4x+4$; for example $x=0$ gives $4\ne-4$.
7. $(x-4)(x-2)(x+2)$.
8. $x=\pm1,\pm3$.
9. $(a-b)(a+b)(a^2+ab+b^2)(a^2-ab+b^2)$.
10. $8^n-1=(8-1)(8^{n-1}+\cdots+1)$.
11. $(x^2-2x+3)(x^2+2x+3)$.
12. $x=-2,1,2$.
13. $(a^2+(2-\sqrt3)b^2)(a^2+(2+\sqrt3)b^2)$; complete $(a^2+2b^2)^2-3b^4$, whose square-root coefficient is irrational.
14. $(r,s)=(1,1),(-1,1)$; compare $s^2$ and $2s-r^2$.
15. $a^4+a^3b+a^2b^2+ab^3+b^4>0$; it equals $(a^2+ab/2)^2+\tfrac34b^2(a+2b/3)^2+\tfrac23b^4$.
16. Only $(1,1,1)$; the cubic factorization forces equality of all entries.
17. $(x^4+x^2+1)(x^2-x+1)(x^2+x+1)$; all factors are positive on $\mathbb R$.
18. Use $n(n-1)(n+1)(n^2+1)$, the consecutive factors for $2,3$, and the five remainder cases modulo $5$.
19. Both displayed factors exceed $1$ and multiply to the polynomial. Their gcd is $1$ for odd $n$, $4$ for even $n$; compare a common divisor with the difference and with the constant $4$, and for $n=2m$ divide both factors by $4$.
20. The line $u+v=-1$ together with the single point $(1,1)$; only $(1,1)$ is positive in both entries. Use the cubic factorization and its sum of squares.

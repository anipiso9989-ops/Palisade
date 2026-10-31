---
title: "2.6 — Linear, Polynomial, and Rational Inequalities"
course: "1.1"
kind: "article"
progressId: precalculus-unit-02-article-06
unit: "02"
topic: "2.6"
---

## Order is part of the algebra

An equation asks where two quantities coincide. An inequality asks where one is larger. The sign of a multiplier therefore matters: if $u<v$, then $cu<cv$ for $c>0$ and $cu>cv$ for $c<0$. Multiplication by zero erases the comparison.

These rules follow from positivity of products: $v-u>0$ implies $c(v-u)>0$ for $c>0$. For negative $c$, apply the positive rule to $-c$ and negate. Adding a defined expression to both sides preserves order.

**Example.** $5-3x\le11$ gives $-3x\le6$, so $x\ge-2$. A chain such as $2<x+1\le5$ represents two simultaneous conditions, giving $1<x\le4$.

## Products: use signs, not blind multiplication

Move all terms to one side and factor when possible. The **critical points** are numerator zeros and denominator zeros. Sort them, then determine the sign of each factor on each intervening interval. A product is negative exactly when it has an odd number of negative factors; a quotient has the same sign as the product of its numerator and denominator signs.

For the factored expressions used here, signs are determined algebraically. A linear factor $x-r$ is negative before $r$ and positive after it. Its even powers are positive except at $r$; odd powers retain its sign. Factors expressed as a positive constant plus a square are always positive. No general continuity theorem is needed.

**Example.** Solve $(x+2)(x-1)^2(x-4)<0$. Away from $1$, the square is positive, so the sign is that of $(x+2)(x-4)$: negative exactly between $-2$ and $4$. Strict inequality excludes all zeros, giving $(-2,1)\cup(1,4)$. An even-power factor does not change sign at its zero, but its zero still affects inclusion.

## Rational inequalities retain poles

**Example.** Solve $(x-2)/(x+1)\ge0$. Its domain excludes $-1$.

| Interval or point | $x<-1$ | $-1<x<2$ | $x=2$ | $x>2$ |
| ----------------- | ------ | -------- | ----- | ----- |
| Numerator sign    | $-$    | $-$      | $0$   | $+$   |
| Denominator sign  | $-$    | $+$      | $+$   | $+$   |
| Quotient sign     | $+$    | $-$      | $0$   | $+$   |

Thus the solution is $(-\infty,-1)\cup[2,\infty)$. A denominator zero is excluded even for a non-strict inequality. If factors cancel, retain their original exclusions.

Multiplying by an expression of unknown sign is unsafe. Two sound alternatives are a sign partition, or multiplication by a **known positive** expression. On $x\ne-1$, multiplying by $(x+1)^2>0$ gives the equivalent polynomial inequality $(x-2)(x+1)\ge0$ with the exclusion $x\ne-1$ still recorded.

## Compare by subtraction

**Example.** Solve $1/(x-1)>2/(x+2)$. For $x\ne1,-2$, subtracting gives

$$
\frac{4-x}{(x-1)(x+2)}>0.
$$

The critical points are $-2,1,4$. Its signs in increasing interval order are $+,-,+,-$. The answer is $(-\infty,-2)\cup(1,4)$.

For a quadratic $ax^2+bx+c$ with $a\ne0$, Article 2.4 supplies the discriminant and real roots. Two distinct roots $r<s$ give $a(x-r)(x-s)$; a repeated root gives $a(x-r)^2$. With no real root, completing the square shows the sign is always the sign of $a$. These cases explain quadratic inequality rules rather than requiring a memorized picture.

## Absolute values and intersections

An inequality $|F|\le G$ is equivalent to the simultaneous conditions $-G\le F\le G$. They force $G\ge0$ automatically. In contrast, $|F|\ge G$ is automatic when $G\le0$; only after checking $G>0$ may it be split as $F\le-G$ or $F\ge G$.

When squaring a comparison, ensure both sides are nonnegative: for $u,v\ge0$, $u\le v$ if and only if $u^2\le v^2$. This follows from $(v-u)(v+u)$ and its sign. Squaring arbitrary signed sides has no such equivalence.

[Previous: Absolute value](../05-absolute-value-and-distance/) · [Unit overview](../) · [Next: Classical inequalities](../07-classical-inequalities-amgm-and-cauchyschwarz/)

## Practice problems

Solve over $\mathbb R$, giving exact sets and a sign argument. Retain all original exclusions.

### Easy

1. Solve $7-2x>3$.
2. Solve $-3\le2x+1<7$.
3. Solve $(x-2)(x+5)\le0$.
4. Solve $(x-3)^2<0$ and $(x-3)^2\le0$.
5. Solve $1/(x-4)>0$.
6. Explain why $1/x<1$ cannot be replaced by $1<x$ on the whole domain.

### Medium

7. Solve $(x+3)(x-1)^2(x-5)\ge0$.
8. Solve $(2x-1)/(x+2)\le0$.
9. Solve $(x^2-9)/(x-3)>0$.
10. Solve $1/(x+1)\ge2/(x+3)$.
11. Solve $2x^2-3x-2<0$.
12. Solve $|x-2|\le x+4$.

### Hard

13. Solve $\dfrac{(x-2)^2(x+1)}{(x-4)(x+3)^2}\le0$.
14. Solve $\dfrac1{x-1}+\dfrac1{x+1}\ge1$.
15. Solve $\sqrt{x+2}\ge x$.
16. Solve $\dfrac{x^2-4}{x^2-2x-3}\ge1$.
17. Solve $|x^2-5x+4|\le x^2-x-2$.
18. Prove that if $0<a<b$, then $1/b<1/a$; then determine all nonzero real pairs $(a,b)$ with $a<b$ for which this conclusion remains true.

### Olympiad

19. Solve $\left(\dfrac{x-1}{x+1}\right)^2+\left(\dfrac{x+1}{x-1}\right)^2\le17/4$. Look for structure before expanding, and justify all endpoint decisions.
20. Fix arbitrary reals $a<b<c$. Solve $\dfrac1{x-a}+\dfrac1{x-b}+\dfrac1{x-c}\ge0$. Give explicit formulas for the two numerator zeros, prove that one lies in $(a,b)$ and the other in $(b,c)$, and express the full solution using those zeros. No continuity theorem may be assumed.

## Answers

1. $(-\infty,2)$.
2. $[-2,3)$.
3. $[-5,2]$.
4. $\varnothing$ and $\{3\}$.
5. $(4,\infty)$.
6. Multiplication reverses the sign when $x<0$; the actual set is $(-\infty,0)\cup(1,\infty)$.
7. $(-\infty,-3]\cup\{1\}\cup[5,\infty)$.
8. $(-2,1/2]$.
9. $(-3,3)\cup(3,\infty)$.
10. $(-\infty,-3)\cup(-1,1]$.
11. $(-1/2,2)$.
12. $[-1,\infty)$.
13. $[-1,4)$; the excluded point $-3$ is outside this interval.
14. $(-1,1-\sqrt2]\cup(1,1+\sqrt2]$.
15. $[-2,2]$.
16. $(-1,1/2]\cup(3,\infty)$.
17. $[(3+\sqrt5)/2,\infty)$.
18. Exactly the pairs with $ab>0$; use $1/a-1/b=(b-a)/(ab)$.
19. $(-\infty,-3]\cup[-1/3,1/3]\cup[3,\infty)$; subtract $2$ first to reduce to $9(x^2-1)^2\ge64x^2$, keeping $x\ne\pm1$.
20. Put $s=a+b+c$, $q=ab+bc+ca$, $\alpha=(s-\sqrt{s^2-3q})/3$, $\beta=(s+\sqrt{s^2-3q})/3$. Then $a<\alpha<b<\beta<c$, and the set is $(a,\alpha]\cup(b,\beta]\cup(c,\infty)$. Essential idea: the quadratic numerator takes signs $+,-,+$ at $a,b,c$; use its factored sign rule, then the denominator signs.

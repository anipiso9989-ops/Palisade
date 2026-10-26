---
title: "1.4 — Number Systems and Their Properties"
course: "1.1"
unit: "01"
topic: "1.4"
kind: article
progressId: precalculus-unit-01-article-04
trackable: true
---

## What changes when the number system changes?

The equation $2x=1$ has no integer solution but has a rational solution. The equation $x^2=2$ requires a larger system. A valid calculation therefore needs both algebraic rules and a stated domain.

We use

$$
\mathbb N=\{1,2,3,\ldots\},\quad \mathbb N_0=\{0,1,2,\ldots\},\quad
\mathbb Z=\{\ldots,-2,-1,0,1,2,\ldots\},\quad
\mathbb Q=\{a/b:a,b\in\mathbb Z,\ b\ne0\}.
$$

The **real numbers** $\mathbb R$ form the usual ordered number line and contain $\mathbb Q$. A real number not in $\mathbb Q$ is **irrational**. We take the real-number arithmetic and order laws from Algebra I and II as prerequisites; their foundational construction is outside this unit. Complex numbers are developed in Unit 8, not used here.

## Integer structure

For integers $d,n$, **$d$ divides $n$**, written $d\mid n$, when $n=dk$ for some integer $k$. An integer is **even** if it is $2k$, **odd** if it is $2k+1$. The division algorithm says that for every positive integer $d$ and integer $n$ there are unique integers $q,r$ such that

$$
n=dq+r,\qquad 0\le r<d.
$$

We use this elementary arithmetic theorem to organize remainders, including for negative integers. For example, $-11=4(-3)+1$. For $d=2$, it shows every integer is exactly one of even or odd.

A **prime** is a positive integer greater than $1$ whose positive divisors are only $1$ and itself; a **composite** integer is a positive integer greater than $1$ that is not prime. We use the fundamental arithmetic fact that every integer greater than $1$ has a unique prime factorization up to order. The **greatest common divisor** $\gcd(a,b)$ of two positive integers is their largest common positive divisor; they are **coprime** if it is $1$.

Prime factorizations give a useful cancellation rule: if positive $a,b$ are coprime and $a\mid bc$, then $a\mid c$. Each prime power needed for $a$ must occur in $c$, since none of its prime factors occurs in $b$. This also proves that coprime $a,b$ have coprime squares.

## Rational numbers and roots

Every rational number has a **reduced** expression $a/b$ with $b>0$ and numerator and denominator having no common prime factor. Addition and multiplication stay rational:

$$
\frac ab+\frac cd=\frac{ad+bc}{bd},\qquad
\frac ab\frac cd=\frac{ac}{bd}.
$$

Division stays rational only when the divisor is nonzero. Irrationals are not closed under these operations: for example $\sqrt2\cdot\sqrt2=2$.

**Integer-root lemma.** If a rational number $r$ has integer square, then $r$ is an integer. Indeed, write $r=a/b$ reduced with $b>0$. If $r^2=m\in\mathbb Z$, then $a^2=mb^2$. A prime dividing $b$ would divide $a^2$, hence $a$, contradicting reduction. Thus $b=1$.

Consequently, the square root of a nonnegative integer is rational exactly when that integer is a perfect square. In particular, $\sqrt2$ is irrational: no integer square equals $2$, since an integer of absolute value at most $1$ has square at most $1$, and one of absolute value at least $2$ has square at least $4$.

**Example.** $3+2\sqrt2$ is irrational. If it equaled a rational $q$, then $\sqrt2=(q-3)/2$ would be rational. The assumption that the coefficient $2$ is nonzero matters.

## Field and order laws

Real addition and multiplication are associative and commutative; multiplication distributes over addition. Zero and one are their identities, and every real has an additive inverse. Only nonzero reals have multiplicative inverses. Thus cancellation in $ax=ay$ requires $a\ne0$.

Adding the same real preserves an inequality. Multiplying by a positive real preserves its direction; multiplying by a negative real reverses it. These order laws imply $x^2\ge0$, with equality exactly when $x=0$, and hence

$$
(a-b)^2\ge0\quad\Longrightarrow\quad a^2+b^2\ge2ab,
$$

with equality exactly when $a=b$. This simple square will justify several later arguments. Squaring is not reversible without sign information: $x^2=y^2$ means $x=y$ **or** $x=-y$.

[Previous: Sets](../03-sets-subsets-and-set-operations/) · [Unit overview](../) · [Next: Direct proof](../05-direct-proof-and-proof-by-contrapositive/)

## Practice problems

### Easy

1. Classify each number in every applicable system among $\mathbb N,\mathbb N_0,\mathbb Z,\mathbb Q,\mathbb R$: $0,-7,9/3,-5/2,\sqrt{11}$.
2. Write $-7/12+5/18$ as a reduced fraction.
3. Find the quotient and remainder when $-17$ is divided by $5$.
4. Determine all real $x$ satisfying $x^2=25$; then restrict to $\mathbb N$.
5. Explain the restriction needed to infer $x=y$ from $ax=ay$.
6. Solve $-3x<12$ over $\mathbb R$ and explain the inequality reversal.

### Medium

7. Prove the sum of two rational numbers is rational, stating the denominator restrictions.
8. If $r$ is rational and $\alpha$ irrational, prove $r+\alpha$ is irrational.
9. If $r$ is nonzero rational and $\alpha$ irrational, prove $r\alpha$ is irrational. Explain why $r=0$ must be excluded.
10. Find two irrational numbers whose sum is rational, and two whose product is rational.
11. Prove the square of an odd integer is odd by expanding its defining form.
12. Determine whether $\sqrt{72}$ is rational, justifying your conclusion with the integer-root lemma.

### Hard

13. Determine all real pairs $(a,b)$ for which $a^2+b^2=2ab$.
14. Let $r,s$ be rational. Prove that $r+s\sqrt2$ is rational if and only if $s=0$.
15. Find all integers $n$ satisfying $-2\le n/3<2$.
16. A positive rational $r$ satisfies $r^2=18$. Prove no such $r$ exists without appealing to a decimal approximation.
17. Prove that if $a,b$ are coprime positive integers, then $a^2,b^2$ are coprime. State where prime factorization is used.
18. Find all real $x$ for which $x^2<x$ and explain why dividing immediately by $x$ could lose a case or reverse the inequality.

### Olympiad

19. Fix a positive integer $d$ that is not a perfect square. Determine all rational $r$ for which $(r+\sqrt d)/(r-\sqrt d)$ is rational. Check that the expression is defined for the proposed values.
20. Determine every integer $n\ge3$ for which $\sqrt{n+6}+\sqrt{n-3}$ is rational. Prove your list is complete.

## Answers

1. $0$: $\mathbb N_0,\mathbb Z,\mathbb Q,\mathbb R$; $-7$: $\mathbb Z,\mathbb Q,\mathbb R$; $9/3$: all five; $-5/2$: $\mathbb Q,\mathbb R$; $\sqrt{11}$: $\mathbb R$ only.
2. $-11/36$.
3. $q=-4,r=3$.
4. $x=\pm5$ over $\mathbb R$; $x=5$ over $\mathbb N$.
5. $a\ne0$.
6. $x>-4$; multiplication or division by a negative reverses order.
7. $(a/b)+(c/d)=(ad+bc)/(bd)$ with integer numerator and nonzero integer denominator, provided $b,d\ne0$.
8. Otherwise $\alpha=(r+\alpha)-r$ would be rational.
9. Otherwise $\alpha=(r\alpha)/r$ would be rational; for $r=0$, the product is rational zero.
10. Examples: $\sqrt2,-\sqrt2$ for the sum; $\sqrt2,\sqrt2$ for the product.
11. $(2k+1)^2=2(2k^2+2k)+1$.
12. Irrational: $8^2<72<9^2$.
13. Exactly $a=b$.
14. The nonzero-$s$ case would express $\sqrt2$ as a rational number.
15. $-6,-5,\ldots,5$.
16. A rational square root of the integer $18$ would be an integer, but $4^2<18<5^2$.
17. Any common prime divisor of the squares would divide both original integers.
18. $0<x<1$; separate the signs before division, or use $x(x-1)<0$.
19. Only $r=0$, giving $-1$ with nonzero denominator. Essential idea: isolate $\sqrt d$ from an assumed rational value, treating the value $-1$ separately.
20. $n=3,19$. Essential idea: rationalize the difference, apply the integer-root lemma, and factor the difference of the resulting integer squares.

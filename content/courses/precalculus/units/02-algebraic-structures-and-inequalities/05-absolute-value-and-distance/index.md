---
title: "2.5 — Absolute Value and Distance"
course: "1.1"
kind: "article"
progressId: precalculus-unit-02-article-05
unit: "02"
topic: "2.5"
---

## Magnitude without direction

The numbers $-4$ and $4$ lie equally far from zero. **Absolute value** records that distance:

$$
|x|=\begin{cases}x,&x\ge0,\\-x,&x<0.\end{cases}
$$

Thus $|x|\ge0$, $|x|=0$ exactly when $x=0$, and $-|x|\le x\le|x|$. Article 2.4's principal-root convention gives $\sqrt{x^2}=|x|$. Also $|xy|=|x||y|$ and $|x/y|=|x|/|y|$ for $y\ne0$; both sides are nonnegative and have the same square.

The **distance** between reals $x,a$ is $|x-a|$. Subtracting $a$ changes the origin; taking absolute value removes direction. Distance is symmetric because $|x-a|=|a-x|$.

## Translate before calculating

For $r\ge0$,

$$
\begin{aligned}
|x-a|\le r&\Longleftrightarrow a-r\le x\le a+r,\\
|x-a|\ge r&\Longleftrightarrow x\le a-r\ \text{or}\ x\ge a+r.
\end{aligned}
$$

The strict versions use strict endpoint inequalities. These follow directly by splitting into $x\ge a$ and $x<a$. An inside condition uses **and**; an outside condition uses **or**. If the bound is negative, first use $|x-a|\ge0$ rather than applying a formula requiring $r\ge0$.

**Example.** $|2x-3|<5$ is equivalent to $-5<2x-3<5$, hence $-1<x<4$. Conversely each point of that interval satisfies both bounds. For $|x+2|=3$, the two points at distance $3$ from $-2$ are $-5,1$.

## Break at the places where signs change

In an equation with several absolute values, partition the line at every zero of an inner expression. On each interval the signs are fixed, so the equation becomes an ordinary algebraic equation. Intersect each candidate set with its interval and include breakpoints if they satisfy the original.

**Example.** Solve $|x-1|+|x-4|=5$.

- For $x\le1$, the left side is $5-2x$, giving $x=0$.
- For $1\le x\le4$, it is $3$, so there is no solution.
- For $x\ge4$, it is $2x-5$, giving $x=5$.

The solution set is $\{0,5\}$. The middle interval expresses a geometric fact: any point between $1$ and $4$ has total distance $3$ from those endpoints.

## Triangle and reverse triangle inequalities

For all real $u,v$,

$$
|u+v|\le|u|+|v|.
$$

Indeed $-(|u|+|v|)\le u+v\le|u|+|v|$. This proves the **triangle inequality** without assuming signs. Equality holds exactly when $uv\ge0$: squaring both nonnegative sides shows equality is equivalent to $uv=|uv|$. Zero is included.

Applying the triangle inequality to $u=(u-v)+v$ gives $|u|-|v|\le|u-v|$. Interchanging $u,v$ proves the **reverse triangle inequality**

$$
\big||u|-|v|\big|\le|u-v|.
$$

Its equality condition is again $uv\ge0$, as follows by comparing the squares of its nonnegative sides. Geometrically, changing a point by distance $h$ changes its distance from zero by at most $h$.

For $a\le b$,

$$
|x-a|+|x-b|\ge b-a,
$$

with equality exactly for $x\in[a,b]$. Apply the triangle inequality to $(x-a)+(b-x)=b-a$; its equality condition gives $(x-a)(b-x)\ge0$, precisely the interval stated.

## Bounds must be attainable

**Example.** To minimize $|x+2|+|x-1|+|x-5|$, pair the first and last terms. Their sum is at least $7$, and the middle term is at least zero. At $x=1$, both bounds are attained, so the least total is $7$, uniquely at $1$. A lower bound alone would not prove that it is the least possible value.

[Previous: Radicals](../04-radicals-rational-exponents-and-algebraic-equations/) · [Unit overview](../) · [Next: Inequalities](../06-linear-polynomial-and-rational-inequalities/)

## Practice problems

Variables are real. Include endpoints, complete solution sets, and equality cases as requested.

### Easy

1. Evaluate $|-7|-|3-8|$.
2. Solve $|x-6|=4$.
3. Solve $|2x+1|\le3$.
4. Solve $|x+3|>2$.
5. Simplify $|x-2|$ on each side of $2$.
6. Solve $|x-1|<-2$ and $|x-1|\ge-2$.

### Medium

7. Solve $|3x-2|=|x+4|$.
8. Solve $|x+1|+|x-3|=6$.
9. Solve $|x-2|\le|x+4|$ and interpret the answer as a distance comparison.
10. Determine all $x$ satisfying both $|x-1|<3$ and $|x+2|\ge2$.
11. Prove $|u+v+w|\le|u|+|v|+|w|$, and characterize equality.
12. Find the least value of $|x+3|+|x-2|$ and all minimizers.

### Hard

13. Solve $\big||2x-1|-3\big|=2$.
14. Solve $|x-1|+|x+2|=|2x-1|$.
15. Find all real $x$ for which $|x-4|+2|x-1|+|x+2|\le8$.
16. Determine the least value of $\max\{|x+1|,2|x-2|\}$ and its minimizer. Here $\max$ means the larger of its two entries.
17. Prove $|x|+|y|=\max\{|x+y|,|x-y|\}$ and explain which entry attains the maximum in each sign case.
18. Real $x,y$ satisfy $|x-y|=6$. Find all possible values of $|x|+|y|$ and characterize when its least value occurs.

### Olympiad

19. Real $a,b,c$ satisfy $a+b+c=0$ and $|a|+|b|+|c|=2$. Determine the complete set of possible values of $|a-b|+|b-c|+|c-a|$. Classify all triples attaining either endpoint, and show every intermediate value is attainable.
20. Let $a_1\le a_2\le\cdots\le a_n$ be any ordered list of reals, allowing repetitions. Determine all real $t$ minimizing $\sum_{i=1}^n|t-a_i|$, separately for odd and even $n$. Prove necessity as well as sufficiency using paired distances, including $n=1,2$.

## Answers

1. $2$.
2. $x=2,10$.
3. $[-2,1]$.
4. $(-\infty,-5)\cup(-1,\infty)$.
5. $2-x$ for $x<2$; $x-2$ for $x\ge2$.
6. $\varnothing$ and $\mathbb R$.
7. $x=-1/2,3$.
8. $x=-2,4$.
9. $[-1,\infty)$; points at least as close to $2$ as to $-4$.
10. $[0,4)$.
11. Apply the triangle inequality twice; equality exactly when all nonzero entries have the same sign.
12. $5$, attained for every $x\in[-3,2]$.
13. $x=-2,0,1,3$.
14. Only $x=-1$.
15. $[0,2]$.
16. $2$, uniquely at $x=1$; the bound follows by intersecting the distance intervals for a proposed upper bound.
17. If $xy\ge0$, $|x+y|=|x|+|y|$; if $xy\le0$, $|x-y|=|x|+|y|$; the other entry is no larger.
18. $[6,\infty)$; equality $6$ exactly when $xy\le0$.
19. $[3,4]$. The lower endpoint has permutations of $(1,-1/2,-1/2)$ and their negatives; the upper has permutations of $(1,0,-1)$. Essential idea: order the entries, so the total is twice their span; use permutations and negatives of $(1,-t,-(1-t))$, $0\le t\le1$.
20. For $n=2m+1$, only $t=a_{m+1}$; for $n=2m$, every $t\in[a_m,a_{m+1}]$. Pair $a_i$ with $a_{n+1-i}$ and intersect the intervals where each pair attains its distance bound.

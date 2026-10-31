---
title: "2.8 — Equations and Inequalities Involving Parameters"
course: "1.1"
kind: "article"
progressId: precalculus-unit-02-article-08
unit: "02"
topic: "2.8"
---

## A parameter labels a family

In $ax=2$, $x$ is the unknown and $a$ is a **parameter**: a fixed but unspecified real number. The task is to describe the solution set for every allowed $a$. Dividing immediately by $a$ would miss the case $a=0$.

A complete parameter analysis splits exactly where a step changes validity or behavior: a leading coefficient becomes zero, a discriminant becomes zero, a root meets an excluded point, or the order of critical points changes. State a conclusion in each case, including its boundary.

## Degeneration comes before the formula

The equation $A(t)x=B(t)$ has one solution $B(t)/A(t)$ if $A(t)\ne0$, all real solutions if both sides' coefficients are zero, and none if $A(t)=0$ but $B(t)\ne0$.

**Example.** $(t-2)x=t^2-4$ has $x=t+2$ for $t\ne2$, but every real $x$ for $t=2$. The expression $t+2$ remains defined at $2$; that does not justify extending the unique-solution conclusion there.

For $A(t)x^2+B(t)x+C(t)=0$, handle $A(t)=0$ first. Otherwise use the discriminant. Its sign counts **distinct real roots of the polynomial equation**, before any extra domain or sign restrictions.

**Example.** For $x^2-2tx+1=0$, the discriminant is $4(t^2-1)$. There are two distinct real roots if $|t|>1$, one if $|t|=1$, and none if $|t|<1$. When they exist they are $t\pm\sqrt{t^2-1}$. Both are positive for $t>1$, both negative for $t<-1$, since $\sqrt{t^2-1}<|t|$.

## Roots can collide with exclusions

**Example.** Solve $(x^2-t^2)/(x-t)=0$. For every fixed $t$, the original domain is $x\ne t$. Cancelling gives $x+t=0$ on that domain. Therefore the solution is $x=-t$ if $t\ne0$, and there is no solution if $t=0$. A denominator depending on the parameter creates an exceptional case even though the polynomial factorization works for all $t$.

In radical equations a discriminant alone is insufficient. For $\sqrt{x+t}=x$, candidates satisfy $x^2-x-t=0$, but must also satisfy $x\ge0$. This extra restriction can change the count at a value other than a discriminant zero.

## Inequalities need order cases

For $(t+1)x\le t+1$, dividing gives $x\le1$ if $t>-1$ and $x\ge1$ if $t<-1$. At $t=-1$ the inequality is $0\le0$, so every $x$ works.

**Example.** Solve $(x-t)/(x-1)<0$. The domain excludes $1$. The quotient is negative between its distinct critical points, hence the set is $(t,1)$ for $t<1$, empty for $t=1$, and $(1,t)$ for $t>1$. At coincidence the quotient is $1$ on its domain, not zero.

For a fixed real quadratic $Ax^2+Bx+C$ with $A>0$, completing the square shows

$$
Ax^2+Bx+C\ge0\text{ for every real }x
\quad\Longleftrightarrow\quad B^2-4AC\le0.
$$

If $A<0$, large magnitudes of $x$ make the quadratic negative; explicitly the negative leading square term eventually exceeds the linear and constant terms. If $A=0$, universal nonnegativity requires $B=0,C\ge0$. These cases are part of the criterion, not exceptions to ignore.

## Universal claims require both directions

To classify parameters in a statement “for every real $x$,” first obtain necessary conditions using well-chosen inputs. Then prove they are sufficient for every input, usually by a square or a sharp inequality. A few successful test values cannot prove sufficiency.

**Example.** Determine $k$ such that $x^2+y^2\ge kxy$ for all real $x,y$. Testing $x=y=1$ gives $k\le2$, and $x=1,y=-1$ gives $k\ge-2$. Conversely, for $|k|\le2$,

$$
kxy\le|k||xy|\le2|xy|\le x^2+y^2,
$$

the last inequality following from $(|x|-|y|)^2\ge0$. Thus precisely $-2\le k\le2$ works. Both positive and negative products matter.

[Previous: Classical inequalities](../07-classical-inequalities-amgm-and-cauchyschwarz/) · [Unit overview](../) · [Next: Unit examination](../examination/)

## Practice problems

All parameters and unknowns are real. Give exhaustive, disjoint cases, including exceptional values.

### Easy

1. Solve $(a-2)x=6$ for every $a$.
2. Solve $ax=0$ for every $a$.
3. Solve $x^2=t$ for every $t$.
4. Solve $|x+1|=t$ for every $t$.
5. Solve $(a+1)x<a+1$ for every $a$.
6. State the real domain of $1/(x-a)$ for each $a$.

### Medium

7. Solve $(a-1)x=a^2-1$ for every $a$.
8. Solve $(a-1)x^2+2x=0$ for every $a$.
9. Classify the number of distinct real roots of $x^2-4x+a=0$, giving them when they exist.
10. Solve $(x-a)/(x-1)=0$ for every $a$.
11. Determine all $a$ such that $x^2-2ax+a^2+1>0$ for every real $x$.
12. Solve $|x|=ax+1$ for every $a$.

### Hard

13. Classify the number of real solutions of $\sqrt{x+t}=x-1$ for every $t$, and give all solutions.
14. Solve $(x-a)/(x-2)\ge0$ for every $a$.
15. Determine all $t$ such that $x^2-2tx+t=0$ has two distinct positive real solutions.
16. Determine all $a$ such that $ax^2-2x+a\ge0$ for every real $x$.
17. Determine all $a$ such that $x^2+(a-3)x+a=0$ has exactly one solution in the restricted domain $\mathbb R\setminus\{1\}$.
18. Solve $|x-1|+|x+2|=t$ for every $t$.

### Olympiad

19. Determine all $t$ such that $x^2+y^2+z^2-2t(xy+yz+zx)\ge0$ for every real triple $(x,y,z)$. For each admissible $t$, classify all equality triples. Use algebra and classical inequalities, without linear algebra.
20. Determine all $t$ such that $x^4-2tx^2+4x+t^2\ge0$ for every real $x$. Identify all equality cases for every admissible $t$. A necessary-condition argument must cover positive as well as negative $t$.

## Answers

1. If $a=2$, none; otherwise $x=6/(a-2)$.
2. If $a=0$, all $x$; otherwise only $0$.
3. If $t<0$, none; if $t=0$, only $0$; if $t>0$, $x=\pm\sqrt t$.
4. If $t<0$, none; if $t=0$, only $-1$; if $t>0$, $x=-1\pm t$.
5. If $a>-1$, $x<1$; if $a=-1$, none; if $a<-1$, $x>1$.
6. $\mathbb R\setminus\{a\}$.
7. If $a=1$, all $x$; otherwise $x=a+1$.
8. If $a=1$, only $0$; otherwise $x=0,-2/(a-1)$.
9. Two roots $2\pm\sqrt{4-a}$ for $a<4$; one root $2$ for $a=4$; none for $a>4$.
10. If $a=1$, none; otherwise only $x=a$.
11. Every real $a$; complete $(x-a)^2+1$.
12. For $a\le-1$, only $1/(1-a)$; for $-1<a<1$, $1/(1-a)$ and $-1/(1+a)$; for $a\ge1$, only $-1/(1+a)$.
13. None if $t<-5/4$; only $3/2$ if $t=-5/4$; both $(3\pm\sqrt{5+4t})/2$ if $-5/4<t\le-1$; only the plus root if $t>-1$. Retain $x\ge1$.
14. If $a<2$, $(-\infty,a]\cup(2,\infty)$; if $a=2$, $\mathbb R\setminus\{2\}$; if $a>2$, $(-\infty,2)\cup[a,\infty)$.
15. Exactly $t>1$; roots $t\pm\sqrt{t(t-1)}$.
16. Exactly $a\ge1$; handle $a\le0$ before using the discriminant.
17. Only $a=9$ (allowed root $-3$); at $a=1$ the only polynomial root is the excluded $1$.
18. If $t<3$, none; if $t=3$, $[-2,1]$; if $t>3$, $x=-(t+1)/2,(t-1)/2$.
19. $-1\le t\le1/2$. Interior equality requires $x=y=z=0$; at $t=-1$, equality means $x+y+z=0$; at $t=1/2$, equality means $x=y=z$. Essential idea: decompose into $(1+t)((x-y)^2+(y-z)^2+(z-x)^2)/3+(1-2t)(x+y+z)^2/3$.
20. $t\le-3/\sqrt[3]{16}$. Put $r=\sqrt[3]{1/4}$. At $t=-3r^2$, factor as $(x+r)^2((x-r)^2+8r^2)$; equality only at $x=-r$. For smaller $t$ the expression is strictly positive. For necessity, use $x=-r$ when $-3r^2<t\le0$, and $x=-\sqrt t$ when $t>0$.

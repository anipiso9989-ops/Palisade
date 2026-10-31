---
title: "2.7 — Classical Inequalities: AM–GM and Cauchy–Schwarz"
course: "1.1"
kind: "article"
progressId: precalculus-unit-02-article-07
unit: "02"
topic: "2.7"
---

## Equalizing quantities controls products

Two nonnegative numbers with a fixed sum have their largest product when equal. The reason is the nonnegative square

$$
(\sqrt a-\sqrt b)^2\ge0
\quad\Longrightarrow\quad
\frac{a+b}{2}\ge\sqrt{ab}.
$$

This is the two-variable **arithmetic mean–geometric mean inequality (AM–GM)**. Equality holds exactly when $a=b$. The nonnegative hypothesis is essential for the real roots and for multiplication of bounds.

For nonnegative $a_1,\ldots,a_n$ and integer $n\ge1$,

$$
\frac{a_1+\cdots+a_n}{n}\ge\sqrt[n]{a_1\cdots a_n},
$$

with equality exactly when all entries are equal.

**Proof for every $n$.** First prove the result for powers of two. It is immediate for one entry. If true for $m$ entries, split $2m$ entries into two groups with means $A,B$ and products $P,Q$. Then $(A+B)/2\ge\sqrt{AB}\ge\sqrt[2m]{PQ}$ by the two-entry result and the inductive bounds. Equality requires equality within each group and $A=B$.

For arbitrary $n$, choose a power of two $N\ge n$ and let $M$ be the mean of the original entries. Append $N-n$ copies of $M$. Their new mean is still $M$, so $M^N\ge(a_1\cdots a_n)M^{N-n}$. If $M=0$, all entries are zero. Otherwise divide by the positive power to obtain $M^n\ge a_1\cdots a_n$. Equality in the $N$-entry inequality forces every original entry to equal $M$. This also proves necessity of the equality condition.

**Example.** For $x>0$, $x+9/x\ge2\sqrt9=6$, with equality exactly at $x=3$. The restriction $x>0$ makes both AM–GM entries positive. The conclusion fails for negative $x$.

## Cauchy–Schwarz compares two lists

For any real lists $a_1,\ldots,a_n$ and $b_1,\ldots,b_n$,

$$
\left(\sum_{i=1}^n a_ib_i\right)^2
\le\left(\sum_{i=1}^n a_i^2\right)\left(\sum_{i=1}^n b_i^2\right).
$$

Here $\sum$ means addition over the indicated indices. Unlike AM–GM, the entries may be negative. To prove **Cauchy–Schwarz**, expand the exact identity

$$
\left(\sum a_i^2\right)\left(\sum b_i^2\right)
-\left(\sum a_ib_i\right)^2
=\sum_{i<j}(a_ib_j-a_jb_i)^2.
$$

Diagonal terms cancel; each pair of distinct indices contributes the displayed square. The right side is nonnegative. Equality holds exactly when every $a_ib_j-a_jb_i=0$. Equivalently, either all $a_i=0$, or there is a real $\lambda$ with $b_i=\lambda a_i$ for every $i$: choose an index with $a_i\ne0$ and use its pairwise equations. This includes a zero second list.

**Example.** Taking the second list to be $1,1,1$ gives $(x+y+z)^2\le3(x^2+y^2+z^2)$, with equality exactly when $x=y=z$. This holds for all real $x,y,z$.

## Positive denominators: a useful consequence

For real $u_i$ and positive $v_i$, Cauchy–Schwarz applied to $u_i/\sqrt{v_i}$ and $\sqrt{v_i}$ gives

$$
\sum_{i=1}^n\frac{u_i^2}{v_i}
\ge\frac{(\sum_{i=1}^n u_i)^2}{\sum_{i=1}^n v_i}.
$$

Equality holds exactly when all ratios $u_i/v_i$ are equal. The denominator sum is positive. Negative or zero denominators cannot be admitted into this statement.

**Example.** If $a,b,c>0$ and $a+b+c=6$, then $1/a+1/b+1/c\ge9/6=3/2$, by taking all $u_i=1$. Equality requires $a=b=c=2$.

## Design the inequality around the constraint

To bound $xy^2$ when $x,y\ge0$ and $x+y=9$, split $y$ into two equal entries. AM–GM on $x,y/2,y/2$ gives $xy^2/4\le(9/3)^3=27$. Thus the greatest product is $108$, attained exactly at $x=3,y=6$.

A proof of an optimum needs a universal bound, a permitted equality configuration, and a check that every inequality in a chain has equality there. If the equality conditions conflict, the chain may provide a bound without the actual optimum.

[Previous: Sign analysis](../06-linear-polynomial-and-rational-inequalities/) · [Unit overview](../) · [Next: Parameters](../08-equations-and-inequalities-involving-parameters/)

## Practice problems

Prove every bound and give all equality cases. Do not use calculus.

### Easy

1. Prove $a+b\ge2\sqrt{ab}$ for $a,b\ge0$ by a square.
2. Find the least value of $t+16/t$ for $t>0$.
3. If $x,y\ge0$ and $x+y=14$, find the greatest value of $xy$.
4. Apply Cauchy–Schwarz to prove $(p+q)^2\le2(p^2+q^2)$ for real $p,q$.
5. For $a,b,c>0$ with $abc=8$, find the least value of $a+b+c$.
6. Explain why applying AM–GM to $-2,-8$ does not prove $-5\ge4$.

### Medium

7. Find the least value of $2x+9/x$ for $x>0$.
8. Prove $(x+2y)^2\le5(x^2+y^2)$ for real $x,y$, with equality conditions including zero.
9. Positive $a,b$ satisfy $a+b=5$. Find the least value of $1/a+1/b$.
10. For positive $a,b,c$, prove $(a+b+c)(1/a+1/b+1/c)\ge9$.
11. Find the greatest product $abc$ for nonnegative $a,b,c$ with $a+b+c=12$.
12. Prove $x^2/2+y^2/3\ge(x+y)^2/5$ for real $x,y$.

### Hard

13. Find the greatest value of $x^2y$ for nonnegative $x,y$ satisfying $x+y=6$.
14. Prove $\dfrac{a^2}{b+c}+\dfrac{b^2}{c+a}+\dfrac{c^2}{a+b}\ge(a+b+c)/2$ for positive $a,b,c$.
15. Determine the smallest constant $C$ for which $(a+b+c)^2\le C(a^2+2b^2+3c^2)$ for all real $a,b,c$.
16. For positive $a,b,c$, prove $a/b+b/c+c/a\ge3$.
17. Real $x,y,z$ satisfy $x+y+z=0$ and $x^2+y^2+z^2=6$. Determine all possible values of $x$ and the triples attaining each endpoint.
18. Positive $x,y$ satisfy $x+2y=6$. Find the least value of $1/x+1/y$ and the unique attaining pair.

### Olympiad

19. Positive $x,y,z$ have $x+y+z=1$. Find the least value of $(1/x-1)(1/y-1)(1/z-1)$ and all attaining triples. Justify the conversion of this product to an expression suited to a classical inequality.
20. Nonnegative $a,b,c$ have $a+b+c=1$. Find the greatest value of $ab+bc+ca-9abc$ and all attaining triples. A proof must handle zero entries and the interior; no calculus may be used.

## Answers

1. $(\sqrt a-\sqrt b)^2\ge0$; equality exactly when $a=b$.
2. $8$, only at $t=4$.
3. $49$, only at $x=y=7$.
4. Use lists $(p,q),(1,1)$; equality exactly when $p=q$.
5. $6$, only at $a=b=c=2$.
6. The entries violate the required nonnegativity hypothesis.
7. $6\sqrt2$, only at $x=3/\sqrt2$.
8. Use lists $(x,y),(1,2)$; equality exactly when $y=2x$.
9. $4/5$, only at $a=b=5/2$.
10. Use lists $(\sqrt a,\sqrt b,\sqrt c)$ and their reciprocals; equality exactly when $a=b=c$.
11. $64$, only at $a=b=c=4$.
12. Use positive denominators $2,3$; equality exactly when $x/2=y/3$.
13. $32$, only at $(x,y)=(4,2)$; use $x/2,x/2,y$.
14. Apply the positive-denominator consequence; equality exactly when $a=b=c$.
15. $C=11/6$; equality exactly at $(a,b,c)=t(1,1/2,1/3)$, $t\in\mathbb R$.
16. The three ratios have product $1$; equality exactly when $a=b=c$.
17. $[-2,2]$; endpoints $(2,-1,-1),(-2,1,1)$. For interior attainment take $y,z=(-x\pm\sqrt{12-3x^2})/2$.
18. $(3+2\sqrt2)/6$, at $x=6(\sqrt2-1)$, $y=3(2-\sqrt2)$; use Cauchy–Schwarz with the weighted constraint.
19. $8$, only at $x=y=z=1/3$; the product equals $1/x+1/y+1/z-1$.
20. $1/4$, only at permutations of $(1/2,1/2,0)$. Essential idea: let $c$ be smallest. Write the expression as $(1-9c)ab+c(1-c)$; split at $c=1/9$, using $ab\le(1-c)^2/4$ in the first case and $c(1-c)\le2/9$ in the second.

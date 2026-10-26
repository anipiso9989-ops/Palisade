---
title: "1.5 — Direct Proof and Proof by Contrapositive"
course: "1.1"
unit: "01"
topic: "1.5"
kind: article
progressId: precalculus-unit-01-article-05
trackable: true
---

## Let the conclusion guide the definitions

A proof explains why every allowed case works. Examples can suggest the route, but cannot replace an argument for an arbitrary object.

For a **direct proof** of $P\Rightarrow Q$, assume $P$ and derive $Q$ using definitions and established facts. To prove a universal statement, choose an arbitrary object in its domain; do not assume a special value or a property not supplied by the hypotheses.

**Example: divisibility.** If $d\mid a$ and $d\mid b$, write $a=du,b=dv$ with integers $u,v$. For any integers $s,t$,

$$
sa+tb=d(su+tv),
$$

so $d\mid sa+tb$. The proof works because the quantity in parentheses is an integer. Merely rewriting the expression as a product without checking that condition would not establish integer divisibility.

**Example: odd products.** If $a=2u+1,b=2v+1$ with integers $u,v$, then

$$
ab=2(2uv+u+v)+1,
$$

so $ab$ is odd. The defining form supplies exactly what the conclusion needs.

## Contrapositive

Article 1.2 established

$$
(P\Rightarrow Q)\equiv(\neg Q\Rightarrow\neg P).
$$

A **proof by contrapositive** assumes $\neg Q$ and proves $\neg P$. This is useful when failure of the conclusion has a simpler description than the original hypothesis. It does not mean assuming the converse.

**Example.** To prove “if $n^2$ is even, then the integer $n$ is even,” prove the contrapositive. If $n$ is not even, the division algorithm makes it odd: $n=2k+1$. Then $n^2=2(2k^2+2k)+1$ is odd, so not even. This proves the implication for every integer, including negative integers and zero.

The reverse implication follows directly: $n=2k$ gives $n^2=2(2k^2)$. Together these directions establish an **if and only if** statement. An “if and only if” proof needs both implications, unless every step has independently been justified as reversible.

## Cases, remainders, and legitimate cancellation

A **proof by cases** divides the domain into exhaustive possibilities. For integer parity these are even and odd. “Modulo $d$” refers to remainders on division by $d$. For division by $3$, they are $n=3k,3k+1,3k+2$. Squaring shows that an integer square has remainder $0$ or $1$ on division by $3$.

**Example.** If $n$ is not divisible by $3$, it has remainder $1$ or $2$. Then $n^2$ has remainder $1$, so cannot be divisible by $3$. This proves $3\mid n^2\Rightarrow3\mid n$ by contrapositive.

Always check a divisor before cancelling. In real arithmetic, cancellation requires a nonzero factor. In divisibility, cancellation has a different meaning: from $a\mid bc$ one may conclude $a\mid c$ only under suitable hypotheses, such as $\gcd(a,b)=1$ from Article 1.4.

A reliable proof has four visible parts: the domain and assumptions, the relevant definitions, a justified chain of reasoning, and the required conclusion. It must not quietly assume what it aims to prove.

[Previous: Number systems](../04-number-systems-and-their-properties/) · [Unit overview](../) · [Next: Contradiction](../06-proof-by-contradiction/)

## Practice problems

### Easy

1. Prove the sum of two even integers is even.
2. Prove $d\mid md$ for all integers $d,m$, including $d=0$.
3. Prove that for real $x$, $x>3$ implies $2x-1>5$.
4. Write the contrapositive of “if the integer $n^2$ is odd, then $n$ is odd.”
5. Prove the sum of an even integer and an odd integer is odd.
6. Prove that if real $x>0$, then $x+1>0$.

### Medium

7. If $d\mid a$ and $d\mid b$, prove $d\mid(7a-4b)$ directly.
8. Prove $n(n+1)$ is even for every integer $n$.
9. Prove the square of every odd integer has remainder $1$ when divided by $8$.
10. Prove by contrapositive that if $3$ does not divide $n^2$, then $3$ does not divide the integer $n$.
11. Prove the arithmetic mean of two rational numbers is rational.
12. If real $a<b$, prove $a<(a+b)/2<b$.

### Hard

13. Establish both directions of $n^2\text{ even}\Leftrightarrow n\text{ even}$, and explain why proving only one direction is insufficient.
14. Prove that if $3\mid(a^2+b^2)$ for integers $a,b$, then $3\mid a$ and $3\mid b$.
15. Prove $6\mid(n^3-n)$ for every integer $n$.
16. Characterize all integers $n$ such that $12\mid(n^2-1)$, using conditions on divisibility by $2$ and $3$. Prove necessity and sufficiency.
17. If coprime positive integers $a,b$ have a perfect-square product, prove each is a perfect square.
18. Prove $a^2+b^2\ge a+b-\tfrac12$ for all real $a,b$, and determine every equality case.

### Olympiad

19. Positive coprime integers $a,b$ satisfy $a+b\mid a^2+b^2$. Determine all such pairs, proving that your list is complete.
20. Rational numbers $x,y$ satisfy $x^2+y^2=1$ and $x+y\in\mathbb Z$. Determine all ordered pairs $(x,y)$. Use exact reasoning, including the cases where the sum is zero or negative.

## Answers

1. $2u+2v=2(u+v)$ with $u,v$ integers.
2. $md=d\cdot m$ is the required integer multiple; $0\mid0$ also follows from the definition.
3. Multiply by $2>0$ and subtract $1$.
4. If $n$ is even, then $n^2$ is even.
5. $2u+(2v+1)=2(u+v)+1$.
6. Adding $1$ gives $x+1>1>0$.
7. Write $a=du,b=dv$; the integer multiplier is $7u-4v$.
8. One of two consecutive integers is even.
9. $(2k+1)^2=4k(k+1)+1$ and $k(k+1)$ is even.
10. Its contrapositive is $3\mid n\Rightarrow3\mid n^2$, immediate from $n=3k$.
11. $(a/b+c/d)/2=(ad+bc)/(2bd)$, with $b,d\ne0$.
12. Both differences from the endpoints equal $(b-a)/2>0$.
13. Even $n$ has even square; odd $n$ has odd square, proving the other direction contrapositively.
14. The only possible square remainders modulo $3$ are $0,1$; a zero sum remainder forces both to be zero.
15. $n^3-n=(n-1)n(n+1)$ has a factor divisible by $2$ and a factor divisible by $3$; coprimality of $2,3$ gives divisibility by $6$.
16. Exactly the odd integers not divisible by $3$. Odd squares are $1$ modulo $4$; nonmultiples of $3$ have square $1$ modulo $3$; use coprimality of $4,3$.
17. Disjoint prime factors of $a,b$ must each have even exponents because their product is a square.
18. Equality holds exactly at $a=b=1/2$; subtracting the right side leaves $(a-1/2)^2+(b-1/2)^2$.
19. Only $(1,1)$. A common divisor of $a,a+b$ divides $b$, so they are coprime; $a+b$ divides $2a^2$, hence divides $2$.
20. $(1,0),(0,1),(-1,0),(0,-1)$. Essential idea: bound the integer sum using $(x-y)^2\ge0$, exclude sum zero by irrationality, and analyze the remaining sums.

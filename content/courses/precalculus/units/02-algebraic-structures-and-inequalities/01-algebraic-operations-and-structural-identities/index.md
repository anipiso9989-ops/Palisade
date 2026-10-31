---
title: "2.1 — Algebraic Operations and Structural Identities"
course: "1.1"
kind: "article"
progressId: precalculus-unit-02-article-01
unit: "02"
topic: "2.1"
---

## Algebra preserves structure

Expanding and regrouping do not change a quantity; they reveal different information about it. The expression $(x-4)^2+3$ displays a lower bound, while $x^2-8x+19$ displays coefficients. Algebraic fluency means choosing a form for a reason and knowing when the change is valid.

We use real arithmetic, integer powers, and the proof methods of Unit 1. The prerequisites are Algebra I, Algebra II, and Euclidean Geometry. In particular, a real square is nonnegative and is zero only when its base is zero.

The real numbers form a **field**: addition and multiplication are associative and commutative, have identities $0,1$, and have additive inverses and nonzero multiplicative inverses; multiplication distributes over addition. For example,

$$
a(b+c)=ab+ac,\qquad a-b=a+(-b),\qquad a/b=a\,b^{-1}\quad(b\ne0).
$$

These are arithmetic laws, not a construction of the real numbers. Reordering subtraction or division as though they were commutative is invalid: $5-2\ne2-5$. Parentheses matter: $8/(4/2)=4$ whereas $(8/4)/2=1$.

## Identities and equations

An **identity** holds for every assignment in its stated domain. An **equation** asks which assignments in a domain make two expressions equal. Thus $(x+1)^2=x^2+2x+1$ is an identity; $(x+1)^2=9$ is an equation with solutions $2,-4$.

Distribution gives

$$
\begin{aligned}
(a+b)^2&=a^2+2ab+b^2,\\
(a-b)^2&=a^2-2ab+b^2,\\
(a+b)(a-b)&=a^2-b^2,\\
(a+b+c)^2&=a^2+b^2+c^2+2(ab+bc+ca).
\end{aligned}
$$

For instance, $(a+b)(a+b)=a(a+b)+b(a+b)$ proves the first formula. Replacing letters by entire expressions preserves an identity wherever all the expressions are defined.

**Example.** With $a=2x,b=3y$, the difference of squares gives $(2x+3y)(2x-3y)=4x^2-9y^2$. Substitution is more reliable than memorizing a separate formula for every appearance.

Two useful consequences, obtained by expansion and collection, are

$$
a^3+b^3=(a+b)^3-3ab(a+b)
$$

and

$$
a^3+b^3+c^3-3abc
=(a+b+c)(a^2+b^2+c^2-ab-bc-ca).
$$

To verify the second, distribute the right side: the six mixed terms cancel in pairs, leaving the three cubes and $-3abc$. In particular, $a+b+c=0$ implies $a^3+b^3+c^3=3abc$.

## Reversible reasoning

Two equations are **equivalent on a domain** if they have the same solutions there. Adding the same defined expression to both sides is reversible. Multiplying by a known nonzero expression is reversible; multiplying by a possibly zero expression may introduce solutions. Dividing by it may discard solutions.

If $ab=0$, then $a=0$ or $b=0$: when $a\ne0$, multiplication by $a^{-1}$ gives $b=0$. This **zero-product property** is why factoring solves equations.

**Example.** From $x(x-3)=2(x-3)$, subtraction gives $(x-2)(x-3)=0$, so $x=2$ or $x=3$. Cancelling $x-3$ at the start would silently remove the second solution.

Squaring is different: $u=v$ implies $u^2=v^2$, but the reverse permits $u=-v$ too. For example, squaring $x=3$ introduces $x=-3$. Keep implication arrows when a step has not been proved reversible.

## Choose the form that reveals the question

Completing a square follows from $x^2+2hx=(x+h)^2-h^2$.

**Example.** $x^2+6x+13=(x+3)^2+4\ge4$, with equality exactly when $x=-3$. The square proves the bound and its attainability.

For expressions unchanged by interchanging $x,y$, set $s=x+y$ and $p=xy$. Then

$$
x^2+y^2=s^2-2p,\qquad x^3+y^3=s^3-3ps.
$$

**Example.** If $x+y=5$ and $xy=3$, then $x^3+y^3=125-45=80$. No individual root calculation is needed.

[Previous: Unit 1](../../01-mathematical-language-logic-and-proof/) · [Unit overview](../) · [Next: Factorization](../02-factorization-and-polynomial-identities/)

## Practice problems

All variables are real unless a different domain is stated. Justify every identity or solution set.

### Easy

1. Expand $(3x-2)^2$.
2. Rewrite $7a-3(a-2b)+b$ by collecting like terms.
3. Evaluate $(101)^2-(99)^2$ using structure rather than two square calculations.
4. State the necessary restriction in $a(b/a)=b$. Does the displayed equality make sense at $a=0$?
5. Determine whether $(u+v)^2=u^2+v^2$ is an identity. If not, characterize exactly when it holds.
6. Solve $z(z+5)=0$.

### Medium

7. Simplify $(2t+1)^2-(2t-1)^2$ without expanding both squares separately.
8. Solve $(x-1)(x+4)=3(x+4)$ without losing solutions.
9. Given $r+s=7$ and $rs=8$, determine $r^2+s^2$ and $r^3+s^3$.
10. Find the least value of $2x^2-12x+23$ and every $x$ attaining it.
11. Prove $(a+b)^2+(a-b)^2=2(a^2+b^2)$ and explain why $a,b$ need no sign restrictions.
12. Given $a+b+c=4$ and $a^2+b^2+c^2=10$, find $ab+bc+ca$.

### Hard

13. Prove $(a+b+c)^2-3(ab+bc+ca)=\tfrac12((a-b)^2+(b-c)^2+(c-a)^2)$. Characterize equality to zero.
14. Real $x,y$ satisfy $x+y=6$ and $x^2+y^2=20$. Determine $x^4+y^4$ without finding $x,y$ individually.
15. Classify all triples $(a,b,c)$ satisfying $a+b+c=0$ and $a^3+b^3+c^3=0$.
16. A student multiplies $x+2=5$ by $x-1$ and obtains two solutions to the resulting equation. Determine them and identify precisely which step fails to be reversible on $\mathbb R$.
17. Prove $a^4+b^4+c^4-a^2b^2-b^2c^2-c^2a^2\ge0$, including every equality case.
18. Without calculus, find the greatest value of $xy$ among real $x,y$ with $x+y=10$. Prove it is attained and determine the pair.

### Olympiad

19. Suppose $a+b+c=0$ and $a^2+b^2+c^2=2$. Determine $a^6+b^6+c^6-3a^2b^2c^2$, proving that it does not depend on the chosen triple.
20. Four real numbers satisfy $a+b+c+d=0$. Prove $a^3+b^3+c^3+d^3=3(a+b)(a+c)(a+d)$. Deduce exactly when their cubes sum to zero, expressed as a pairing property of the four numbers.

## Answers

1. $9x^2-12x+4$.
2. $4a+7b$.
3. $400$.
4. $a\ne0$; at $a=0$ the expression is undefined.
5. Not an identity; exactly when $uv=0$.
6. $z\in\{0,-5\}$.
7. $8t$.
8. $x\in\{-4,4\}$.
9. $33$ and $175$.
10. $5$, attained only at $x=3$.
11. Distribution cancels the mixed terms; the field laws hold for all real $a,b$.
12. $3$.
13. Expand the squared differences; zero occurs exactly when $a=b=c$.
14. $272$.
15. The permutations of $(t,-t,0)$ for $t\in\mathbb R$; use the cubic identity and the zero-product property.
16. $x=1,3$; only $3$ solves the original. Multiplication by $x-1$ is not reversible at $1$.
17. Half the sum of $(a^2-b^2)^2,(b^2-c^2)^2,(c^2-a^2)^2$; equality exactly when $a^2=b^2=c^2$.
18. $25$, attained only at $(5,5)$; use $(x-y)^2\ge0$.
19. $2$; first obtain $a^2b^2+b^2c^2+c^2a^2=1$, then apply the cubic identity to $a^2,b^2,c^2$.
20. Substitute $d=-a-b-c$ and collect products. The cubes sum to zero exactly when the four entries can be paired into two pairs each summing to zero.

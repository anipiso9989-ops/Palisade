---
title: "1.7 — Mathematical Induction"
course: "1.1"
unit: "01"
topic: "1.7"
kind: article
progressId: precalculus-unit-01-article-07
trackable: true
---

## A proof with no last case

Checking ten cases establishes ten cases. **Mathematical induction** establishes a starting case and a mechanism that reaches every later integer.

To prove $P(n)$ for every integer $n\ge n_0$:

1. **Base:** prove $P(n_0)$.
2. **Step:** for an arbitrary integer $k\ge n_0$, assume $P(k)$ and prove $P(k+1)$.

The assumption in the step is temporary. It is not permission to assume $P(k+1)$ or a stronger unproved statement.

**Why it works.** If there were counterexamples, apply well-ordering to their positive indices $n-n_0+1$ to obtain a least counterexample $m$. The base rules out $m=n_0$. Thus $m-1\ge n_0$, and minimality gives $P(m-1)$. The step then gives $P(m)$, a contradiction.

## Identities and divisibility

The notation $\sum_{j=1}^n a_j$ means $a_1+\cdots+a_n$. An empty sum is $0$. A **sequence** is an ordered list of values indexed by integers; a recurrence specifies a later value from earlier ones. We use only recurrences explicitly defined here or in a problem.

**Example.** For $n\ge1$,

$$
\sum_{j=1}^n j=\frac{n(n+1)}2.
$$

The base $n=1$ gives $1=1$. Assuming the identity at $k$, the sum at $k+1$ is

$$
\frac{k(k+1)}2+(k+1)=\frac{(k+1)(k+2)}2,
$$

exactly the desired next expression. A proof must use the next case's formula, not merely announce that the same pattern continues.

**Example.** $7\mid8^n-1$ for every $n\ge0$. The base is $8^0-1=0$, divisible by $7$. If $8^k-1=7t$, then

$$
8^{k+1}-1=8(8^k-1)+7=7(8t+1),
$$

an integer multiple of $7$.

## Inequalities need an extra comparison

For $n\ge0$, $2^n\ge n+1$. The base is equality. If $2^k\ge k+1$, then $2^{k+1}\ge2(k+1)\ge k+2$, where the last inequality uses $k\ge0$. Writing down the induction hypothesis alone would not establish the next bound. Multiplication must preserve the inequality's direction.

## Strong induction and multiple starting cases

In **strong induction**, assume all cases $P(n_0),\ldots,P(k)$ to prove $P(k+1)$. The same least-counterexample proof justifies it: all earlier cases precede a least counterexample. It is useful when a construction splits into smaller pieces rather than reducing by one.

If a step advances by $d>1$, supply enough base cases to cover every relevant remainder class. Proving $P(k)\Rightarrow P(k+2)$ from just $P(1)$ reaches the odd indices, not the even ones.

For products, $n!=1\cdot2\cdots n$ for $n\ge1$ and $0!=1$; $\prod_{j=1}^n a_j$ denotes $a_1\cdots a_n$. Product and recurrence arguments follow the same base-and-step discipline.

[Previous: Contradiction](../06-proof-by-contradiction/) · [Unit overview](../) · [Next: Counterexamples](../08-counterexamples-and-mathematical-conjectures/)

## Practice problems

Give an explicit base, hypothesis, and justified step for induction proofs. If a statement has an equality case or a starting threshold, check it separately.

### Easy

1. Prove $1+3+\cdots+(2n-1)=n^2$ for $n\ge1$.
2. Prove $3^n\ge2n+1$ for $n\ge0$.
3. Prove $3\mid4^n-1$ for $n\ge0$.
4. For the proposed assertion $n^2\ge2n+3$ for every $n\ge3$, check the base case only and state the required induction step.
5. A purported proof of $P(k+1)$ begins “assume $P(k+1)$” and ends by repeating it. Explain why this is not an induction step.
6. A claim is to hold for all integers $n\ge4$. Specify the base case and the permissible range of $k$ in a one-step induction.

### Medium

7. Prove $\sum_{j=1}^n j(j+1)=n(n+1)(n+2)/3$ for $n\ge1$.
8. Prove $\sum_{j=0}^n3^j=(3^{n+1}-1)/2$ for $n\ge0$.
9. A sequence has $a_1=3$ and $a_{n+1}=2a_n+1$. Prove $a_n=2^{n+1}-1$.
10. Prove $n!\ge2^{n-1}$ for $n\ge1$, and determine all equality cases.
11. Find the least positive integer $n_0$ for which $2^n>n^2$ holds for every $n\ge n_0$. Prove the assertion over that entire range.
12. Use strong induction to prove every integer $n\ge2$ is a product of primes. Only existence of a factorization is required; do not invoke the factorization theorem itself as your proof.

### Hard

13. Define $F_0=0,F_1=1,F_{n+2}=F_{n+1}+F_n$ for $n\ge0$. Prove $F_{n+1}F_{n-1}-F_n^2=(-1)^n$ for $n\ge1$.
14. Prove every integer $n\ge18$ has the form $4a+7b$ with $a,b\in\mathbb N_0$. Show that $18$ is the smallest possible starting threshold for all subsequent integers.
15. Prove $3^n\ge1+2n^2$ for $n\ge1$, and determine the equality cases.
16. In a plane, draw $n$ distinct straight lines with no two parallel and no three concurrent. Determine and prove the number of regions, including $n=0$. Explain precisely how many new regions the next line creates.
17. Prove $\sum_{j=1}^n j2^j=(n-1)2^{n+1}+2$ for $n\ge1$.
18. For the sequence in problem 13, prove $\sum_{j=0}^n F_j^2=F_nF_{n+1}$ for $n\ge0$.

### Olympiad

19. Select $n+1$ distinct integers from $\{1,2,\ldots,2n\}$, where $n\ge1$. Prove that two selected integers have one dividing the other. Justify first that every positive integer can be written uniquely as $2^k u$ with $k\in\mathbb N_0$ and $u$ odd.
20. Define $a_1=2$ and $a_{n+1}=a_n^2-a_n+1$ for $n\ge1$. Prove both that any two distinct terms are coprime and that
    $\sum_{j=1}^n1/a_j=1-1/(a_{n+1}-1)$.
    Your proof must justify positivity of every denominator and the strict bound that this finite sum is less than $1$.

## Answers

1. The next odd term is $2k+1$, taking $k^2$ to $(k+1)^2$.
2. The step uses $3(2k+1)\ge2(k+1)+1$ for $k\ge0$; base $n=0$.
3. $4^{k+1}-1=4(4^k-1)+3$; base $n=0$.
4. At $n=3$, $9=9$. Assume $k^2\ge2k+3$ for $k\ge3$, and prove $(k+1)^2\ge2(k+1)+3$.
5. It assumes the conclusion instead of deriving it from $P(k)$.
6. Prove $P(4)$; prove $P(k)\Rightarrow P(k+1)$ for every integer $k\ge4$.
7. Adding $(k+1)(k+2)$ factors the next sum as $(k+1)(k+2)(k+3)/3$.
8. Add $3^{k+1}$ to the hypothesis; base $n=0$.
9. Substitute the hypothesis into $2a_k+1$; base $a_1=3$.
10. Equality only at $n=1,2$; thereafter the new factorial factor exceeds $2$.
11. $n_0=5$. Use $2k^2\ge(k+1)^2$ for $k\ge3$ in the step; $n=4$ prevents an earlier threshold.
12. A composite $n$ is a product of two integers between $2$ and $n-1$, to which the strong hypothesis applies; primes supply the other case.
13. Base $n=1$ gives $-1$; the recurrence changes the sign of the expression at each step.
14. Bases $18=4+2\cdot7$, $19=3\cdot4+7$, $20=5\cdot4$, $21=3\cdot7$; then advance by $4$. The integer $17$ has no representation, as $b=0,1,2$ exhaust its possibilities.
15. Equality only at $n=1,2$; the step comparison reduces to $4k(k-1)\ge0$, becoming strict from $k=2$ onward.
16. $1+n(n+1)/2$ regions. The next line meets the $n$ existing lines in distinct points, making $n+1$ segments, each splitting one region. Existing regions are convex intersections of half-planes, so none is encountered twice.
17. Add $(k+1)2^{k+1}$ and factor $2^{k+1}$; base $n=1$.
18. Add $F_{k+1}^2$ and use $F_k+F_{k+1}=F_{k+2}$; base $n=0$.
19. Repeated division by $2$, or strong induction, gives the unique odd part $u$. There are only $n$ possible odd parts at most $2n$; equal odd parts give a power-of-two quotient.
20. The product invariant is $\prod_{j=1}^n a_j=a_{n+1}-1$; all terms are integers at least $2$. Later terms are $1$ modulo every earlier term. The reciprocal identity follows inductively using $a_{n+1}-1=\prod_{j=1}^n a_j$ and $a_{n+2}-1=a_{n+1}(a_{n+1}-1)$.

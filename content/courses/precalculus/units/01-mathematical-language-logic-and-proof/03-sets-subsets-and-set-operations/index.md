---
title: "1.3 — Sets, Subsets, and Set Operations"
course: "1.1"
unit: "01"
topic: "1.3"
kind: article
progressId: precalculus-unit-01-article-03
trackable: true
---

## A language for collections

A **set** is a collection determined by its members; order and repetitions in a list do not matter. Write $x\in A$ for membership and $x\notin A$ for its negation. Thus $\{2,5,2\}=\{5,2\}$. The **empty set** $\varnothing$ has no members; $\{\varnothing\}$ has one.

Fix a **universe** $U$ when taking complements. Set-builder notation specifies members by a predicate:

$$
\{x\in U:P(x)\}.
$$

An object is either a member or not, so the logic of Article 1.2 applies directly.

The statement $A\subseteq B$ means $\forall x,(x\in A\Rightarrow x\in B)$. It permits equality. Write $A\subsetneq B$ for a proper subset. Every set contains the empty set as a subset, because the membership implication has no true hypothesis to violate it. Equality means the same members: $A=B$ exactly when both inclusions hold.

## Operations are predicates

For subsets of $U$, define:

| Set                                   | Membership condition                |
| ------------------------------------- | ----------------------------------- |
| $A\cap B$ (intersection)              | $x\in A\land x\in B$                |
| $A\cup B$ (union)                     | $x\in A\lor x\in B$                 |
| $A\setminus B$ (difference)           | $x\in A\land x\notin B$             |
| $A^c=U\setminus A$ (complement)       | $x\in U\land x\notin A$             |
| $A\triangle B$ (symmetric difference) | $x$ belongs to exactly one of $A,B$ |

**Example.** In $U=\{1,2,3,4,5\}$, take $A=\{1,2,4\}$ and $B=\{2,3\}$. Then $A\cap B=\{2\}$, $A\cup B=\{1,2,3,4\}$, $A\setminus B=\{1,4\}$, and $A^c=\{3,5\}$.

**Proving identities.** Translate membership rather than relying on a picture. For any $x\in U$,

$$
x\in(A\cup B)^c\ \Leftrightarrow\ \neg(x\in A\lor x\in B)
\ \Leftrightarrow\ x\in A^c\cap B^c.
$$

Thus $(A\cup B)^c=A^c\cap B^c$. The analogous argument gives $(A\cap B)^c=A^c\cup B^c$. These are the set versions of De Morgan's laws. Likewise, distributing conjunction over disjunction proves $A\cap(B\cup C)=(A\cap B)\cup(A\cap C)$.

## Sets whose members are sets or pairs

The **power set** $\mathcal P(A)$ consists of all subsets of $A$. For $A=\{u,v\}$, it is $\{\varnothing,\{u\},\{v\},\{u,v\}\}$. Distinguish $x\in A$ from $\{x\}\subseteq A$, even though these two assertions agree. An element need not itself be a subset.

An **ordered pair** $(a,b)$ records first and second entries; $(a,b)=(c,d)$ means $a=c$ and $b=d$. The **Cartesian product** $A\times B$ is the set of pairs with $a\in A,b\in B$.

## Finite counting

The **cardinality** $|A|$ of a finite set is its number of members. If $|A|=m,|B|=n$, then $|A\times B|=mn$: each first entry has $n$ second-entry choices. A set with $n$ elements has $2^n$ subsets because each element is independently included or excluded.

For finite sets,

$$
|A\cup B|=|A|+|B|-|A\cap B|.
$$

The subtraction corrects counting shared members twice. Applying this identity twice yields

$$
|A\cup B\cup C|=|A|+|B|+|C|-|A\cap B|-|A\cap C|-|B\cap C|+|A\cap B\cap C|.
$$

A member in all three sets is initially counted three times, then subtracted three times, so must be restored once. Members in one or two sets are counted once as well.

We will also use the **pigeonhole principle**: distributing more than $k$ objects among $k$ classes puts at least two in one class. Otherwise each class contributes at most one object, giving at most $k$ objects in total.

[Previous: Quantifiers](../02-quantifiers-negation-and-logical-equivalence/) · [Unit overview](../) · [Next: Number systems](../04-number-systems-and-their-properties/)

## Practice problems

All complements use the stated universe. All counting questions concern finite sets.

### Easy

1. List the distinct elements of $A=\{1,1,\{1\},\varnothing\}$ and find $|A|$.
2. For distinct objects $a,b$, let $A=\{a,b\}$; list $\mathcal P(A)$ and distinguish $a\in A$ from $\{a\}\in A$; assume neither $a$ nor $b$ equals $\{a\}$.
3. In $U=\{0,1,2,3,4,5\}$, let $A=\{0,2,4\}$ and $B=\{1,2,3\}$. Find $A\cap B$, $A\cup B$, and $A^c$.
4. Find $A\setminus B$ and $B\setminus A$ for the sets in problem 3.
5. For distinct $a,b$, list $\{a,b\}\times\{0,1\}$.
6. Explain why $\varnothing\subseteq A$ for every set $A$, including $A=\varnothing$.

### Medium

7. Prove $A\subseteq B$ if and only if $A\cap B=A$.
8. Prove $A\setminus(B\cup C)=(A\setminus B)\cap(A\setminus C)$ by membership equivalences.
9. Sets $A,B$ have sizes $17,14$ and intersection size $6$. Find their union size and $|A\triangle B|$.
10. A six-element set contains two specified distinct elements $u,v$. How many subsets contain exactly one of $u,v$?
11. If $|A|=3$ and $|B|=4$, find $|\mathcal P(A\times B)|$. Give an exact integer power.
12. Give finite sets showing that $A\setminus B=B\setminus A$ need not hold. When can that equality hold?

### Hard

13. Prove $A\triangle B=(A\cup B)\setminus(A\cap B)$.
14. Determine whether $(A\setminus B)\cup B=A\cup B$ always holds. Justify your conclusion by membership.
15. Prove that $A\cap B=A\cap C$ and $A\cup B=A\cup C$ together force $B=C$.
16. In a universe of $40$ objects, $|A|=24,|B|=21,|C|=18$; the three pairwise intersections have sizes $12,10,9$, and the triple intersection has size $5$. Find how many objects lie in none of the sets and how many in exactly one.
17. Prove $A\times(B\cap C)=(A\times B)\cap(A\times C)$, even when one set is empty.
18. Prove $\mathcal P(A)\cap\mathcal P(B)=\mathcal P(A\cap B)$ and characterize when $\mathcal P(A)\cup\mathcal P(B)=\mathcal P(A\cup B)$.

### Olympiad

19. Three subsets of a twelve-element universe each have eight elements. Every pair has exactly five common elements. Determine all possible sizes of the triple intersection, and construct an arrangement for each size.
20. Seven distinct three-element subsets of a six-element universe are selected. Prove two selected subsets have at least two common elements. Determine the smallest number of distinct three-element subsets that guarantees such an overlap. Justify without enumerating all selections.

## Answers

1. $1,\{1\},\varnothing$; cardinality $3$.
2. $\varnothing,\{a\},\{b\},\{a,b\}$; $a\in A$ is true and $\{a\}\in A$ is false under the stated assumptions.
3. $\{2\}$; $\{0,1,2,3,4\}$; $\{1,3,5\}$.
4. $\{0,4\}$ and $\{1,3\}$.
5. $(a,0),(a,1),(b,0),(b,1)$.
6. The defining implication has a false hypothesis for every object.
7. Equivalent: membership in the intersection is exactly membership in $A$ when every member of $A$ belongs to $B$.
8. Membership on both sides means being in $A$ and in neither $B$ nor $C$.
9. $25$ and $19$.
10. $32$.
11. $2^{12}$.
12. For example $A=\{1\},B=\{2\}$. Equality holds exactly when $A=B$, since the two differences are disjoint.
13. Both sides contain exactly the objects belonging to one of the sets but not both.
14. Always: an object either belongs to $B$, or must belong to $A$ and not $B$.
15. For a member of $B$, split according to whether it lies in $A$; the two equalities place it in $C$. Reverse the roles for the other inclusion.
16. $3$ in none; $16$ in exactly one.
17. Both membership conditions are $a\in A,b\in B,b\in C$ for an ordered pair $(a,b)$.
18. The first identity always holds. The union identity holds exactly when $A\subseteq B$ or $B\subseteq A$; otherwise a subset containing one element from each difference refutes it.
19. $2$ or $3$. With triple size $t$, each single-only region has size $t-2$, each pair-only region $5-t$, and the outside region $3-t$; these specify realizable disjoint regions for both values.
20. Five is the minimum. Without a repeated pair, each of the six elements can occur in at most two triples, so at most four triples are possible. On $\{1,2,3,4,5,6\}$, the four triples $123,145,246,356$ (digits list members) have only one-element pairwise intersections.

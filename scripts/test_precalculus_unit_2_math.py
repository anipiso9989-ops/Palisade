"""Exact supplemental checks for the authored mathematics, not substitutes for proofs."""

from decimal import Decimal, localcontext
from fractions import Fraction as F
from itertools import product
from math import gcd
import unittest


class Poly:
    """Small rational polynomial ring for independently expanding printed identities."""

    def __init__(self, value=0):
        raw = value if isinstance(value, dict) else {(0, 0, 0, 0): F(value)}
        self.terms = {key: F(val) for key, val in raw.items() if val}

    @staticmethod
    def coerce(other):
        return other if isinstance(other, Poly) else Poly(other)

    def __add__(self, other):
        out = self.terms.copy()
        for key, value in self.coerce(other).terms.items():
            out[key] = out.get(key, 0) + value
        return Poly(out)

    __radd__ = __add__

    def __neg__(self):
        return Poly({key: -value for key, value in self.terms.items()})

    def __sub__(self, other):
        return self + -self.coerce(other)

    def __rsub__(self, other):
        return self.coerce(other) + -self

    def __mul__(self, other):
        out = {}
        for a, u in self.terms.items():
            for b, v in self.coerce(other).terms.items():
                key = tuple(x + y for x, y in zip(a, b))
                out[key] = out.get(key, 0) + u * v
        return Poly(out)

    __rmul__ = __mul__

    def __pow__(self, n):
        out = Poly(1)
        for _ in range(n):
            out = out * self
        return out

    def __truediv__(self, scalar):
        return self * (F(1) / scalar)


A, B, C, X = [Poly({tuple(int(i == j) for i in range(4)): 1}) for j in range(4)]


class UnitTwoMathematics(unittest.TestCase):
    def identity(self, left, right):
        self.assertEqual((left - right).terms, {})

    def test_structural_and_factorization_identities(self):
        a, b, c, x = A, B, C, X
        self.identity(a**3 + b**3 + c**3 - 3*a*b*c,
                      (a+b+c)*(a*a+b*b+c*c-a*b-b*c-c*a))
        d = -a-b-c
        self.identity(a**3+b**3+c**3+d**3, 3*(a+b)*(a+c)*(a+d))
        self.identity(a**4+a**3*b+a*a*b*b+a*b**3+b**4,
                      (a*a+a*b/2)**2 + 3*b*b*(a+2*b/3)**2/4 + 2*b**4/3)
        self.identity(x**4+4*x**2+16, (x*x-2*x+4)*(x*x+2*x+4))
        self.identity(x**4+x*x+1, (x*x+x+1)*(x*x-x+1))
        self.identity(x**4+4*x**3-x*x-10*x+4,
                      (x*x+2*x-1)*(x*x+2*x-4))
        self.identity(x**3+8-(x+2)**2, (x+2)*(x-1)*(x-2))
        self.identity(x**4+x**3-10*x*x+x+1, (x*x-3*x+1)*(x*x+4*x+1))
        self.identity((a*a+2*b*b)**2-3*b**4, a**4+4*a*a*b*b+b**4)

    def test_rational_identities_after_clearing_denominators(self):
        a, b, c = A, B, C
        vandermonde = (a-b)*(a-c)*(b-c)
        self.identity(a*a*(b-c)-b*b*(a-c)+c*c*(a-b), vandermonde)
        self.identity(b*c*(b-c)-a*c*(a-c)+a*b*(a-b), vandermonde)
        # On a+b+c=0, the denominators in Article 2.3 #20 are -2bc etc.
        c = -a-b
        self.identity(a**3+b**3+c**3, 3*a*b*c)

    def test_parameter_and_sharpness_decompositions(self):
        a, b, c, t = A, B, C, X
        self.identity(a*a+b*b+c*c-2*t*(a*b+b*c+c*a),
                      (1+t)*((a-b)**2+(b-c)**2+(c-a)**2)/3
                      +(1-2*t)*(a+b+c)**2/3)
        self.identity((a+b)**2*((a-b)**2+8*b*b),
                      a**4+6*b*b*a*a+16*b**3*a+9*b**4)
        self.identity(a*a+b*b+2*t*a*b-2*a-2*b+2,
                      (1-t)*((a-1)**2+(b-1)**2)+t*((a+b-1)**2+1))
        # Exam 26: exact difference from the proposed sharp lower bound.
        h = t
        self.identity((6-h)+9*(2+h)-2*(2+h)*(6-h), 2*h*h)
        # Article 2.7 #20: the expression after ab <= (1-c)^2/4.
        self.identity((1-9*c)*(1-c)**2/4+c*(1-c), (1-c)*(1-3*c)**2/4)

    def test_integer_coprimality_and_factor_checks(self):
        for n in range(1, 129):
            low, high = n*n-2*n+4, n*n+2*n+4
            self.assertEqual(low*high, n**4+4*n*n+16)
            self.assertGreater(min(low, high), 1)
            self.assertEqual(gcd(low, high), 1 if n % 2 else 4)
            if n >= 2:
                low, high = n*n-n+1, n*n+n+1
                self.assertEqual(low*high, n**4+n*n+1)
                self.assertEqual(gcd(low, high), 1)
                self.assertGreater(min(low, high), 1)
        for n in range(-128, 129):
            self.assertEqual((n**5-n) % 30, 0)

    def test_absolute_value_solution_sets_on_rational_grid(self):
        for x in [F(k, 12) for k in range(-144, 145)]:
            self.assertEqual(abs(x-1)+abs(x+2) == abs(2*x-1), x == -1)
            self.assertEqual(abs(x-4)+2*abs(x-1)+abs(x+2) <= 8, 0 <= x <= 2)
            self.assertEqual(abs(x+3)-abs(x-2) >= x, x <= -5 or -1 <= x <= 5)
            self.assertEqual(abs(2*x+1)+abs(x-4) == 10,
                             x in (F(-7, 3), F(13, 3)))

    def test_rational_inequality_solution_sets_on_rational_grid(self):
        for x in [F(k, 12) for k in range(-144, 145)]:
            if x not in (-1, 1):
                actual = 1/(x-1)+1/(x+1) >= 1
                # 1-sqrt(2) and 1+sqrt(2), tested by exact square comparisons.
                expected = (-1 < x < 1 and (1-x)**2 >= 2) or (x > 1 and (x-1)**2 <= 2)
                self.assertEqual(actual, expected)
                actual = ((x-1)/(x+1))**2+((x+1)/(x-1))**2 <= F(17, 4)
                self.assertEqual(actual, x <= -3 or F(-1, 3) <= x <= F(1, 3) or x >= 3)
            if x not in (-2, 2):
                self.assertEqual((x*x+x-6)/(x*x-4) <= 0, -3 <= x < -2)
            if x not in (2, F(-1, 2)):
                self.assertEqual(1/(x-2) >= 1/(2*x+1),
                                 -3 <= x < F(-1, 2) or x > 2)

    def test_parameter_absolute_value_classifications(self):
        for t, x in product([F(k, 2) for k in range(-12, 13)],
                            [F(k, 6) for k in range(-72, 73)]):
            expected = {F(2)}
            if t <= -4 or t > 4:
                expected.add(t-2)
            elif -4 < t < 0:
                expected.update((t-2, -t-2))
            elif t == 0:
                expected.add(F(-2))
            self.assertEqual(abs(x*x-4) == t*(x-2), x in expected)
            if t < 0:
                roots = set()
            elif t == 0:
                roots = {F(2)}
            elif t == 1:
                roots = {F(1, 2)}
            else:
                roots = {(2+t)/(1-t), (2-t)/(1+t)}
            self.assertEqual(abs(x-2) == t*abs(x+1), x in roots)

    def test_radical_answers_with_high_precision(self):
        # Independent numerical checks supplement the sign-aware exact derivations.
        with localcontext() as ctx:
            ctx.prec = 60
            D = Decimal
            close = lambda a, b: self.assertLess(abs(a-b), D("1e-50"))
            x = D(8)+2*D(11).sqrt()
            close((x+4).sqrt(), (2*x-1).sqrt()-1)
            close((D(2)+D(3).sqrt()).sqrt()+(D(2)-D(3).sqrt()).sqrt(), D(6).sqrt())
            close(D(12).sqrt()+D(3).sqrt(), D(27).sqrt())
            for sign in (-1, 1):
                x = (-5+sign*D(3).sqrt())/2
                close(1/(x+1)+1/(x+2), 1/(x+3)+1/(x+4))
            r = (D(1)/4) ** (D(1)/3)
            t, x = -3*r*r, -r
            close(x**4-2*t*x*x+4*x+t*t, D(0))

    def test_extremal_constructions_exactly(self):
        pairs = {(a, b) for a in range(49) for b in range(49)
                 if 48-a-b >= 0 and (48-a-b)**2 == 4*a*b}
        self.assertEqual(pairs, {(0, 48), (3, 27), (12, 12), (27, 3), (48, 0)})
        for q in [F(3, 2), F(2), F(5, 2), F(7, 3)]:
            r = q*q/4+1/(q*q)
            u, v = q/2+1/q, q/2-1/q
            self.assertGreater(v, 0)
            self.assertEqual(u*u, r+1)
            self.assertEqual(v*v, r-1)
            self.assertEqual(u+v, q)
        for h in [F(1, 2**k) for k in range(1, 20)]:
            x, y, z = F(2), h, 4-h
            total = 1/(x+y)+4/(y+z)+9/(z+x)
            self.assertGreater(total, 3)
            self.assertLess(total-3, h*h/5)
        a, b, c = F(1), F(-8), F(7)
        self.assertEqual((a-2*b+3*c)**2, F(38, 3)*(a*a+b*b+c*c))


if __name__ == "__main__":
    unittest.main()

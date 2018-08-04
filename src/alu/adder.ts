import { And, Or, Xor } from "../gates";
import { Bit, Bit8 } from "../hackjs";

export interface IAdderResult {
  sum: Bit;
  carry: Bit;
}

/**
 * Half Adder, takes 2 bits and returns a carry and a sum.
 */
export const HalfAdder = (a: Bit, b: Bit): IAdderResult => ({
  carry: And(a, b),
  sum: Xor(a, b),
});

/**
 * Full adder, takes 2 bits plus a carry bit, and adds them together.
 * Returning a carry and a bit.
 */
export const FullAdder = (a: Bit, b: Bit, c: Bit): IAdderResult => ({
  carry: Or(
    And(a, b),
    And(
      c,
      Xor(a, b),
    ),
  ),
  sum: Xor(
    c,
    Xor(a, b),
  ),
});

/**
 * An 8-bit adder, adds two bytes together and returns the sum.
 * Ignoring any overflows.
 */
export const Adder8 = (a: Bit8, b: Bit8): Bit8 => {
  const res0 = HalfAdder(a[0], b[0]);
  const res1 = FullAdder(a[1], b[1], res0.carry);
  const res2 = FullAdder(a[2], b[2], res1.carry);
  const res3 = FullAdder(a[3], b[3], res2.carry);
  const res4 = FullAdder(a[4], b[4], res3.carry);
  const res5 = FullAdder(a[5], b[5], res4.carry);
  const res6 = FullAdder(a[6], b[6], res5.carry);
  const res7 = FullAdder(a[7], b[7], res6.carry);
  return [
    res0.sum,
    res1.sum,
    res2.sum,
    res3.sum,
    res4.sum,
    res5.sum,
    res6.sum,
    res7.sum,
  ];
};

import { And, Xor, Or } from "../gates";
import { Bit } from "../hackjs";

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

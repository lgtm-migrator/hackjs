import { Bit, Bit16, Bit2, Bit8 } from "../hackjs";
import { Mux4, Or } from "./elementary";

/**
 * An 8 way or gate, outputs 1 of at least one of the bits are 1.
 */
export const Or8Way = (input: Bit8): Bit => Or(
  input[0], Or(
    input[1], Or(
      input[2], Or(
        input[3], Or(
          input[4], Or(
            input[5], Or(
              input[6],
              input[7],
            ),
          ),
        ),
      ),
    ),
  ),
);

/**
 * A 4-way, 16-bit multiplexor.
 */
export const Mux4Way16 = (a: Bit16, b: Bit16, c: Bit16, d: Bit16, sel: Bit2): Bit16 => ([
  Mux4(a[0], b[0], c[0], d[0], sel),
  Mux4(a[1], b[1], c[1], d[1], sel),
  Mux4(a[2], b[2], c[2], d[2], sel),
  Mux4(a[3], b[3], c[3], d[3], sel),
  Mux4(a[4], b[4], c[4], d[4], sel),
  Mux4(a[5], b[5], c[5], d[5], sel),
  Mux4(a[6], b[6], c[6], d[6], sel),
  Mux4(a[7], b[7], c[7], d[7], sel),
  Mux4(a[8], b[8], c[8], d[8], sel),
  Mux4(a[9], b[9], c[9], d[9], sel),
  Mux4(a[10], b[10], c[10], d[10], sel),
  Mux4(a[11], b[11], c[11], d[11], sel),
  Mux4(a[12], b[12], c[12], d[12], sel),
  Mux4(a[13], b[13], c[13], d[13], sel),
  Mux4(a[14], b[14], c[14], d[14], sel),
  Mux4(a[15], b[15], c[15], d[15], sel),
]);

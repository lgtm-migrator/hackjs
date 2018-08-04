export as namespace hackjs;

/**
 * The basic type below everything, a simple bit.
 */
export type Bit = 0 | 1;

/**
 * A 2 bit type, as a tuple.
 */
export type Bit2 = [Bit, Bit];

/**
 * A 16 bit type, as a tuple.
 */
export type Bit16 = [
  Bit, Bit, Bit, Bit, Bit, Bit, Bit, Bit,
  Bit, Bit, Bit, Bit, Bit, Bit, Bit, Bit];

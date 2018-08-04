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
 * A 3 bit type, as a tuple.
 */
export type Bit3 = [Bit, Bit, Bit];

/**
 * A 4 bit type, as a tuple.
 */
export type Bit4 = [Bit, Bit, Bit, Bit];

/**
 * A 8 bit type, as a tuple.
 */
export type Bit8 = [
  Bit, Bit, Bit, Bit, Bit, Bit, Bit, Bit];

/**
 * A 16 bit type, as a tuple.
 */
export type Bit16 = [
  Bit, Bit, Bit, Bit, Bit, Bit, Bit, Bit,
  Bit, Bit, Bit, Bit, Bit, Bit, Bit, Bit];

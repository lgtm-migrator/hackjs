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

/**
 * The composite output from the ALU.
 */
export interface IALUOutput {
  /**
   * The output of an ALU computation.
   */
  out: Bit16;
  /**
   * If the output is 0, then zr is 1.
   */
  zr: Bit;
  /**
   * If the output is negative (if the MSB is 1), then ng equals 1.
   */
  ng: Bit;
}


export interface SRLatchOutput {
  /**
   * Q: The output.
   */
  q: Bit;
  /**
   * Inverse Q, the inverse output.
   */
  nq: Bit;
}
import { Bit, Bit16, Bit8 } from "./hackjs";

/**
 * Converts a binary string to a bit array.
 * Keep in mind that the array ordering when printed is reversed compared to the orderuing the binary string.
 */
export const binaryToArray = (binary: string, length: number): Bit[] => {
  if (binary.length !== length) {
    throw new TypeError(`binary length (${binary.length}) is not equal to the expected bit length (${length})`);
  }
  return Array.from(binary)
    .map((e) => parseInt(e, 2) as Bit)
    .reverse();
};

export const binaryToBit8 = (binary: string): Bit8 =>  binaryToArray(binary, 8) as Bit8;

export const binaryToBit16 = (binary: string): Bit16 =>  binaryToArray(binary, 16) as Bit16;

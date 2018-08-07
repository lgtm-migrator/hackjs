import { Bit } from "./hackjs";

/**
 * Converts a binary string to a bit array.
 * Keep in mind that the array ordering when printed is reversed compared to the orderuing the binary string.
 */
export const binaryToArray = (binary: string): Bit[] => {
  if (!binary) {
    return [];
  }
  return Array.from(binary)
    .map((e) => parseInt(e, 2) as Bit)
    .reverse();
};

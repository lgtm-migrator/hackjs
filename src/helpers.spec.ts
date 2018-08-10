import { expect } from "chai";

import { binaryToArray, binaryToBit16, binaryToBit8, bitToBit16 } from "./helpers";

describe("Helper functions", () => {

  describe("binaryToArray", () => {
    it("fails with a TypeError", () => {
      expect(() => binaryToArray("", 10)).to.throw(TypeError);
    });
    it("validates some examples", () => {
      expect(binaryToArray("0011", 4)).to.be.eql([1, 1, 0, 0]);
    });
  });

  describe("binaryToBit8", () => {
    it("should convert a binary string to an Bit8 object", () => {
      expect(binaryToBit8("10101010")).to.be.eql([0, 1, 0, 1, 0, 1, 0, 1]);
    });
  });

  describe("binaryToBit16", () => {
    it("should convert a binary string to an Bit16 object", () => {
      expect(binaryToBit16("1010101010101010")).to.be.eql([0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1]);
    });
  });

  describe("bitToBit16", () => {
    const c = binaryToBit16;
    it("should convert 0 to all zeroes", () => {
      expect(bitToBit16(0)).to.be.eql(c("0000000000000000"));
    });
    it("should convert 1 to 16 bit 1", () => {
      expect(bitToBit16(1)).to.be.eql(c("1111111111111111"));
    });
  });

});

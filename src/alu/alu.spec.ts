import { expect } from "chai";
import { Not16, ONED_16BIT, ZEROED_16BIT } from "../gates";
import { binaryToBit16, BIT16_FALSE, BIT16_TRUE } from "../helpers";
import { ALU, Operator, Preset } from "./alu";

describe("Preset", () => {
  const c = binaryToBit16;

  it("outputs the input", () => {
    expect(Preset(BIT16_TRUE, 0, 0)).to.be.eql(BIT16_TRUE);
  });
  it("zeroes the input", () => {
    expect(Preset(BIT16_TRUE, 1, 0)).to.be.eql(c("0000000000000000"));
  });
  it("it negates the input", () => {
    expect(Preset(c("1010101010101010"), 0, 1)).to.be.eql(c("0101010101010101"));
  });
  it("zeroes and then negates the input", () => {
    expect(Preset(BIT16_TRUE, 1, 1)).to.be.eql(c("1111111111111111"));
  });
});

describe("Operator", () => {
  const c = binaryToBit16;

  it("adds the 16-bit inputs together", () => {
    expect(Operator(c("0000000000000001"), c("0000000000000001"), 1)).to.be.eql(c("0000000000000010"));
  });
  it("ands the 16-bit inputs together", () => {
    expect(Operator(c("1010111110100000"), c("0101111101011111"), 0)).to.be.eql(c("0000111100000000"));
  });
});

describe("ALU", () => {
  const c = binaryToBit16;

  it("zero output from flags", () => {
    expect(ALU(BIT16_TRUE, BIT16_TRUE, 1, 0, 1, 0, 1, 0).out).to.be.eql(BIT16_FALSE);
    expect(ALU(BIT16_FALSE, BIT16_FALSE, 1, 0, 1, 0, 1, 0).out).to.be.eql(BIT16_FALSE);
  });
  it("16-bit one output", () => {
    expect(ALU(BIT16_TRUE, BIT16_TRUE, 1, 1, 1, 1, 1, 1).out).to.be.eql(BIT16_TRUE);
    expect(ALU(BIT16_FALSE, BIT16_FALSE, 1, 1, 1, 1, 1, 1).out).to.be.eql(BIT16_TRUE);
  });
  it("16-bit negative one output", () => {
    expect(ALU(BIT16_TRUE, BIT16_TRUE, 1, 1, 1, 0, 1, 0).out).to.be.eql(c("1111111111111111"));
    expect(ALU(BIT16_FALSE, BIT16_FALSE, 1, 1, 1, 0, 1, 0).out).to.be.eql(c("1111111111111111"));
  });
  it("return x", () => {
    const x = c("1010101010101010");
    expect(ALU(x, BIT16_TRUE, 0, 0, 1, 1, 0, 0).out).to.be.eql(x);
    expect(ALU(x, BIT16_FALSE, 0, 0, 1, 1, 0, 0).out).to.be.eql(x);
  });
  it("return y", () => {
    const y = c("1010101010101010");
    expect(ALU(BIT16_TRUE, y, 1, 1, 0, 0, 0, 0).out).to.be.eql(y);
    expect(ALU(BIT16_FALSE, y, 1, 1, 0, 0, 0, 0).out).to.be.eql(y);
  });
  it("return negated x", () => {
    const x = c("1010101010101010");
    expect(ALU(x, BIT16_TRUE, 0, 0, 1, 1, 0, 1).out).to.be.eql(Not16(x));
    expect(ALU(x, BIT16_FALSE, 0, 0, 1, 1, 0, 1).out).to.be.eql(Not16(x));
  });
  it("return negated y", () => {
    const y = c("1010101010101010");
    expect(ALU(BIT16_TRUE, y, 1, 1, 0, 0, 0, 1).out).to.be.eql(Not16(y));
    expect(ALU(BIT16_FALSE, y, 1, 1, 0, 0, 0, 1).out).to.be.eql(Not16(y));
  });
  it("returns negative x (-x)", () => {
    const eight = c("0000000000001000");
    const negativeEight = c("1111111111111000");
    expect(ALU(eight, ZEROED_16BIT, 0, 0, 1, 1, 1, 1).out).to.be.eql(negativeEight);
    expect(ALU(eight, ONED_16BIT, 0, 0, 1, 1, 1, 1).out).to.be.eql(negativeEight);
  });
  it("returns negative y (-y)", () => {
    const eight = c("0000000000001000");
    const negativeEight = c("1111111111111000");
    expect(ALU(ZEROED_16BIT, eight, 1, 1, 0, 0, 1, 1).out).to.be.eql(negativeEight);
    expect(ALU(ONED_16BIT, eight, 1, 1, 0, 0, 1, 1).out).to.be.eql(negativeEight);
  });
});

import { expect } from "chai";

import { Bit8 } from "../hackjs";
import { ONED_16BIT, ZEROED_16BIT } from "./16bit";
import { Mux4Way16, Or8Way } from "./multiway";

const ZEROED_8BIT = [0, 0, 0, 0, 0, 0, 0, 0] as Bit8;
const ONED_8BIT = [1, 1, 1, 1, 1, 1, 1, 1] as Bit8;

describe("Or8Way gate", () => {
  it("should validate", () => {
    expect(Or8Way(ZEROED_8BIT)).to.be.eq(0);
    expect(Or8Way(ONED_8BIT)).to.be.eq(1);
    expect(Or8Way([0, 0, 0, 0, 0, 0, 0, 1])).to.be.eq(1);
  });
});

describe("Mux4Way16 gate", () => {
  it("should validate truth 16 bit based on selector", () => {
    expect(Mux4Way16(ONED_16BIT, ZEROED_16BIT, ZEROED_16BIT, ZEROED_16BIT, [0, 0])).to.eql(ONED_16BIT);
    expect(Mux4Way16(ZEROED_16BIT, ONED_16BIT, ZEROED_16BIT, ZEROED_16BIT, [1, 0])).to.eql(ONED_16BIT);
    expect(Mux4Way16(ZEROED_16BIT, ZEROED_16BIT, ONED_16BIT, ZEROED_16BIT, [0, 1])).to.eql(ONED_16BIT);
    expect(Mux4Way16(ZEROED_16BIT, ZEROED_16BIT, ZEROED_16BIT, ONED_16BIT, [1, 1])).to.eql(ONED_16BIT);
  });
  it("should validate false 16 bit based on selector", () => {
    expect(Mux4Way16(ZEROED_16BIT, ONED_16BIT, ONED_16BIT, ONED_16BIT, [0, 0])).to.eql(ZEROED_16BIT);
    expect(Mux4Way16(ONED_16BIT, ZEROED_16BIT, ONED_16BIT, ONED_16BIT, [1, 0])).to.eql(ZEROED_16BIT);
    expect(Mux4Way16(ONED_16BIT, ONED_16BIT, ZEROED_16BIT, ONED_16BIT, [0, 1])).to.eql(ZEROED_16BIT);
    expect(Mux4Way16(ONED_16BIT, ONED_16BIT, ONED_16BIT, ZEROED_16BIT, [1, 1])).to.eql(ZEROED_16BIT);
  });
});

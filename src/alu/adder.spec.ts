import { expect } from "chai";

import { binaryToBit8 } from "../helpers";
import { Adder8, FullAdder, HalfAdder, IAdderResult } from "./adder";

describe("HalfAdder", () => {
  it("validates the truth table", () => {
    expect(HalfAdder(0, 0)).to.be.eql({ carry: 0, sum: 0 } as IAdderResult);
    expect(HalfAdder(0, 1)).to.be.eql({ carry: 0, sum: 1 } as IAdderResult);
    expect(HalfAdder(1, 0)).to.be.eql({ carry: 0, sum: 1 } as IAdderResult);
    expect(HalfAdder(1, 1)).to.be.eql({ carry: 1, sum: 0 } as IAdderResult);
  });
});

describe("FullAdder", () => {
  it("validates the truth table", () => {
    expect(FullAdder(0, 0, 0)).to.be.eql({ carry: 0, sum: 0 } as IAdderResult);
    expect(FullAdder(0, 0, 1)).to.be.eql({ carry: 0, sum: 1 } as IAdderResult);
    expect(FullAdder(0, 1, 0)).to.be.eql({ carry: 0, sum: 1 } as IAdderResult);
    expect(FullAdder(0, 1, 1)).to.be.eql({ carry: 1, sum: 0 } as IAdderResult);
    expect(FullAdder(1, 0, 0)).to.be.eql({ carry: 0, sum: 1 } as IAdderResult);
    expect(FullAdder(1, 0, 1)).to.be.eql({ carry: 1, sum: 0 } as IAdderResult);
    expect(FullAdder(1, 1, 0)).to.be.eql({ carry: 1, sum: 0 } as IAdderResult);
    expect(FullAdder(1, 1, 1)).to.be.eql({ carry: 1, sum: 1 } as IAdderResult);
  });
});

describe("Adder8", () => {
  const cnv8 = binaryToBit8;
  it("calculates some examples", () => {
    // Add, no carry
    expect(Adder8([1, 0, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 0])).to.be.eql([1, 1, 0, 0, 0, 0, 0, 0]);
    expect(Adder8(cnv8("00000001"), cnv8("00000010"))).to.be.eql(cnv8("00000011"));
    // Add, with a carry
    expect(Adder8([0, 1, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 0])).to.be.eql([0, 0, 1, 0, 0, 0, 0, 0]);
    // Some examples
    expect(Adder8([1, 1, 0, 1, 0, 0, 0, 0], [0, 1, 0, 0, 1, 0, 0, 0])).to.be.eql([1, 0, 1, 1, 1, 0, 0, 0]);
    expect(Adder8([0, 1, 1, 0, 1, 0, 1, 0], [0, 0, 1, 0, 1, 1, 0, 0])).to.be.eql([0, 1, 0, 1, 0, 0, 0, 1]);
    // Ignored overflow below, 9'th bit is 1.
    expect(Adder8([1, 1, 0, 1, 0, 0, 1, 1], [0, 1, 0, 1, 1, 0, 1, 0])).to.be.eql([1, 0, 1, 0, 0, 1, 0, 0]);
  });
});

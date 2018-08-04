import { expect } from "chai";
import { FullAdder, HalfAdder, IAdderResult } from "./adder";

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
    expect(FullAdder(0, 0, 0)).to.be.eql({ carry: 0, sum: 0} as IAdderResult);
    expect(FullAdder(0, 0, 1)).to.be.eql({ carry: 0, sum: 1} as IAdderResult);
    expect(FullAdder(0, 1, 0)).to.be.eql({ carry: 0, sum: 1} as IAdderResult);
    expect(FullAdder(0, 1, 1)).to.be.eql({ carry: 1, sum: 0} as IAdderResult);
    expect(FullAdder(1, 0, 0)).to.be.eql({ carry: 0, sum: 1} as IAdderResult);
    expect(FullAdder(1, 0, 1)).to.be.eql({ carry: 1, sum: 0} as IAdderResult);
    expect(FullAdder(1, 1, 0)).to.be.eql({ carry: 1, sum: 0} as IAdderResult);
    expect(FullAdder(1, 1, 1)).to.be.eql({ carry: 1, sum: 1} as IAdderResult);
  });
});
import { expect } from "chai";

import { Bit8 } from "../hackjs";
import { Or8Way } from "./multiway";

const ZEROED_8BIT = [0, 0, 0, 0, 0, 0, 0, 0] as Bit8;
const ONED_8BIT = [1, 1, 1, 1, 1, 1, 1, 1] as Bit8;

describe("Or8Way gate", () => {
  it("should validate", () => {
    expect(Or8Way(ZEROED_8BIT)).to.be.eq(0);
    expect(Or8Way(ONED_8BIT)).to.be.eq(1);
    expect(Or8Way([0, 0, 0, 0, 0, 0, 0, 1])).to.be.eq(1);
  });
});

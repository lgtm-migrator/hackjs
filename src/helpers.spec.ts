import { expect } from "chai";

import { binaryToArray } from "./helpers";

describe("binaryToArray", () => {
  it("handles empty input", () => {
    expect(binaryToArray("")).to.be.eql([]);
  });
  it("validates some examples", () => {
    expect(binaryToArray("0011")).to.be.eql([1, 1, 0, 0]);
  });
});

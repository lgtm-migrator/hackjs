import { expect } from "chai";

import { SRFlipFlop } from "./flipflops";

describe("flipflops", () => {

  describe("SRFlipFlop", () => {
    it("can hold state (S: 0, R: 0)", () => {
      expect(SRFlipFlop(0, 0, { q: 0, nq: 1 })).to.be.eql({ q: 0, nq: 1 });
      expect(SRFlipFlop(0, 0, { q: 1, nq: 0 })).to.be.eql({ q: 1, nq: 0 });
    });
    it("can reset (ie set Q to 0)", () => {
      expect(SRFlipFlop(0, 1, { q: 0, nq: 1 })).to.be.eql({ q: 0, nq: 1 });
      expect(SRFlipFlop(0, 1, { q: 1, nq: 0 })).to.be.eql({ q: 0, nq: 1 });
    });
    it("can set (ie set Q to 1)", () => {
      expect(SRFlipFlop(1, 0, { q: 0, nq: 1 })).to.be.eql({ q: 1, nq: 0 });
      expect(SRFlipFlop(1, 0, { q: 1, nq: 0 })).to.be.eql({ q: 1, nq: 0 });
    });
    it("can set invalid state, when both set and reset is high", () => {
      /* We should fail just like a real cirtcuit would :) q and nq should never be 1, as this is unusable. */
      expect(SRFlipFlop(1, 1, { q: 1, nq: 0 })).to.be.eql({ q: 1, nq: 1 });
      expect(SRFlipFlop(1, 1, { q: 0, nq: 1 })).to.be.eql({ q: 1, nq: 1 });
    });
  });

});

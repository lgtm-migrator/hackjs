import { expect } from "chai";

import * as gates from "./gates";

describe("Nand gate", () => {
  it("should validate truth table", () => {
    expect(gates.Nand(0, 0)).to.eq(1);
    expect(gates.Nand(1, 0)).to.eq(1);
    expect(gates.Nand(0, 1)).to.eq(1);
    expect(gates.Nand(1, 1)).to.eq(0);
  });
});

describe("Not gate", () => {
  it("should validate truth table", () => {
    expect(gates.Not(0)).to.eq(1);
    expect(gates.Not(1)).to.eq(0);
  });
});

describe("And gate", () => {
  it("should validate truth table", () => {
    expect(gates.And(0, 0)).to.eq(0);
    expect(gates.And(1, 0)).to.eq(0);
    expect(gates.And(0, 1)).to.eq(0);
    expect(gates.And(1, 1)).to.eq(1);
  });
});

describe("Or gate", () => {
  it("should validate truth table", () => {
    expect(gates.Or(0, 0)).to.eq(0);
    expect(gates.Or(1, 0)).to.eq(1);
    expect(gates.Or(0, 1)).to.eq(1);
    expect(gates.Or(1, 1)).to.eq(1);
  });
});

describe("Nor gate", () => {
  it("should validate truth table", () => {
    expect(gates.Nor(0, 0)).to.eq(1);
    expect(gates.Nor(1, 0)).to.eq(0);
    expect(gates.Nor(0, 1)).to.eq(0);
    expect(gates.Nor(1, 1)).to.eq(0);
  });
});

describe("Xor gate", () => {
  it("should validate truth table", () => {
    expect(gates.Xor(0, 0)).to.eq(0);
    expect(gates.Xor(1, 0)).to.eq(1);
    expect(gates.Xor(0, 1)).to.eq(1);
    expect(gates.Xor(1, 1)).to.eq(0);
  });
});

describe("Xnor gate", () => {
  it("should validate truth table", () => {
    expect(gates.Xnor(0, 0)).to.eq(1);
    expect(gates.Xnor(1, 0)).to.eq(0);
    expect(gates.Xnor(0, 1)).to.eq(0);
    expect(gates.Xnor(1, 1)).to.eq(1);
  });
});

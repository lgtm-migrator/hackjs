import { BitRegister, Register } from "./ram";
import { BIT16_TRUE, BIT16_FALSE } from "../helpers";

describe("ram", () => {
  describe("BitRegister", () => {
    it("can load some data, keep it, and return it later", () => {
      const reg = BitRegister();

      // Store a bit, with a bit load bit..
      expect(reg(1, 1)).toEqual(1);

      // Fetch the stored bit, expect it to still be 1, while the load bit is low.
      expect(reg(0, 0)).toEqual(1);
      expect(reg(1, 0)).toEqual(1);

      // Load a new state, with a high load bit.
      expect(reg(0, 1)).toEqual(0);

      // Test that the new state is still kept, while the load bit is low.
      expect(reg(0, 0)).toEqual(0);
      expect(reg(1, 0)).toEqual(0);
    });
  });

  describe("Register", () => {
    it("can load some data, keep it, and return it later", () => {
      const reg = Register();

      // Store a bit, with a bit load bit..
      expect(reg(BIT16_TRUE, 1)).toEqual(BIT16_TRUE);

      // Fetch the stored bit, expect it to still be 1, while the load bit is low.
      expect(reg(BIT16_FALSE, 0)).toEqual(BIT16_TRUE);
      expect(reg(BIT16_TRUE, 0)).toEqual(BIT16_TRUE);

      // Load a new state, with a high load bit.
      expect(reg(BIT16_FALSE, 1)).toEqual(BIT16_FALSE);

      // Test that the new state is still kept, while the load bit is low.
      expect(reg(BIT16_TRUE, 0)).toEqual(BIT16_FALSE);
      expect(reg(BIT16_FALSE, 0)).toEqual(BIT16_FALSE);
    });
  })
});

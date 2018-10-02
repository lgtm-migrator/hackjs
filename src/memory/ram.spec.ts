import { Register } from "./ram";

describe("ram", () => {
  describe("Register", () => {
    it("can load some data, keep it, and return it later", () => {
      const reg = Register();

      // Load a bit.
      expect(reg(1, 1)).toEqual(1);

      // Fetch the stored bit, expect it to still be 1, while the load bit is low.
      expect(reg(0, 0)).toEqual(1);
      expect(reg(1, 0)).toEqual(1);

      // Load a new state.
      expect(reg(0, 1)).toEqual(0);

      // Test that the state is kept, as expected.
      expect(reg(0, 0)).toEqual(0);
      expect(reg(1, 0)).toEqual(0);
    });
  });
});

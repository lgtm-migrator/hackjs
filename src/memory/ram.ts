import { Mux } from "../gates";
import { Bit, Bit16 } from "../hackjs";
import { bitToSRFlipFlopOutput } from "../helpers";
import { GatedDFlipFlop } from "./flipflop";

/**
 * A single bit register.
 *
 * It simulates the concept of time by simply keeping each output in memory
 * after every invocation.
 *
 * Sort of like cheating, but the data has to live somewhere.
 *
 * Call the function to get a register, then call the register with an input
 * and a load bit to receive an output.
 */
export const BitRegister = () => {
  let output: Bit = 0;

  return (input: Bit, load: Bit): Bit => {
    output = GatedDFlipFlop(
      Mux(output, input, load),
      1,
      bitToSRFlipFlopOutput(output),
    ).q;
    return output;
  };
};

export const Register = () => {
  // Assemble 16 registers.
  const output = [...Array(16)].map(() => BitRegister());

  return (input: Bit16, load: Bit): Bit16 => {
    // Call all the registers with each input and the load bit.
    return (output.map((reg, idx) => reg(input[idx], load)) as Bit16);
  };
};

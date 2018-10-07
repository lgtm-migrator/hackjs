import { DMux8Way, Mux, Mux8Way16 } from "../gates";
import { Bit, Bit16, Bit3 } from "../hackjs";
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

/**
 * A 16-bit register.
 *
 * Call to build a register, then call the register with 16-bit input and a
 * load bit to utilize.
 */
export const Register = () => {
  // Assemble 16 registers.
  const output = [...Array(16)].map(() => BitRegister());

  return (input: Bit16, load: Bit): Bit16 => {
    // Call all the registers with each input and the load bit.
    return output.map((reg, idx) => reg(input[idx], load)) as Bit16;
  };
};

/**
 * A RAM unit with 8 registers, of 16 bits.
 *
 * Call this function to initialize a new RAM unit.
 */
export const Ram8 = () => {
  const memory = [...Array(8)].map(() => Register());

  return (input: Bit16, address: Bit3, load: Bit): Bit16 => {
    // Start by demuxifying the load bit for each register.
    const loads = DMux8Way(load, address);
    // Call all the registers with the demuxified load bit.
    const output = memory.map((register, idx) =>
      register(input, loads[idx]));
    // Multiplex the output to make sure the correct addres is returned.
    return Mux8Way16(
      output[0], output[1], output[2], output[3],
      output[4], output[5], output[6], output[7],
      address);
  }
};

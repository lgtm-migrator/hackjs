import { Mux } from "../gates";
import { Bit } from "../hackjs";
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
export const Register = () => {
  let output: Bit = 0;

  return (input: Bit, load: Bit): Bit => {
    output = GatedDFlipFlop(
      Mux(
        output,
        input,
        load,
      ),
      1,
      bitToSRFlipFlopOutput(output),
    ).q;
    return output;
  };
};

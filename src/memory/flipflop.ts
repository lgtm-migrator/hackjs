import { Nor } from "../gates";
import { Bit, SRFlipFlopOutput } from "../hackjs";

/**
 * An SR latch/flip-flop circuit.
 *
 * Takes a setter bit, a reset bit and the previous output.
 *
 * Runs the cycle twice to make sure the output is calculated upon a full clock cycle.
 *
 * @param s The set bit.
 * @param r The reset bit.
 * @param output The previous output.
 * @returns The next output in the cycle.
 */
export const SRFlipFlop = (s: Bit, r: Bit, output: SRFlipFlopOutput): SRFlipFlopOutput =>
  SRFlipFlopSingle(s, r, SRFlipFlopSingle(s, r, output));

const SRFlipFlopSingle = (s: Bit, r: Bit, output: SRFlipFlopOutput): SRFlipFlopOutput => ({
  nq: Nor(
    s,
    output.q,
  ),
  q: Nor(
    r,
    output.nq,
  ),
});

import { Nor } from "../gates";
import { Bit, SRLatchOutput } from "../hackjs";

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
export const SRLatch = (s: Bit, r: Bit, output: SRLatchOutput): SRLatchOutput =>
  SRLatchSingle(s, r, SRLatchSingle(s, r, output));

const SRLatchSingle = (s: Bit, r: Bit, output: SRLatchOutput): SRLatchOutput => ({
  nq: Nor(
    s,
    output.q,
  ),
  q: Nor(
    r,
    output.nq,
  ),
});

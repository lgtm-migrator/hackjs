import { Nor } from "../gates";
import { Bit, SRFFOutput } from "../hackjs";

/**
 * An SR flip-flop circuit.
 *
 * Takes a setter bit, a reset bit and the previous output.
 */
export const SRFlipFlop = (s: Bit, r: Bit, output: SRFFOutput): SRFFOutput => ({
  nq: Nor(
    s,
    output.q,
  ),
  q: Nor(
    r,
    output.nq,
  ),
});

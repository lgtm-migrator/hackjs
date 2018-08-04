import { Bit, Bit8 } from "../hackjs";
import { Or } from "./elementary";

export const Or8Way = (input: Bit8): Bit => Or(
  input[0], Or(
    input[1], Or(
      input[2], Or(
        input[3], Or(
          input[4], Or(
            input[5], Or(
              input[6],
              input[7],
            ),
          ),
        ),
      ),
    ),
  ),
);

import { GENERATE_NUMBER } from "./generateNumber.types";

export const updateNumber = (number) => ({
  type: GENERATE_NUMBER,
  payload: number,
});

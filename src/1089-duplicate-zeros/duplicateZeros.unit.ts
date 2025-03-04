import test from "ava";
import duplicateZeros from "./duplicateZeros";

test("duplicateZeros", (t) => {
  const arr = [1, 0, 2, 3, 0, 4, 5, 0];
  duplicateZeros(arr);
  t.deepEqual(arr, [1, 0, 0, 2, 3, 0, 0, 4]);
});

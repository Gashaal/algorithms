const test = require("ava");
const duplicateZeros = require("./duplicateZeros");

test("duplicateZeros", (t) => {
  let arr = [1, 0, 2, 3, 0, 4, 5, 0];
  duplicateZeros(arr);
  console.log(arr);
  t.deepEqual(arr, [1, 0, 0, 2, 3, 0, 0, 4]);
});

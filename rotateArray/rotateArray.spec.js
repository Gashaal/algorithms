const test = require("ava");
const rotateArray = require("./rotateArray");

test("rotateArray", (t) => {
  t.deepEqual(rotateArray([1, 2, 3, 4, 5, 6, 7], 3), [5, 6, 7, 1, 2, 3, 4]);
  t.deepEqual(rotateArray([-1, -100, 3, 99], 2), [3, 99, -1, -100]);
});

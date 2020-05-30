const test = require("ava");
const intersect = require("./intersect");

test("intersect", (t) => {
  t.deepEqual(intersect([1, 2, 2, 1], [2]), [2]);
  t.deepEqual(intersect([1, 2, 2, 1], [2, 2]), [2, 2]);
  t.deepEqual(intersect([4, 9, 5], [9, 4, 9, 8, 4]), [4, 9]);
});

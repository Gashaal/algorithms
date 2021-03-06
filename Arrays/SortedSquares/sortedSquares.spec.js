const test = require("ava");
const sortedSquares = require("./sortedSquares");

test("sortedSquares", (t) => {
  t.deepEqual(sortedSquares([-4, -1, 0, 3, 10]), [0, 1, 9, 16, 100]);
  t.deepEqual(sortedSquares([-7, -3, 2, 3, 11]), [4, 9, 9, 49, 121]);
});

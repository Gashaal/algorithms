const test = require("ava");
const findDiagonalOrder = require("./diagonalTraverse");

test("[]", t => {
  const result = [];
  t.deepEqual(findDiagonalOrder([]), result);
});

test("[[1, 2, 3], [4, 5, 6], [7, 8, 9]]", t => {
  const result = [1, 2, 4, 7, 5, 3, 6, 8, 9];
  t.deepEqual(findDiagonalOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]]), result);
});

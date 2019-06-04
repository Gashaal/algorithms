const test = require("ava");
const findDiagonalOrder = require("./diagonalTraverse");

var ttt = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

test("[[1, 2, 3], [4, 5, 6], [7, 8, 9]]", t => {
  t.is(findDiagonalOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]]), [
    1,
    2,
    4,
    7,
    5,
    3,
    6,
    8,
    9
  ]);
});

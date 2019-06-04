/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

//   [
//     [ 1, 2, 3 ],
//     [ 4, 5, 6 ],
//     [ 7, 8, 9 ]
//   ]

function findDiagonalOrder(matrix) {
  const order = [];

  let i = 0;
  let j = 0;
  let direction = -1;

  while (i === matrix.length && j === matrix[i].length) {
    console.log(matrix[i][j]);

  }
}

module.exports = findDiagonalOrder;

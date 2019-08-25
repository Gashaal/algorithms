/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

function findDiagonalOrder(matrix) {
  let order = [];

  if (Array.isArray(matrix) && Array.isArray(matrix[0])) {
    const temp = [];
    const x_size = matrix.length;
    const y_size = matrix[0].length;

    for (let i = 0; i < x_size; i++) {
      for (let j = 0; j < y_size; j++) {
        const item = matrix[i][j];

        if (Array.isArray(temp[i + j])) {
          temp[i + j].push(item);
        } else {
          temp[i + j] = [];
          temp[i + j].push(item);
        }
      }
    }

    for (let i = 0; i < temp.length; i++) {
      if (i % 2 === 0) {
        order = order.concat(temp[i].reverse());
      } else {
        order = order.concat(temp[i]);
      }
    }
  }

  return order;
}

module.exports = findDiagonalOrder;

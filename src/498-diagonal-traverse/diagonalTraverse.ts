/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

export function findDiagonalOrder(matrix: number[][]): number[] {
  let order: number[] = [];

  if (Array.isArray(matrix) && Array.isArray(matrix[0])) {
    const temp: number[][] = [];
    const x_size: number = matrix.length;
    const y_size: number = matrix[0].length;

    for (let i = 0; i < x_size; i++) {
      for (let j = 0; j < y_size; j++) {
        const item: number = matrix[i][j];

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

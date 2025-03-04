import { describe, it, expect } from 'vitest';
import { findDiagonalOrder } from './diagonalTraverse';

describe('findDiagonalOrder', () => {
  it('should return empty array for empty input', () => {
    const result: number[] = [];
    expect(findDiagonalOrder([])).toEqual(result);
  });

  it('should return correct diagonal order for 3x3 matrix', () => {
    const matrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    const result = [1, 2, 4, 7, 5, 3, 6, 8, 9];
    expect(findDiagonalOrder(matrix)).toEqual(result);
  });
});

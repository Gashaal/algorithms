import { test, expect } from 'vitest';
import { minPathSum } from './minimumPathSum';

test('should return 7', () => {
  const m = [
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1],
  ];
  expect(minPathSum(m)).toBe(7);
});

test('should return 12', () => {
  const m = [
    [1, 2, 3],
    [4, 5, 6],
  ];
  expect(minPathSum(m)).toBe(12);
});

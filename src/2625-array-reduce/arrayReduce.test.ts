import { test, expect } from 'vitest';
import { reduce } from './arrayReduce';

test('should return 10', () => {
  const nums = [1, 2, 3, 4];
  const fn = (accum: number, curr: number) => {
    return accum + curr;
  };
  const init = 0;
  expect(reduce(nums, fn, init)).toBe(10);
});

test('should return 130', () => {
  const nums = [1, 2, 3, 4];
  const fn = (accum: number, curr: number) => {
    return accum + curr * curr;
  };
  const init = 100;
  expect(reduce(nums, fn, init)).toBe(130);
});

test('should init for empty array', () => {
  const nums = [] as number[];
  const fn = (accum: number, curr: number) => {
    return accum + curr * curr;
  };
  const init = 25;
  expect(reduce(nums, fn, init)).toBe(25);
});

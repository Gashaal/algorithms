import { describe, it, expect } from 'vitest';
import { bubbleSort } from './bubbleSort';

describe('bubbleSort', () => {
  it('should sort array in ascending order', () => {
    expect(bubbleSort([0, 3, 2, 1])).toEqual([0, 1, 2, 3]);
  });

  it('should handle empty array', () => {
    expect(bubbleSort([])).toEqual([]);
  });

  it('should handle single element array', () => {
    expect(bubbleSort([5])).toEqual([5]);
  });

  it('should handle already sorted array', () => {
    expect(bubbleSort([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
  });

  it('should handle array with negative numbers', () => {
    expect(bubbleSort([-3, -1, -2, 0])).toEqual([-3, -2, -1, 0]);
  });

  it('should handle array with duplicates', () => {
    expect(bubbleSort([3, 1, 2, 1, 3])).toEqual([1, 1, 2, 3, 3]);
  });
});

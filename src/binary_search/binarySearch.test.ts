import { describe, it, expect } from 'vitest';
import { binarySearch } from './binarySearch';

describe('binarySearch', () => {
  it('should find target in sorted array', () => {
    const nums = [1, 3, 5, 7, 9];
    expect(binarySearch(nums, 3)).toBe(1);
    expect(binarySearch(nums, 7)).toBe(3);
  });

  it('should return -1 when target not found', () => {
    const nums = [1, 3, 5, 7, 9];
    expect(binarySearch(nums, 2)).toBe(-1);
    expect(binarySearch(nums, 10)).toBe(-1);
  });

  it('should handle empty array', () => {
    expect(binarySearch([], 1)).toBe(-1);
  });

  it('should handle single element array', () => {
    expect(binarySearch([5], 5)).toBe(0);
    expect(binarySearch([5], 3)).toBe(-1);
  });

  it('should handle large arrays', () => {
    const nums = Array.from({length: 1000000}, (_, i) => i + 1);
    expect(binarySearch(nums, 1)).toBe(0);
    expect(binarySearch(nums, 500000)).toBe(499999);
    expect(binarySearch(nums, 1000000)).toBe(999999);
    expect(binarySearch(nums, 1000001)).toBe(-1);
  });
});

import { describe, it, expect } from 'vitest';
import chunkArr from './chunkArr';

describe('chunkArr', () => {
  it('should split array into chunks of size 1', () => {
    expect(chunkArr([1, 2, 3, 4, 5], 1)).toEqual([[1], [2], [3], [4], [5]]);
  });

  it('should split array into chunks of size 3', () => {
    expect(chunkArr([1, 9, 6, 3, 2], 3)).toEqual([
      [1, 9, 6],
      [3, 2],
    ]);
  });

  it('should return whole array when chunk size is larger than array', () => {
    expect(chunkArr([8, 5, 3, 2, 6], 6)).toEqual([[8, 5, 3, 2, 6]]);
  });
});

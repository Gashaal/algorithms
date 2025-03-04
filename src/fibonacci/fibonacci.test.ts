import { describe, it, expect } from 'vitest';
import { fib, memoize } from './fibonacci';

describe('fibonacci functions', () => {
  describe('fib', () => {
    it('should return correct values', () => {
      expect(fib(0)).toBe(0);
      expect(fib(1)).toBe(1);
      expect(fib(2)).toBe(1);
      expect(fib(3)).toBe(2);
      expect(fib(4)).toBe(3);
      expect(fib(10)).toBe(55);
    });

    it('should handle edge cases', () => {
      expect(fib(-1)).toBe(0); // Assuming 0 for negative inputs
      expect(fib(50)).toBe(12586269025); // Testing larger number
    });
  });

  describe('memoize', () => {
    it('should return correct values', () => {
      expect(memoize(0)).toBe(0);
      expect(memoize(1)).toBe(1);
      expect(memoize(2)).toBe(1);
      expect(memoize(3)).toBe(2);
      expect(memoize(4)).toBe(3);
      expect(memoize(10)).toBe(55);
    });

    it('should handle edge cases', () => {
      expect(memoize(-1)).toBe(0); // Assuming 0 for negative inputs
      expect(memoize(50)).toBe(12586269025); // Testing larger number
    });
  });
});

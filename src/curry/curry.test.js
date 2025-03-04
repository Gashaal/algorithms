import { describe, it, expect } from 'vitest';
import { curry } from './curry.js';

describe('curry function', () => {
  it('should handle functions with single argument', () => {
    const addOne = curry((x) => x + 1);
    expect(addOne(5)).toBe(6);
  });

  it('should handle functions with multiple arguments', () => {
    const add = curry((a, b) => a + b);
    expect(add(2, 3)).toBe(5);
  });

  it('should allow partial application', () => {
    const add = curry((a, b) => a + b);
    const addFive = add(5);
    expect(addFive(10)).toBe(15);
  });

  it('should handle multiple partial applications', () => {
    const sumThree = curry((a, b, c) => a + b + c);
    const addFive = sumThree(5);
    const addFiveAndTen = addFive(10);
    expect(addFiveAndTen(15)).toBe(30);
  });

  it('should maintain this context', () => {
    const obj = {
      value: 10,
      add: curry(function(a, b) {
        return this.value + a + b;
      })
    };
    const addFive = obj.add(5);
    expect(addFive(15)).toBe(30);
  });

  it('should handle functions with no arguments', () => {
    const getFive = curry(() => 5);
    expect(getFive()).toBe(5);
  });

  it('should handle multiple calls with partial arguments', () => {
    const multiply = curry((a, b, c) => a * b * c);
    const multiplyByTwo = multiply(2);
    const multiplyByTwoAndThree = multiplyByTwo(3);
    expect(multiplyByTwoAndThree(4)).toBe(24);
    expect(multiplyByTwo(3, 4)).toBe(24);
    expect(multiply(2, 3, 4)).toBe(24);
  });

  it('should handle functions with many arguments', () => {
    const sumFive = curry((a, b, c, d, e) => a + b + c + d + e);
    const sumFirstThree = sumFive(1, 2, 3);
    expect(sumFirstThree(4, 5)).toBe(15);
  });
});

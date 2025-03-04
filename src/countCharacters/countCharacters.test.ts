import { describe, it, expect } from 'vitest';
import countCharacters from './countCharacters';

describe('countCharacters', () => {
  it('should count valid characters', () => {
    expect(countCharacters(["cat", "bt", "hat", "tree"], "atach")).toBe(6);
    expect(countCharacters(["hello","world","leetcode"], "welldonehoneyr")).toBe(10);
  });
});

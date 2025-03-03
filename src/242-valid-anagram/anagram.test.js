"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const anagram_1 = require("./anagram");
(0, vitest_1.describe)('isAnagram', () => {
    (0, vitest_1.it)('should return true for valid anagrams', () => {
        (0, vitest_1.expect)((0, anagram_1.isAnagram)('anagram', 'nagaram')).toBe(true);
    });
    (0, vitest_1.it)('should return false for non-anagrams', () => {
        (0, vitest_1.expect)((0, anagram_1.isAnagram)('rat', 'car')).toBe(false);
    });
});

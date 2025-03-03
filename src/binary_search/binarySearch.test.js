"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const binarySearch_1 = require("./binarySearch");
(0, vitest_1.describe)('binarySearch', () => {
    (0, vitest_1.it)('should find target in sorted array', () => {
        const nums = [1, 3, 5, 7, 9];
        (0, vitest_1.expect)((0, binarySearch_1.binarySearch)(nums, 3)).toBe(1);
        (0, vitest_1.expect)((0, binarySearch_1.binarySearch)(nums, 7)).toBe(3);
    });
    (0, vitest_1.it)('should return -1 when target not found', () => {
        const nums = [1, 3, 5, 7, 9];
        (0, vitest_1.expect)((0, binarySearch_1.binarySearch)(nums, 2)).toBe(-1);
        (0, vitest_1.expect)((0, binarySearch_1.binarySearch)(nums, 10)).toBe(-1);
    });
    (0, vitest_1.it)('should handle empty array', () => {
        (0, vitest_1.expect)((0, binarySearch_1.binarySearch)([], 1)).toBe(-1);
    });
    (0, vitest_1.it)('should handle single element array', () => {
        (0, vitest_1.expect)((0, binarySearch_1.binarySearch)([5], 5)).toBe(0);
        (0, vitest_1.expect)((0, binarySearch_1.binarySearch)([5], 3)).toBe(-1);
    });
    (0, vitest_1.it)('should handle large arrays', () => {
        const nums = Array.from({ length: 1000000 }, (_, i) => i + 1);
        (0, vitest_1.expect)((0, binarySearch_1.binarySearch)(nums, 1)).toBe(0);
        (0, vitest_1.expect)((0, binarySearch_1.binarySearch)(nums, 500000)).toBe(499999);
        (0, vitest_1.expect)((0, binarySearch_1.binarySearch)(nums, 1000000)).toBe(999999);
        (0, vitest_1.expect)((0, binarySearch_1.binarySearch)(nums, 1000001)).toBe(-1);
    });
});

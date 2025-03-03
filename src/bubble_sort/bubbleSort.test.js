"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const bubbleSort_1 = require("./bubbleSort");
(0, vitest_1.describe)('bubbleSort', () => {
    (0, vitest_1.it)('should sort array in ascending order', () => {
        (0, vitest_1.expect)((0, bubbleSort_1.bubbleSort)([0, 3, 2, 1])).toEqual([0, 1, 2, 3]);
    });
    (0, vitest_1.it)('should handle empty array', () => {
        (0, vitest_1.expect)((0, bubbleSort_1.bubbleSort)([])).toEqual([]);
    });
    (0, vitest_1.it)('should handle single element array', () => {
        (0, vitest_1.expect)((0, bubbleSort_1.bubbleSort)([5])).toEqual([5]);
    });
    (0, vitest_1.it)('should handle already sorted array', () => {
        (0, vitest_1.expect)((0, bubbleSort_1.bubbleSort)([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
    });
    (0, vitest_1.it)('should handle array with negative numbers', () => {
        (0, vitest_1.expect)((0, bubbleSort_1.bubbleSort)([-3, -1, -2, 0])).toEqual([-3, -2, -1, 0]);
    });
    (0, vitest_1.it)('should handle array with duplicates', () => {
        (0, vitest_1.expect)((0, bubbleSort_1.bubbleSort)([3, 1, 2, 1, 3])).toEqual([1, 1, 2, 3, 3]);
    });
});

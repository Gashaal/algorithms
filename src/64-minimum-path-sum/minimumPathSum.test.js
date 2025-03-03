"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const minimumPathSum_1 = require("./minimumPathSum");
(0, vitest_1.test)('should return 7', () => {
    const m = [
        [1, 3, 1],
        [1, 5, 1],
        [4, 2, 1],
    ];
    (0, vitest_1.expect)((0, minimumPathSum_1.minPathSum)(m)).toBe(7);
});
(0, vitest_1.test)('should return 12', () => {
    const m = [
        [1, 2, 3],
        [4, 5, 6],
    ];
    (0, vitest_1.expect)((0, minimumPathSum_1.minPathSum)(m)).toBe(12);
});

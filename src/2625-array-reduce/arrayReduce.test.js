"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const arrayReduce_1 = require("./arrayReduce");
(0, vitest_1.test)('should return 10', () => {
    const nums = [1, 2, 3, 4];
    const fn = (accum, curr) => {
        return accum + curr;
    };
    const init = 0;
    (0, vitest_1.expect)((0, arrayReduce_1.reduce)(nums, fn, init)).toBe(10);
});
(0, vitest_1.test)('should return 130', () => {
    const nums = [1, 2, 3, 4];
    const fn = (accum, curr) => {
        return accum + curr * curr;
    };
    const init = 100;
    (0, vitest_1.expect)((0, arrayReduce_1.reduce)(nums, fn, init)).toBe(130);
});
(0, vitest_1.test)('should init for empty array', () => {
    const nums = [];
    const fn = (accum, curr) => {
        return accum + curr * curr;
    };
    const init = 25;
    (0, vitest_1.expect)((0, arrayReduce_1.reduce)(nums, fn, init)).toBe(25);
});

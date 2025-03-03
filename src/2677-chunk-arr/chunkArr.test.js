"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const chunkArr_1 = __importDefault(require("./chunkArr"));
(0, vitest_1.describe)('chunkArr', () => {
    (0, vitest_1.it)('should split array into chunks of size 1', () => {
        (0, vitest_1.expect)((0, chunkArr_1.default)([1, 2, 3, 4, 5], 1)).toEqual([[1], [2], [3], [4], [5]]);
    });
    (0, vitest_1.it)('should split array into chunks of size 3', () => {
        (0, vitest_1.expect)((0, chunkArr_1.default)([1, 9, 6, 3, 2], 3)).toEqual([
            [1, 9, 6],
            [3, 2],
        ]);
    });
    (0, vitest_1.it)('should return whole array when chunk size is larger than array', () => {
        (0, vitest_1.expect)((0, chunkArr_1.default)([8, 5, 3, 2, 6], 6)).toEqual([[8, 5, 3, 2, 6]]);
    });
});

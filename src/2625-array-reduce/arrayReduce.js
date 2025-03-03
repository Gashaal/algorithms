"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reduce = reduce;
function reduce(nums, fn, init) {
    let acc = init;
    for (let i = 0; i < nums.length; i++) {
        acc = fn.call(null, acc, nums[i]);
    }
    return acc;
}

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function chunkArr(arr, size) {
    let result = [];
    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }
    return result;
}
exports.default = chunkArr;

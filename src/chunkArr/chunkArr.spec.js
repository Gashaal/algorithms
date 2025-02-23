const test = require("ava");
const chunkArr = require('./chunkArr');

test('chunkArr', t => {
  t.deepEqual(chunkArr([1,2,3,4,5], 1), [[1],[2],[3],[4],[5]]);
  t.deepEqual(chunkArr([1,9,6,3,2], 3), [[1,9,6],[3,2]]);
  t.deepEqual(chunkArr([8,5,3,2,6], 6), [[8,5,3,2,6]]);
});
const test = require("ava");
const bubbleSort = require('./bubbleSort');

test('bubbleSort', t => {
    t.deepEqual(bubbleSort([0, 3, 2, 1]), [0, 1, 2, 3]);
});
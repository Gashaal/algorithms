const test = require("ava");
const mergeSort = require('./mergeSort');

test('mergeSort', t => {
    t.deepEqual(mergeSort([0, 3, 2, 1]), [0, 1, 2, 3]);
});
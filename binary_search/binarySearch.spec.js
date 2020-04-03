const test = require("ava");
const binarySearch = require('./binarySearch');

test('not exist', t => {
    t.is(binarySearch([], 2), -1);
    t.is(binarySearch([-1, 0, 3, 5, 9, 12], 2), -1);
});

test('exist', t => {
    t.is(binarySearch([5], 5), 0);
    t.is(binarySearch([-1, 0, 3, 5, 9, 12], 9), 4);
});


const test = require("ava");
const dominantIndex = require("./largestNumberTwice");

test("[]", t => {
  t.is(dominantIndex([]), -1);
});

test("[1]", t => {
  t.is(dominantIndex([1]), 0);
});

test("[1,0]", t => {
  t.is(dominantIndex([1, 0]), 0);
});

test("[3, 6, 1, 0]", t => {
  t.is(dominantIndex([3, 6, 1, 0]), 1);
});

test("[1, 2, 3, 4]", t => {
  t.is(dominantIndex([1, 2, 3, 4]), -1);
});

test("[0,0,0,1]", t => {
  t.is(dominantIndex([0, 0, 0, 1]), 3);
});

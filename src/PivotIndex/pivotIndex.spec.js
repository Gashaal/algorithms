const test = require("ava");
const pivotIndex = require("./pivotIndex");

test("nums must be non-empty array", t => {
  t.is(pivotIndex(), -1);
  t.is(pivotIndex(null), -1);
  t.is(pivotIndex("str"), -1);
  t.is(pivotIndex([]), -1);
});

test("[1, 7, 3, 6, 5, 6]", t => {
  t.is(pivotIndex([1, 7, 3, 6, 5, 6]), 3);
});

test("[-1,-1,0,0,-1,-1]", t => {
  t.is(pivotIndex([-1,-1,0,0,-1,-1]), 2);
});


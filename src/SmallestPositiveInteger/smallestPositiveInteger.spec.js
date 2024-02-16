const test = require("ava");
const smallestPositiveInteger = require("./smallestPositiveInteger");

test("smallestPositiveInteger", (t) => {
  t.is(smallestPositiveInteger([]), 1);
  t.is(smallestPositiveInteger([0, 0]), 1);
  t.is(smallestPositiveInteger([1, 3, 6, 4, 1, 2]), 5);
  t.is(smallestPositiveInteger([1, 2, 3]), 4);
  t.is(smallestPositiveInteger([-1, -3]), 1);
});

const test = require("ava");
const plusOne = require("./plusOne");

test("[]", t => {
  t.deepEqual(plusOne([]), [1]);
});

test("[0]", t => {
    t.deepEqual(plusOne([0]), [1]);
  });

test("[1]", t => {
  t.deepEqual(plusOne([1]), [2]);
});

test("[1,2,3]", t => {
  t.deepEqual(plusOne([1, 2, 3]), [1, 2, 4]);
});

test("[1,9,9]", t => {
  t.deepEqual(plusOne([1, 9, 9]), [2, 0, 0]);
});

test("[9,9,9]", t => {
    t.deepEqual(plusOne([9, 9, 9]), [1, 0, 0, 0]);
  });

const test = require("ava");
const totalFruit = require("./totalFruit");

test("totalFruit", (t) => {
  t.is(totalFruit([1,2,1]), 3);
  t.is(totalFruit([0,1,2,2]), 3);
  t.is(totalFruit([1,2,3,2,2]), 4);
});

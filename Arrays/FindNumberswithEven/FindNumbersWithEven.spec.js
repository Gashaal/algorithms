const test = require("ava");
const findNumbers = require("./FindNumbersWithEven");

test("findNumbers", (t) => {
  t.is(findNumbers([12, 345, 2, 6, 7896]), 2);
  t.is(findNumbers([555, 901, 482, 1771]), 1);
});

const test = require("ava");
const findMaxConsecutiveOnes = require("./maxConsecutiveOnes");

test("findMaxConsecutiveOnes", (t) => {
  t.is(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]), 3);
});

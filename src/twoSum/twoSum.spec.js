const test = require("ava");
const twoSum = require("./twoSum");

test("twoSum", (t) => {
  t.deepEqual(twoSum([2, 7, 11, 15], 9), [0, 1]);
});

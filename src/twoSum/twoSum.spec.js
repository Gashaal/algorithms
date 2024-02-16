const test = require("ava");
const twoSum = require("./twoSum");
const binarySearch = require("./twoSum");

// test("twoSum", (t) => {
//   t.deepEqual(twoSum([2, 7, 11, 15], 9), [0, 1]);
// });

test("binarySearch", (t) => {
  t.is(binarySearch([1, 2, 3, 4, 5], 2), 1);
  t.is(binarySearch([1], 2), -1);

});

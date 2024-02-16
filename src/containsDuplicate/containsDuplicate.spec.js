const test = require("ava");
const containsDuplicate = require("./containsDuplicate");

test("containsDuplicate", (t) => {
  t.is(containsDuplicate([1, 2, 3, 1]), true);
  t.is(containsDuplicate([1,2,3,4]), false);
  t.is(containsDuplicate([1,1,1,3,3,4,3,2,4,2]), true);
  t.is(containsDuplicate([0]), true);
});

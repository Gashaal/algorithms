const test = require("ava");
const maximumSubarray = require("./maximumSubarray");

test("maximumSubarray", t => {
    t.is(maximumSubarray([-2, -1, -3, -10, -1, -2, -1, -5, -4]), -1);
    t.is(maximumSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6);
});
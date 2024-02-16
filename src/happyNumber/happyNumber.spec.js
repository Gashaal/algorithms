const test = require("ava");
const happyNumber = require("./happyNumber");

test("singleNumber", t => {
    t.is(happyNumber(2), false);
    t.is(happyNumber(19), true);
});
const test = require("ava");
const maxProfit = require("./maxProfit");

test("maxProfit", t => {
    t.is(maxProfit([7, 1, 5, 3, 6, 4]), 7);
    t.is(maxProfit([1,2,3,4,5]), 4);
    t.is(maxProfit([7,6,4,3,1]), 0);
});

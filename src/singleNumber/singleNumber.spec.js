const test = require("ava");
const singleNumber = require('./singleNumber');

test('singleNumber', t => {
    t.is(singleNumber([1,22,33]), 1);
});
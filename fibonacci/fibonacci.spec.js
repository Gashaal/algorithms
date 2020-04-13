const test = require("ava");
const fib = require("./fibonacci");

test('fib', t => {
   t.is(fib(2), 1);
   t.is(fib(3), 2);
   t.is(fib(4), 3);
   t.is(fib(7), 13);
});
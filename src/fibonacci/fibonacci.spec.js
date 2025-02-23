const test = require("ava");
const { fib, memoize } = require("./fibonacci");

test('fib', t => {
  t.is(fib(2), 1);
  t.is(fib(3), 2);
  t.is(fib(4), 3);
  t.is(fib(7), 13);
});

test('memoize', t => {
  t.is(memoize(2), 1);
  t.is(memoize(3), 2);
  t.is(memoize(4), 3);
  t.is(memoize(7), 13);
});
const test = require("ava");
const atoi = require("./atoi");

test("atoi", (t) => {
  t.is(atoi("42"), 42);
  t.is(atoi("   -42"), -42);
  t.is(atoi("4193 with words"), 4193);
  t.is(atoi("words and 987"), 0);
  t.is(atoi("-91283472332"), 0);
});

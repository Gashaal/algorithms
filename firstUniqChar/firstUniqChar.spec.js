const test = require("ava");
const firstUniqChar = require("./firstUniqChar");

test("firstUniqChar", (t) => {
  t.is(firstUniqChar("leetcode"), 0);
  t.is(firstUniqChar("loveleetcode"), 2);
});

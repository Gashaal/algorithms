const test = require("ava");
const countCharacters = require("./countCharacters");

test("countCharacters", (t) => {
  t.is(countCharacters(["cat", "bt", "hat", "tree"], "atach"), 6);
  t.is(countCharacters(["hello","world","leetcode"], "welldonehoneyr"), 10);
});

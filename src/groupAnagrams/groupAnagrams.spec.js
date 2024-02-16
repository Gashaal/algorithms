const test = require("ava");
const groupAnagrams = require("./groupAnagrams");

test("groupAnagrams", (t) => {
  t.deepEqual(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]), [
    ["eat", "tea", "ate"],
    ["tan", "nat"],
    ["bat"],
  ]);

  t.deepEqual(
    groupAnagrams([
      "cab",
      "tin",
      "pew",
      "duh",
      "may",
      "ill",
      "buy",

      "bar",
      "max",
      "doc",
    ]),
    [
      ["cab"],
      ["tin"],
      ["pew"],
      ["duh"],
      ["may"],
      ["ill"],
      ["buy"],
      ["bar"],
      ["max"],
      ["doc"],
    ]
  );
});

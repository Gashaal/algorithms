const test = require("ava");
const longestCommonPrefix = require("./longestCommonPrefix");

test("longestCommonPrefix", (t) => {
  t.is(longestCommonPrefix(["flower", "flow", "floght"]), "flo");
  t.is(longestCommonPrefix(["dog", "racecar", "car"]), "");
  t.is(longestCommonPrefix([]), "");
  t.is(longestCommonPrefix([""]), "");
});

const test = require("ava");
const reverseString = require("./reverseString");

test("reverseString", (t) => {
  //["h","e","l","l","o"]
  // Output: ["o","l","l","e","h"]
  t.deepEqual(reverseString(["h", "e", "l", "l", "o"]), [
    "o",
    "l",
    "l",
    "e",
    "h",
  ]);
});

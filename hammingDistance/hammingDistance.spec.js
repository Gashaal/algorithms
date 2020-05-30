const test = require("ava");
const hammingDistance = require("./hammingDistance");

test("hammingDistance", (t) => {
  t.is(hammingDistance(1, 4), 2);
});

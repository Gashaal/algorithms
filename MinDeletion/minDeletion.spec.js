const test = require("ava");
const minDeletion = require("./minDeletion");

test("minDeletion", (t) => {
  t.is(minDeletion("aaabbb"), 1);
  t.is(minDeletion("ccaaffddecee"), 6);
  t.is(minDeletion("eeee"), 0);
  t.is(minDeletion("example"), 4);
});

const test = require("ava");
const numUniqueEmails = require("./numUniqueEmails");

test("numUniqueEmails", (t) => {
  t.is(
    numUniqueEmails(
      [
        "test.email+alex@leetcode.com",
        "test.e.mail+bob.cathy@leetcode.com",
        "testemail+david@lee.tcode.com",
      ]
    ),
    2
  );
  t.is(numUniqueEmails(["a@leetcode.com","b@leetcode.com","c@leetcode.com"]), 3);
  t.is(numUniqueEmails(["test.email+alex@leetcode.com","test.email.leet+alex@code.com"]), 2);
});

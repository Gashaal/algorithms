const test = require("ava");
const PrintList = require("../singleLinkedList/PrintList");
const createLinkedList = require("../singleLinkedList/createLinkedList");
const isPalindrome = require("./isPalindrome");

// test("1", t => {
//   const list = createLinkedList([1]);
//   t.is(isPalindrome(list), true);
// });

// test("1 -> 2 -> 2 -> 1", t => {
//   const list = createLinkedList([1, 2, 2, 1]);
//   t.is(isPalindrome(list), true);
// });

test("1 -> 0 -> 1", t => {
  const list = createLinkedList([1, 0, 1]);
  t.is(isPalindrome(list), true);
});

// test("1 -> 0 -> 2", t => {
//   const list = createLinkedList([1, 0, 2]);
//   t.is(isPalindrome(list), false);
// });

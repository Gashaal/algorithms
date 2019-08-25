const test = require("ava");
const mergeLists = require("./mergeLists");
const PrintList = require("../singleLinkedList/PrintList");
const createLinkedList = require("../singleLinkedList/createLinkedList");

test("1->2->4", t => {
  const l1 = createLinkedList([1, 2, 4]);
  const l2 = createLinkedList([]);

  const mergedList = mergeLists(l1, l2);
  t.is(PrintList(mergedList), "1 -> 2 -> 4");
});

test("1->2->4, 1->3->4", t => {
  const l1 = createLinkedList([1, 2, 4]);
  const l2 = createLinkedList([1, 3, 4]);

  const mergedList = mergeLists(l1, l2);
  t.is(PrintList(mergedList), "1 -> 1 -> 2 -> 3 -> 4 -> 4");
});

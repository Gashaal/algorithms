const test = require("ava");
const createLinkedList = require("../singleLinkedList/createLinkedList");
const printList = require("../singleLinkedList/printList");
const deleteNode = require("./deleteNode");

test("deleteNode", (t) => {
  let head = createLinkedList([4, 5, 1, 9]);
  deleteNode(head.next);
  t.is(printList(head), "4 -> 1 -> 9");

  head = createLinkedList([4, 5, 1, 9]);
  deleteNode(head.next.next);
  t.is(printList(head), "4 -> 5 -> 9");
});

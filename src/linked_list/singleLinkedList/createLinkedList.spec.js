const test = require("ava");
const createLinkedList = require("./createLinkedList");

test("create list", t => {
    const head = createLinkedList([1,2,3]);
    t.is(head.val, 1);
    t.is(head.next.val, 2);
    t.is(head.next.next.val, 3);
});
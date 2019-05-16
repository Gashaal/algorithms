const test = require("ava");
const ListNode = require("../singleLinkedList/ListNode");
const PrintList = require("../singleLinkedList/PrintList");

test('head must be ListNode instance', t => {
    t.is(removeFromEnd(null,5), null);
    t.is(removeFromEnd(1,5), 1);
});

test('n must be >= 0', t => {
    const head = new ListNode(10);
    t.is(removeFromEnd(head,-1), head);
});

test("remove in middle", t => {
    const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
    t.is(2,2);
    console.log(PrintList(removeFromEnd(head, 2)));
});

test("remove head", t => {
    // 1->2->3->4->5
    const head = new ListNode(1);
    console.log(PrintList(head));
    t.is(2,2);

    console.log(PrintList(removeFromEnd(head, 1)));
});

test("remove head 2", t => {
    // 1->2->3->4->5
    const head = new ListNode(1, new ListNode(2));
    t.is(2,2);

    console.log(PrintList(removeFromEnd(head, 2)));
});

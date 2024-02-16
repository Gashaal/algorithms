const test = require("ava");
const ListNode = require('./listNode');
const PrintList = require('./printList');

test('print', t => {
    const head = new ListNode(1, new ListNode(2, new ListNode(3)));
    t.is(PrintList(head), "1 -> 2 -> 3");
});
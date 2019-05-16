const test = require('ava');
const ListNode = require('../singleLinkedList/listNode');
const detectCycle = require('./detectCycle');

test('detectCycle', t => {
    const head = new ListNode(3);
    const second = new ListNode(2);
    const third = new ListNode(0);
    const tail = new ListNode(-4);

    head.next = second;
    second.next = third;
    third.next = tail;
    tail.next = second;

    t.is(detectCycle(head), second);
});
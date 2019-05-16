const test = require('ava');
const ListNode = require('./listNode');

test('ListNode', t => {
    const node = new ListNode(1,2);
    t.is(node.val, 1);
    t.is(node.next, 2);
});

const test = require("ava");
const { createLinkedList, PrintList } = require('./../singly_linked_list');
const reverseList = require('./reverse_list');


test('corner cases', t => {
    t.is(reverseList(), undefined);
    t.is(reverseList(null), undefined);
    t.is(reverseList('head'), undefined);
    t.is(reverseList(1), undefined);
    t.is(reverseList({}), undefined);

    const list = createLinkedList([0]);
    t.is(reverseList(list), list)
});

test('reverse', t => {
    const head = createLinkedList([1,2,3,4,5]);
    t.is(PrintList(reverseList(head)), '5 -> 4 -> 3 -> 2 -> 1');
});


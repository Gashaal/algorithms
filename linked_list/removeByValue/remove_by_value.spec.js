const test = require("ava");
const { createLinkedList, PrintList } = require('./../singly_linked_list');
const removeElements = require('./remove_by_value');

test('get null if list is not a ListNode', t => {
    t.is(removeElements(null, 6), null);
});

test('remove head', t => {
    const list = createLinkedList([1,2,6,3,4,5,6]);
    t.is(PrintList(removeElements(list, 1)), '2 -> 6 -> 3 -> 4 -> 5 -> 6');
});

test('remove tail', t => {
    const list = createLinkedList([1,2,6,3,4,5,6,7]);
    t.is(PrintList(removeElements(list, 7)), '1 -> 2 -> 6 -> 3 -> 4 -> 5 -> 6');
});

test('remove in middle', t => {
    // 1->2->6->3->4->5->6
    const list = createLinkedList([1,2,6,3,4,5,6]);
    t.is(PrintList(removeElements(list, 6)), '1 -> 2 -> 3 -> 4 -> 5');
});
const test = require("ava");
const ListNode = require('../singleLinkedList/listNode');
const createLinkedList = require('../singleLinkedList/createLinkedList');
const PrintList = require('../singleLinkedList/printList');
const removeElements = require('./removeByValue');

test('get null if list is not a ListNode', t => {
    t.is(removeElements(null, 6), null);
});

test('121212', t => {
    const list = createLinkedList([1,2,6,3,4,5,6]);
    t.is(list instanceof ListNode, false);
});

test('remove head', t => {
    const list = createLinkedList([1,2,6,3,4,5,6]);
    t.is(list instanceof ListNode, true);
    t.is(PrintList(removeElements(list, 1)), '2 -> 6 -> 3 -> 4 -> 5 -> 6');
});

test('remove tail', t => {
    const list = createLinkedList([1,2,6,3,4,5,6,7]);
    t.is(PrintList(removeElements(list, 7)), '1 -> 2 -> 6 -> 3 -> 4 -> 5 -> 6');
});

test('remove in middle', t => {
    const list = createLinkedList([1,2,6,3,4,5,6]);
    t.is(PrintList(removeElements(list, 6)), '1 -> 2 -> 3 -> 4 -> 5');
});
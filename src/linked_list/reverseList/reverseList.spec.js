const test = require("ava");
const createLinkedList = require('../singleLinkedList/createLinkedList');
const PrintList = require('../singleLinkedList/printList');
const reverseList = require('./reverseList');


test('corner cases', t => {
    t.is(reverseList(), null);
    t.is(reverseList(null), null);
    t.is(reverseList('head'), null);
    t.is(reverseList(1), null);
    t.is(reverseList({}), null);

    const list = createLinkedList([0]);
    t.is(reverseList(list), list)
});

test('reverse', t => {
    const head = createLinkedList([1,2,3,4,5]);
    t.is(PrintList(reverseList(head)), '5 -> 4 -> 3 -> 2 -> 1');
});


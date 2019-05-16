const test = require("ava");
const ListNode = require('../singleLinkedList/listNode');
const getIntersectionNode = require("./intersectionLists");

const a1 = new ListNode('a1');
const a2 = new ListNode('a2');

const b1 = new ListNode('b1');
const b2 = new ListNode('b2');
const b3 = new ListNode('b3');

const c1 = new ListNode('c1');
const c2 = new ListNode('c2');


test('corner cases', t => {
    t.is(getIntersectionNode(null,0), null);
});

test('no intersection', t => {
    a1.next = a2;

    b1.next = b2;
    b2.next = b3;

    t.is(getIntersectionNode(a1, b2), null);
});

test('get intersection', t => {
    c1.next = c2;

    a1.next = a2;
    a2.next = c1;

    b1.next = b2;
    b2.next = b3;
    b3.next = c1;


    t.is(getIntersectionNode(a1, b2)['val'], 'c1');
});
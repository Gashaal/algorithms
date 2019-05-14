import test from 'ava';


class ListNode {
    constructor(val, next) {
        this.val = val;
        this.next = next;
    }
}

function PrintList(head) {
    let str = '';
    let pointer = head;
    while (pointer) {
      str += pointer.val;
      pointer = pointer.next;
      if (pointer) {
        str += ' -> ';
      }
    }

    return str;
}

function getIntersectionNode(headA, headB) {
    let intersectionNode = null;

    if (headA instanceof ListNode && headB instanceof ListNode) {
        let lastA;
        let lastB;
        let pointerA = headA;
        let pointerB = headB;


        while (true) {
            if (pointerA === pointerB) {
                intersectionNode = pointerA;
                break;
            }

            if (pointerA.next) {
                pointerA = pointerA.next;
            } else {
                lastA = pointerA;
                pointerA = headB;
            }

            if (pointerB.next) {
                pointerB = pointerB.next;
            } else {
                lastB = pointerB;
                pointerB = headA;
            }

            if (lastA && lastB && lastA !== lastB) {
                break;
            }
        }
    }


    return intersectionNode;
}

const a1 = new ListNode('a1');
const a2 = new ListNode('a2');

const b1 = new ListNode('b1');
const b2 = new ListNode('b2');
const b3 = new ListNode('b3');

const c1 = new ListNode('c1');
const c2 = new ListNode('c2');

test('exceptions', t => {
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
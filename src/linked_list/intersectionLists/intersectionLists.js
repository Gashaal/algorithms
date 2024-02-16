const ListNode = require('../singleLinkedList/listNode');

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

module.exports = getIntersectionNode;
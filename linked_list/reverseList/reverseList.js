const ListNode = require('../singleLinkedList/listNode');

function reverseList(head) {
    let pointerPrev = null;

    if (head instanceof ListNode) {
        let pointer = head;
        while (pointer) {
            const pointerTemp = pointer.next;
            pointer.next = pointerPrev;
            pointerPrev = pointer;

            pointer = pointerTemp;
        }

    }

    return pointerPrev
}

module.exports = reverseList;

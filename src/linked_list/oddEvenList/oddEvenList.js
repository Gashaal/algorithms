const ListNode = require('../singleLinkedList/listNode');


function oddEvenList(head) {
    if (head instanceof ListNode) {
        let oddPointer = head;
        let evenPointer = head.next;
        let evenHead = head.next;

        while (oddPointer && evenPointer) {
            oddPointer.next = evenPointer.next;
            if (oddPointer.next) {
                oddPointer = oddPointer.next;
            }
            if (oddPointer) {
                evenPointer.next = oddPointer.next;
            }
            evenPointer = evenPointer.next;
        }

        oddPointer.next = evenHead;

        return head;
    }

    return null;
}

module.exports = oddEvenList;

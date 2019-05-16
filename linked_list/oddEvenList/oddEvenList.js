const ListNode = require('../singleLinkedList/listNode');

// ListNode odd = head, even = head.next, evenHead = even;
// while (even != null && even.next != null) {
//     odd.next = even.next;
//     odd = odd.next;
//     even.next = odd.next;
//     even = even.next;
// }

function oddEvenList(head) {
    if (head instanceof ListNode) {
        let oddPointer = head;
        let evenPointer = head.next;
        let evenHead = head.next;

        while (oddPointer && evenPointer) {
            oddPointer.next = evenPointer.next;
            oddPointer = oddPointer.next;
            evenPointer.next = oddPointer.next;
            evenPointer = evenPointer.next;
        }

        oddPointer.next = evenHead;

        return head;
    }
}

module.exports = oddEvenList;

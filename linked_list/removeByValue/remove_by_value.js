const { ListNode } = require('./../singly_linked_list');

function removeElements(head, val) {
    if (head instanceof ListNode) {
        let prev = null;
        let pointer = head;

        while (pointer) {
            if (pointer.val === val) {
                if (prev) {
                    prev.next = pointer.next;
                } else {
                    head = pointer.next;
                }
            } else {
                prev = pointer;
            }

            pointer = pointer.next;
        }
    }

    return head;
}

module.exports = removeElements;
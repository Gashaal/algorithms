const ListNode = require("../singleLinkedList/listNode");

function removeElements(head, val) {
  if (head instanceof ListNode) {
    let prev = null;
    let pointer = head;

    while (pointer) {
      if (pointer.val === val) {
        if (prev) {
          prev.next = pointer.next;
        } else {
          // remove first element
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

const ListNode = require("../singleLinkedList/listNode");
const PrintList = require("../singleLinkedList/PrintList");

function isPalindrome(head) {
  let isPalindrome = true;

  if (head instanceof ListNode) {
    let count = 0;
    let pointer = head;

    while (pointer) {
      count++;
      pointer = pointer.next;
    }

    let middle;
    if (count % 2 === 0) {
      middle = count / 2;
    } else {
      middle = Math.round(count / 2);
    }

    if (count === 1) {
      return true;
    }

    let pos = 0;
    pointer = head;
    let reversePartPointer = null;

    while (pos < middle) {
      const temp = pointer.next;
      pointer.next = reversePartPointer;
      reversePartPointer = pointer;

      pos++;
      pointer = temp;
    }

    if (count % 2 !== 0) {
      reversePartPointer = reversePartPointer.next;
    }

    isPalindrome = true;
    while (reversePartPointer && pointer) {
      if (pointer.val !== reversePartPointer.val) {
        isPalindrome = false;
        break;
      }

      reversePartPointer = reversePartPointer.next;
      pointer = pointer.next;
    }
  }

  return isPalindrome;
}

module.exports = isPalindrome;

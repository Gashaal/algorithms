const ListNode = require("../singleLinkedList/listNode");
const PrintList = require("../singleLinkedList/PrintList");

function isPalindrome(head) {
  let isPalindrome = true;

  console.log("---");

  if (head instanceof ListNode) {
    let count = 0;
    let pointer = head;

    while (pointer) {
      count++;
      pointer = pointer.next;
    }

    const middle = Math.round(count / 2);
    let pos = 0;
    pointer = head;
    let tailPointer = null;
    let reversePartPointer = null;

    if (count === 1) {
      return true;
    }

    while (pos < middle) {
      const temp = pointer.next;
      pointer.next = reversePartPointer;
      reversePartPointer = pointer;
      prevPointer = pointer;

      pos++;
      pointer = temp;
    }

    isPalindrome = true;

    prevPointer.next = pointer;
    console.log(PrintList(prevPointer));
    console.log(PrintList(reversePartPointer));

    while (reversePartPointer && pointer) {
      if (pointer.val !== undefined && pointer.val !== reversePartPointer.val) {
        console.log("ttt");
        console.log("ttt");
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

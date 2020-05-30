const test = require("ava");
const ListNode = require("../singleLinkedList/listNode");
const PrintList = require("../singleLinkedList/printList");

function removeFromEnd(head, n) {
  if (head instanceof ListNode && n >= 0) {
    let pos = 1;
    let pointer = head;
    let pointerPrevN;
    let pointerN;

    while (pointer) {
      if (n === pos) {
        pointerN = head;
        console.log(pointerN.val);
        console.log(pointer.val);
      }

      pos++;
      pointer = pointer.next;
      if (pointerN && pointer) {
        pointerPrevN = pointerN;
        pointerN = pointerN.next;
      }
    }

    console.log(pointerPrevN.val);
    console.log(pointerN.val);

    if (pointerN) {
      // remove from middle or tail
      if (pointerPrevN) {
        // middle
        if (pointerN.next) {
          pointerPrevN.next = pointerN.next;
        } else {
          // tail
          pointerPrevN.next = null;
        }
      } else {
        // remove head
        if (pointerN.next) {
          head = pointerN.next;
        } else {
          // list with one element
          head = null;
        }
      }
    }
  }

  return head;
}

module.exports = removeFromEnd;

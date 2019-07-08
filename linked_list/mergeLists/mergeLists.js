const ListNode = require("../singleLinkedList/listNode");

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function mergeLists(l1, l2) {
  let pointer1 = l1;
  let pointer2 = l2;
  let head = null;

  if (l1 instanceof ListNode || l2 instanceof ListNode) {
    if (
      (pointer1 && pointer2 && pointer1.val <= pointer2.val) ||
      (pointer1 && !pointer2)
    ) {
      head = new ListNode(pointer1.val);
      pointer1 = pointer1.next;
    } else {
      head = new ListNode(pointer2.val);
      pointer2 = pointer2.next;
    }

    let list = head;

    while (pointer1 || pointer2) {
      if (
        (pointer1 && pointer2 && pointer1.val <= pointer2.val) ||
        (pointer1 && !pointer2)
      ) {
        list.next = new ListNode(pointer1.val);
        pointer1 = pointer1.next;
      } else {
        list.next = new ListNode(pointer2.val);
        pointer2 = pointer2.next;
      }

      list = list.next;
    }
  }

  return head;
}

module.exports = mergeLists;

function deleteNode(node) {
  let pointer = node;
  let prevPointer = node;

  while (pointer.next) {
    pointer.val = pointer.next.val;
    prevPointer = pointer;
    pointer = pointer.next;
  }

  prevPointer.next = null;
}

module.exports = deleteNode;

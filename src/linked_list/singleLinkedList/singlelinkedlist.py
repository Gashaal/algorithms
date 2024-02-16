class ListNode:
    def __init__(self, value, next=None):
        self.value = value
        self.next = next


class LinkedList:
    def __init__(self):
        self._length = 0
        self._head = None
        self._tail = None

    def get(self, index):
        """
        Get the value of the index-th node in the linked list. If the index is invalid, return -1.
        """
        value = -1

        if index >= 0 and index < self._length:
            pos = 0
            pointer = self._head
            while pointer:
                if index == pos:
                    value = pointer.value
                    break

                pos += 1
                pointer = pointer.next

        return value

    def addAtIndex(self, index, value):
        """
        Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted.
        """

        if index <= self._length:
            if index <= 0 and self._length == 0:
                node = ListNode(value)
                self._head = node
                self._tail = node
            elif index == 0 and self._length > 0:
                node = ListNode(value, self._head)
                self._head = node
            elif index == self._length:
                node = ListNode(value)
                self._tail.next = node
                self._tail = node
            else:
                pos = 1
                prev_node = self._head
                pointer = self._head.next

                while pointer:
                    if pos == index:
                        node = ListNode(value, pointer)
                        prev_node.next = node
                        break

                    pos += 1
                    prev_node = pointer
                    pointer = pointer.next

            self._length += 1

    def addAtHead(self, value):
        """
        Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
        """
        self.addAtIndex(0, value)

    def addAtTail(self, value):
        """
        Append a node of value val to the last element of the linked list.
        """

        self.addAtIndex(self._length, value)

    def deleteAtIndex(self, index):
        """
        Delete the index-th node in the linked list, if the index is valid.
        """
        if index >= 0 and index < self._length and self._length > 0:
            if index == 0:
                self._head = self._head.next
            else:
                pos = 1
                prev_node = self._head
                pointer = self._head.next

                while pointer:
                    if pos == index:
                        if pointer.next:
                            prev_node.next = pointer.next
                        else:
                            prev_node.next = None
                            self._tail = prev_node

                    pos += 1
                    prev_node = pointer
                    pointer = pointer.next

            self._length -= 1

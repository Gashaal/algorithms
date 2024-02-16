from ..singleLinkedList.singlelinkedlist import ListNode


class Solution(object):
    def hasCycle(self, head):
        """
        :type head: ListNode
        :rtype: bool
        """
        hasCycle = False

        if head and head.next:
            slow_pointer = head
            fast_pointer = head

            while True:
                if fast_pointer.next and fast_pointer.next.next:
                    fast_pointer = fast_pointer.next.next
                    slow_pointer = slow_pointer.next

                    if fast_pointer == slow_pointer:
                        hasCycle = True
                        break
                else:
                    break

        return hasCycle

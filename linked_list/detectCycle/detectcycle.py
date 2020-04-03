class Solution:
    def detectCycle(self, head):
        has_cycle = False
        cycle_node = None

        if head is not None:
            slow_pointer = head
            fast_pointer = head

            while True:
                if fast_pointer.next and fast_pointer.next.next:
                    fast_pointer = fast_pointer.next.next
                    slow_pointer = slow_pointer.next

                    if fast_pointer == slow_pointer:
                        has_cycle = True
                        break
                else:
                    break

            if has_cycle:
                fast_pointer = head

                while fast_pointer != slow_pointer:
                    fast_pointer = fast_pointer.next
                    slow_pointer = slow_pointer.next

                cycle_node = fast_pointer

        return cycle_node

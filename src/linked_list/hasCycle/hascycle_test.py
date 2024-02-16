import unittest
from ..singleLinkedList.singlelinkedlist import ListNode
from .hascycle import Solution


class HasCycleTestCase(unittest.TestCase):
    def setUp(self):
        self.head = ListNode(3)
        self.second = ListNode(2)
        self.third = ListNode(0)
        self.tail = ListNode(-4)

    def test_not_linked_list(self):
        self.assertEqual(Solution().hasCycle([]), False)

    def test_no_cycle(self):
        self.head.next = self.second
        self.second.next = self.third
        self.third.next = self.tail

        self.assertEqual(Solution().hasCycle(self.head), False)

    def test_has_cycle(self):
        self.head.next = self.second
        self.second.next = self.third
        self.third.next = self.tail
        self.tail.next = self.second

        self.assertEqual(Solution().hasCycle(self.head), True)


if __name__ == '__main__':
    unittest.main()

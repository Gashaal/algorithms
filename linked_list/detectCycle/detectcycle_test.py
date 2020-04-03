import unittest
from ..singleLinkedList.singlelinkedlist import ListNode
from .detectcycle import Solution


class HasCycleTestCase(unittest.TestCase):
    def setUp(self):
        self.head = ListNode(3)
        self.second = ListNode(2)
        self.third = ListNode(0)
        self.tail = ListNode(-4)

    def test_detect_cycle(self):
        self.head.next = self.second
        self.second.next = self.third
        self.third.next = self.tail
        self.tail.next = self.second

        self.assertEqual(Solution().detectCycle(self.head), self.second)


if __name__ == '__main__':
    unittest.main()

import unittest
from .singlelinkedlist import ListNode, LinkedList


class ListNodeTestCase(unittest.TestCase):
    def test_create_list_node(self):
        list_node = ListNode(value='some_value')
        self.assertEqual(list_node.value, 'some_value')
        self.assertEqual(list_node.next, None)


class LinkedListGetItemTestCase(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.tail_node = ListNode(value='tail node')
        cls.head_node = ListNode(value='head node', next=cls.tail_node)
        cls.linked_list = LinkedList()
        cls.linked_list._head = cls.head_node
        cls.linked_list._length = 2

    def test_out_of_boundary_item(self):
        self.assertEqual(self.linked_list.get(-1), -1)
        self.assertEqual(self.linked_list.get(100), -1)

    def test_get_item_value(self):
        self.assertEqual(self.linked_list.get(0), self.head_node.value)
        self.assertEqual(self.linked_list.get(1), self.tail_node.value)


class LinkedListAddTestCase(unittest.TestCase):
    def setUp(self):
        tail_node = ListNode(value='tail node')
        head_node = ListNode(value='head node', next=tail_node)
        self.linked_list = LinkedList()
        self.linked_list._head = head_node
        self.linked_list._tail = tail_node
        self.linked_list._length = 2

    def test_add_to_empty_linked_list(self):
        linked_list = LinkedList()
        linked_list.addAtIndex(0, 'head_tail_node')
        self.assertEqual(linked_list._head.value, 'head_tail_node')
        self.assertEqual(linked_list._tail.value, 'head_tail_node')
        self.assertEqual(linked_list._length, 1)

    def test_add_head(self):
        linked_list_length = self.linked_list._length
        self.linked_list.addAtHead('new_head')
        self.assertEqual(self.linked_list._head.value, 'new_head')
        self.assertEqual(self.linked_list._length, linked_list_length + 1)

    def test_add_tail(self):
        linked_list_length = self.linked_list._length
        self.linked_list.addAtTail('new_tail')
        self.assertEqual(self.linked_list._tail.value, 'new_tail')
        self.assertEqual(self.linked_list._length, linked_list_length + 1)

    def test_add_to_middle(self):
        linked_list_length = self.linked_list._length
        self.linked_list.addAtIndex(1, 'new_node')
        self.assertEqual(self.linked_list.get(1), 'new_node')
        self.assertEqual(self.linked_list._length, linked_list_length + 1)


class LinkedListDeleteItemTestCase(unittest.TestCase):
    def setUp(self):
        self.tail_node = ListNode(value='tail node')
        self.middle_node = ListNode(value='middle node', next=self.tail_node)
        self.head_node = ListNode(value='head node', next=self.middle_node)
        self.linked_list = LinkedList()
        self.linked_list._head = self.head_node
        self.linked_list._tail = self.tail_node
        self.linked_list._length = 3

    def test_delete_head(self):
        linked_list_length = self.linked_list._length
        self.linked_list.deleteAtIndex(0)
        self.assertEqual(self.linked_list._head.value, self.middle_node.value)
        self.assertEqual(self.linked_list._length, linked_list_length - 1)

    def test_delete_tail(self):
        linked_list_length = self.linked_list._length
        self.linked_list.deleteAtIndex(linked_list_length - 1)
        self.assertEqual(self.linked_list._tail.value, self.middle_node.value)
        self.assertEqual(self.linked_list._length, linked_list_length - 1)

    def test_delete_in_middle(self):
        linked_list_length = self.linked_list._length
        self.linked_list.deleteAtIndex(1)
        self.assertEqual(self.linked_list._head.next.value, self.tail_node.value)
        self.assertEqual(self.linked_list._length, linked_list_length - 1)


class LinkeListLeetCodeTestCase(unittest.TestCase):
    def setUp(self):
        self.methods = ["addAtHead", "addAtHead", "deleteAtIndex", "addAtIndex", "addAtTail", "addAtIndex", "addAtTail",
                        "addAtHead", "addAtHead", "addAtHead", "addAtTail", "addAtTail", "addAtHead", "addAtTail",
                        "addAtTail", "addAtHead", "addAtTail", "deleteAtIndex", "addAtTail", "addAtTail", "get",
                        "addAtIndex", "addAtHead", "get", "get", "addAtHead", "get", "addAtIndex", "addAtTail",
                        "addAtIndex",
                        "addAtHead", "addAtHead", "addAtHead", "get", "addAtHead", "addAtIndex", "addAtTail",
                        "addAtHead",
                        "addAtIndex", "get", "addAtTail", "addAtTail", "addAtIndex", "addAtIndex", "addAtHead",
                        "addAtHead",
                        "get", "addAtTail", "addAtIndex", "addAtIndex", "addAtHead", "deleteAtIndex", "addAtIndex",
                        "addAtHead", "deleteAtIndex", "addAtTail", "deleteAtIndex", "addAtTail", "addAtHead",
                        "addAtTail",
                        "addAtTail", "addAtHead", "addAtTail", "addAtIndex", "deleteAtIndex", "addAtHead", "addAtHead",
                        "addAtHead", "addAtTail", "get", "addAtIndex", "addAtTail", "addAtTail", "addAtTail",
                        "deleteAtIndex", "get", "addAtHead", "get", "get", "addAtTail", "deleteAtIndex", "addAtTail",
                        "addAtIndex", "addAtHead", "addAtIndex", "addAtTail", "get", "addAtIndex", "addAtIndex",
                        "addAtHead",
                        "addAtHead", "get", "get", "get", "addAtIndex", "addAtHead", "addAtIndex", "addAtHead",
                        "addAtTail",
                        "addAtIndex", "get"]
        self.params = [[38], [45], [2], [1, 24], [36], [3, 72], [76], [7], [36], [34], [91], [69], [37], [38], [4],
                       [66], [38], [14], [12], [32], [5], [7, 5], [74], [7], [13], [11], [8], [10, 9], [19], [3, 76],
                       [7], [37], [99], [10], [12], [1, 20], [29], [42], [21, 52], [11], [44], [47], [6, 27], [31, 85],
                       [59], [57], [4], [99], [13, 83], [10, 34], [48], [9], [22, 64], [69], [33], [5], [18], [87],
                       [42], [1], [35], [31], [67], [36, 46], [23], [64], [81], [29], [50], [23], [36, 63], [8], [19],
                       [98], [22], [28], [42], [24], [34], [32], [25], [53], [55, 76], [38], [23, 98], [27], [18],
                       [44, 27], [16, 8], [70], [15], [9], [27], [59], [40, 50], [15], [11, 57], [80], [50], [23, 37],
                       [12]]

        self.expected = [None, None, None, None, None, None, None, None,
                         None,
                         None, None, None, None, None, None, None, None,
                         None,
                         None, None, 45, None, None, 24, 91, None, 24, None, None,
                         None,
                         None, None, None, 7, None, None, None, None, None, 34,
                         None, None, None, None, None, None, 20, None, None,
                         None,
                         None, None, None, None, None, None, None, None,
                         None,
                         None, None, None, None, None, None, None, None,
                         None,
                         None, 7, None, None, None, None, None, 72, None, 45, 69,
                         None,
                         None, None, None, None, None, None, 34, None, None,
                         None,
                         None, 69, 37, 98, None, None, None, None, None, None, 57];

    def test_full_leet_code(self):
        linked_list = LinkedList()
        for i in range(len(self.methods)):
            res = getattr(linked_list, self.methods[i])(*self.params[i])
            print(res)

            self.assertEqual(res, self.expected[i],
                             '{} {} {}'.format(self.methods[i], self.params[i], self.expected[i]))


if __name__ == '__main__':
    unittest.main()

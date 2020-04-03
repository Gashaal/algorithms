import unittest
from binary_search.binary_search import binary_search


class BinarySearchTestCase(unittest.TestCase):
    def test_binary_search_not_exist(self):
        self.assertEqual(binary_search([], 2), -1)
        self.assertEqual(binary_search([-1, 0, 3, 5, 9, 12], 2), -1)

    def test_binary_search_exist(self):
        self.assertEqual(binary_search([-1, 0, 3, 5, 9, 12], 9), 4)


if __name__ == '__main__':
    unittest.main()

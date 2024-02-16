import unittest
from .bubblesort import bubble_sort


class BubbleSortTestCase(unittest.TestCase):
    def test_bubble_sort(self):
        arr = [0, 3, 2, 1]
        bubble_sort(arr)

        self.assertListEqual(arr, [0, 1, 2, 3])


if __name__ == '__main__':
    unittest.main()

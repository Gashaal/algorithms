import unittest
from .quick_sort import quick_sort


class QuickSortTestCase(unittest.TestCase):
    def test_quick_sort(self):
        arr = [0, 3, 2, 1]
        sorted_arr = quick_sort(arr)

        self.assertListEqual(sorted_arr, [0, 1, 2, 3])


if __name__ == '__main__':
    unittest.main()

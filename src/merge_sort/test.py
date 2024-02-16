import unittest
from .merge_sort import merge_sort


class MergeSortTestCase(unittest.TestCase):
    def test_merge_sort(self):
        arr = [0, 3, 2, 1]
        sorted_arr = merge_sort(arr)

        self.assertListEqual(sorted_arr, [0, 1, 2, 3])


if __name__ == '__main__':
    unittest.main()

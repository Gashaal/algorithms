import unittest
from .insertion_sort import insertion_sort


class InsertionSortTestCase(unittest.TestCase):
    def test_insertion_sort(self):
        arr = [0, 3, 2, 1]
        insertion_sort(arr)

        self.assertListEqual(arr, [0, 1, 2, 3])


if __name__ == '__main__':
    unittest.main()

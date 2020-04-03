import unittest
from .selection_sort import selection_sort


class SelectionSortTestCase(unittest.TestCase):
    def test_selection_sort(self):
        arr = [0, 3, 2, 1]
        selection_sort(arr)

        self.assertListEqual(arr, [0, 1, 2, 3])


if __name__ == '__main__':
    unittest.main()

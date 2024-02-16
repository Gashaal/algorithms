import unittest
from ..codec.codec import Codec
from .search_bst import search_bst, search_bst_iter


class SearchBSTTestCase(unittest.TestCase):
    def test_search_in_empty_tree(self):
        self.assertIsNone(search_bst(None, 0))
        self.assertIsNone(search_bst_iter(None, 0))

    def test_search_1(self):
        root = Codec().deserialize('[4,2,7,1,3]')
        val = 2

        self.assertEqual(search_bst(root, val).val, val)
        self.assertEqual(search_bst_iter(root, val).val, val)


if __name__ == '__main__':
    unittest.main()

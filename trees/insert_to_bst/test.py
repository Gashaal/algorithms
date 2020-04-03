import unittest
from ..codec.codec import Codec
from .insert_to_bst import insert_to_bst, insert_to_bst_iter


class InsertToBSTTestCase(unittest.TestCase):
    def test_insert_to_empty_tree(self):
        root = insert_to_bst(None, 10)

        self.assertEqual(root.val, 10)
        self.assertIsNone(root.left)
        self.assertIsNone(root.right)

        root = insert_to_bst_iter(None, 10)
        self.assertEqual(root.val, 10)
        self.assertIsNone(root.left)
        self.assertIsNone(root.right)

    def test_search_1(self):
        root = Codec().deserialize('[4,2,7,1,3]')
        val = 5

        after_insert_root = insert_to_bst(root, val)

        self.assertEqual(after_insert_root.val, 4)
        self.assertEqual(after_insert_root.right.left.val, 5)

        root = Codec().deserialize('[4,2,7,1,3]')
        val = 5

        after_insert_root = insert_to_bst_iter(root, val)

        self.assertEqual(after_insert_root.val, 4)
        self.assertEqual(after_insert_root.right.left.val, 5)


if __name__ == '__main__':
    unittest.main()

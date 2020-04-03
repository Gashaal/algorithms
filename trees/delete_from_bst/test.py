import unittest
from ..codec.codec import Codec
from .delete_from_bst import delete_from_bst, delete_from_bst_iter


class DeleteFromBSTTestCase(unittest.TestCase):
    def test_deletion_root(self):
        root = Codec().deserialize('[5]')
        after_deletion = delete_from_bst(root, 5)
        self.assertIsNone(after_deletion)

        root = Codec().deserialize('[5]')
        after_deletion = delete_from_bst_iter(root, 5)
        self.assertIsNone(after_deletion)

    def test_deletion_no_child(self):
        root = Codec().deserialize('[5,2,6,null,null,null,7]')
        after_deletion = delete_from_bst(root, 7)
        self.assertIsNone(after_deletion.right.right)

        root = Codec().deserialize('[5,2,6,null,null,null,7]')
        after_deletion = delete_from_bst_iter(root, 7)
        self.assertIsNone(after_deletion.right.right)

    def test_deletion_one_child(self):
        root = Codec().deserialize('[5,2,6,null,null,null,7]')
        after_deletion = delete_from_bst(root, 6)
        self.assertEqual(after_deletion.right.val, 7)
        self.assertIsNone(after_deletion.right.right)

        root = Codec().deserialize('[5,2,6,null,null,null,7]')
        after_deletion = delete_from_bst_iter(root, 6)
        self.assertEqual(after_deletion.right.val, 7)
        self.assertIsNone(after_deletion.right.right)

    def test_deletetion_two_child(self):
        root = Codec().deserialize('[5,3,6,2,4,null,7]')
        after_deletion = delete_from_bst(root, 3)
        self.assertEqual(after_deletion.left.val, 4)

        root = Codec().deserialize('[5,3,6,2,4,null,7]')
        after_deletion = delete_from_bst_iter(root, 3)
        self.assertEqual(after_deletion.left.val, 2)


if __name__ == '__main__':
    unittest.main()

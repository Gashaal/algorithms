import unittest
from trees.treenode.treenode import TreeNode
from .codec import Codec


class CodecTestCase(unittest.TestCase):

    def test_deserialize_empty(self):
        data = '[]'
        root = Codec().deserialize(data)

        self.assertIsNone(root)

    def test_deserialize_1(self):
        data = '[1,2,3]'
        root = Codec().deserialize(data)

        self.assertEqual(root.val, 1)
        self.assertEqual(root.left.val, 2)
        self.assertEqual(root.right.val, 3)

    def test_deserialize_2(self):
        data = '[1,null,2,3]'
        root = Codec().deserialize(data)

        self.assertEqual(root.val, 1)

        self.assertIsNone(root.left)
        self.assertEqual(root.right.val, 2)

        self.assertEqual(root.right.left.val, 3)
        self.assertIsNone(root.right.right)

    def test_deserialize_3(self):
        data = '[5,4,7,3,null,2,null,-1,null,9]'
        root = Codec().deserialize(data)

        self.assertEqual(root.val, 5)

        self.assertEqual(root.left.val, 4)
        self.assertEqual(root.right.val, 7)

        self.assertEqual(root.left.left.val, 3)
        self.assertIsNone(root.left.left.right)
        self.assertEqual(root.right.left.val, 2)
        self.assertIsNone(root.right.right)

        self.assertEqual(root.left.left.left.val, -1)
        self.assertIsNone(root.left.left.right)
        self.assertEqual(root.right.left.left.val, 9)
        self.assertIsNone(root.right.left.right)

    def test_serialize_empty(self):
        data = Codec().serialize(None)

        self.assertEqual(data, '[]')

    def test_serialize_1(self):
        root = TreeNode(1)

        root.left = TreeNode(2)
        root.right = TreeNode(3)

        root.right.left = TreeNode(4)
        root.right.right = TreeNode(5)

        data = Codec().serialize(root)

        self.assertEqual(data, '[1,2,3,null,null,4,5]')


if __name__ == '__main__':
    unittest.main()

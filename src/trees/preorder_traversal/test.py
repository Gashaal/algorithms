import unittest
from trees.treenode.treenode import TreeNode
from .preorder_traversal import preorder_traversal, preorder_traversal_iteratively


class PreorderTraversalTestCase(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        a = TreeNode('a')
        b = TreeNode('b')
        c = TreeNode('c')
        d = TreeNode('d')
        e = TreeNode('e')
        f = TreeNode('f')
        g = TreeNode('g')
        h = TreeNode('h')
        i = TreeNode('i')

        f.left = b
        f.right = g

        b.left = a
        b.right = d

        d.left = c
        d.right = e

        g.right = i

        i.left = h

        cls.root = f

    def test_preorder_traversal(self):
        preorder = preorder_traversal(self.root)
        self.assertListEqual(preorder, ['f', 'b', 'a', 'd', 'c', 'e', 'g', 'i', 'h'])

    def test_preorder_traversal_iteratively(self):
        preorder = preorder_traversal_iteratively(self.root)
        self.assertListEqual(preorder, ['f', 'b', 'a', 'd', 'c', 'e', 'g', 'i', 'h'])


if __name__ == '__main__':
    unittest.main()

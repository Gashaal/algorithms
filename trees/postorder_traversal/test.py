import unittest
from trees.treenode.treenode import TreeNode
from .postorder_traversal import postorder_traversal, postorder_traversal_iteratively


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

    def test_postorder_traversal(self):
        postorder = postorder_traversal(self.root)
        self.assertListEqual(postorder, ['a', 'c', 'e', 'd', 'b', 'h', 'i', 'g', 'f'])

    def test_postorder_traversal_iteratively(self):
        postorder = postorder_traversal_iteratively(self.root)
        self.assertListEqual(postorder, ['a', 'c', 'e', 'd', 'b', 'h', 'i', 'g', 'f'])


if __name__ == '__main__':
    unittest.main()

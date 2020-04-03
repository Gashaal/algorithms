import unittest
from trees.treenode.treenode import TreeNode
from .inorder_traversal import inorder_traversal, inorder_traversal_iteratively


class InorderTraversalTestCase(unittest.TestCase):
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

    def test_inorder_traversal(self):
        preorder = inorder_traversal(self.root)
        self.assertListEqual(preorder, ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'])

    def test_inorder_traversal_iteratively(self):
        preorder = inorder_traversal_iteratively(self.root)
        self.assertListEqual(preorder, ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'])

        f = TreeNode('f')
        b = TreeNode('b')
        a = TreeNode('a')

        f.left = b
        b.left = a

        preorder = inorder_traversal_iteratively(f)
        self.assertListEqual(preorder, ['a', 'b', 'f'])

        f = TreeNode('f')
        b = TreeNode('b')
        a = TreeNode('a')

        f.right = b
        b.right = a

        preorder = inorder_traversal_iteratively(f)
        self.assertListEqual(preorder, ['f', 'b', 'a'])


if __name__ == '__main__':
    unittest.main()

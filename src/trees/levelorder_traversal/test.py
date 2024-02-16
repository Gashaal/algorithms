import unittest
from trees.treenode.treenode import TreeNode
from .levelorder_traversal import levelorder_traversal, grouped_levelorder_traversal


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

    def test_levelorder_traversal(self):
        result = levelorder_traversal(self.root)
        self.assertListEqual(result, ['f', 'b', 'g', 'a', 'd', 'i', 'c', 'e', 'h'])

    def test_grouped_levelorder_traversal(self):
        result = grouped_levelorder_traversal(self.root)
        self.assertListEqual(result, [['f'], ['b', 'g'], ['a', 'd', 'i'], ['c', 'e', 'h']
                                      ])


if __name__ == '__main__':
    unittest.main()

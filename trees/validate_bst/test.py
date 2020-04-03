import unittest
from ..codec.codec import Codec
from .validate_bst import validate_bst


class ValidateBSTTestCase(unittest.TestCase):
    def test_empty_tree_is_valid(self):
        root = Codec().deserialize('[]')
        self.assertTrue(validate_bst(root))

    def test_is_valid_bst(self):
        root = Codec().deserialize('[2,1,3]')
        self.assertTrue(validate_bst(root))

    def test_is_invalid_bst(self):
        root = Codec().deserialize('[5,1,4,null,null,3,6]')
        self.assertFalse(validate_bst(root))


if __name__ == '__main__':
    unittest.main()

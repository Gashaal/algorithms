from ..inorder_traversal.inorder_traversal import inorder_traversal


def validate_bst(root):
    ordered = inorder_traversal(root)

    for i in range(len(ordered)):
        if i != len(ordered) - 1 and ordered[i] > ordered[i + 1]:
            return False

    return True

def search_bst(root, val):
    if root:
        if val < root.val:
            return search_bst(root.left, val)
        elif val > root.val:
            return search_bst(root.right, val)
        else:
            return root
    else:
        return None


def search_bst_iter(root, val):
    pointer = root

    while pointer:
        if val < pointer.val:
            pointer = pointer.left
        elif val > pointer.val:
            pointer = pointer.right
        else:
            break

    return pointer

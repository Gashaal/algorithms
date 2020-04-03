def delete_from_bst(root, key):
    if not root:
        return root
    if root.val > key:
        root.left = delete_from_bst(root.left, key)
    elif root.val < key:
        root.right = delete_from_bst(root.right, key)
    else:
        if not root.right:
            return root.left
        if not root.left:
            return root.right
        temp = root.right
        mini = temp.val
        while temp.left:
            temp = temp.left
            mini = temp.val
        root.val = mini
        root.right = delete_from_bst(root.right, root.val)
    return root


def delete_from_bst_iter(root, key):
    parent = root
    finded_node = root

    while finded_node:
        if key < finded_node.val:
            parent = finded_node
            finded_node = finded_node.left
        elif key > finded_node.val:
            parent = finded_node
            finded_node = finded_node.right
        else:
            if finded_node.left:
                right = finded_node.left
                while right.right:
                    right = right.right
                right.right = finded_node.right

                node = finded_node.left

            elif finded_node.right:
                node = finded_node.right
            else:
                node = None

            if finded_node.val < parent.val:
                parent.left = node
            elif finded_node.val > parent.val:
                parent.right = node
            else:
                root = node

            break

    return root

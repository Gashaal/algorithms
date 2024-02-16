from ..treenode.treenode import TreeNode


def insert(root, val):
    if val < root.val:
        if root.left:
            return insert(root.left, val)
        else:
            root.left = TreeNode(val)
    else:
        if root.right:
            return insert(root.right, val)
        else:
            root.right = TreeNode(val)

    return root


def insert_to_bst(root, val):
    if root:
        insert(root, val)

        return root
    else:
        return TreeNode(val)


def insert_to_bst_iter(root, val):
    if root:
        pointer = root

        while True:
            if val < pointer.val:
                if pointer.left:
                    pointer = pointer.left
                else:
                    pointer.left = TreeNode(val)
                    break
            else:
                if pointer.right:
                    pointer = pointer.right
                else:
                    pointer.right = TreeNode(val)
                    break

        return root
    else:
        return TreeNode(val)

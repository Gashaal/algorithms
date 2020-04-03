def inorder_traversal(root):
    if root:
        left = inorder_traversal(root.left)
        right = inorder_traversal(root.right)

        return left + [root.val] + right
    else:
        return []


def inorder_traversal_iteratively(root):
    inorder = []

    if root:
        nodes = []
        pointer = root

        while True:
            if pointer:
                nodes.append(pointer)
                pointer = pointer.left
            elif nodes:
                pointer = nodes.pop()
                inorder.append(pointer.val)

                pointer = pointer.right
            else:
                break

    return inorder

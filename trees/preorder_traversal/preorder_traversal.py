def preorder_traversal(root):
    if root:
        left = preorder_traversal(root.left)
        right = preorder_traversal(root.right)

        return [root.val] + left + right
    else:
        return []


def preorder_traversal_iteratively(root):
    preorder = []

    if root:
        right_nodes = []
        pointer = root

        while True:
            preorder.append(pointer.val)
            left = pointer.left
            right = pointer.right

            if left and right:
                right_nodes.append(right)
                pointer = left
            elif left:
                pointer = left
            elif right:
                pointer = right
            elif right_nodes:
                pointer = right_nodes.pop()
            else:
                break
    return preorder

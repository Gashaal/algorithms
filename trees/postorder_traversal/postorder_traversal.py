def postorder_traversal(root):
    if root:
        left = postorder_traversal(root.left)
        right = postorder_traversal(root.right)

        return left + right + [root.val]
    else:
        return []


def postorder_traversal_iteratively(root):
    if not root:
        return []

    result, queue = [], [(root, False)]
    while queue:
        curNode, visited = queue.pop()
        if curNode:
            if visited:
                result.append(curNode.val)
            else:
                queue.append((curNode, True))
                queue.append((curNode.right, False))
                queue.append((curNode.left, False))

    return result

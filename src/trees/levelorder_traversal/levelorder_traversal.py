def levelorder_traversal(root):
    result = []

    if root:
        queue = [root]

        while queue:
            current_node = queue.pop(0)
            if current_node:
                result.append(current_node.val)

                queue.append(current_node.left)
                queue.append(current_node.right)

    return result


def grouped_levelorder_traversal(root):
    result = []

    if root:
        queue = [(root, 0)]

        while queue:
            current_node, level = queue.pop(0)
            if current_node:
                if level > len(result) - 1:
                    result.append([])
                result[level].append(current_node.val)

                queue.append((current_node.left, level + 1))
                queue.append((current_node.right, level + 1))

    return result

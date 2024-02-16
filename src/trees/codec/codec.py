from ..treenode.treenode import TreeNode


class Codec:

    def serialize(self, root):
        """Encodes a tree to a single string.

        :type root: TreeNode
        :rtype: str
        """
        data = []

        if root:
            queue = [root]

            while queue:
                current_node = queue.pop(0)
                if current_node:
                    data.append(current_node.val)

                    queue.append(current_node.left)
                    queue.append(current_node.right)
                else:
                    data.append('null')

            while True:
                if data[len(data) - 1] == 'null':
                    data.pop()
                else:
                    break

        return str(data).replace("'", '').replace(' ', '')

    def deserialize(self, data):
        """Decodes your encoded data to tree.

        :type data: str
        :rtype: TreeNode
        """
        if data == '[]':
            return None

        arr = data[1:-1].split(',')
        arr.append('null')
        root = TreeNode(int(arr.pop(0)))

        nodes = [root]
        sub_node_count = 0
        level = 1
        nulls = 0

        while arr:
            max_nodes_level = level * 2 - nulls * 2
            level += 1
            nulls = 0

            while max_nodes_level and arr:
                node_val = arr.pop(0)
                node = None

                if node_val != 'null':
                    node = TreeNode(int(node_val))
                else:
                    nulls += 1

                if sub_node_count == 0:
                    pointer = nodes.pop(0)
                    if node:
                        pointer.left = node
                        nodes.append(node)
                    sub_node_count = 1
                elif sub_node_count == 1:
                    if node:
                        pointer.right = node
                        nodes.append(node)

                    sub_node_count = 0

                max_nodes_level -= 1

        return root

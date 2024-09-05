# Given the root of a binary tree, determine if it is a complete binary tree.

# In a complete binary tree, every level, except possibly the last, is completely filled, and all nodes in the last level are as far left as possible. It can have between 1 and 2^h nodes inclusive at the last level h.

# https://leetcode.com/problems/check-completeness-of-a-binary-tree/description/

# level-order traversal a complete binary tree
# there should be no more non-empty nodes after 1st empty node
class Solution(object):
    def isCompleteTree(self, root):
        queue = [root]
        seen_empty_node = False
        while queue:
            node = queue.pop(0)
            if node is None:
                seen_empty_node = True
            else:
                if seen_empty_node: return False
                queue.append(node.left)
                queue.append(node.right)
        return True

# 对完全二叉树的所有节点进行层序编号，最后一个节点编号应与节点数相同    
class Solution(object):
    def isCompleteTree(self, root):
        nodes = [(root, 1)]
        i = 0
        while i < len(nodes):
            node, h = nodes[i]
            i += 1
            if node:
                nodes.append((node.left, 2 * h))
                nodes.append((node.right, 2 * h + 1))
        return  nodes[-1][1] == len(nodes)
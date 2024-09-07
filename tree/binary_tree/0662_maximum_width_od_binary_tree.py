# Given the root of a binary tree, return the maximum width of the given tree.

# The maximum width of a tree is the maximum width among all levels.

# The width of one level is defined as the length between the end-nodes (the leftmost and rightmost non-null nodes), where the null nodes between the end-nodes that would be present in a complete binary tree extending down to that level are also counted into the length calculation.

# It is guaranteed that the answer will in the range of a 32-bit signed integer.

# https://leetcode.com/problems/maximum-width-of-binary-tree/description/

# width = right-most node idx - left-most node idx + 1
class Solution:
    def widthOfBinaryTree(self, root: Optional[TreeNode]) -> int:
        queue, max_width = [[root, 1]], 1
        while queue:
            temp = []
            for node, idx in queue:
                if node.left:
                    temp.append([node.left, 2 * idx])
                if node.right:
                    temp.append([node.right, 2 * idx + 1])
            max_width = max(max_width, queue[-1][1] - queue[0][1] + 1)
            queue = temp
        return max_width

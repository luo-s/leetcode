# Given the root of a binary tree, return its maximum depth.

# A binary tree's maximum depth is the number of nodes along the longest path 
# from the root node down to the farthest leaf node.

# https://leetcode.com/problems/maximum-depth-of-binary-tree/description/

# recursive
class Solution:
    def maxDepth(self, root: Optional[TreeNode]) -> int:
        # base case
        if not root:
            return 0
        # recursive case
        return max(self.maxDepth(root.left), self.maxDepth(root.right)) + 1

# iterative
class Solution:
    def maxDepth(self, root: Optional[TreeNode]) -> int:
        if not root:
            return 0
        max_depth, depth = 1, 1
        stack = [[root, depth]]
        while stack:
            node, depth = stack.pop()
            max_depth = max(max_depth, depth)
            if node.left:
                stack.push([node.left, depth + 1])
            if node.right:
                stack.push([node.right, depth + 1])
        return max_depth
        
# Given a binary tree, find its minimum depth.

# The minimum depth is the number of nodes along the 
# shortest path from the root node down to the nearest leaf node.

# Note: A leaf is a node with no children.

# https://leetcode.com/problems/minimum-depth-of-binary-tree/

# recursive
class Solution:
    def minDepth(self, root: Optional[TreeNode]) -> int:
        # base case
        if not root:
            return 0
        # recursive case
        # leaf node cannot be root
        if not root.left and not root.right:
            return 1
        elif not root.left:
            return self.minDepth(root.right) + 1
        elif not root.right:
            return self.minDepth(root.left) + 1
        else: 
            return min(self.minDepth(root.left), self.minDepth(root.right)) + 1
        
# iterative
class Solution:
    def minDepth(self, root: Optional[TreeNode]) -> int:
        if not root:
            return 0
        min_depth, depth = float('inf'), 1
        stack = [[root, depth]]
        while stack:
            node, depth = stack.pop()
            if depth < min_depth:
                if node.left:
                    stack.append([node.left, depth + 1])
                if node.right:
                    stack.append([node.right, depth + 1])
                if not node.left and not node.right:
                    min_depth = depth
        return min_depth

        
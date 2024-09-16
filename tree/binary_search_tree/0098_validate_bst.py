# Given the root of a binary tree, determine if it is a valid binary search tree (BST).

# A valid BST is defined as follows:

# The left subtree of a node contains only nodes with keys less than the node's key.
# The right subtree of a node contains only nodes with keys greater than the node's key.
# Both the left and right subtrees must also be binary search trees.

# https://leetcode.com/problems/validate-binary-search-tree/description/

# pre-order
class Solution:
    def isValidBST(self, root: Optional[TreeNode]) -> bool:
        if root is None:
            return True
        return self.preOrderTraversal(root, float('-inf'), float('inf'))
        
    def preOrderTraversal(self, node: Optional[TreeNode], lower: float, upper: float) -> bool:
        if node is None:
            return True
        x = node.val
        return lower < x < upper and self.preOrderTraversal(node.left, lower, x) and self.preOrderTraversal(node.right, x, upper)
    
# in-order
class Solution:
    pre = float('-inf')
    def isValidBST(self, root: Optional[TreeNode]) -> bool:
        if root is None:
            return True
        if not self.isValidBST(root.left) or root.val <= self.pre:
            return False
        self.pre = root.val
        return self.isValidBST(root.right)


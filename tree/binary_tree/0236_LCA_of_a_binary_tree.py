# Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

# According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

# https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/
# similar
# LC 235 https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/

class Solution:
    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
        # base condition 1
        if not root:
            return None
        # base condition 2: find either p or q
        if root is p or root is q:
            return root
        # recursive condition
        left = self.lowestCommonAncestor(root.left, p, q)
        right = self.lowestCommonAncestor(root.right, p, q)
        if left and right: 
            return root
        elif not left and not right: 
            return None
        else:
            return left or right


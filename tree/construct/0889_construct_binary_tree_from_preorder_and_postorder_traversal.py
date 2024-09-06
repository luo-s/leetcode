# Given two integer arrays, preorder and postorder where preorder is the preorder traversal of a binary tree of distinct values and postorder is the postorder traversal of the same tree, reconstruct and return the binary tree.

# If there exist multiple answers, you can return any of them.

# https://leetcode.com/problems/construct-binary-tree-from-preorder-and-postorder-traversal/description/

class Solution:
    def constructFromPrePost(self, preorder: List[int], postorder: List[int]) -> Optional[TreeNode]:
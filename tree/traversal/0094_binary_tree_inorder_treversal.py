# Given the root of a binary tree, 
# return the inorder traversal of its nodes' values.

# 中序遍历 in-order LNR
# https://leetcode.com/problems/binary-tree-inorder-traversal/

# recursive
class Solution:
    def inorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        res = []
        def inorder(root):
            # base case
            if not root:
                return
            # recursive case
            inorder(root.left)
            res.append(root)
            inorder(root.right)
        inorder(root)
        return res

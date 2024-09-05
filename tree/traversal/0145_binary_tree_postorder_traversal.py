# Given the root of a binary tree, 
# return the postorder traversal of its nodes' values.

# 后序遍历 post-order LRN
# https://leetcode.com/problems/binary-tree-postorder-traversal/

# recursive
class Solution:
    def postorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        res = []
        def postorder(root):
            # base case
            if not root:
                return
            # recursive case
            postorder(root.left)
            postorder(root.right)
            res.append(root.val)
        postorder(root)
        return res

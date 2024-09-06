# Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.

# https://leetcode.com/problems/kth-smallest-element-in-a-bst/description/

# in-order traversal BST (LNR) -> result in an increasing list
# return (k-1)th element
class Solution:
    def kthSmallest(self, root: Optional[TreeNode], k: int) -> int:
        res = []
        def inorder(root):
            # base case
            if not root:
                return
            # recursive case
            inorder(root.left)
            res.append(root.val)
            inorder(root.right)
        inorder(root)
        return res[k-1]


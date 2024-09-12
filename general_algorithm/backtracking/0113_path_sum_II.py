# Given the root of a binary tree and an integer targetSum, return all root-to-leaf paths where the sum of the node values in the path equals targetSum. Each path should be returned as a list of the node values, not node references.

# A root-to-leaf path is a path starting from the root and ending at any leaf node. A leaf is a node with no children.

# https://leetcode.com/problems/path-sum-ii/

class Solution:
    def pathSum(self, root: Optional[TreeNode], targetSum: int) -> List[List[int]]:
        res, path = [], []

        def backtracking(root, targetSum):
            # base case
            if not root: return
            path.append(root.val)
            if not root.left and not root.right and targetSum == root.val:
                res.append(path[:])
                path.pop()
                return
            # recursive case
            backtracking(root.left, targetSum - root.val)
            backtracking(root.right, targetSum - root.val)
            path.pop()
        
        backtracking(root, targetSum)
        return res
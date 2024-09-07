# You are given the root of a binary tree containing digits from 0 to 9 only.

# Each root-to-leaf path in the tree represents a number.

# For example, the root-to-leaf path 1 -> 2 -> 3 represents the number 123.
# Return the total sum of all root-to-leaf numbers. Test cases are generated so that the answer will fit in a 32-bit integer.

# A leaf node is a node with no children.

# https://leetcode.com/problems/sum-root-to-leaf-numbers/description/

class Solution:
    def sumNumbers(self, root: Optional[TreeNode]) -> int:
        ans = 0
        # base case
        if not root:
            return 0
        # return node value if leaf node
        if not root.left and not root.right:
            return root.val
        # update child value recursively
        if root.left:
            root.left.val += root.val * 10
            ans += self.sumNumbers(root.left) 
        if root.right:
            root.right.val += root.val * 10 
            ans += self.sumNumbers(root.right)
        return ans

class Solution:
    def sumNumbers(self, root: Optional[TreeNode]) -> int:
        def dfs(root: TreeNode, prev_total: int) -> int:
            # base case
            if not root:
                return 0
            curr_total = prev_total * 10 + root.val
            # leaf node
            if not root.left and not root.right:
                return curr_total
            # recursive case
            else:
                return dfs(root.left, curr_total) + dfs(root.right, curr_total)
        return dfs(root, 0)


        
        
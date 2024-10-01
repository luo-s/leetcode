# Given a binary tree root, a node X in the tree is named good if in the path from root to X there are no nodes with a value greater than X.

# Return the number of good nodes in the binary tree.

# https://leetcode.com/problems/count-good-nodes-in-binary-tree/

class Solution:
    def goodNodes(self, root: TreeNode) -> int:
        if not root: return 0
        cnt = 0
        def dfs(root, mx):
            if not root:
                return
            if root.val >= mx:
                nonlocal cnt
                cnt += 1
                mx = root.val
            dfs(root.left, mx)
            dfs(root.right, mx)
        dfs(root, float('-inf'))
        return cnt
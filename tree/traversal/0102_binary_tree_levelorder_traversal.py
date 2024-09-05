# Given the root of a binary tree, 
# return the level order traversal of its nodes' values. 
# (i.e., from left to right, level by level).

# https://leetcode.com/problems/binary-tree-level-order-traversal/

# level order is BFS algorithm
class Solution:
    def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        if not root:
            return []
        res, queue =[], [root]
        while queue:
            level, size = [], len(queue)
            # use level to track node from the same level
            # push next level nodes into queue
            for _ in range(size):
                curr = queue.pop(0)
                level.append(curr.val)
                if curr.left:
                    queue.append(curr.left)
                if curr.right:
                    queue.append(curr.right)
            if level:
                res.append(level)
        return res

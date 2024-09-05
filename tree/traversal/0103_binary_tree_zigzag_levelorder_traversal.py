# Given the root of a binary tree, 
# return the zigzag level order traversal of its nodes' values. 
# (i.e., from left to right, then right to left for the next level and alternate between).

# https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/description/

class Solution:
    def zigzagLevelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        if not root:
            return []
        ans, queue, depth = [], [root], 0
        while queue:
            level, size = [], len(queue)
            depth += 1
            for _ in range(size):
                cur = queue.pop(0)
                level.append(cur.val)
                if cur.left:
                    queue.append(cur.left)
                if cur.right:
                    queue.append(cur.right)
            if depth % 2 == 0:
                level.reverse()
            ans.append(level)
        return ans
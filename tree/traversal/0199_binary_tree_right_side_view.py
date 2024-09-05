# Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

# https://leetcode.com/problems/binary-tree-right-side-view/description/

# 层序遍历，考虑用队列 
# level order traversal: need a queue
class Solution:
    def rightSideView(self, root: Optional[TreeNode]) -> List[int]:
        if not root:
            return []
        # Queue to handle level order traversal
        ans, queue = [], [root]
        while queue:
            level_size = len(queue)
            for i in range(level_size):
                node = queue.pop(0)
                # Add the rightmost node of each level to the answer
                if i == level_size - 1:
                    ans.append(node.val)
                # Enqueue left and right children for the next level
                if node.left:
                    queue.append(node.left)
                if node.right:
                    queue.append(node.right)
        return ans
            
            


        
            



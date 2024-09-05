# Given the root of a binary tree, flatten the tree into a "linked list":

# The "linked list" should use the same TreeNode class where the right child pointer points to the next node in the list and the left child pointer is always null.

# The "linked list" should be in the same order as a pre-order traversal of the binary tree.

# https://leetcode.com/problems/flatten-binary-tree-to-linked-list/description/

class Solution:
    def flatten(self, root: Optional[TreeNode]) -> None:
        """
        Do not return anything, modify root in-place instead.
        """
        cur = root
        while cur:
            if cur.left:
                pre = nxt = cur.left
                # find cur.left's rightmost node
                while pre.right:
                    pre = pre.right
                # move cur.right to cur.left's rightmost node
                pre.right = cur.right
                # move left child node to right
                cur.left = None
                cur.right = nxt
            cur = cur.right

# pre-order traversal
class Solution:
    def flatten(self, root: Optional[TreeNode]) -> None:
        # pre-order all nodes to list
        preorderList = list()
        def preorderTraversal(root: TreeNode):
            if root:
                preorderList.append(root)
                preorderTraversal(root.left)
                preorderTraversal(root.right)
        preorderTraversal(root)
        # reconnect nodes
        size = len(preorderList)
        for i in range(1, size):
            prev, curr = preorderList[i - 1], preorderList[i]
            prev.left = None
            prev.right = curr


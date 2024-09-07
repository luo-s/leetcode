# Given the root of an n-ary tree, return the postorder traversal of its nodes' values.

# Nary-Tree input serialization is represented in their level order traversal. Each group of children is separated by the null value (See examples)

# https://leetcode.com/problems/n-ary-tree-postorder-traversal/description/

"""
# Definition for a Node.
class Node:
    def __init__(self, val: Optional[int] = None, children: Optional[List['Node']] = None):
        self.val = val
        self.children = children
"""
class Solution:
    def postorder(self, root: 'Node') -> List[int]:
        res = []
        def postorder(root):
            # base case
            if not root:
                return
            # recursive case
            for i in range(len(root.children)):
                postorder(root.children[i])
            res.append(root.val)
        postorder(root)
        return res
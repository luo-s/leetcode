# Given the root of an n-ary tree, return the preorder traversal of its nodes' values.

# Nary-Tree input serialization is represented in their level order traversal. Each group of children is separated by the null value (See examples)

# https://leetcode.com/problems/n-ary-tree-preorder-traversal/description/

"""
# Definition for a Node.
class Node:
    def __init__(self, val: Optional[int] = None, children: Optional[List['Node']] = None):
        self.val = val
        self.children = children
"""
class Solution:
    def preorder(self, root: 'Node') -> List[int]:
        res = []
        def preorder(root):
            # base case
            if not root:
                return
            # recursive case
            res.append(root.val)
            for i in range(len(root.children)):
                preorder(root.children[i])
        preorder(root)
        return res
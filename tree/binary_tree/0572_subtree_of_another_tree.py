# Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise.

# A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's descendants. The tree tree could also be considered as a subtree of itself.

# similar leetcode 100 same tree
# https://leetcode.com/problems/subtree-of-another-tree/description/

class Solution:
    def isSubtree(self, root: Optional[TreeNode], subRoot: Optional[TreeNode]) -> bool:
        if not root:
            return subRoot == None
        if self.isSameTree(root, subRoot):
            return True
        return self.isSubtree(root.left, subRoot) or self.isSubtree(root.right, subRoot)
        
    def isSameTree(self, p: Optional[TreeNode], q: Optional[TreeNode]) -> bool:
      if not p and not q:
          return True
      if p and q and p.val == q.val:
          return self.isSameTree(p.left, q.left) and self.isSameTree(p.right, q.right)
      # all false situations
      return False
# Given the root of a binary tree, 
# return the inorder traversal of its nodes' values.

# 中序遍历 in-order LNR
# https://leetcode.com/problems/binary-tree-inorder-traversal/

# recursive
class Solution:
    def inorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        res = []
        def inorder(root):
            # base case
            if not root:
                return
            # recursive case
            inorder(root.left)
            res.append(root)
            inorder(root.right)
        inorder(root)
        return res

# iterative
class Solution:
    def inorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        if not root:
            return []
        res, stack = [], []
        # 根结点或栈不为空
        while root or stack:
            # 找到最左侧节点，并将沿路节点入栈
            while root:
                stack.append(root)
                root = root.left
            # 弹出最左侧节点
            node = stack.pop()
            # 访问该节点
            res.append(node.val)
            # 访问右子树
            root = node.right
        return res
            



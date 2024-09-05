# Given the root of a binary tree, 
# return the preorder traversal of its nodes' values.

# 前序遍历 pre-order NLR
# https://leetcode.com/problems/binary-tree-preorder-traversal/

# recursive
class Solution:
    def preorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        res = []
        def preorder(root):
            # base case
            if not root:
                return
            # recursive case
            res.append(root.val)
            preorder(root.left)
            preorder(root.right)
        preorder(root)
        return res

# iterative + stack        
class Solution:
    def preorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        if not root:                       
            return []            
        res, stack = [], [root]
        while stack:
            # 弹出根节点                        
            node = stack.pop()
            # 访问根节点              
            res.append(node.val)
            # 右子树入栈            
            if node.right:
                stack.append(node.right)
            # 左子树入栈    
            if node.left:
                stack.append(node.left)     
        return res
# Given the root of a binary tree, 
# return the postorder traversal of its nodes' values.

# 后序遍历 post-order LRN
# https://leetcode.com/problems/binary-tree-postorder-traversal/

# recursive
class Solution:
    def postorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        res = []
        def postorder(root):
            # base case
            if not root:
                return
            # recursive case
            postorder(root.left)
            postorder(root.right)
            res.append(root.val)
        postorder(root)
        return res

class Solution:
    def postorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        res, stack = [], []
        # 保存前一个访问的节点，用于确定当前节点的右子树是否访问完毕
        prev = None                 
        # 根节点或栈不为空
        while root or stack:  
            # 找到最左侧节点，并将沿路节点入栈      
            while root:
                stack.append(root)  
                root = root.left    
            # 弹出最左侧节点
            node = stack.pop()      
            # 如果当前节点无右子树或者右子树访问完毕
            if not node.right or node.right == prev:
                res.append(node.val)
                # 记录前一节点
                prev = node
                # 将当前根节点标记为空        
                root = None         
            else:
                # 右子树尚未访问完毕，将当前节点重新压回栈中
                stack.append(node) 
                # 继续访问右子树
                root = node.right   
        return res

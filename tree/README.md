# Tree

## Binary Tree 

#### 二叉树（Binary Tree）：树中各个节点的度不大于 2 的有序树，称为二叉树。通常树中的分支节点被称为 「左子树」 或 「右子树」。二叉树的分支具有左右次序，不能随意互换位置。

#### 完美二叉树（Perfect Binary Tree）: All internal nodes have exactly two children, and all leaf nodes are at the same level.

#### 完满二叉树（Full Binary Tree）: every node other than the leaves has two children. 所有非叶子结点的度都是2（只要有孩子，就必然有两个），但叶子结点不受限制。

#### 完全二叉树（Complete Binary Tree）: 完全二叉树从根结点到倒数第二层满足完美二叉树，最后一层可以不完全填充，其叶子结点都靠左对齐。
- [0958 Check Completeness of a Binary Tree](https://leetcode.com/problems/check-completeness-of-a-binary-tree/)

#### DFS traversal（一般通过递归实现）
- [0094 Binary Tree Inorder Traversal 中序遍历 LNR](https://leetcode.com/problems/binary-tree-inorder-traversal/)
- [0144 Binary Tree Preorder Traversal 先序遍历 NLR](https://leetcode.com/problems/binary-tree-preorder-traversal/)
- [0145 Bianry Tree PostOrder Traversal 后序遍历 LRN](https://leetcode.com/problems/binary-tree-postorder-traversal/)
- [0589 N-ary Tree PreOrder Traversal](https://leetcode.com/problems/n-ary-tree-preorder-traversal/)
- [0590 N-ary Tree PostOrder Traversal](https://leetcode.com/problems/n-ary-tree-postorder-traversal/)
- [0114 Flatten Binary Tree to Linked-List](https://leetcode.com/problems/flatten-binary-tree-to-linked-list/)

#### BFS traversal（一般通过队列实现）
- [0102 Binary Tree LevelOrder Traversal 层序遍历](https://leetcode.com/problems/binary-tree-level-order-traversal/)
- [0103 Binary Tree Zigzag LevelOrder Traversal](https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/)
- [0199 Binary Tree Right Side View](https://leetcode.com/problems/binary-tree-right-side-view/)

#### 二叉树题目

- [0100 Same Tree](https://leetcode.com/problems/same-tree/)
- [0572 Subtree of Another Tree](https://leetcode.com/problems/subtree-of-another-tree)
- [0101 Symmetric Tree](https://leetcode.com/problems/symmetric-tree)
- [0226 Invert Binary Tree](https://leetcode.com/problems/invert-binary-tree)
- [0104 Maximum Depth of Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree)
- [0111 Minimum Depth of Binary Tree](https://leetcode.com/problems/minimum-depth-of-binary-tree/)
- [0543 Diameter of Binary Tree](https://leetcode.com/problems/diameter-of-binary-tree)
- [0112 Path Sum](https://leetcode.com/problems/path-sum/)
- [0129 Sum Root to Leaf Numbers](https://leetcode.com/problems/sum-root-to-leaf-numbers)
- [0236 LCA of a Binaty Tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree)
- [0662 Maximum Width of Binary Tree](https://leetcode.com/problems/maximum-width-of-binary-tree)

## Binary Search Tree

#### 二叉搜索树（Binary Search Tree）: 空树或有以下性质的二叉树:
1. 如果任意节点的左子树不为空，则左子树上所有节点的值均小于它的根节点的值。
2. 如果任意节点的右子树不为空，则右子树上所有节点的值均大于它的根节点的值。
3. 任意节点的左子树、右子树均为二叉搜索树。
4. 推论：层序遍历二叉搜索树，得到一个递增数列。

- [0098 Validate BST](https://leetcode.com/problems/validate-binary-search-tree)
- [0700 Search in a BST](https://leetcode.com/problems/search-in-a-binary-search-tree)
- [0230 Kth Smallest Element in BST](https://leetcode.com/problems/kth-smallest-element-in-a-bst/)
- [0235 LCA of a BST](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/)

#### 平衡二叉搜索树（Balanced Binary Tree）：一种结构平衡的二叉搜索树。即叶节点高度差的绝对值不超过 1，并且左右两个子树都是一棵平衡二叉搜索树。平衡二叉树可以在 O(logn) 内完成插入、查找和删除操作。最早被发明的平衡二叉搜索树为 「AVL 树（Adelson-Velsky and Landis Tree））」。
- [0110 Balanced Tree](https://leetcode.com/problems/balanced-binary-tree)
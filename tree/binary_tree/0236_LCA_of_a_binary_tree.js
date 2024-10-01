/*
Given a binary tree, find the lowest common ancestor (LCA) of two given 
nodes in the tree.

According to the definition of LCA on Wikipedia: “The lowest common ancestor 
is defined between two nodes p and q as the lowest node in T that has both 
p and q as descendants (where we allow a node to be a descendant of itself).”

The number of nodes in the tree is in the range [2, 10^5].
-10^9 <= Node.val <= 10^9
All Node.val are unique.
p != q
p and q will exist in the tree.
*/

// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/description/

var lowestCommonAncestor = function (root, p, q) {
  // if root is null, return null
  if (root === null) {
    return null;
  }
  // if root is p or root is q, root is the LCA
  if (root === p || root === q) {
    return root;
  }
  // recursively find LCA in left and right subtrees
  let left = lowestCommonAncestor(root.left, p, q);
  let right = lowestCommonAncestor(root.right, p, q);
  // if left and right are both not null, then p and q are separately
  // in left and right subtrees, thus the root is the LCA
  if (left !== null && right !== null) {
    return root;
  }
  // if left is null, p and q are both in right subtree, vice versa
  return left !== null ? left : right;
};

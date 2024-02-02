/*
Given the root of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.
*/

var isValidBST = function (root) {
  var preorderTraversal = function (root, min, max) {
    if (!root) return true;
    if (root.val <= min || root.val >= max) return false;
    return (
      preorderTraversal(root.left, min, root.val) &&
      preorderTraversal(root.right, root.val, max)
    );
  };
  return preorderTraversal(root, -Infinity, Infinity);
};

/*
Given the root of a binary tree, return the inorder traversal of its nodes' values.

Definition for a binary tree node:
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
*/

// https://leetcode.com/problems/binary-tree-inorder-traversal/description/

// recursive solution
var inorderTraversal = function (root) {
  if (!root) return [];
  let result = [];
  if (root.left) result = result.concat(inorderTraversal(root.left));
  result.push(root.val);
  if (root.right) result = result.concat(inorderTraversal(root.right));
  return result;
};

// modularized recursive solution
var inorderTraversal = function (root) {
  function traverse(node, result) {
    if (!node) return;
    traverse(node.left, result);
    result.push(node.val);
    traverse(node.right, result);
  }
  let result = [];
  traverse(root, result);
  return result;
};

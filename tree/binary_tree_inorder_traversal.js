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

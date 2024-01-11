/*
Given the root of a binary tree, return the preorder traversal of its nodes' values.

Definition for a binary tree node:
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
*/

// https://leetcode.com/problems/binary-tree-preorder-traversal/description/

// recursive solution
var preorderTraversal = function (root) {
  if (!root) return [];
  let result = [];
  result.push(root.val);
  if (root.left) result = result.concat(preorderTraversal(root.left));
  if (root.right) result = result.concat(preorderTraversal(root.right));
  return result;
};

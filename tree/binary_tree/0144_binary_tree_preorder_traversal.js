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

// modularized recursive solution
var preorderTraversal = function (root) {
  function traverse(node, result) {
    if (!node) return;
    result.push(node.val);
    traverse(node.left, result);
    traverse(node.right, result);
  }
  let result = [];
  traverse(root, result);
  return result;
};

// iterative solution + stack
var preorderTraversal = function (root) {
  if (!root) return [];
  let result = [];
  let stack = [root];
  while (stack.length) {
    let node = stack.pop();
    result.push(node.val);
    // first in last out, thus push right first
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }
  return result;
};

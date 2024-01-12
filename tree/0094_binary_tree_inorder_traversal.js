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

// iterative solution + stack
// pop node only after its left subtree is visited
var inorderTraversal = function (root) {
  if (!root) return [];
  let result = [];
  let stack = [];
  while (root || stack.length) {
    // push all root nodes into stack
    while (root) {
      stack.push(root);
      root = root.left;
    }
    // traverse to the most left untraversed subtree
    let curr = stack.pop();
    // visit the node
    result.push(curr.val);
    // traverse the right subtree
    root = curr.right;
  }
  return result;
};

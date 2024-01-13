/*
Given the root of a binary tree, return the postorder traversal of its nodes' values.

Definition for a binary tree node:
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
*/

// https://leetcode.com/problems/binary-tree-postorder-traversal/description/

// recursive solution
var postorderTraversal = function (root) {
  if (!root) return [];
  let result = [];
  if (root.left) result = result.concat(postorderTraversal(root.left));
  if (root.right) result = result.concat(postorderTraversal(root.right));
  result.push(root.val);
  return result;
};

// modularized recursive solution
var postorderTraversal = function (root) {
  function traverse(node, result) {
    if (!node) return;
    traverse(node.left, result);
    traverse(node.right, result);
    result.push(node.val);
  }
  let result = [];
  traverse(root, result);
  return result;
};

// iterative solution + stack
// pop node only after both left and right subtree are visited
var postorderTraversal = function (root) {
  if (!root) return [];
  let result = [];
  let stack = [];
  let prev = null;
  while (root || stack.length) {
    // push all root nodes into stack
    while (root) {
      stack.push(root);
      root = root.left;
    }
    let curr = stack.pop();
    // if right subtree is not visited yet, push the root back into stack
    // and traverse the right subtree
    if (curr.right && curr.right !== prev) {
      stack.push(curr);
      root = curr.right;
    } else {
      // if right subtree is visited, visit the node
      result.push(curr.val);
      prev = curr;
      root = null;
    }
  }
  return result;
};

/*
Given the root of a binary tree and an integer targetSum, return true if 
the tree has a root-to-leaf path such that adding up all the values along 
the path equals targetSum.

A leaf is a node with no children.
*/

// https://leetcode.com/problems/path-sum/description/

// recursive solution
var hasPathSum = function (root, targetSum) {
  if (!root) return false;
  if (!root.left && !root.right && targetSum === root.val) return true;
  return (
    hasPathSum(root.left, targetSum - root.val) ||
    hasPathSum(root.right, targetSum - root.val)
  );
};

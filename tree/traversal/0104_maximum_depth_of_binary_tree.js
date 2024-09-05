/*
Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path 
from the root node down to the farthest leaf node.
*/

// https://leetcode.com/problems/maximum-depth-of-binary-tree/

// recursive solution
var maxDepth = function (root) {
  if (!root) return 0;
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};

// iterative solution
var maxDepth = function (root) {
  if (!root) return 0;
  let max = 1,
    depth = 1;
  let stack = [[root, depth]];
  while (stack.length) {
    let [node, depth] = stack.pop();
    max = Math.max(max, depth);
    if (node.left) stack.push([node.left, depth + 1]);
    if (node.right) stack.push([node.right, depth + 1]);
  }
  return max;
};

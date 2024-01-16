/*
Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along the shortest path from the 
root node down to the nearest leaf node.

Note: A leaf is a node with no children.
*/

// https://leetcode.com/problems/minimum-depth-of-binary-tree/description/

// recursive solution
var minDepth = function (root) {
  if (!root) return 0;
  if (!root.left && !root.right) return 1;
  if (!root.left && root.right) return 1 + minDepth(root.right);
  if (root.left && !root.right) return 1 + minDepth(root.left);
  return 1 + Math.min(minDepth(root.left), minDepth(root.right));
};

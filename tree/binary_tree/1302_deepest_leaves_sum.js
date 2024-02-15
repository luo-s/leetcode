/*
Given the root of a binary tree, return the sum of values of its deepest leaves.
*/

// https://leetcode.com/problems/deepest-leaves-sum/description/

// depth first search
var deepestLeavesSum = function (root) {
  let depthSum = new Map();
  var dfs = function (node, depth) {
    if (node.left) dfs(node.left, depth + 1);
    if (node.right) dfs(node.right, depth + 1);
    if (!node.left && !node.right) {
      depthSum.set(depth, (depthSum.get(depth) || 0) + node.val);
    }
  };
  dfs(root, 0);
  return depthSum.get(Math.max(...depthSum.keys()));
};

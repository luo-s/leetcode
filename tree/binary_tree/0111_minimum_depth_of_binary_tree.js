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

// iterative solution
var minDepth = function (root) {
  if (!root) return 0;
  let min = Infinity,
    depth = 1;
  let stack = [[root, depth]];
  while (stack.length) {
    let [node, depth] = stack.pop();
    if (!node.left && !node.right) min = Math.min(min, depth);
    if (node.left) stack.push([node.left, depth + 1]);
    if (node.right) stack.push([node.right, depth + 1]);
  }
  return min;
};

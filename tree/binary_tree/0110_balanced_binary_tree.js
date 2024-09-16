/*
Given a binary tree, determine if it is height-balanced.
*/

var isBalanced = function (root) {
  // define the function to get the height of the tree
  var getHeight = function (node) {
    // if the node is null, return 0
    if (!node) return 0;
    // get the height of the left and right subtree
    let left = getHeight(node.left);
    let right = getHeight(node.right);
    // if the left or right subtree is not balanced, return -1
    if (left === -1 || right === -1 || Math.abs(left - right) > 1) return -1;
    // return the height of the tree
    else return Math.max(left, right) + 1;
  };
  return getHeight(root) !== -1;
};

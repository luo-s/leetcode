/*
<<<<<<< HEAD
Given the root of a binary tree and an integer targetSum, return all 
root-to-leaf paths where the sum of the node values in the path equals 
targetSum. Each path should be returned as a list of the node values, 
not node references.

A root-to-leaf path is a path starting from the root and ending at any 
leaf node. A leaf is a node with no children.

The number of nodes in the tree is in the range [0, 5000].
-1000 <= Node.val <= 1000
-1000 <= targetSum <= 1000
*/

// https://leetcode.com/problems/path-sum-ii/description/
// related https://leetcode.com/problems/combination-sum/description/

var pathSum = function (root, targetSum) {
  let result = [];
  let path = [];
  // define backtracking function
  var backtracking = function (root, targetSum) {
    if (!root) return;
    path.push(root.val);
    // push possible solution to result
    if (!root.left && !root.right && targetSum === root.val) {
      result.push([...path]);
      // pop last element to backtrack
      path.pop();
      return;
    }
    // recursively call backtracking function (go left or right)
    backtracking(root.left, targetSum - root.val);
    backtracking(root.right, targetSum - root.val);
    // pop last element to backtrack
    path.pop();
  };
  backtracking(root, targetSum);
  return result;
};

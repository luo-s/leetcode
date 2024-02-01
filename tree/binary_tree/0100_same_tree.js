/*
Given the roots of two binary trees p and q, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.
*/

// https://leetcode.com/problems/same-tree/

var isSameTree = function (p, q) {
  // if both are null
  if (!p && !q) return true;
  // if one is null and the other is not
  if (!p || !q) return false;
  // if both are not null but have different values
  if (p.val !== q.val) return false;
  // check recursively
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

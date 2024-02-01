/*
Given the root of a binary tree, check whether it is 
a mirror of itself (i.e., symmetric around its center).
*/

// https://leetcode.com/problems/symmetric-tree/description/

// recursive solution
var isSymmetric = function(root) {
    var isMirror = function(left, right) {
        if (!left && !right) return true;
        if (!left || !right) return false;
        return (left.val === right.val) && isMirror(left.left, right.right) && isMirror(left.right, right.left);
    }
    if (!root) return true;
    return isMirror(root.left, root.right);

};


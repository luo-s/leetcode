/*
Given a root node reference of a BST and a key, delete the node with the 
given key in the BST. 

Return the root node reference (possibly updated) of the BST.

Basically, the deletion can be divided into two stages:

Search for a node to remove.
If the node is found, delete the node.
*/

// move left subtree to the left of the smallest node in the right subtree
// replace the node with the right subtree
var deleteNode = function (root, key) {
  // if the root is null, return null
  if (!root) return root;
  if (root.val > key) {
    // if the root value > key, go left
    root.left = deleteNode(root.left, key);
    return root;
  } else if (root.val < key) {
    // if the root value < key, go right
    root.right = deleteNode(root.right, key);
    return root;
  } else {
    // found the matching node
    if (!root.left) return root.right;
    if (!root.right) return root.left;
    // find the smallest node in the right subtree
    let minRight = root.right;
    while (minRight.left) {
      minRight = minRight.left;
    }
    // move left subtree to the left of the smallest node in the right subtree
    minRight.left = root.left;
    // replace the node with the right subtree
    return root.right;
  }
};

/*
Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. 
If the two linked lists have no intersection at all, return null.
*/

// https://leetcode.com/problems/intersection-of-two-linked-lists/

// brute force
// time complexity: O(n * m)
// space complexity: O(1)
var getIntersectionNode = function (headA, headB) {
  let currA = headA,
    currB = headB;
  while (currA) {
    while (currB) {
      if (currA === currB) return currA;
      currB = currB.next;
    }
    currA = currA.next;
    currB = headB;
  }
  return null;
};
// optimized
var getIntersectionNode = function (headA, headB) {
  let currA = headA,
    currB = headB;
  while (currA !== currB) {
    currA = currA ? currA.next : headB;
    currB = currB ? currB.next : headA;
  }
  return currA;
};

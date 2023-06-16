/*
Given head, the head of a linked list, determine if the linked list has a cycle 
in it.

Return true if there is a cycle in the linked list. Otherwise, return false.
*/
// https://leetcode.com/problems/linked-list-cycle/description/

// Map fueatures
// time complexity O(n)
// space complexity O(n)
var hasCycle = function (head) {
  if (!head) return false;
  const seen = new Map();
  let curr = head;
  while (curr.next) {
    if (seen.has(curr)) {
      return true;
    } else {
      seen.set(curr, true);
    }
    curr = curr.next;
  }
  return false;
};

// set fueatures
// time complexity O(n)
// space complexity O(n)
var hasCycle = function (head) {
  if (!head) return false;
  const seen = new Set();
  let curr = head;
  while (curr.next) {
    if (seen.has(curr)) {
      return true;
    } else {
      seen.add(curr);
    }
    curr = curr.next;
  }
  return false;
};

// two pointers
// time complexity O(n)
// space complexity O(1)
var hasCycle = function (head) {
  if (!head) return false;
  let fast = head;
  let slow = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (fast === slow) return true;
  }
  return false;
};

/*
You are given the head of a singly linked-list. The list can be represented as:

L0 → L1 → … → Ln - 1 → Ln
Reorder the list to be on the following form:

L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
You may not modify the values in the list's nodes. 
Only nodes themselves may be changed.
*/

// https://leetcode.com/problems/reorder-list/

// reverse the second half, cut and merge
var reorderList = function (head) {
  let slow = head,
    fast = head;
  // find the node before the middle node
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  // cut the list into two halves
  let secondHalf = slow.next;
  slow.next = null;
  // reverse the second half
  let prev = null;
  while (secondHalf) {
    let next = secondHalf.next;
    secondHalf.next = prev;
    prev = secondHalf;
    secondHalf = next;
  }
  // merge two lists
  let firstHalf = head;
  secondHalf = prev;
  while (secondHalf) {
    let next = firstHalf.next;
    firstHalf.next = secondHalf;
    secondHalf = secondHalf.next;
    firstHalf.next.next = next;
    firstHalf = next;
  }
  return head;
};

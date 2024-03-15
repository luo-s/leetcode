/*
Given the head of a linked list, rotate the list to the right by k places.

The number of nodes in the list is in the range [0, 500].
-100 <= Node.val <= 100
0 <= k <= 2 * 10^9
*/

// https://leetcode.com/problems/rotate-list/description/

// make a circle, find the new head (need to know length), cut the circle
// time complexity: O(n)
// space complexity: O(1)
var rotateRight = function (head, k) {
  if (!head || !head.next || k === 0) return head;
  // calculate the length
  let length = 1,
    curr = head;
  while (curr.next) {
    length++;
    curr = curr.next;
  }
  // make it circular
  curr.next = head;
  // update k
  k %= length;
  // find the new head & tail
  curr = head;
  // find the new tail: move length - k staps
  for (i = 1; i < length - k; i++) {
    curr = curr.next;
  }
  let newHead = curr.next;
  // cut the circle
  curr.next = null;
  return newHead;
};

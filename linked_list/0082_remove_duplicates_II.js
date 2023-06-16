/*
Given the head of a sorted linked list, delete all nodes that have duplicate 
numbers, leaving only distinct numbers from the original list. Return the 
linked list sorted as well.
*/
// https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// dummy node technique
var deleteDuplicates = function (head) {
  if (head === null) return null;
  const dummy = new ListNode(0, head);
  let cur = dummy;
  while (cur.next && cur.next.next) {
    if (cur.next.val == cur.next.next.val) {
      const repeatValue = cur.next.val;
      while (cur.next && cur.next.val === repeatValue) {
        cur.next = cur.next.next;
      }
    } else {
      cur = cur.next;
    }
  }
  return dummy.next;
};

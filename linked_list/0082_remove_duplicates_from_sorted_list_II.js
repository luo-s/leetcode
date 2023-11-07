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
// time compleixty O(n)
// space complexity O(1)
var deleteDuplicates = function (head) {
  if (head === null) return null;
  const dummyNode = new ListNode(0, head);
  let cur = dummyNode;
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
  return dummyNode.next;
};

// fast and slow pointers
// time complexity O(n)
// space complexity O(1)
var deleteDuplicates = function (head) {
  let dummyNode = { next: head }; // const dummyNode = new ListNode(0, head);
  let fast = head,
    slow = dummyNode;
  while (fast) {
    while (fast.next && fast.next.val == fast.val) {
      fast = fast.next;
    }
    if (slow.next != fast) {
      slow.next = fast.next;
    } else {
      slow = slow.next;
    }
    fast = fast.next;
  }
  return dummyNode.next;
};

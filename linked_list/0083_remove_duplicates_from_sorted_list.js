/*
Given the head of a sorted linked list, delete all nodes that have duplicate 
numbers, leaving only distinct numbers from the original list. Return the linked 
list sorted as well.
*/

// https://leetcode.com/problems/remove-duplicates-from-sorted-list/description/

// time complexity O(n)
// space complexity O(1)
var deleteDuplicates = function (head) {
  let dummy = new ListNode(0, head);
  while (head && head.next) {
    if (head.val === head.next.val) {
      head.next = head.next.next;
    } else {
      head = head.next;
    }
  }
  return dummy.next;
};

var deleteDuplicates = function (head) {
  let curr = head;
  while (curr && curr.next) {
    if (curr.val === curr.next.val) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }
  return head;
};

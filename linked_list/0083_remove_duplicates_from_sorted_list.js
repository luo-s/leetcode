/*
Given the head of a sorted linked list, delete all nodes that have duplicate 
numbers, leaving only distinct numbers from the original list. Return the linked 
list sorted as well.
*/

// time complexity O(n)
// space complexity O(1)
var deleteDuplicates = function (head) {
  var cur = head;
  while (cur && cur.next) {
    if (cur.val == cur.next.val) {
      cur.next = cur.next.next;
    } else {
      cur = cur.next;
    }
  }
  return head;
};

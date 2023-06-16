/*
Given the head of a singly linked list, return the middle node of the linked 
list.
If there are two middle nodes, return the second middle node.
*/
var middleNode = function (head) {
  let fast = head;
  let slow = head;
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  if (fast.next && !fast.next.next) {
    slow = slow.next;
  }
  return slow;
};

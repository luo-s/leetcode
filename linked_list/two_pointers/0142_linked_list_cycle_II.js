/*
Given the head of a linked list, return the node where the cycle begins. 
If there is no cycle, return null.

There is a cycle in a linked list if there is some node in the list that 
can be reached again by continuously following the next pointer. 
Internally, pos is used to denote the index of the node that tail's next 
pointer is connected to (0-indexed). 
It is -1 if there is no cycle. Note that pos is not passed as a parameter.

Do not modify the linked list.
*/

// https://leetcode.com/problems/linked-list-cycle-ii/description/

// return the index of node which two pointers meet
var detectCycle = function (head) {
  if (!head || !head.next) return null;
  let set = new Set();
  curr = head;
  while (curr) {
    if (set.has(curr)) return curr;
    set.add(curr);
    curr = curr.next;
  }
  return null;
};

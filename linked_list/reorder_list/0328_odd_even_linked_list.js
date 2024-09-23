/*
Given the head of a singly linked list, group all the nodes with odd indices 
together followed by the nodes with even indices, and return the reordered list.

The first node is considered odd, and the second node is even, and so on.

Note that the relative order inside both the even and odd groups should 
remain as it was in the input.

You must solve the problem in O(1) extra space complexity and O(n) time complexity.
The number of nodes in the linked list is in the range [0, 10^4].
-10^6 <= Node.val <= 10^6
*/

// https://leetcode.com/problems/odd-even-linked-list/

var oddEvenList = function (head) {
  if (!head) return head;
  let curr = head,
    evenHead = head.next;
  let index = 1;
  while (curr.next && curr.next.next) {
    let next = curr.next;
    curr.next = next.next;
    curr = next;
    index++;
  }
  if (index % 2) {
    curr.next = evenHead;
  } else {
    curr.next.next = evenHead;
    curr.next = null;
  }
  return head;
};

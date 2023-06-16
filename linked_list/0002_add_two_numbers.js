/*
You are given two non-empty linked lists representing two non-negative integers. 
The digits are stored in reverse order, and each of their nodes contains a 
single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the 
number 0 itself.
*/
// https://leetcode.com/problems/add-two-numbers/description/

var addTwoNumbers = function (l1, l2) {
  let head = null;
  let tail = null;
  let carry = 0;
  while (l1 || l2) {
    const n1 = l1 ? l1.val : 0;
    const n2 = l2 ? l2.val : 0;
    const sum = n1 + n2 + carry;
    if (!head) {
      head = tail = new ListNode(sum % 10);
    } else {
      tail.next = new ListNode(sum % 10);
      tail = tail.next;
    }
    carry = Math.floor(sum / 10);
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }
  if (carry > 0) tail.next = new ListNode(carry, null);
  return head;
};

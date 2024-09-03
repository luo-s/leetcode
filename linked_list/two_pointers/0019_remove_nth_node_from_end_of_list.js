/*
Given the head of a linked list, 
remove the nth node from the end of the list and return its head.

The number of nodes in the list is sz.
1 <= sz <= 30
0 <= Node.val <= 100
1 <= n <= sz
*/

// https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/

var removeNthFromEnd = function (head, n) {
  let slow = head,
    fast = head;
  // move n steps: fast is n steps ahead of slow
  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }
  // if fast is null, n === sz, remove the head
  if (!fast) return head.next;
  // move slow and fast together: fast is tail, slow is (n+1)th from the end
  while (fast.next) {
    fast = fast.next;
    slow = slow.next;
  }
  // remove the nth node
  slow.next = slow.next.next;
  return head;
};

// dummy node version
var removeNthFromEnd = function (head, n) {
  let dummy = new ListNode(0, head);
  let slow = dummy,
    fast = dummy;
  // move n steps: fast is n steps ahead of slow
  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }
  // move slow and fast together: fast is tail, slow is (n+1)th from the end
  while (fast.next) {
    fast = fast.next;
    slow = slow.next;
  }
  // remove the nth node
  slow.next = slow.next.next;
  return dummy.next;
};

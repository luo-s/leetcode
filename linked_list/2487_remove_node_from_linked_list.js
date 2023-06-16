/*
You are given the head of a linked list.

Remove every node which has a node with a strictly greater value anywhere to the 
right side of it.

Return the head of the modified linked list.
*/
// https://leetcode.com/problems/remove-nodes-from-linked-list/

var removeNodes = function (head) {
  const reverseList = (head) => {
    let prev = null;
    let curr = head;
    while (curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    return prev;
  };
  const revHead = reverseList(head);
  const max = -Infinity;
  let curr = revHead;
  while (curr) {
    if (curr.val < max) {
    } else {
      max = Math.max(max, curr.val);
    }
  }
};

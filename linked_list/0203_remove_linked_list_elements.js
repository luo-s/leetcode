/*
Given the head of a linked list and an integer val, remove all the nodes of the 
linked list that has Node.val == val, and return the new head.
*/

// time complexity O(n)
// space complexity O(1)
var removeElements = function (head, val) {
  let dummyNode = new ListNode(0, head);
  let curr = dummyNode;
  while (curr.next) {
    if (curr.next.val == val) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }
  return dummyNode.next;
};

// recursion
// time complexity O(n)
// space compleixty/calling stack O(n)
var removeElements = function (head, val) {
  if (head === null) {
    return head;
  }
  head.next = removeElements(head.next, val);
  return head.val === val ? head.next : head;
};

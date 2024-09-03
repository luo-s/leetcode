/*
Given the head of a singly linked list and two integers left and right where 
left <= right, reverse the nodes of the list from position left to position 
right, and return the reversed list.
*/
// https://leetcode.com/problems/reverse-linked-list-ii/
// https://leetcode.cn/problems/reverse-linked-list-ii/solution/fan-zhuan-lian-biao-ii-by-leetcode-solut-teyq/

// cut, reverse, and connect
var reverseBetween = function (head, left, right) {
  var reverseList = function (node) {
    let prev = new ListNode(0, node);
    curr = node;
    while (curr) {
      const next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    return prev;
  };
  const dummyNode = new ListNode(0, head);
  let curr = dummyNode;
  // move left - 1 steps
  for (let i = 0; i < left - 1; i++) {
    curr = curr.next;
  }
  let prevLeft = curr,
    leftNode = curr.next;
  // move another right - (left - 1) steps; move total right steps
  for (let i = 0; i < right - left + 1; i++) {
    curr = curr.next;
  }
  let rightNode = curr;
  let nextRight = curr.next;
  // cut the list
  prevLeft.next = null;
  rightNode.next = null;
  // reverse between leftNode and rightNode
  reverseList(leftNode);
  // connect the list
  prevLeft.next = rightNode;
  leftNode.next = nextRight;
  // return head;
  return dummyNode.next;
};

// optimized
var reverseBetween = function (head, left, right) {
  // need dummy node to handle the case when left = 1
  let dummyNode = new ListNode(0, head);
  let prev = dummyNode;
  // move to the left - 1 node
  for (let i = 0; i < left - 1; i++) {
    prev = prev.next;
  }
  let curr = prev.next;
  // reverse the list from left to right: need right - left steps
  for (let i = 0; i < right - left; i++) {
    let next = curr.next;
    curr.next = next.next;
    next.next = prev.next;
    prev.next = next;
  }
  return dummyNode.next;
};

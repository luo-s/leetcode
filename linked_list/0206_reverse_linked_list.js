/*
Given the head of a singly linked list, reverse the list, and return the 
reversed list.
*/

//

var reverseList = function (head) {
  let prev = null;
  let curr = head;
  while (curr) {
    const next = curr.next;
    // [curr.next, prev, curr] = [prev, curr, next];
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
};

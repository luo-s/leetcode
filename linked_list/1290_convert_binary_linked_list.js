/*
Given head which is a reference node to a singly-linked list. The value of each 
node in the linked list is either 0 or 1. The linked list holds the binary 
representation of a number.

Return the decimal value of the number in the linked list.
The most significant bit is at the head of the linked list.
The Linked List is not empty.
Each node's value is either 0 or 1.
*/
// https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/description/

// convert to string + parseInt
// time complexity O(n)
// space complexity O(n)
var getDecimalValue = function (head) {
  let str = "";
  let curr = head;
  while (curr) {
    str += curr.val;
    curr = curr.next;
  }
  return parseInt(str, 2);
};

// math solution
var getDecimalValue = function (head) {
  let curr = head;
  let res = 0;
  while (curr) {
    res = res * 2 + curr.val;
    curr = curr.next;
  }
  return res;
};

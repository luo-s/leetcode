/*
In a linked list of size n, where n is even, the ith node (0-indexed) of the 
linked list is known as the twin of the (n-1-i)th node, if 0 <= i <= (n / 2) - 1.

For example, if n = 4, then node 0 is the twin of node 3, and node 1 is the twin 
of node 2. These are the only nodes with twins for n = 4.
The twin sum is defined as the sum of a node and its twin.

Given the head of a linked list with even length, return the maximum twin sum of 
the linked list.
*/
// https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list/

// convert to array
// time complexity O(n)
// space complexity O(n)
var pairSum = function (head) {
  const array = [];
  let curr = head;
  while (curr) {
    array.push(curr.val);
    curr = curr.next;
  }
  let res = -Infinity;
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    res = Math.max(array[left] + array[right], res);
    left++;
    right--;
  }
  return res;
};
// two pointers
// time complexity O(n)
// space complexity O(1)
const reverseList = (head) => {
  let prev = null;
  let curr = head;
  while (curr !== null) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
};

const endOfFirstHalf = (head) => {
  let fast = head;
  let slow = head;
  while (fast.next !== null && fast.next.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
  }
  return slow;
};

var pairSum = function (head) {
  const firstHalfEnd = endOfFirstHalf(head);
  const secondHalfStart = reverseList(firstHalfEnd.next);

  let p1 = head;
  let p2 = secondHalfStart;
  let res = -Infinity;
  while (p2 != null) {
    res = Math.max(res, p1.val + p2.val);
    p1 = p1.next;
    p2 = p2.next;
  }
  firstHalfEnd.next = reverseList(secondHalfStart);
  return res;
};

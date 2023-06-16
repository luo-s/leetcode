/*
Given the head of a singly linked list, return true if it is a 
palindrome or false otherwise.
*/
// https://leetcode.com/problems/palindrome-linked-list/
// https://leetcode.cn/problems/palindrome-linked-list/solution/hui-wen-lian-biao-by-leetcode-solution/

// convert to an array
// time complexity O(n)
// space complexity O(n)
var isPalindrome = function (head) {
  let curr = head;
  const array = [];
  while (curr) {
    array.push(curr.val);
    curr = curr.next;
  }
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    if (array[left] !== array[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
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

var isPalindrome = function (head) {
  if (head == null) return true;

  const firstHalfEnd = endOfFirstHalf(head);
  const secondHalfStart = reverseList(firstHalfEnd.next);

  let p1 = head;
  let p2 = secondHalfStart;
  let result = true;
  while (result && p2 != null) {
    if (p1.val != p2.val) result = false;
    p1 = p1.next;
    p2 = p2.next;
  }

  firstHalfEnd.next = reverseList(secondHalfStart);
  return result;
};

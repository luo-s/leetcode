/*
Given the head of a singly linked list, return true if it is a 
palindrome or false otherwise.
*/

// https://leetcode.com/problems/palindrome-linked-list/

// convert to array + two pointers
// time complexity O(n)
// space complexity O(n)
var isPalindrome = function (head) {
  let arr = [];
  while (head) {
    arr.push(head.val);
    head = head.next;
  }
  let left = 0,
    right = arr.length - 1;
  while (left < right) {
    if (arr[left] !== arr[right]) return false;
    left++;
    right--;
  }
  return true;
};

// reverse half
// time complexity O(n)
// space complexity O(n)
var isPalindrome = function (head) {
  var reverse = function (head) {
    let prev = null;
    let curr = head;
    while (curr) {
      const next = curr.next;
      [curr.next, prev, curr] = [prev, curr, next];
    }
    return prev;
  };
  if (!head || !head.next) return true;
  const dummyNode = new ListNode(0, head);
  let slow = dummyNode,
    fast = dummyNode;
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  // cut the list into two halves: head -> slow, slow.next -> tail
  let secondHalf = fast.next ? slow.next.next : slow.next;
  slow.next = null;
  let reverseHead = reverse(head);
  while (secondHalf && reverseHead) {
    if (secondHalf.val !== reverseHead.val) return false;
    secondHalf = secondHalf.next;
    reverseHead = reverseHead.next;
  }
  return true;
};

// two pointers
var isPalindrome = function (head) {
  let slow = head,
    fast = head,
    prev = null;
  // reverse the first half
  while (fast && fast.next) {
    fast = fast.next.next;
    let next = slow.next;
    slow.next = prev;
    prev = slow;
    slow = next;
  }
  // adjust the slow pointer if the length is odd
  if (fast) slow = slow.next;
  // compare the first half and the second half
  while (prev) {
    if (prev.val !== slow.val) return false;
    slow = slow.next;
    prev = prev.next;
  }
  return true;
};

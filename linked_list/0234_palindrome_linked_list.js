/*
Given the head of a singly linked list, return true if it is a 
palindrome or false otherwise.
*/

// convert to array + two pointers
// time complexity O(n)
// space complexity O(n)
var isPalindrome = function (head) {
  let arr = [];
  let dummyNode = new ListNode(0, head);
  let cur = dummyNode;
  while (cur.next) {
    arr.push(cur.next.val);
    cur = cur.next;
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

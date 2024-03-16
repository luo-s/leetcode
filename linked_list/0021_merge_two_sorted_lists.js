/*
You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by 
splicing together the nodes of the first two lists.

Return the head of the merged linked list.
*/

// https://leetcode.com/problems/merge-two-sorted-lists/description/

// recursion
var mergeTwoLists = function (list1, list2) {
  if (!list1) return list2;
  if (!list2) return list1;
  if (list1.val < list2.val) {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoLists(list1, list2.next);
    return list2;
  }
};

// two pointers
var mergeTwoLists = function (list1, list2) {
  if (!list1) return list2;
  if (!list2) return list1;
  let dummy = new ListNode(-1);
  let curr = dummy;
  while (list1 && list2) {
    console.log(dummy);
    if (list1.val < list2.val) {
      curr.next = list1;
      curr = curr.next;
      list1 = list1.next;
    } else {
      curr.next = list2;
      curr = curr.next;
      list2 = list2.next;
    }
    if (list1) curr.next = list1;
    if (list2) curr.next = list2;
  }
  return dummy.next;
};

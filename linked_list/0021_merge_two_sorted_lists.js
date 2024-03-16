/*
You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by 
splicing together the nodes of the first two lists.

Return the head of the merged linked list.
*/

// https://leetcode.com/problems/merge-two-sorted-lists/description/

// recursion
var mergeTwoLists = function (list1, list2) {
  let head1 = list1,
    head2 = list2;
  if (!head1) return head2;
  if (!head2) return head1;
  if (head1.val < head2.val) {
    head1.next = mergeTwoLists(head1.next, head2);
    return head1;
  } else {
    head2.next = mergeTwoLists(head1, head2.next);
    return head2;
  }
};

# Given the head of a sorted linked list, delete all nodes that have duplicate 
# numbers, leaving only distinct numbers from the original list. Return the linked 
# list sorted as well.

# https://leetcode.com/problems/remove-duplicates-from-sorted-list/

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def deleteDuplicates(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if head == None:
            return head
        curr = head
        while curr.next:
            if curr.next.val == curr.val:
                curr.next = curr.next.next
            else: 
                curr = curr.next
        return head

            
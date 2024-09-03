# Given the head of a sorted linked list, delete all nodes that have duplicate 
# numbers, leaving only distinct numbers from the original list. Return the 
# linked list sorted as well.

# https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

# dummy_head technique
class Solution:
    def deleteDuplicates(self, head: Optional[ListNode]) -> Optional[ListNode]:
        dummy_head = ListNode(0, head)
        curr = dummy_head
        while curr.next and curr.next.next:
            if curr.next.val == curr.next.next.val:
                CONST = curr.next.val
                while curr.next and curr.next.val == CONST:
                    curr.next = curr.next.next
            else: 
                curr = curr.next
        return dummy_head.next 
    
# fast and slow pointers
class Solution:
    def deleteDuplicates(self, head: Optional[ListNode]) -> Optional[ListNode]:
        dummy_head = ListNode(0, head)
        slow, fast = dummy_head, head
        while fast:
            # move fast pointer to the last temp duplicates
            while fast.next and fast.val == fast.next.val:
                fast = fast.next
            # if no duplicates, move slow pointer
            if slow.next == fast:
                slow = slow.next
            # skip duplicates if necessary
            else:
                slow.next= fast.next
            # move fast pointer
            fast = fast.next
        return dummy_head.next
# You are given the head of a singly linked-list. The list can be represented as:

# L0 → L1 → … → Ln - 1 → Ln
# Reorder the list to be on the following form:

# L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
# You may not modify the values in the list's nodes. 
# Only nodes themselves may be changed.

# https://leetcode.com/problems/reorder-list/

class Solution:
    def reorderList(self, head: ListNode) -> None:
        if not head:
            return
        # find the middle node
        mid = self.middleNode(head)
        # cut the list in 2
        l1 = head
        l2 = mid.next
        mid.next = None
        # reverse the 2nd half
        l2 = self.reverseList(l2)
        # merge 2 lists
        self.mergeList(l1, l2)
    
    def middleNode(self, head: ListNode) -> ListNode:
        slow = fast = head
        while fast.next and fast.next.next:
            slow = slow.next
            fast = fast.next.next
        return slow
    
    def reverseList(self, head: ListNode) -> ListNode:
        prev = None
        curr = head
        while curr:
            nextTemp = curr.next
            curr.next = prev
            prev = curr
            curr = nextTemp
        return prev

    def mergeList(self, l1: ListNode, l2: ListNode):
        while l1 and l2:
            l1_tmp = l1.next
            l2_tmp = l2.next
            l1.next = l2
            l1 = l1_tmp
            l2.next = l1
            l2 = l2_tmp
# Given the head of a singly linked list, return the middle node of the linked list.

# If there are two middle nodes, return the second middle node.

# https://leetcode.com/problems/middle-of-the-linked-list/description/

# return 2nd mid 
class Solution:
    def middleNode(self, head: Optional[listNode]) -> Optional[listNode]:
        fast = slow = head
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next
        return slow

# return 1st mid
class Solution:
    def middleNode(self, head: Optional[listNode]) -> Optional[listNode]:
        fast = slow = head
        while fast.next and fast.next.next:
            slow = slow.next
            fast = fast.next.next
        return slow
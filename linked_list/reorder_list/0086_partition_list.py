# Given the head of a linked list and a value x, partition it such that all nodes 
# less than x come before nodes greater than or equal to x.

# You should preserve the original relative order of the nodes in each of the two partitions.

# https://leetcode.com/problems/partition-list/

class Solution:
    def partition(self, head: Optional[ListNode], x: int) -> Optional[ListNode]:
        sml_dummy, big_dummy = ListNode(0), ListNode(0)
        sml, big = sml_dummy, big_dummy
        while head:
            if head.val < x:
                sml.next = head
                sml = sml.next
            else:
                big.next = head
                big = big.next
            head = head.next
        sml.next = big_dummy.next
        big.next = None
        return sml_dummy.next
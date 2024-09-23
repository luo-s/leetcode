# Given the head of a linked list, rotate the list to the right by k places.

# The number of nodes in the list is in the range [0, 500].
# -100 <= Node.val <= 100
# 0 <= k <= 2 * 10^9

# https://leetcode.com/problems/rotate-list/

class Solution:
    def rotateRight(self, head: Optional[ListNode], k: int) -> Optional[ListNode]:
        dummy_head = ListNode(0, head)
        # edge case:
        if not head or not head.next or k == 0:
            return head
        # calculate the length
        curr, l = dummy_head, 0
        while curr.next:
            curr = curr.next
            l += 1
        # make it circular
        curr.next = head
        # update k
        k %= l
        # find the new tail
        new_tail = dummy_head
        for _ in range(l - k):
            new_tail = new_tail.next
        new_head = new_tail.next
        # cut the circle
        new_tail.next = None
        return new_head
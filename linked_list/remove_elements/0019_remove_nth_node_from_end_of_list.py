# Given the head of a linked list, 
# remove the nth node from the end of the list and return its head.

# The number of nodes in the list is sz.
# 1 <= sz <= 30
# 0 <= Node.val <= 100
# 1 <= n <= sz

# https://leetcode.com/problems/remove-nth-node-from-end-of-list/

class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        dummy_head = ListNode(0, head)
        slow = fast = dummy_head
        # move fast n steps forward (fast - slow = n)
        for i in range(n):
            fast = fast.next
        # move fast to tail and slow to (n+1)th node from tail
        while fast.next:
            fast = fast.next
            slow = slow.next
        # remove nth node from end
        slow.next = slow.next.next
        return dummy_head.next
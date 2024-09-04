# Given the head of a linked list, we repeatedly delete consecutive sequences of nodes that sum to 0 until there are no such sequences.

# After doing so, return the head of the final linked list.  You may return any such answer.

# https://leetcode.com/problems/remove-zero-sum-consecutive-nodes-from-linked-list/description/

class Solution:
    def removeZeroSumSublists(self, head: Optional[ListNode]) -> Optional[ListNode]:
        
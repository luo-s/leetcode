# You are given the head of a linked list.

# The nodes in the linked list are sequentially assigned to non-empty groups whose lengths form the sequence of the natural numbers (1, 2, 3, 4, ...). 
# The length of a group is the number of nodes assigned to it. In other words,

# The 1st node is assigned to the first group.
# The 2nd and the 3rd nodes are assigned to the second group.
# The 4th, 5th, and 6th nodes are assigned to the third group, and so on.
# Note that the length of the last group may be less than or equal to 1 + the length of the second to last group.

# Reverse the nodes in each group with an even length, and return the head of the modified linked list.

# https://leetcode.com/problems/reverse-nodes-in-even-length-groups/description/

class Solution:
    def reverseEvenLengthGroups(self, head: Optional[ListNode]) -> Optional[ListNode]:
        i, pre, cur = 0, None, head
        while cur:
            i += 1
            it, length = cur, 0
            # group by length
            while length < i and it:
                length += 1
                it = it.next
            # odd length group
            if length & 1:
                for j in range(length):
                    pre, cur = cur, cur.next
            # even length group
            else:
                # reverse sub-list 头插法
                for j in range(length - 1):
                    # pre.next, cur.next.next, cur.next = cur.next, pre.next, cur.next.next
                    nxt = cur.next
                    cur.next = nxt.next
                    nxt.next = pre.next
                    pre.next = nxt
                # move the pointers
                pre, cur = cur, cur.next
        return head
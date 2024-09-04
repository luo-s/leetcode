# Given the head of a singly linked list and an integer k, split the linked list into k consecutive linked list parts.

# The length of each part should be as equal as possible: no two parts should have a size differing by more than one. This may lead to some parts being null.

# The parts should be in the order of occurrence in the input list, and parts occurring earlier should always have a size greater than or equal to parts occurring later.

# Return an array of the k parts.

# https://leetcode.com/problems/split-linked-list-in-parts/description/

class Solution:
    def splitListToParts(self, head: Optional[ListNode], k: int) -> List[Optional[ListNode]]:
        # count the length
        cnt, cur = 0, head
        while cur:
            cnt += 1
            cur = cur.next
        # decide group size
        group = [cnt // k] * k
        for i in range(cnt % k):
            group[i] += 1
        # split the linked list
        ans = [None] * len(group)
        cur, leng, idx = head, 1, 0
        for size in group:
            while cur and leng < size:
                cur = cur.next
                leng += 1
            # store the head
            ans[idx] = head
            if cur: 
                # cut the list and move pointers
                head = cur.next
                cur.next = None
                cur = head
                idx += 1
                leng = 1
        return ans
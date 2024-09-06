# You are given two linked lists: list1 and list2 of sizes n and m respectively.

# Remove list1's nodes from the ath node to the bth node, and put list2 in their place.

# https://leetcode.com/problems/merge-in-between-linked-lists/description/?envType=problem-list-v2&envId=linked-list

class Solution:
    def mergeInBetween(self, list1: ListNode, a: int, b: int, list2: ListNode) -> ListNode:
        # find the pre_a and nxt_b node
        cur = list1
        for _ in range(a - 1):
            cur = cur.next
        pre_a = cur
        for _ in range(b - a + 2):
            cur = cur.next
        nxt_b = cur
        # connect list2 and nxt_b
        cur = list2
        while cur.next:
            cur = cur.next
        cur.next = nxt_b
        # connect list2 and pre_a
        pre_a.next = list2
        return list1
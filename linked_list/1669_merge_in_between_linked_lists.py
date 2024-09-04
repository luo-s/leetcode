# You are given two linked lists: list1 and list2 of sizes n and m respectively.

# Remove list1's nodes from the ath node to the bth node, and put list2 in their place.

# https://leetcode.com/problems/merge-in-between-linked-lists/description/?envType=problem-list-v2&envId=linked-list

class Solution:
    def mergeInBetween(self, list1: ListNode, a: int, b: int, list2: ListNode) -> ListNode:
# You are given an array of integers nums and the head of a linked list. 
# Return the head of the modified linked list after removing all nodes 
# from the linked list that have a value that exists in nums.

# https://leetcode.com/problems/delete-nodes-from-linked-list-present-in-array/

# search in array: O(n) will result in TLE
# construct a hash map that give us O(1) time search
class Solution:
    def modifiedList(self, nums: List[int], head: Optional[ListNode]) -> Optional[ListNode]:
        nums_set = set(nums)
        cur = dummy_head = ListNode(0, head)
        while cur:
            while cur.next and cur.next.val in nums_set:
                cur.next = cur.next.next
            cur = cur.next
        return dummy_head.next

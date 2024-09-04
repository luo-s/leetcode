# You are given the head of a linked list with n nodes.

# For each node in the list, find the value of the next greater node. 
# That is, for each node, find the value of the first node that is next to it and has a strictly larger value than it.

# Return an integer array answer where answer[i] is the value of the next greater 
# node of the ith node (1-indexed). If the ith node does not have a next greater node, 
# set answer[i] = 0.

# https://leetcode.com/problems/next-greater-node-in-linked-list/description/

# array monotonic stack
class Solution:
    def nextLargerNodes(self, head: Optional[ListNode]) -> List[int]:
        nums = []
        while head:
            nums.append(head.val)
            head = head.next
        l = len(nums)
        ans = [0] * l
        stack = []
        for i in range(l):
            while stack and nums[i] > nums[stack[-1]]:
              index = stack.pop()
              ans[index] = nums[i]
            stack.append(i)
        return ans
      
# linked list monotonic stack
# need to construct a position points to index of answer array
class Solution:
    def nextLargerNodes(self, head: Optional[ListNode]) -> List[int]:
        pos = -1
        stack = []
        ans = []
        while head:
            pos += 1
            ans.append(0)
            while stack and stack[-1][1] < head.val:
                idx, _ = stack.pop()
                ans[idx] = head.val
            stack.append([pos, head.val])
            head = head.next
        return ans
        
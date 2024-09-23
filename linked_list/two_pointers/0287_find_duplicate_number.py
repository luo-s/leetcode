# Given an array of integers nums containing n + 1 integers where each integer 
# is in the range [1, n] inclusive.

# There is only one repeated number in nums, return this repeated number.

# You must solve the problem without modifying the array nums and uses only 
# constant extra space.

# nums.length == n + 1
# All the integers in nums appear only once except for precisely one integer 
# which appears two or more times.

# https://leetcode.com/problems/find-the-duplicate-number/
# similar
# LC 142 https://leetcode.com/problems/linked-list-cycle-ii/

# built-in function
# time complexity  O(n^2)
# space complexity O(1)
class Solution:
    def findDuplicate(self, nums: List[int]) -> int:
        for num in nums:
            if nums.count(num) > 1:
                return num

# sort
# time complexity  O(nlogn)
# space complexity O(1)
class Solution:
    def findDuplicate(self, nums: List[int]) -> int:
        l = len(nums)
        nums.sort()
        for i in range(l):
            if nums[i] == i:
                return i 

# hash-table
# time complexity  O(n)
# space complexity O(n)
class Solution:
    def findDuplicate(self, nums: List[int]) -> int:
        cnt = dict()
        for num in nums:
            cnt[num] = cnt.get(num, 0) + 1
        for num in cnt:
            if cnt[num] > 1:
                return num

# binary search -- make an sorted array with a pivot point:
# let count(i) be the number of elements in the array which are less than or equal to i. If there are no duplicates, then count(i) === i. Since there is a duplicate, let's say the duplicate number is target, then
# 1) [1, target - 1] => count(i) <= i; 
# 2) [target, n] => count(i) > i ;
# Note: binary search [1, n] instead of [nums[0], nums[nums.length-1]]
# time complexity  O(nlogn)
# space complexity O(1)
class Solution:
    def findDuplicate(self, nums: List[int]) -> int:
        l = len(nums)
        left, right = 1, l - 1
        while left < right:
            mid = left + (right - left) // 2
            cnt = 0
            for num in nums:
                if num <= mid:
                    cnt += 1
            if cnt <= mid:
                left = mid + 1
            else:
                right = mid
        return left

# Floyd Cycle Detection Algorithm
# 对数组建表：Node.val = i, Node.next = nums[i]
# 如有重复元素 => 则必有两个节点指向同一节点 => 此链表必有环，且此节点为环形链表的入口。
# time complexity O(n)
# space complexity O(1)
class Solution:
    def findDuplicate(self, nums: List[int]) -> int:
        def next(i):
            return nums[i]
        slow = fast = 0
        # 第一次相遇
        while True:
            slow = next(slow)
            fast = next(next(fast))
            if slow == fast:
                break
        slow = 0
        # 第二次相遇
        while slow != fast:
            slow = next(slow)
            fast = next(fast)
        return slow
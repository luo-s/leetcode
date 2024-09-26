# The distance of a pair of integers a and b is defined as the absolute difference between a and b.

# Given an integer array nums and an integer k, return the kth smallest distance among all the pairs nums[i] and nums[j] where 0 <= i < j < nums.length.

# https://leetcode.com/problems/find-k-th-smallest-pair-distance/

# priority queue -- TLE
class Solution:
    def smallestDistancePair(self, nums: List[int], k: int) -> int:
        import heapq
        l = len(nums)
        heap = []
        for i in range(l - 1):
            for j in range(i + 1, l):
                dis = abs(nums[i] - nums[j])
                heap.append(dis)
        heapq.heapify(heap)
        for _ in range(k - 1):
            heapq.heappop(heap)
        return heapq.heappop(heap)

# binary search [0, max(nums) - min(nums)]
class Solution:
    def smallestDistancePair(self, nums: List[int], k: int) -> int:
        nums.sort()  # Sort the array to apply two-pointer technique
        n = len(nums)
        
        # Helper function to count how many pairs have distance <= mid
        def count_pairs(mid):
            count = 0
            left = 0
            for right in range(n):
                while nums[right] - nums[left] > mid:
                    left += 1
                count += right - left
            return count
        
        # Binary search for the smallest distance
        left, right = 0, nums[-1] - nums[0]
        while left <= right:
            mid = (left + right) // 2
            if count_pairs(mid) >= k:
                right = mid - 1
            else:
                left = mid + 1
        return left
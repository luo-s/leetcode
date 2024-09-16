# You are given an integer array nums and two integers indexDiff and valueDiff.

# Find a pair of indices (i, j) such that:

# https://leetcode.com/problems/contains-duplicate/
# https://leetcode.com/problems/contains-duplicate-ii/
# https://leetcode.com/problems/contains-duplicate-iii/

# i != j,
# abs(i - j) <= indexDiff.
# abs(nums[i] - nums[j]) <= valueDiff, and
# Return true if such pair exists or false otherwise.
    
# sliding window with bucketization 
# divide range of num into buckets with size valueDiff + 1
# if nums[i] and nums[j] are within valueDiff, nums[i] and nums[j] are either:
# 1) fall into the same bucket
# 2) fall into neighber buckets
class Solution:
    def containsNearbyAlmostDuplicate(self, nums: List[int], indexDiff: int, valueDiff: int) -> bool:
        # edge case
        if valueDiff < 0: return False 
        seen = {}
        for i, num in enumerate(nums): 
            # put num into appropriate bucket
            bkt = num // (valueDiff + 1)
            if bkt in seen and i - seen[bkt][0] <= indexDiff: return True 
            if bkt - 1 in seen and i - seen[bkt - 1][0] <= indexDiff and abs(num - seen[bkt - 1][1]) <= valueDiff: return True 
            if bkt + 1 in seen and i - seen[bkt + 1][0] <= indexDiff and abs(num - seen[bkt + 1][1]) <= valueDiff: return True 
            seen[bkt] = (i, num) 
        return False 
    
# sliding window + sortedcontainers
# SortedSet provides logarithmic time complexity (O(log n)) for insertion, deletion, and lookup operations.
# time complexity O(nlogk)
# space complexity O(k)
class Solution:
    def containsNearbyAlmostDuplicate(self, nums: List[int], indexDiff: int, valueDiff: int) -> bool:
        from sortedcontainers import SortedSet
        import bisect
        
        sset = SortedSet()
        left, right = 0, 0
        
        while right < len(nums):
            # maintain the sliding window size <= indexDiff
            if right - left > indexDiff:
                sset.remove(nums[left])
                left += 1
            # |sset[index] - nums[right]| >= valueDiff -> nums[right] - valueDiff <= sset[index] <= nums[right] + valueDiff
            # binary search on the SortedSet to find the position where nums[right] - valueDiff would fit into sset. This position is the index of the smallest element in sset that sset[index] >= nums[right] - valueDiff.
            index = bisect.bisect_left(sset, nums[right] - valueDiff)
            # check if the found numer is within valueDiff
            # if 0 <= index < len(sset): find a number that sset[index] >= nums[right] - valueDiff
            # and if sset[index] - nums[right] <= valueDiff: |sset[index] - nums[right]| >= valueDiff 
            if sset and index >= 0 and index < len(sset) and sset[index] - nums[right] <= valueDiff:
                return True
            # add the current number to the SortedSet
            sset.add(nums[right])
            right += 1
        
        return False

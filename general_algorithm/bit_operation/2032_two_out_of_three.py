# Given three integer arrays nums1, nums2, and nums3, return a distinct array containing all the values that are present in at least two out of the three arrays. You may return the values in any order.

# https://leetcode.com/problems/two-out-of-three/description/

# brute force
class Solution:
    def twoOutOfThree(self, nums1: List[int], nums2: List[int], nums3: List[int]) -> List[int]:
        set1, set2, set3 = set(nums1), set(nums2), set(nums3)
        nums = list(set1) + list(set2) + list(set3)
        d = dict()
        for num in nums:
            d[num] = d.get(num, 0) + 1
        ans = []
        for num in d:
            if d[num] > 1:
                ans.append(num)
        return ans

# set operation
class Solution:
    def twoOutOfThree(self, nums1: List[int], nums2: List[int], nums3: List[int]) -> List[int]:
        set1, set2, set3 = set(nums1), set(nums2), set(nums3)
        set_all = (set1 & set2) | (set2 & set3) | (set3 & set1)
        return list(set_all)

# bit operation
class Solution:
    def twoOutOfThree(self, nums1: List[int], nums2: List[int], nums3: List[int]) -> List[int]:
        masks = {}
        for i, nums in enumerate([nums1, nums2, nums3]):
            for num in set(nums):  
                # 标记 num 在哪些数组中出现过
                masks[num] = masks.get(num, 0) | (1 << i)  
        # 至少两个数组中出现
        ans = [num for num, mask in masks.items() if bin(mask).count('1') >= 2]  
        return ans




        
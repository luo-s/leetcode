# Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

# https://leetcode.com/problems/intersection-of-two-arrays-ii/

# two pointers + sort
# time complexity O(nlogn)
# space complexity O(1)
class Solution:
    def intersect(self, nums1: List[int], nums2: List[int]) -> List[int]:
        nums1.sort()
        nums2.sort()
        p1 = p2 = 0
        l1, l2 = len(nums1), len(nums2)
        ans = []
        while p1 < l1 and p2 < l2:
            if nums1[p1] < nums2[p2]:
                p1 += 1
            elif nums1[p1] > nums2[p2]:
                p2 += 1
            else:
                ans.append(nums1[p1])
                p1 += 1
                p2 += 1
        return ans

# hash table
# time complexity O(n)
# space complexity O(n)
class Solution:
    def intersect(self, nums1: List[int], nums2: List[int]) -> List[int]:
        from collections import Counter
        counter1 = Counter(nums1)
        counter2 = Counter(nums2)
        # counter1, counter2 = {}, {}
        # for num in nums1:
        #     counter1[num] = counter1.get(num, 0) + 1
        # for num in nums2:
        #     counter2[num] = counter2.get(num, 0) + 1
        res = []
        for key, value in counter1.items():
            if key in counter2:
                res.extend([key] * min(value, counter2[key]))
        return res
# Given two integer arrays nums1 and nums2, return the maximum length of a subarray that appears in both arrays.

# https://leetcode.com/problems/maximum-length-of-repeated-subarray/

# dynamic programming
# let dp[i][j] denotes the longest common suffix of nums1[:i] and num2[:j]
# dp[i][j] = dp[i - 1][j - 1] + 1 if nums1[i] == nums2[j]
# dp[i][j] = 0 if nums1[i] != nums2[j]
# ans = max(dp)
# time complexity O(n^2)
# space complexity O(n^2)
class Solution:
    def findLength(self, nums1: List[int], nums2: List[int]) -> int:
        l1, l2 = len(nums1), len(nums2)
        dp = [[0 for _ in range(l2 + 1)] for _ in range(l1 + 1)]
        
        for i in range(1, l1 + 1):
            for j in range(1, l2 + 1):
                if nums1[i - 1] == nums2[j - 1]:
                    dp[i][j] = dp[i - 1][j - 1] + 1
        
        return max(map(max, dp)) 

# string match and sliding window
# time complexity O(n^2) (string pattern match)
# space complexity O(n)
class Solution:
    def findLength(self, nums1: List[int], nums2: List[int]) -> int:
        # use chr() to convert each num to an unique cobined symbol, handling num that is more than 1 digit
        s1 = ''.join([chr(num) for num in nums1])
        s2 = ''.join([chr(num) for num in nums2])
        left, right, ans = 0, 0, 0
        while right < len(nums1):
            if s1[left : right + 1] in s2:
                ans = max(right - left + 1, ans)
                right += 1
            else:
                left += 1
        return ans
# You are given two strings s and t of the same length and an integer maxCost.

# You want to change s to t. Changing the ith character of s to ith character of t costs |s[i] - t[i]| (i.e., the absolute difference between the ASCII values of the characters).

# Return the maximum length of a substring of s that can be changed to be the same as the corresponding substring of t with a cost less than or equal to maxCost. If there is no substring from s that can be changed to its corresponding substring from t, return 0.

# https://leetcode.com/problems/get-equal-substrings-within-budget/
# similar
# LC 209 https://leetcode.com/problems/minimum-size-subarray-sum/

# longest subarray while sum <= maxCost
class Solution:
    def equalSubstring(self, s: str, t: str, maxCost: int) -> int:
        l = len(s)
        nums = [0] * l
        for i in range(l):
            nums[i] = abs(ord(s[i]) - ord(t[i]))
        
        left = right = window_sum = ans = 0   
        while right < l:
            window_sum += nums[right]
            while window_sum > maxCost:
                window_sum -= nums[left]
                left += 1
            ans = max(ans, right - left + 1)
            right += 1
        
        return ans

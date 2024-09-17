# You are given a 0-indexed integer array nums. A pair of indices i, j where 0 <= i < j < nums.length is called beautiful if the first digit of nums[i] and the last digit of nums[j] are coprime.

# Return the total number of beautiful pairs in nums.

# Two integers x and y are coprime if there is no integer greater than 1 that divides both of them. In other words, x and y are coprime if gcd(x, y) == 1, where gcd(x, y) is the greatest common divisor of x and y.

# https://leetcode.com/problems/number-of-beautiful-pairs/

class Solution:
    def countBeautifulPairs(self, nums: List[int]) -> int:
        ans = 0
        first_cnt = dict()
        for num in nums:
            first = int(str(num)[0])
            last = int(str(num)[-1])
            for first_d in first_cnt:
                if gcd(first_d, last) == 1:
                    ans += first_cnt[first_d]
            first_cnt[first] = first_cnt.get(first, 0) + 1
        return ans
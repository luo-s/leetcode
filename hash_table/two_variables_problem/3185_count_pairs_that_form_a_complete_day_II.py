# Given an integer array hours representing times in hours, return an integer denoting the number of pairs i, j where i < j and hours[i] + hours[j] forms a complete day.

# A complete day is defined as a time duration that is an exact multiple of 24 hours.

# For example, 1 day is 24 hours, 2 days is 48 hours, 3 days is 72 hours, and so on.

# https://leetcode.com/problems/count-pairs-that-form-a-complete-day-ii/description/
# same problem 1010
# https://leetcode.com/problems/pairs-of-songs-with-total-durations-divisible-by-60/description/

class Solution:
    def countCompleteDayPairs(self, hours: List[int]) -> int:
        ans, remainers, l = 0, dict(), len(hours)
        for i in range(l):
            remainer = hours[i] % 24
            complement = (24 - remainer) % 24
            if complement in remainers:
                ans += remainers[complement]
            remainers[remainer] = remainers.get(remainer, 0) + 1
        return ans
    
class Solution:
    def countCompleteDayPairs(self, hours: List[int]) -> int:
        c = [0] * 60
        res = 0
        for hour in hours:
            res += c[-hour % 24]
            c[hour % 24] += 1
        return res
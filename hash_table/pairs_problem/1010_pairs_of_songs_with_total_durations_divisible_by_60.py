# You are given a list of songs where the ith song has a duration of time[i] seconds.

# Return the number of pairs of songs for which their total duration in seconds is divisible by 60. Formally, we want the number of indices i, j such that i < j with (time[i] + time[j]) % 60 == 0.
  
# https://leetcode.com/problems/pairs-of-songs-with-total-durations-divisible-by-60/
# same problem 3185
# https://leetcode.com/problems/count-pairs-that-form-a-complete-day-ii/

class Solution:
    def numPairsDivisibleBy60(self, time: List[int]) -> int:
        ans, remainers, l = 0, dict(), len(time)
        for i in range(l):
            remainer = time[i] % 60
            complement = (60 - remainer) % 60
            if complement in remainers:
                ans += remainers[complement]
            remainers[remainer] = remainers.get(remainer, 0) + 1
        return ans

# negative modulo
class Solution:
    def numPairsDivisibleBy60(self, time: List[int]) -> int:
        c = [0] * 60
        res = 0
        for t in time:
            res += c[-t % 60]
            c[t % 60] += 1
        return res
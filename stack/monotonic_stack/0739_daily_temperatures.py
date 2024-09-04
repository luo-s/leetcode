# Given an array of integers temperatures represents the daily temperatures, 
# return an array answer such that answer[i] is the number of days you have to 
# wait after the ith day to get a warmer temperature. If there is no future day 
# for which this is possible, keep answer[i] == 0 instead.

# https://leetcode.com/problems/daily-temperatures/description/
class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        stack, l = [], len(temperatures)
        ans = [0] * l
        for i in range(l):
            while stack and temperatures[i] > temperatures[stack[-1]]:
                idx = stack.pop()
                ans[idx] = i - idx
            stack.append(i)
        return ans
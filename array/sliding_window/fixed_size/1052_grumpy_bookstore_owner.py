# There is a bookstore owner that has a store open for n minutes. Every minute, 
# some number of customers enter the store. You are given an integer array 
# customers of length n where customers[i] is the number of the customer that 
# enters the store at the start of the ith minute and all those customers 
# leave after the end of that minute.

# On some minutes, the bookstore owner is grumpy. You are given a binary array 
# grumpy where grumpy[i] is 1 if the bookstore owner is grumpy during the ith 
# minute, and is 0 otherwise.

# When the bookstore owner is grumpy, the customers of that minute are not 
# satisfied, otherwise, they are satisfied.

# The bookstore owner knows a secret technique to keep themselves not grumpy 
# for minutes consecutive minutes, but can only use it once.

# Return the maximum number of customers that can be satisfied throughout the day.

# https://leetcode.com/problems/grumpy-bookstore-owner/

class Solution:
    def maxSatisfied(self, customers: List[int], grumpy: List[int], minutes: int) -> int:
        l = len(customers)
        cnt = window_sum = window_mx = 0
        left = right = 0
        while right < l:
            cnt += customers[right] * abs(grumpy[right] - 1)
            window_sum += customers[right] * grumpy[right]
            if right - left + 1 == minutes:
                window_mx = max(window_mx, window_sum)
                window_sum -= customers[left] * grumpy[left]
                left += 1
            right += 1
        return cnt + window_mx
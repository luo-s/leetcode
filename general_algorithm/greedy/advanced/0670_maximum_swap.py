# You are given an integer num. You can swap two digits at most once to get the maximum valued number.

# Return the maximum valued number you can get.

# https://leetcode.com/problems/maximum-swap/

# brute force
# find the pivot point, dividing into two parts
# swap the first number in part 1 and the max number in part 2
class Solution:
    def maximumSwap(self, num: int) -> int:
        if num < 10: return num
        s = str(num)
        # find first pivot point
        l, pivot = len(s), -1
        for i in range(l - 1):
            if s[i] < s[i + 1]:
                pivot = i
                break
        while pivot > 0 and s[pivot] == s[pivot - 1]:
            pivot -= 1
        # if DESC: no need to swap
        if pivot == -1: return num
        # find the max value and mx_idx in part 2
        mx = max(s[pivot + 1:])
        mx_idx = s.rindex(mx)
        # swap the first number in part 1 and the max number in part 2
        # we can do a binary search to improve perfomance here
        for i in range(pivot + 1):
            if s[i] < s[mx_idx]:
                return int(s[:i] + s[mx_idx] + s[i + 1:mx_idx] + s[i] + s[mx_idx + 1:])

# greedy            
class Solution:
    def maximumSwap(self, num: int) -> int:
        if num < 10:  # No need to swap if it's a single digit number
            return num

        s = list(str(num))  # Convert number to a list of characters for easier manipulation
        last_occurrence = {int(digit): i for i, digit in enumerate(s)}  # Track the last occurrence of each digit

        # key of greedy: swap as left as possible, swap as large as possible
        # Traverse the digits from left to right
        for i, digit in enumerate(s):
            # Check if there's a larger digit later in the number (start from 9)
            for d in range(9, int(digit), -1):
                if last_occurrence.get(d, -1) > i:
                    # Swap the current digit with the larger one found
                    s[i], s[last_occurrence[d]] = s[last_occurrence[d]], s[i]
                    return int(''.join(s))  # Return the number after the swap
        
        return num  # If no swap was made, return the original number
# An integer has monotone increasing digits if and only if each pair of adjacent digits x and y satisfy x <= y.

# Given an integer n, return the largest number that is less than or equal to n with monotone increasing digits.

# https://leetcode.com/problems/monotone-increasing-digits/

# brute force
# time complexity O(n)
# space complexity O(n)
class Solution:
    def monotoneIncreasingDigits(self, n: int) -> int:
        nums = list(map(int, str(n)))  # Convert n to a list of digits
        pivot = -1

        # Find the first point where the digits are no longer increasing
        for i in range(len(nums) - 1):
            if nums[i] > nums[i + 1]:
                pivot = i
                break

        # If no such point, return n
        if pivot == -1:
            return n

        # Move pivot to the correct position where we can decrement
        while pivot > 0 and nums[pivot] == nums[pivot - 1]:
            pivot -= 1

        # Decrement at the pivot and set the rest to 9
        nums[pivot] -= 1
        nums[pivot + 1:] = [9] * (len(nums) - pivot - 1)

        return int(''.join(map(str, nums)))

# greedy; traverse reversely
class Solution:
    def monotoneIncreasingDigits(self, n: int) -> int:
        a = list(str(n))
        l = len(a)
        for i in range(l - 1, 0, -1):
            if int(a[i]) < int(a[i - 1]):
                a[i - 1] = str(int(a[i - 1]) - 1)
                a[i:] = '9' * (l - i) 
        return int("".join(a)) # int() will remove leading 0s


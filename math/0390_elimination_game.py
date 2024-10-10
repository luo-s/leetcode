# You have a list arr of all integers in the range [1, n] sorted in a strictly increasing order. Apply the following algorithm on arr:

# Starting from left to right, remove the first number and every other number afterward until you reach the end of the list.
# Repeat the previous step again, but this time from right to left, remove the rightmost number and every other number from the remaining numbers.
# Keep repeating the steps again, alternating left to right and right to left, until a single number remains.
# Given the integer n, return the last number that remains in arr.

# https://leetcode.com/problems/elimination-game/

# recursion -- MLE
class Solution:
    def lastRemaining(self, n: int) -> int:
        nums = list(range(1, n + 1))
        while len(nums) > 1:
            nums = self.remove(nums)
            nums.reverse()
        return nums[0]

    def remove(self, arr: list[int]) -> list[int]:
        return arr[1 : len(arr) : 2]
    
# math: how the head move?
class Solution:
    def lastRemaining(self, n: int) -> int:
        head = 1
        step = 1
        left = True
        
        while n > 1:
            # 从左边开始移除 or（从右边开始移除，数列总数为奇数）
            if left or n % 2 != 0:
                head += step
            
            step <<= 1 # 步长 * 2
            n >>= 1 # 总数 / 2
            left = not left #取反移除方向

        return head
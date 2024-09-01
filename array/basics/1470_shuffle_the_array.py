# Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].

# Return the array in the form [x1,y1,x2,y2,...,xn,yn].

# https://leetcode.com/problems/shuffle-the-array/

# brute force
class Solution:
    def shuffle(self, nums: list[int], n: int) -> list[int]:
        # brute force
        ans = []
        for i in range(n):
            ans.append(nums[i])
            ans.append(nums[i + n])
        return ans
            
 # in-place transformation
class Solution:
    def shuffle(self, nums: list[int], n: int) -> list[int]:
      for i in range(2 * n):
          # if nums[i] is already at the correct location (negative)
          if nums[i] < 0:
              nums[i] = -nums[i]
              continue 
          
          # move nums[i] to correct location
          # start location
          j = i
          # move until nums[i] < 0
          while nums[i] > 0:  
              # calculate the correct location
              # j = 2 * j if j < n else 2 * (j - n) + 1
              if j < n:
                  j *= 2
              else:
                  j = 2 * (j - n) + 1
              # swap location
              nums[j], nums[i] = nums[i], nums[j]
              # mark j negative as location j is ready
              nums[j] = -nums[j]
          
          # mark i negative as location i is ready
          nums[i] = -nums[i]
      return nums
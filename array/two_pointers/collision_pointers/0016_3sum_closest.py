# Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.

# Return the sum of the three integers.

# You may assume that each input would have exactly one solution.

# 3 <= nums.length <= 500
# -1000 <= nums[i] <= 1000
# -10**4 <= target <= 10**4

# https://leetcode.com/problems/3sum-closest/

# adding the duplicate skipping codes to this problem will result in a slowdown
# the cost of duplicate checkers > redundant calculations

class Solution:
    def threeSumClosest(self, nums: List[int], target: int) -> int:
        l = len(nums)
        nums.sort()
        dis = float('inf')
        ans = 0
        for first in range(l - 2):
            # skip first duplicates
            # if first > 0 and nums[first] == nums[first - 1]: continue
            second, third = first + 1, l - 1
            while second < third:
                # skip second and third duplicates
                # while second < third and second > first + 1 and nums[second] == nums[second - 1]: second += 1
                # while third > second and third < l - 1 and nums[third] == nums[third + 1]: third -= 1
                # if second >= third: break
                total = nums[first] + nums[second] + nums[third]
                if abs(total - target) < dis:
                    dis = abs(total - target)
                    ans = total
                if total < target:
                    second += 1
                elif total > target:
                    third -= 1
                else:
                    # distance reach minimum (0) when total == target
                    return total  
                    # second += 1
                    # third -= 1
        return ans
    

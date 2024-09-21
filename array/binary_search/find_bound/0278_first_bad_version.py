# You are a product manager and currently leading a team to develop a new product. 
# Unfortunately, the latest version of your product fails the quality check. 
# Since each version is developed based on the previous version, all the versions 
# after a bad version are also bad.

# Suppose you have n versions [1, 2, ..., n] and you want to find out the first 
# bad one, which causes all the following ones to be bad.

# You are given an API bool isBadVersion(version) which returns whether version 
# is bad. Implement a function to find the first bad version. 
# You should minimize the number of calls to the API.

# https://leetcode.com/problems/first-bad-version/

class Solution:
    def firstBadVersion(self, n: int) -> int:
        left, right = 1, n  
        # handle edge case the last one is the bad version
        ans = right 
        while left <= right: 
            mid = left + (right - left) // 2
            if isBadVersion(mid) == True:  
                right = mid - 1 
                ans = mid   # possible bound: mid = right + 1
            else:
                left = mid + 1
        return ans
    
# optimized binary search
class Solution:
    def firstBadVersion(self, n: int) -> int:
        left, right = 1, n  
        while left <= right:    # loop ends at left = right + 1
            mid = left + (right - left) // 2
            if isBadVersion(mid) == True:  
                right = mid - 1
            else:
                left = mid + 1
        return right + 1    # left = right + 1
    
# why the following code work? why left < right? are we missing left == right?
# In the last iteration before break out (right = left + 1), we have two adjacent versions: left (good version) and right (bad version). Due to the design of this problem, left will always move to right/mid + 1 at last step, thus returning left makes perfect sense.
class Solution:
    def firstBadVersion(self, n: int) -> int:
        left, right = 1, n  
        while left < right:     # ends at left == right
            mid = left + (right - left) // 2
            if isBadVersion(mid) == True:  
                right = mid
            else:
                left = mid + 1
        return left    # return right also works

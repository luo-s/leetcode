# Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] 
# bananas. The guards have gone and will come back in h hours.

# Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses 
# some pile of bananas and eats k bananas from that pile. If the pile has less 
# than k bananas, she eats all of them instead and will not eat any more bananas 
# during this hour.

# Koko likes to eat slowly but still wants to finish eating all the bananas before 
# the guards return.

# Return the minimum integer k such that she can eat all the bananas within h hours.

# 1 <= piles.length <= 10^4
# piles.length <= h <= 10^9
# 1 <= piles[i] <= 10^9
# */

# https://leetcode.com/problems/koko-eating-bananas/

# brute force (linear search)
# time complexity O(n * max)
# space complexity O(1) 
class Solution:
    def minEatingSpeed(self, piles: List[int], h: int) -> int:
        l = len(piles)
        if h == l: return max(piles)
        for k in range(1, max(piles) + 1):
            t = 0
            for i in range(l):
                if piles[i] % k == 0:
                    t += piles[i] // k
                else:
                    t += piles[i] // k + 1
            if t <= h:
                return k

# binary search
# time complexity O(nlog(max))
# space complexity O(1)
class Solution:
    def minEatingSpeed(self, piles: List[int], h: int) -> int:
        l = len(piles)
        if h == l: return max(piles)
        # binary search [1, max(piles)], find the smallest k that make time(k) <= h
        left, right = 1, max(piles)
        k = right
        while left <= right:
            mid = (left + right) // 2
            if self.time(piles, mid) <= h:
                right = mid - 1
                k = mid     # maintain possible answer
            elif self.time(piles, mid) > h:
                left = mid + 1
        return k

    def time(self, piles, k):
        t = 0
        for i in range(len(piles)):
            t += ceil(piles[i] / k)
        return t

# another approach
class Solution:
    def minEatingSpeed(self, piles: List[int], h: int) -> int:
        l = len(piles)
        if h == l: return max(piles)
        # binary search [1, max(piles)], find the smallest k that make time(k) <= h
        left, right = 1, max(piles)
        k = right
        while left < right:    # ends at left = right
            mid = (left + right) // 2
            if self.time(piles, mid) <= h:
                right = mid    
            elif self.time(piles, mid) > h:
                left = mid + 1
        return left

    def time(self, piles, k):
        t = 0
        for bananas in range(len(piles)):
            t += ceil(bananas / k)
        return t

# optimized binary search
class Solution:
    def minEatingSpeed(self, piles: List[int], h: int) -> int:
        def can_eat(k):
            hours = 0
            for bananas in piles:
                hours += ceil(bananas / k)
            return hours <= h
        left, right = 1, max(piles)
        while left < right:
            mid = (right + left) // 2
            if can_eat(mid):
                right = mid
            else:
                left = mid + 1
        return left
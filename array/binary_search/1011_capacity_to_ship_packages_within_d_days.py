# A conveyor belt has packages that must be shipped from one port to another within days days.

# The ith package on the conveyor belt has a weight of weights[i]. Each day, we load the ship with packages on the conveyor belt (in the order given by weights). We may not load more weight than the maximum weight capacity of the ship.

# Return the least weight capacity of the ship that will result in all the packages on the conveyor belt being shipped within days days.

# https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/

# binary search [max(weights), sum(weights)]
class Solution:
    def shipWithinDays(self, weights: List[int], days: int) -> int:
        def day(weights, limit):
            cnt = package = 0
            for w in weights:
                package += w
                if package > limit:
                    cnt += 1
                    package = w
            return cnt + 1
        
        left, right = max(weights), sum(weights)
        while left <= right:
            mid = (left + right) // 2
            d = day(weights, mid)
            if d > days:
                left = mid + 1
            else:
                right = mid - 1
        return left

                
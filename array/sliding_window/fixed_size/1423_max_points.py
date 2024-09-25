# There are several cards arranged in a row, and each card has an associated number of points. The points are given in the integer array cardPoints.

# In one step, you can take one card from the beginning or from the end of the row. You have to take exactly k cards.

# Your score is the sum of the points of the cards you have taken.

# Given the integer array cardPoints and the integer k, return the maximum score you can obtain.

# https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/

# construct a new array to apply sliding window
# time complexity O(k)
# space complexity O(k)
class Solution:
    def maxScore(self, cardPoints: List[int], k: int) -> int:
        arr = cardPoints[-k:] + cardPoints[:k]
        left = right = window_sum = ans = 0

        while right < len(arr):
            window_sum += arr[right]
            if right - left + 1 == k:
                ans = max(ans, window_sum)
                window_sum -= arr[left]
                left += 1
            right += 1
        
        return ans

# minimize the cards you didn't pick: min sum of window size l - k
# time complexity O(n)
# space complexity O(1)
class Solution:
    def maxScore(self, cardPoints: List[int], k: int) -> int:
        l, total = len(cardPoints), sum(cardPoints)
        min_sum = float('inf')
        left = right = window_sum = 0
        
        while right < l:
            window_sum += cardPoints[right]
            if right - left + 1 == l - k:
                min_sum = min(window_sum, min_sum)
                window_sum -= cardPoints[left]
                left += 1
            right += 1

        return total - min_sum if min_sum < float('inf') else total



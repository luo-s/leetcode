# Given a sorted integer array arr, two integers k and x, return the k closest integers to x in the array. The result should also be sorted in ascending order.

# An integer a is closer to x than an integer b if:

# |a - x| < |b - x|, or
# |a - x| == |b - x| and a < b

# https://leetcode.com/problems/find-k-closest-elements/
# similar
# LC 977 https://leetcode.com/problems/squares-of-a-sorted-array/

# heap sort
# time complexity O(nlogn)
# space complexity O(n)
class Solution:
    def findClosestElements(self, arr: List[int], k: int, x: int) -> List[int]:
        import heapq
        heap = []
        for num in arr:
            heapq.heappush(heap, [abs(num - x), num])
        ans = []
        for _ in range(k):
            ans.append(heapq.heappop(heap)[1])
        ans.sort()
        return ans

# two pointers -- from center to expand window size
# time complexity O(n)
# space complexity O(n)
class Solution:
    def findClosestElements(self, arr: List[int], k: int, x: int) -> List[int]:
        from collections import deque
        dis = [abs(num - x) for num in arr]
        # linear search mi_idx, could improve with binary search
        mi = min(dis)  
        mi_idx =  dis.index(mi)
        ans = deque([arr[mi_idx]])
        left, right = mi_idx - 1, mi_idx + 1
        while len(ans) < k:
            if left < 0:
                ans.append(arr[right])
                right += 1
            elif right >= len(dis):
                ans.appendleft(arr[left])
                left -= 1
            else:
                if dis[left] <= dis[right]:
                    ans.appendleft(arr[left])
                    left -= 1
                else:
                    ans.append(arr[right])
                    right += 1
        return ans   
    
# optimized with binary search
class Solution:
    def findClosestElements(self, arr: List[int], k: int, x: int) -> List[int]:
        from bisect import bisect_left
        from collections import deque
        # Find the insertion point using binary search
        pos = bisect_left(arr, x)
        # Initialize two pointers
        left, right = pos - 1, pos
        # Result list
        result = deque([])
        # Expand the window to k elements
        while len(result) < k:
            if left < 0:
                result.append(arr[right])
                right += 1
            elif right >= len(arr):
                result.appendleft(arr[left])
                left -= 1
            else:
                if abs(arr[left] - x) <= abs(arr[right] - x):
                    result.appendleft(arr[left])
                    left -= 1
                else:
                    result.append(arr[right])
                    right += 1
        return result


# collision pointers -- shrink the window size from both sizes
# time complexity O(n)
# space complexity O(1)
class Solution:
    def findClosestElements(self, arr: List[int], k: int, x: int) -> List[int]:
        left, right = 0, len(arr) - 1
        # Shrink the window size to k by removing elements farther from x
        while right - left >= k:
            if abs(arr[left] - x) > abs(arr[right] - x):
                left += 1
            else:
                right -= 1
        # Return the subarray of size k
        return arr[left:left + k]
    

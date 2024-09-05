# Given an array of points where points[i] = [xi, yi] represents a point 
# on the X-Y plane and an integer k, return the k closest points to the 
# origin (0, 0).

# The distance between two points on the X-Y plane is the Euclidean distance 
# (i.e., √((x1 - x2)^2 + (y1 - y2)^2)).

# You may return the answer in any order. 
# The answer is guaranteed to be unique (except for the order that it is in).

# https://leetcode.com/problems/k-closest-points-to-origin/description/

# heap sort
import heapq
class Solution:
    def kClosest(self, points: List[List[int]], k: int) -> List[List[int]]:
        heap = []
        for (x, y) in points:
            distance = -(x * x + y * y)
            heapq.heappush(heap, (distance, [x, y]))
            if len(heap) > k:
                heapq.heappop(heap)
        return [point for _, point in heap]
    
# bucket sort -- MLE 
# too many empty buckets
# bucket sort suits for uni-distributed points
class Solution:
    def kClosest(self, points: List[List[int]], k: int) -> List[List[int]]:
        distance_map = dict()
        for (x, y) in points:
            distance = x * x + y * y
            distance_map[(x, y)] = distance
        buckets = [[] for _ in range(max(distance_map.values()) + 1)]
        for (x, y) in points:
            buckets[distance_map[(x, y)]].append((x, y))
        res = []
        for i in range(len(buckets)):
            for (x, y) in buckets[i]:
                res.append([x, y])
        return res[:k]
# You are part of a university admissions office and need to keep track of the kth highest test score from applicants in real-time. This helps to determine cut-off marks for interviews and admissions dynamically as new applicants submit their scores.

# You are tasked to implement a class which, for a given integer k, maintains a stream of test scores and continuously returns the kth highest test score after a new score has been submitted. More specifically, we are looking for the kth highest score in the sorted list of all scores.

# Implement the KthLargest class:

# KthLargest(int k, int[] nums) Initializes the object with the integer k and the stream of test scores nums.
# int add(int val) Adds a new test score val to the stream and returns the element representing the kth largest element in the pool of test scores so far.

# https://leetcode.com/problems/kth-largest-element-in-a-stream/
# similar
# LC 215 https://leetcode.com/problems/kth-largest-element-in-an-array/

# sort
# time complexity O(nlogn)
class KthLargest:

    def __init__(self, k: int, nums: List[int]):
        self.k = k
        self.stream = nums[:]
        
    def add(self, val: int) -> int:
        self.stream.append(val)
        self.stream.sort()
        return self.stream[-self.k]

# binary search
# time complexity O(nlogn)     
class KthLargest:

    def __init__(self, k: int, nums: List[int]):
        self.k = k
        self.stream = nums[:]
        self.stream.sort()
        
    def add(self, val: int) -> int:
        from bisect import bisect_left
        i = bisect_left(self.stream, val)
        self.stream.insert(i, val)
        return self.stream[-self.k]
        
# priority queue
# time complexity O(nlogn)
import heapq
class KthLargest:

    def __init__(self, k: int, nums: List[int]):
        self.k = k
        self.stream = nums[:]
        heapq.heapify(self.stream)
        while len(self.stream) > self.k:
            heapq.heappop(self.stream)
        
    def add(self, val: int) -> int:
        heapq.heappush(self.stream, val)
        if len(self.stream) > self.k:
            heapq.heappop(self.stream)
        return self.stream[0]

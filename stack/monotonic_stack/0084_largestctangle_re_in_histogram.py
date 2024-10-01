# Given an array of integers heights representing the histogram's bar height 
# where the width of each bar is 1, return the area of the largest rectangle 
# in the histogram.

# https://leetcode.com/problems/largest-rectangle-in-histogram/description/

class Solution:
    def largestRectangleArea(self, heights: List[int]) -> int:
        l = len(heights)
        left, right = [0] * l, [0] * l   
        
        # Calculate left limits: nearest smaller element's index on the left
        stack = []
        for i in range(l):
            while stack and heights[i] <= heights[stack[-1]]:
                stack.pop()
            if stack:
                left[i] = stack[-1] + 1  # left boundary (exclusive)
            else:
                left[i] = 0  # no smaller element, set to start
            stack.append(i)

        # Calculate right limits: nearest smaller element's index on the right
        stack = []
        for i in range(l - 1, -1, -1):
            while stack and heights[i] <= heights[stack[-1]]:
                stack.pop()
            if stack:
                right[i] = stack[-1] - 1  # right boundary (exclusive)
            else:
                right[i] = l - 1  # no smaller element, set to end
            stack.append(i)
        
        # Calculate max area
        maxArea = 0
        for i in range(l):
            width = right[i] - left[i] + 1  # width of the rectangle
            maxArea = max(maxArea, heights[i] * width)
        
        return maxArea


class Solution:
    def largestRectangleArea(self, heights: List[int]) -> int:
        l, maxArea, left, right = len(heights), 0, [0] * l, [0] * l

        stack = []     
        for i in range(l):
            while stack and heights[stack[-1]] > heights[i]:
                idx = stack.pop()
                right[idx] = i - idx - 1
            stack.append(i)
            if i == l - 1:
                while stack:
                    idx = stack.pop()
                    right[idx] = i - idx
        
        stack = []
        for i in range(l - 1, -1, -1):
            while stack and heights[stack[-1]] > heights[i]:
                idx = stack.pop()
                left[idx] = idx - i - 1
            stack.append(i)
            if i == 0:
                while stack:
                    idx = stack.pop()
                    left[idx] = idx - i
        
        for i in range(l):
            maxArea = max(maxArea, heights[i] * (left[i] + right[i] + 1))
        
        return maxArea

        

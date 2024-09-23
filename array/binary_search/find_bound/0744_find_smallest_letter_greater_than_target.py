# You are given an array of characters letters that is sorted in non-decreasing 
# order, and a character target. There are at least two different characters in 
# letters.

# Return the smallest character in letters that is lexicographically greater 
# than target. If such a character does not exist, return the first character 
# in letters.

# letters[i] is a lowercase English letter.
# letters is sorted in non-decreasing order.
# letters contains at least two different characters.
# target is a lowercase English letter.

# https://leetcode.com/problems/find-smallest-letter-greater-than-target/
# same problem LC 35 https://leetcode.com/problems/search-insert-position/

class Solution:
    def nextGreatestLetter(self, letters: List[str], target: str) -> str:
        left, right = 0, len(letters) - 1
        ans = left
        while left <= right:    # ends at left = right + 1
            mid = (left + right) // 2
            if letters[mid] <= target:
                left = mid + 1
            else:
                right = mid - 1
                ans = mid       # possible ans = mid = right + 1
        return letters[ans]     # ans = left = right + 1

class Solution:
    def nextGreatestLetter(self, letters: List[str], target: str) -> str:
        left, right = 0, len(letters) - 1
        if letters[right] <= target: return letters[left]
        while left < right:
            mid = (left + right) // 2
            if letters[mid] <= target:
                left = mid + 1
            else:
                right = mid
        return letters[left]

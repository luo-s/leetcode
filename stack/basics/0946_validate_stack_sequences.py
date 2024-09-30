# Given two integer arrays pushed and popped each with distinct values, 
# return true if this could have been the result of a sequence of push 
# and pop operations on an initially empty stack, or false otherwise.

# https://leetcode.com/problems/validate-stack-sequences/description/
    
class Solution:
    def validateStackSequences(self, pushed: List[int], popped: List[int]) -> bool:
        stack, ptr = [], 0
        for num in pushed:
            stack.append(num)
            while stack and stack[-1] == popped[ptr]:
                ptr += 1
                stack.pop()
        return not stack

class Solution:
    def validateStackSequences(self, pushed: List[int], popped: List[int]) -> bool:
        stack, l, p1, p2 = [], len(pushed), 0, 0
        while p1 <= l and p2 <= l:
            try: 
                if not stack:
                        stack.append(pushed[p1])
                        p1 += 1
                if stack[-1] != popped[p2]:
                        stack.append(pushed[p1])
                        p1 += 1
                else:
                    stack.pop()
                    p2 += 1  
                    if p2 == l: return True
            except:
                return False


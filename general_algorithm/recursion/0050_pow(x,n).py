#  Implement pow(x, n), which calculates x raised to the power n (i.e., x^n).

# https://leetcode.com/problems/powx-n/

# recursion -- max call stack size exceeded
class Solution:
    def myPow(self, x: float, n: int) -> float:
        if n == 0: return 1
        if n < 0: return 1 / self.myPow(x, -n)
        if n > 0: return x * self.myPow(x, n - 1)

# optimized recursion
class Solution:
    def myPow(self, x: float, n: int) -> float:
        if n == 0: return 1
        if n < 0: return 1 / self.myPow(x, -n)
        if n % 2:   
            half = self.myPow(x, (n - 1) // 2)  
            return x * half * half 
        else:      
            return self.myPow(x * x, n // 2)  
        
# dynamic programming - MLE
class Solution:
    def myPow(self, x: float, n: int) -> float:
        if n < 0: 
            x = 1 / x
            n = -n
        dp = [1] * (n + 1)
        for i in range(n + 1):
            if i % 2 == 1:
                dp[i] = dp[(i - 1) // 2] * dp[(i - 1) // 2] * x
            else:
                dp[i] = dp[i//2] * dp[i//2]
        return dp[n]

# divide and conquer
class Solution:
    def myPow(self, x: float, n: int) -> float:
        if n < 0:
            x = 1 / x
            n = -n
        result = 1
        current_product = x
        while n > 0:
            if n % 2 == 1: 
                result *= current_product
            current_product *= current_product 
            n //= 2  
        return result



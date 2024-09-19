# There is only one character 'A' on the screen of a notepad. You can perform 
# one of two operations on this notepad for each step:

# 1. Copy All: You can copy all the characters present on the screen.
# 2. Paste: You can paste the characters which are copied last time.

# Given an integer n, return the minimum number of operations to get the 
# character 'A' exactly n times on the screen.

# 1 <= n <= 1000

# https://leetcode.com/problems/2-keys-keyboard/

# math
# when n = 1, ans = 0 (no operation needed)
# when n > 1, the maximum ops is n (copy 1 time and paste n - 1 times)
# to lower ops: copy more than 1 time

# 如果我们将「1 次 Copy All + x - 1 次 Paste」看做一次“动作”的话,那么 一次“动作”所产生的效果就是将原来的字符串变为原来的 x 倍。

# 最终的最小操作次数方案可以等价以下操作流程：
# 起始对长度为 1 的记事本字符进行 1 次 Copy All + k1−1 次 Paste 操作（消耗次数为 k1，得到长度为 k1 的记事本长度）；
# 对长度为为 k1的记事本字符进行 1 次 Copy All + k2−1 次 Paste 操作（消耗次数为 k1 + k2，得到长度为 k1 * k2的记事本长度）
# ...
# 最终经过 x 次“动作”之后，得到长度为 n 的记事本长度，即有：
# n = k1 * k2 * ... * kx 
# 问题转化为：如何对 n 进行拆分，可以使得 k = k1 + k2 + ... + kx 最小。
# 当所有 ki 都是 n 的质因数时，k 达到最小 （for a, b >= 2: (a - 1)(b - 1) >= 1 -> ab >= a + b）
class Solution:
    def minSteps(self, n: int) -> int:
        ans = 0
        for i in range(2, isqrt(n) + 1):
            while n % i == 0:
                ans += i
                n //= i
        return ans if n == 1 else ans + n

# An attendance record for a student can be represented as a string where each character signifies whether the student was absent, late, or present on that day. The record only contains the following three characters:

# 'A': Absent.
# 'L': Late.
# 'P': Present.
# Any student is eligible for an attendance award if they meet both of the following criteria:

# The student was absent ('A') for strictly fewer than 2 days total.
# The student was never late ('L') for 3 or more consecutive days.
# Given an integer n, return the number of possible attendance records of length n that make a student eligible for an attendance award. The answer may be very large, so return it modulo 10 ** 9 + 7.

# https://leetcode.com/problems/student-attendance-record-ii/description/


# let dfs(i, absent, consecutive_late) denotes the number of possible attendaces records that eligible for an attendance award with start at ith day, with total absence and consecutive_late days
# then dfs(i, absent, consecutive_late) = dfs(i + 1, absent, 0) + dfs(i + 1, absent + 1, 0 + dfs(i + 1, absent, consecutive_late + 1)
# dfs + memoization
# MLE when n = 100000
class Solution:
    def checkRecord(self, n: int) -> int:
        table = dict()
        def dfs(idx, absent, consecutive_late):
            # check memoization first
            if (idx, absent, consecutive_late) in table:
                return table[(idx, absent, consecutive_late)]
            # base case
            if absent >= 2: return 0
            if consecutive_late >= 3: return 0
            if idx == n - 1: return 1
            # recursive case
            ans = dfs(idx + 1, absent, 0) + dfs(idx + 1, absent + 1, 0) + dfs(idx + 1, absent, consecutive_late + 1)
            table[(idx, absent, consecutive_late)] = ans
            return ans
        return (dfs(0, 0, 0) + dfs(0, 1, 0) + dfs(0, 0, 1)) % (10 ** 9 + 7)

# pythonic way to use cache
# write dfs function outside and using @cache
MOD = 10 ** 9 + 7

@cache
def dfs(i: int, j: int, k: int) -> int:
    # base case
    if i == 0:
        return 1
    # recursive case
    res = dfs(i - 1, j, 0)  # 填 P
    if j == 0:
        res += dfs(i - 1, 1, 0)  # 填 A
    if k < 2:
        res += dfs(i - 1, j, k + 1)  # 填 L
    return res % MOD

class Solution:
    def checkRecord(self, n: int) -> int:
        return dfs(n, 0, 0)


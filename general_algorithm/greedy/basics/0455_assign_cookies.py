# Assume you are an awesome parent and want to give your children some cookies. 
# But, you should give each child at most one cookie.

# Each child i has a greed factor g[i], which is the minimum size of a cookie 
# that the child will be content with; and each cookie j has a size s[j]. 
# If s[j] >= g[i], we can assign the cookie j to the child i, and the child i 
# will be content. Your goal is to maximize the number of your content 
# children and output the maximum number.

# 1 <= g.length <= 3 * 10^4
# 0 <= s.length <= 3 * 10^4
# 1 <= g[i], s[j] <= 2^31 - 1

# https://leetcode.com/problems/assign-cookies/

class Solution:
    def findContentChildren(self, g: List[int], s: List[int]) -> int:
        g.sort(reverse=True)
        s.sort(reverse=True)
        cnt = p1 = p2 = 0
        l1, l2 = len(g), len(s)
        while p1 < l1 and p2 < l2:
            if s[p2] >= g[p1]:
                cnt += 1
                p2 += 1
            p1 += 1
        return cnt


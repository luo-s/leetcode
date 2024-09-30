# Given a string s, remove duplicate letters so that every letter appears once 
# and only once. You must make sure your result is the smallest in 
# lexicographical order among all possible results.

# https://leetcode.com/problems/remove-duplicate-letters/
# same problem
# LC 1081 https://leetcode.com/problems/smallest-subsequence-of-distinct-characters/

from collections import Counter
class Solution:
    def removeDuplicateLetters(self, s: str) -> str:
        left = Counter(s)  # 统计每个字母的出现次数
        ans = []
        in_ans = set()
        for char in s:
            left[char] -= 1
            if char in in_ans:  # ans 中不能有重复字母
                continue
            # (设 x = ans[-1]) 如果 char < x，且右边还有 x，那么可以把 x 去掉，因为后面可以重新把 x 加到 ans 中
            while ans and char < ans[-1] and left[ans[-1]]:
                in_ans.remove(ans.pop())  # 标记 x 不在 ans 中
            ans.append(char)  # 把 char 加到 ans 的末尾
            in_ans.add(char)  # 标记 char 在 ans 中
        return ''.join(ans)

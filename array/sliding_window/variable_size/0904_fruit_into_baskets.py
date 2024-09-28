# You are visiting a farm that has a single row of fruit trees arranged from left to right. The trees are represented by an integer array fruits where fruits[i] is the type of fruit the ith tree produces.

# You want to collect as much fruit as possible. However, the owner has some strict rules that you must follow:

# You only have two baskets, and each basket can only hold a single type of fruit. There is no limit on the amount of fruit each basket can hold.
# Starting from any tree of your choice, you must pick exactly one fruit from every tree (including the start tree) while moving to the right. The picked fruits must fit in one of your baskets.
# Once you reach a tree with fruit that cannot fit in your baskets, you must stop.
# Given the integer array fruits, return the maximum number of fruits you can pick.

# https://leetcode.com/problems/fruit-into-baskets/

# longest subarray of only 2 types
class Solution:
    def totalFruit(self, fruits: List[int]) -> int:
        longest = left = right = 0
        types, l = dict(), len(fruits)
        while right < l:
            if fruits[right] in types:
                types[fruits[right]] += 1
            else:
                types[fruits[right]] = 1
                while len(types) > 2:
                    types[fruits[left]] -= 1
                    if types[fruits[left]] == 0:
                        del types[fruits[left]]
                    left += 1
            longest = max(longest, right - left + 1)
            right += 1
        return longest
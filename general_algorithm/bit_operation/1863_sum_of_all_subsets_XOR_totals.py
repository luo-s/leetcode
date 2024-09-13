# The XOR total of an array is defined as the bitwise XOR of all its elements, or 0 if the array is empty.

# For example, the XOR total of the array [2,5,6] is 2 XOR 5 XOR 6 = 1.
# Given an array nums, return the sum of all XOR totals for every subset of nums. 

# Note: Subsets with the same elements should be counted multiple times.

# An array a is a subset of an array b if a can be obtained from b by deleting some (possibly zero) elements of b.

# https://leetcode.com/problems/sum-of-all-subset-xor-totals/description/

# brute force
class Solution:
    def subsetXORSum(self, nums: List[int]) -> int:
        candidates = [0]
        for x in nums:
            candidates += [x ^ y for y in candidates]  
        return sum(candidates)

# backtracking
class Solution:
    def subsetXORSum(self, nums: List[int]) -> int:
        subsets, path, l = [], [], len(nums)
        def backtracking(nums, idx):
            # base case
            subsets.append(path[:])
            if idx >= l: return
            # recursive case
            for i in range(idx, l):
                path.append(nums[i])
                backtracking(nums, i + 1)
                path.pop()
        backtracking(nums, 0)
        print(subsets)
        ans = 0
        for subset in subsets:
            xor = 0
            for num in subset:
                xor ^= num
            ans += xor
        return ans   
    
# recursive 
class Solution:
    def subsetXORSum(self, nums: List[int]) -> int:
        res = 0
        n = len(nums)
        def dfs(val, idx):
            nonlocal res
            # base case
            if idx == n:
                res += val
                return
            # recursive case
            dfs(val ^ nums[idx], idx + 1)
            dfs(val, idx + 1)
        
        dfs(0, 0)
        return res

# bit operation
# 枚举 [0, 2**n-1]中的整数i，对应所有子集，其第 j 位的取值表示 nums 的第 j 个元素是否包含在对应的子集中。
class Solution:
    def subsetXORSum(self, nums: List[int]) -> int:
        res = 0
        n = len(nums)
        # 遍历所有子集
        for i in range(1 << n):   
            tmp = 0
            # 遍历每个元素
            for j in range(n):   
                if i & (1 << j):
                    tmp ^= nums[j]
            res += tmp
        return res

# math
class Solution:
    def subsetXORSum(self, nums: List[int]) -> int:
        res = 0
        n = len(nums)
        for num in nums:
            res |= num
        return res << (n - 1)


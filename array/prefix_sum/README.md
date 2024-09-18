# Prefix Sum 前缀和

通过前缀和，我们可以把连续子数组的元素和转换成两个前缀和的差，达到空间（前缀和数组）换时间（避免子数组求和的嵌套循环）的目的。

对于数组 a，定义它的前缀和:

- `s[0] = 0`
- `s[1] = a[0]`
- `s[2] = a[0] + a[1]`
- `s[i] = a[0] + a[1] + ⋯ + a[i−1]`

### 构造数组前缀和
```
preSum = [0] * (l + 1)

for i, v in enumerate(nums):
    preSum[i + 1] = preSum[i] + v
```
```
from itertools import accumulate

preSum = list(accumulate(nums))
```

### 前缀和的性质
- `s[i+1] = s[i] + a[i]`
- `a[i] + ... + a[j] = s[j+1] - s[i]`
- 对于正整数数列 a，其前缀和数列 s 是单调递增的，必要时可以进行二分查找。

### 前缀和题目
- [0303 Range Sum Query Immutable](https://leetcode.com/problems/range-sum-query-immutable/)
- [0053 Maximum Subarray](https://leetcode.com/problems/maximum-subarray/)
- [2389 Longest Subsequence with Limited Sum](https://leetcode.com/problems/longest-subsequence-with-limited-sum/)
- [2559 Count Vowel Strings in Ranges](https://leetcode.com/problems/count-vowel-strings-in-ranges/description/)
- [3152 Special Array II](https://leetcode.com/problems/special-array-ii/)
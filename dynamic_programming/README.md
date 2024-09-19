# 动态规划（Dynamic Programming）

动态规划（Dynamic Programming）：简称 DP，是一种求解多阶段决策过程最优化问题的方法。在动态规划中，通过把原问题分解为相对简单的子问题，先求解子问题，再由子问题的解而得到原问题的解。

动态规划的核心思想：
把「原问题」分解为「若干个重叠的子问题」，每个子问题的求解过程都构成一个 「阶段」。在完成一个阶段的计算之后，动态规划方法才会执行下一个阶段的计算。
在求解子问题的过程中，按照「自顶向下的记忆化搜索方法」或者「自底向上的递推方法」求解出「子问题的解」，把结果存储在表格中，当需要再次求解此子问题时，直接从表格中查询该子问题的解，从而避免了大量的重复计算。

### 动态规划的特征

1. 最优子结构：指的是一个问题的最优解包含其子问题的最优解。

2. 重叠子问题性质：指的是在求解子问题的过程中，有大量的子问题是重复的，一个子问题在下一阶段的决策中可能会被多次用到。如果有大量重复的子问题，那么只需要对其求解一次，然后用表格将结果存储下来，以后使用时可以直接查询，不需要再次求解。

3. 无后效性：指的是子问题的解（状态值）只与之前阶段有关，而与后面阶段无关。当前阶段的若干状态值一旦确定，就不再改变，不会再受到后续阶段决策的影响。

### 动态规划的求解

我们在使用动态规划方法解决某些最优化问题时，可以将解决问题的过程按照一定顺序（时间顺序、空间顺序或其他顺序）分解为若干个相互联系的「阶段」。然后按照顺序对每一个阶段做出「决策」，这个决策既决定了本阶段的效益，也决定了下一阶段的初始状态。依次做完每个阶段的决策之后，就得到了一个整个问题的决策序列。

通常我们使用动态规划方法来解决问题的基本思路如下：

- 划分阶段：将原问题按顺序（时间顺序、空间顺序或其他顺序）分解为若干个相互联系的「阶段」。划分后的阶段⼀定是有序或可排序的，否则问题⽆法求解。
  这里的「阶段」指的是⼦问题的求解过程。每个⼦问题的求解过程都构成⼀个「阶段」，在完成前⼀阶段的求解后才会进⾏后⼀阶段的求解。

- 定义状态：将和子问题相关的某些变量（位置、数量、体积、空间等等）作为一个「状态」表示出来。状态的选择要满⾜⽆后效性。
  一个「状态」对应一个或多个子问题，所谓某个「状态」下的值，指的就是这个「状态」所对应的子问题的解。

- 状态转移：根据「上一阶段的状态」和「该状态下所能做出的决策」，推导出「下一阶段的状态」。或者说根据相邻两个阶段各个状态之间的关系，确定决策，然后推导出状态间的相互转移方式（即「状态转移方程」）。

- 初始条件和边界条件：根据问题描述、状态定义和状态转移方程，确定初始条件和边界条件。

- 最终结果：确定问题的求解目标，然后按照一定顺序求解每一个阶段的问题。最后根据状态转移方程的递推结果，确定最终结果。

### 基础动态规划问题

- [0070 Clibing Stairs](https://leetcode.com/problems/climbing-stairs/)
- [0509 Fibonacci Number](https://leetcode.com/problems/fibonacci-number/)
- [0062 Unique Paths](https://leetcode.com/problems/unique-paths/)

## 记忆化搜索

记忆化搜索（Memoization Search）：是一种通过存储已经遍历过的状态信息，从而避免对同一状态重复遍历的搜索算法。
记忆化搜索是动态规划的一种实现方式。在记忆化搜索中，当算法需要计算某个子问题的结果时，它首先检查是否已经计算过该问题。如果已经计算过，则直接返回已经存储的结果；否则，计算该问题，并将结果存储下来以备将来使用。

我们在使用记忆化搜索解决问题的时候，其基本步骤如下：

1. 写出问题的动态规划「状态」和「状态转移方程」。
2. 定义一个缓存（数组或哈希表），用于保存子问题的解。(也可以使用系统自动缓存`@cache`)
3. 定义一个递归函数，用于解决问题。在递归函数中，首先检查缓存中是否已经存在需要计算的结果，如果存在则直接返回结果，否则进行计算，并将结果存储到缓存中，再返回结果。
4. 在主函数中，调用递归函数并返回结果。

- [0494 Target Sum](https://leetcode.com/problems/target-sum/)
- [0576 Out of Boundary Paths](https://leetcode.com/problems/out-of-boundary-paths/)
- [0403 Frog Jump](https://leetcode.com/problems/frog-jump/)
- [0552 Student Attendence Record II](https://leetcode.com/problems/student-attendance-record-ii/)

## 线性动态规划

线性动态规划：具有「线性」阶段划分的动态规划方法统称为线性动态规划（简称为「线性 DP」）

线性 DP 问题的划分方法有多种方式。

如果按照「状态的维度数」进行分类，我们可以将线性 DP 问题分为：一维线性 DP 问题、二维线性 DP 问题，以及多维线性 DP 问题。
如果按照「问题的输入格式」进行分类，我们可以将线性 DP 问题分为：单串线性 DP 问题、双串线性 DP 问题、矩阵线性 DP 问题，以及无串线性 DP 问题。

### 单串线性 DP 问题

单串线性 DP 问题：问题的输入为单个数组或单个字符串的线性 DP 问题。状态一般可定义为 `dp[i]`，表示为：

1. 「以数组中第 i 个位置元素 `nums[i]` 为结尾的子数组（`nums[0]...nums[i]`）」的相关解。
2. 「以数组中第 i−1 个位置元素 `nums[i−1]` 为结尾的子数组（`nums[0]...nums[i−1]`）」的相关解，或者「以数组中前 i 个元素为子数组（`nums[0]...nums[i−1]`）」的相关解。

- [0300 Longest Increasing Subsequence LIS](https://leetcode.com/problems/longest-increasing-subsequence/)
- [0053 Maximum Subarray](https://leetcode.com/problems/maximum-subarray/)
- [0873 Length of Longest Fibonacci Subsequence](https://leetcode.com/problems/length-of-longest-fibonacci-subsequence/)

### 双串线性 DP 问题

双串线性 DP 问题：问题的输入为两个数组或两个字符串的线性 DP 问题。状态一般可定义为 `dp[i][j]`，表示为：

1. 「以第一个数组中第 i 个位置元素 `nums1[i]` 为结尾的子数组`nums1[:i+1]`」与「以第二个数组中第 j 个位置元素 `nums2[j]` 为结尾的子数组`nums2[:j+1]`」的相关解。
2. 「以第一个数组中第 i−1 个位置元素 `nums1[i−1]` 为结尾的子数组`nums1[:i]`」与「以第二个数组中第 j−1 个位置元素 `nums2[j−1]` 为结尾的子数组（`nums2[:j]`）」的相关解；或者「以第一个数组中前 i 个元素为子数组`nums1[:i]`」与「以第二个数组中前 j 个元素为子数组`nums2[:j]`」的相关解。

- [1143 Longest Common Subsequence](https://leetcode.com/problems/longest-common-subsequence/)
- [0718 Longest Repeated Subarray](https://leetcode.com/problems/maximum-length-of-repeated-subarray/)
- [0072 Edit Distance](https://leetcode.com/problems/edit-distance/)

### 矩阵线性 DP 问题

矩阵线性 DP 问题：问题的输入为二维矩阵的线性 DP 问题。状态一般可定义为 `dp[i][j]`，表示为：从「位置 `(0,0)`」到达「位置 `(i,j)`」的相关解。

- [0064 Minimum path Sum](https://leetcode.com/problems/minimum-path-sum/)
- [0221 Maximum Square](https://leetcode.com/problems/maximal-square/)
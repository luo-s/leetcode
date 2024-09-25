# 二分查找（Binary Search）

二分查找算法（Binary Search Algorithm）：也叫做折半查找算法、对数查找算法，是一种用于在有序数组中查找特定元素的高效搜索算法。

二分查找算法是经典的 「减而治之」 的思想。

这里的 「减」 是减少问题规模的意思，「治」 是解决问题的意思。「减」 和 「治」 结合起来的意思就是 「排除法解决问题」。即：每一次查找，排除掉一定不存在目标元素的区间，在剩下可能存在目标元素的区间中继续查找。

每一次通过一些条件判断，将待搜索的区间逐渐缩小，以达到「减少问题规模」的目的。而于问题的规模是有限的，经过有限次的查找，最终会查找到目标元素或者查找失败。

## 二分查找细节

### 区间的开闭问题

1. `left = 0，right = len(nums) − 1`（左闭右闭区间 `[left,right]` 左右边界上的点都能取到）
2. `left = 0，right = len(nums)`（左闭右开区间 `[left,right)` 左边界点能取到，而右边界上的点不能取到，不建议使用）

关于二分查找算法的左闭右闭区间、左闭右开区间，其实在网上都有对应的代码。但是相对来说，左闭右开区间这种写法在解决问题的过程中，会使得问题变得复杂，需要考虑的情况更多，所以不建议使用左闭右开区间这种写法，而是建议：**全部使用「左闭右闭区间」这种写法**。

### mid 的取值问题

1. `mid = left + (right - left) // 2`
2. `mid = left + (right - left + 1) // 2`

二分查找算法的思路是：根据每次选择中间位置上的数值来决定下一次在哪个区间查找元素。每一次选择的元素位置可以是中间位置，但并不是一定非得是区间中间位置元素，靠左一些、靠右一些、甚至区间三分之一、五分之一处等等，都是可以的。比如说 `mid = (left + right) // 5` 也是可以的。但一般来说，取区间中间位置在平均意义下所达到的效果最好。同时这样写最简单。对于这两个取值公式，大多数时候是选择第一个公式（向下取整）。只在某些特殊情况下，必需要使用第二个公式（向上取整）。

### 出界条件判断

1. `left <= right`
2. `left < right`

如果判断语句为 `left <= right`，并且查找的元素不在有序数组中，则 while 语句的出界条件是 `left == right + 1`，写成区间形式就是 `[right + 1, right]`，此时待查找区间为空，待查找区间中没有元素存在，此时终止循环时，可以直接返回 −1。

如果判断语句为 `left < right`，并且查找的元素不在有序数组中，则 while 语句出界条件是 `left == right`，写成区间形式就是 `[right,right]`。此时区间不为空，待查找区间还有一个元素存在，需要在出界之后增加一层判断`return left if nums[left] == target else -1`

### 搜索区间范围的选择

1. `left = mid + 1，right = mid - 1`
2. `left = mid + 1 ，right = mid`
3. `left = mid，right = mid - 1`

二分查找的关键点，写错了很容易造成死循环，或者得不到正确结果。我们需要根据二分查找的两种思路选择索索区间范围。

## 二分查找的两种思路

### 直接法

将搜索空间分成`[left, mid - 1], [mid], [mid + 1, right]`三部分，一旦找到目标，即刻返回结果。判断语句是 `left <= right`，有时候要考虑返回是 left 还是 right。循环体内有 3 个分支，并且一定有一个分支用于退出循环或者直接返回。这种思路适合解决简单题目。即要查找的元素性质简单，数组中都是非重复元素，且 ==、>、< 的情况非常好写的时候。

### 排除法

将搜索空间分成两部分（两部分的划分与 mid 的取值相关），每次循环排除目标一定不存在的区间，直到循环终止。更加符合二分查找算法的减治思想。每次排除目标元素一定不存在的区间，达到减少问题规模的效果。然后在可能存在的区间内继续查找目标元素。这种思路适合解决复杂题目。比如查找一个数组里可能不存在的元素，找边界问题，可以使用这种思路。

为了避免陷入死循环，当区分被划分为 `[left, mid − 1]` 与 `[mid, right]` 两部分时，mid 取值要向上取整。即 `mid = left + (right - left + 1) // 2`。因为如果当区间中只剩下两个元素时（此时 right = left + 1），一旦进入 left = mid 分支，区间就不会再缩小了，下一次循环的查找区间还是 `[left, right]`，就陷入了死循环。**只要看到 `left = mid` 就向上取整。**

- `[left, mid], [mid + 1, right]` 如果 `mid = left + (right - left) // 2`
- `[left, mid - 1], [mid, right]` 如果 `mid = left + (right - left + 1) // 2`

## 二分查找题目

### 简单二分查找

- [0704 Binary Search](https://leetcode.com/problems/binary-search/)
- [0374 Guess Number](https://leetcode.com/problems/guess-number-higher-or-lower/)
- [0074 Search a 2D Matrix](https://leetcode.com/problems/search-a-2d-matrix/)
- [0167 Two Sum II - Input Array Is Sorted](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/)
- [0033 Search Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array/)
- [0367 Valid Perfect Square](https://leetcode.com/problems/valid-perfect-square/)

### 二分查找边界问题

在用直接法查找边界时，可以引入变量维持每一次循环符合条件的结果，并不断迭代缩小边界。此变量需要根据特殊情况进行初始赋值。

- [0035 Search Insert Position](https://leetcode.com/problems/search-insert-position/)
- [0034 Find First and Last Position of Element in Sorted Array](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/)
- [0744 Find Smallest Letter Greater than Target](https://leetcode.com/problems/find-smallest-letter-greater-than-target/)
- [0069 Sqrt(x)](https://leetcode.com/problems/sqrtx/)
- [0278 First Bad Version](https://leetcode.com/problems/first-bad-version/)
- [0240 Search a 2D Matrix II](https://leetcode.com/problems/search-a-2d-matrix-ii/)
- [0153 Find Minimum in Rotated Sorted Array](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/)
- [0154 Find Minimum in Rotated Sorted Array II](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/)
- [0162 Find Peak Element](https://leetcode.com/problems/find-peak-element/)
- [0852 Peak Index in Mountain Array](https://leetcode.com/problems/peak-index-in-a-mountain-array/)

### 其他二分查找

- [0400 Nth Digit](https://leetcode.com/problems/nth-digit/description/)
- [0875 Koko Eating Bananas](https://leetcode.com/problems/koko-eating-bananas/)
- [1300 Sum of Mutated Array Closest to Target](https://leetcode.com/problems/sum-of-mutated-array-closest-to-target/)
- [1482 Minimum Number of Days to Make m Bouquets](https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/)
- [1011 Capacity To Ship Packages Within D Days](https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/)
- [0719 Find K-th Smallest Pair Distance](https://leetcode.com/problems/find-k-th-smallest-pair-distance/) \*

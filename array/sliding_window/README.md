# 滑动窗口（Sliding Window）

滑动窗口算法（Sliding Window）：在给定数组 / 字符串上维护一个固定长度或不定长度的窗口。可以对窗口进行滑动操作、缩放操作，以及维护最优解操作。

滑动窗口利用了双指针中的快慢指针技巧，我们可以将滑动窗口看做是快慢指针两个指针中间的区间，也可以将滑动窗口看做是快慢指针的一种特殊形式。

- 滑动操作：维持固定窗口长度，并按照一定方向进行移动。最常见的是向右侧移动。
- 缩放操作：对于不定长度的窗口，可以从两侧增大或缩小窗口长度。最常见的是从左侧缩小窗口长度，从右侧增大窗口长度。也可以采用对撞指针同时从两侧缩小窗口长度（LC 658）。

滑动窗口算法一般用来解决一些查找满足一定条件的连续区间的性质（长度等）的问题。该算法可以将一部分问题中的嵌套循环转变为一个单循环，因此它可以减少时间复杂度。

### 固定长度窗口：窗口大小是固定的。

- [1343 Number of Sub-arrays of Size K and Average Greater than or Equal to Threshold](https://leetcode.com/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/)
- [0643 Maximum Average Subarray I](https://leetcode.com/problems/maximum-average-subarray-i/)
- [1456 Maximum Number of Vowels in a Substring of Given Length](https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/)
- [1052 Grumpy Bookstore Owner](https://leetcode.com/problems/grumpy-bookstore-owner/)
- [1423 Maximum Points You Can Obtain From Cards](https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/)
- [0567 Permutation in String](https://leetcode.com/problems/permutation-in-string/)
- [0438 Find All Anagrams in a String](https://leetcode.com/problems/find-all-anagrams-in-a-string/)
- [0995 Minimum Number of K Consecutive Bit Flips](https://leetcode.com/problems/minimum-number-of-k-consecutive-bit-flips/)
- [0239 Sliding Window Maximum](https://leetcode.com/problems/sliding-window-maximum/)
- [0480 Sliding Window Median](https://leetcode.com/problems/sliding-window-median/)
- [0220 Contains Duplicate III](https://leetcode.com/problems/contains-duplicate-iii/)

### 不定长度窗口：窗口大小是不固定的。

- [0003 Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/)
- [0209 Minimum Size Subarray Sum](https://leetcode.com/problems/minimum-size-subarray-sum/)
- [0713 Subarray Product Less Than K](https://leetcode.com/problems/subarray-product-less-than-k/)
- [0674 Longest Continuous Increasing Subsequence](https://leetcode.com/problems/longest-continuous-increasing-subsequence/)
- [0485 Max Consecutive Ones](https://leetcode.com/problems/max-consecutive-ones/)
- [1004 Max Consecutive Ones III](https://leetcode.com/problems/max-consecutive-ones-iii/)
- [0718 Maximum Length of Repeated Subarray](https://leetcode.com/problems/maximum-length-of-repeated-subarray/)
- [1658 Minimum Operations to Reduce X to Zero](https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero/)
- [0424 Longest Repeating Character Replacement](https://leetcode.com/problems/longest-repeating-character-replacement/)

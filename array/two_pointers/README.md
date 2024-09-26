# 双指针简介

- 双指针（[Two Pointers](https://leetcode.com/tag/two-pointers/)）：指的是在遍历元素的过程中，不是使用单个指针进行访问，而是使用两个指针进行访问，从而达到相应的目的。如果两个指针方向相反，则称为「对撞指针」。如果两个指针方向相同，则称为「快慢指针」。如果两个指针分别属于不同的数组 / 链表，则称为「分离双指针」。

- 在数组的区间问题上，暴力算法的时间复杂度往往是 O(n^2)。而双指针利用了区间「单调性」的性质，可以将时间复杂度降到 O(n)。

## 对撞指针

对撞指针一般用来解决有序数组或者字符串问题：

- 查找有序数组中满足某些约束条件的一组元素问题：比如二分查找、数字之和等问题。

  - [0167 Two Sum II - Input Array Is Sorted](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/)
  - [0015 3Sum](https://leetcode.com/problems/3sum/)
  - [0016 3Sum Closest](https://leetcode.com/problems/3sum-closest/)
  - [0611 Valid Triangle Number](https://leetcode.com/problems/valid-triangle-number/)
  - [0018 4Sum](https://leetcode.com/problems/4sum/)
  - [0977 Squares of a Sorted Array](https://leetcode.com/problems/squares-of-a-sorted-array/)
  - [0658 Find K Closest Elements](https://leetcode.com/problems/find-k-closest-elements/)
  - [0881 Boats to Save People](https://leetcode.com/problems/boats-to-save-people/)
  - [0011 Container With Most Water](https://leetcode.com/problems/container-with-most-water/)
  - [0042 Trapping Rain Water](https://leetcode.com/problems/trapping-rain-water/) \*

- 字符串反转问题：反转字符串、回文数、颠倒二进制等问题。

  - [0344 Reverse String](https://leetcode.com/problems/reverse-string/)
  - [0345 Reverse Vowels of a String](https://leetcode.com/problems/reverse-vowels-of-a-string/)
  - [0125 Valid Palindrome](https://leetcode.com/problems/valid-palindrome/)

## 快慢指针

快慢指针广泛应用于数组和链表的处理：

- 处理数组中的原地修改、移动、删除元素问题.

  - [0283 Move Zeroes](https://leetcode.com/problems/move-zeroes/)
  - [2460 Apply Operations to an Array](https://leetcode.com/problems/apply-operations-to-an-array/)
  - [0075 Sort Colors](https://leetcode.com/problems/sort-colors/) (本质是两套快慢指针同时处理数组移动)
  - [0027 Remove Element](https://leetcode.com/problems/remove-element/)
  - [0026 Remove Duplicates from Sorted Array](https://leetcode.com/problems/remove-duplicates-from-sorted-array/)
  - [0080 Remove Duplicates from Sorted Array II](https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/)
  - [0443 String Compression](https://leetcode.com/problems/string-compression/) \*
  - [0845 Longest Mountain in Array](https://leetcode.com/problems/longest-mountain-in-array/)
  - [2511 Maximum Enemy Forts That Can Be Captured](https://leetcode.com/problems/maximum-enemy-forts-that-can-be-captured/)

- 环形链表、链表长度问题。

  - [0876 Middle of the Linked List](https://leetcode.com/problems/middle-of-the-linked-list/)
  - [0141 Linked List Cycle](https://leetcode.com/problems/linked-list-cycle/)
  - [0142 Linked List Cycle II](https://leetcode.com/problems/linked-list-cycle-ii/)
  - [0287 Find Duplicate Number](https://leetcode.com/problems/find-the-duplicate-number/)
  - [0160 Intersection of Two Linked Lists](https://leetcode.com/problems/intersection-of-two-linked-lists/)
  - [0019 Remove Nth Node From End of List](https://leetcode.com/problems/remove-nth-node-from-end-of-list/)

## 分离双指针

- 分离双指针一般用于处理有序数组合并，求交集、并集问题。

  - [0350 Intersection of Two Arrays II](https://leetcode.com/problems/intersection-of-two-arrays-ii/)
  - [0925 Long Pressed Name](https://leetcode.com/problems/long-pressed-name/)
  - [0844 Backspace String Compare](https://leetcode.com/problems/backspace-string-compare/)
  - [0415 Add Strings](https://leetcode.com/problems/add-strings/)
  - [0392 Is Subsequence](https://leetcode.com/problems/is-subsequence/)

# 双指针简介

- 双指针（Two Pointers）：指的是在遍历元素的过程中，不是使用单个指针进行访问，而是使用两个指针进行访问，从而达到相应的目的。如果两个指针方向相反，则称为「对撞指针」。如果两个指针方向相同，则称为「快慢指针」。如果两个指针分别属于不同的数组 / 链表，则称为「分离双指针」。

- 在数组的区间问题上，暴力算法的时间复杂度往往是 O(n^2)。而双指针利用了区间「单调性」的性质，可以将时间复杂度降到 O(n)。

## 对撞指针

对撞指针一般用来解决有序数组或者字符串问题：

- 查找有序数组中满足某些约束条件的一组元素问题：比如二分查找、数字之和等问题。

  - [Two Sum II - Input Array Is Sorted](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/)
  - [Boats to Save People](https://leetcode.com/problems/boats-to-save-people/)
  - [Container With Most Water](https://leetcode.com/problems/container-with-most-water/)
  - [Trapping Rain Water](https://leetcode.com/problems/trapping-rain-water/)

- 字符串反转问题：反转字符串、回文数、颠倒二进制等问题。
  - [Reverse String](https://leetcode.com/problems/reverse-string/)
  - [Reverse Vowels of a String](https://leetcode.com/problems/reverse-vowels-of-a-string/)
  - [Valid Palindrome](https://leetcode.com/problems/valid-palindrome/)

## 快慢指针

快慢指针广泛应用于数组和链表的处理：

- 处理数组中的移动、删除元素问题.

  - [Move Zeroes](https://leetcode.com/problems/move-zeroes/)
  - [Sort Colors](https://leetcode.com/problems/sort-colors/) (本质是两套快慢指针同时处理数组移动)
  - [Remove Element](https://leetcode.com/problems/remove-element/)
  - [Remove Duplicates from Sorted Array](https://leetcode.com/problems/remove-duplicates-from-sorted-array/)
  - [String Compression](https://leetcode.com/problems/string-compression/)

- 环形链表、链表长度问题。
  - [Linked List Cycle](https://leetcode.com/problems/linked-list-cycle/)
  - [Linked List Cycle II](https://leetcode.com/problems/linked-list-cycle-ii/)

## 分离双指针

- 分离双指针一般用于处理有序数组合并，求交集、并集问题。
  - [Long Pressed Name](https://leetcode.com/problems/long-pressed-name/)

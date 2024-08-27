# Given an integer array nums, return sorted array from min to max

# # built-in function
# sorted(nums)                             # return a new list
# nums.sort(key=None,reverse=False)        # modify original list

# bubble sort -- stable
# time commplexity O(n^2)
# space complexity O(1)
def bubble_sort(nums):
    l = len(nums)
    for i in range(l):
        for j in range(0, l - 1 - i):
            if nums[j] > nums[j + 1]:
                nums[j], nums[j + 1] = nums[j + 1], nums[j]
    return nums

# selection sort -- unstable
# time complexity O(n^2)
# space complexity O(1)
def selection_sort(nums):
    l = len(nums)
    for i in range(l):
        min_index = i
        for j in range(i + 1, l):
            if nums[j] < nums[min_index]:
                min_index = j
        if min_index != i:
            nums[i], nums[min_index] = nums[min_index], nums[i]
    return nums

# insertion sort -- stable
# time complexity O(n^2)
# space complexity O(1)
def insertion_sort(nums):
    l = len(nums)
    # 遍历无序区间
    for i in range(1, l):
        temp = nums[i]
        j = i
        # 从右至左遍历有序区间
        while j > 0 and nums[j - 1] > temp:
            # 将有序区间中插入位置右侧的元素依次右移一位
            nums[j] = nums[j - 1]
            j -= 1
        # 将该元素插入到适当位置
        nums[j] = temp
    return nums

# quick sort -- unstable
# time complexity O(nlogn)
# space complexity O(n)
import random
def quick_sort(nums):
    if len(nums) <= 1:
        return nums
    pivot = random.choice(nums)
    left, right, middle = [], [], []
    for i in range(len(nums)):
        if nums[i] < pivot:
            left.append(nums[i])
        elif nums[i] > pivot:
            right.append(nums[i])
        else:
            middle.append(nums[i])
    # left = [num for num in nums if num < pivot]
    # middle = [num for num in nums if num == pivot]
    # right = [num for num in nums if num > pivot]
    return quick_sort(left) + middle + quick_sort(right)

# merge sort -- stable
# time complexity O(nlogn)
# space complexity O(n)
def merge_sort(nums):
    # merge function
    def merge(left, right):
        ans = []
        while(len(left) and len(right)):
            if left[0] < right[0]:
                ans.append(left.pop(0))
            else:
                ans.append(right.pop(0))
        return ans + left + right
    # divide from the middle
    l = len(nums)
    if l <= 1:
        return nums
    mid = l // 2
    left = nums[:mid]
    right = nums[mid:]
    return merge(merge_sort(left), merge_sort(right))
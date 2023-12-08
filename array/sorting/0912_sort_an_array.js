/*
Given an array of integers nums, sort the array in ascending order and return it.

You must solve the problem without using any built-in functions in O(nlog(n)) time complexity and with the smallest space complexity possible.
*/
// https://leetcode.com/problems/sort-an-array/

// quick sort
// time complexity O(nlogn)
// space complexity O(n)
var sortArray = function(nums) {
    if (nums.length <= 1) {
        return nums;
    } else {
        let pivot = nums[0], left = [], right = [];
        for (let i = 1; i < nums.length; i++) {
            if (nums[i] < pivot) left.push(nums[i]);
            else right.push(nums[i]);
        }
        return sortArray(left).concat(pivot).concat(sortArray(right));
    }
};

// merge sort
// time compleixty O(nlogn)
// space complexity 
var sortArray = function(nums) {
    if (nums.length <= 1) return nums;
    let mid = Math.floor(nums.length / 2);
    let left = nums.slice(0, mid);
    let right = nums.slice(mid);
    return merge(sortArray(left), sortArray(right));
    function merge (left, right) {
        const array = [];
        while (left.length && right.length) {
            if (left[0] < right[0]) array.push(left.shift());
            else array.push(right.shift());
        }
        return array.concat(left).concat(right);
    }
};
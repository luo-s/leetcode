/*
There is a bookstore owner that has a store open for n minutes. Every minute, 
some number of customers enter the store. You are given an integer array 
customers of length n where customers[i] is the number of the customer that 
enters the store at the start of the ith minute and all those customers 
leave after the end of that minute.

On some minutes, the bookstore owner is grumpy. You are given a binary array 
grumpy where grumpy[i] is 1 if the bookstore owner is grumpy during the ith 
minute, and is 0 otherwise.

When the bookstore owner is grumpy, the customers of that minute are not 
satisfied, otherwise, they are satisfied.

The bookstore owner knows a secret technique to keep themselves not grumpy 
for minutes consecutive minutes, but can only use it once.

Return the maximum number of customers that can be satisfied throughout the day.
*/

// sliding window
// time complexity O(n)
// space complexity O(1)
var maxSatisfied = function (customers, grumpy, minutes) {
  let customerSat = 0;
  for (let i = 0; i < customers.length; i++) {
    customerSat += customers[i] * (1 - grumpy[i]);
  }
  let left = 0;
  let right = 0;
  let windowSum = 0;
  let extraSat = 0;
  while (right < customers.length) {
    windowSum += customers[right] * grumpy[right];
    if (right - left + 1 >= minutes) {
      extraSat = Math.max(extraSat, windowSum);
      windowSum -= customers[left] * grumpy[left];
      left++;
    }
    right++;
  }
  return customerSat + extraSat;
};

// You are given a large integer represented as an integer array digits,
// where each digits[i] is the ith digit of the integer.
// The digits are ordered from most significant to least significant in
// left-to-right order. The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.

// recursion
var plusOne = function (digits) {
  function overflow(array, index) {
    if (array[index] < 9) {
      array[index]++;
      return array;
    } else if (array[index] === 9) {
      array[index] = 0;
      if (index > 0) {
        return overflow(array, index - 1);
      } else if (index === 0) {
        array.unshift(1);
        return array;
      }
    }
  }
  return overflow(digits, digits.length - 1);
};

// another solution
var plusOne = function (digits) {
  // edge case: [9,...,9]
  let result = digits.filter((num) => num === 9).map((num) => (num = 0));
  if (result.length === digits.length) {
    result.unshift(1);
    return result;
  }
  // find the first not 9 digit, add 1, reassign all 9 digit to 0;
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i] += 1;
      return digits;
    } else {
      digits[i] = 0;
    }
  }
};

console.log(plusOne([1, 2, 3]));
console.log(plusOne([4, 3, 2, 1]));
console.log(plusOne([9, 9, 9]));

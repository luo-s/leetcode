// some basic bit operations

// binary -> decimal
parseInt("1010", 2); // 10

var binaryToDecimal = function (binaryStr) {
  let ans = 0;
  for (let char of binaryStr) {
    ans = ans * 2 + Number(char);
  }
  return ans;
};

// decimal -> binary
(10).toString(2); // "1010"

var decimalToBinary = function (decimal) {
  let ans = [];
  while (decimal > 0) {
    ans.push(decimal % 2);
    decimal = Math.floor(decimal / 2);
  }
  return ans.reverse().join("");
};

// get the k-th bit from the right
(num >> (k - 1)) & 1;
num & 1; // get the last bit

// set the k-th bit from the right to 1
num | (1 << (k - 1));
num | 1; // set the last bit to 1

// clear the k-th bit from the right to 0
num & ~(1 << (k - 1));
num & ~1; // clear the last bit

// toggle the k-th bit from the right
num ^ (1 << (k - 1));
num ^ 1; // toggle the last bit

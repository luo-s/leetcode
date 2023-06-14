/*
Given an integer n, return the number of prime numbers that are strictly less than n.
*/
// // brute force
// // time complexity O(n^(1.5)) -- time exceeded for 5 * 10^6
// // space complexity O(1)
// var countPrimes = function (n) {
//   let count = 0;
//   function isPrime(n) {
//     if (n === 1) return false;
//     for (let i = 2; i <= Math.floor(n ** 0.5); i++) {
//       console.log(i);
//       if (n % i === 0) {
//         return false;
//       }
//     }
//     return true;
//   }
//   for (let i = 1; i < n; i++) {
//     if (isPrime(i)) {
//       count++;
//     }
//   }
//   return count;
// };

// Eratosthenes method
// time complexity O(nloglogn);
// space complexity O(n);
var countPrimes = function (n) {
  const isPrime = new Array(n).fill(1);
  let ans = 0;
  for (let i = 2; i < n; i++) {
    if (isPrime[i]) {
      ans++;
      for (let j = i * i; j < n; j += i) {
        isPrime[j] = 0;
      }
    }
  }
  return ans;
};

console.log(countPrimes(10)); // 4
console.log(countPrimes(100)); // 25
console.log(countPrimes(1000)); // 168
console.log(countPrimes(100000)); // 9592
console.log(countPrimes(1000000)); // 78498
console.log(countPrimes(5000000)); // 348513

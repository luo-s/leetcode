/*
Design an algorithm that collects daily price quotes for some stock and 
returns the span of that stock's price for the current day.

The span of the stock's price in one day is the maximum number of consecutive 
days (starting from that day and going backward) for which the stock price 
was less than or equal to the price of that day.
*/

// https://leetcode.com/problems/online-stock-span/

// brute force -- time limit exceeded
var StockSpanner = function () {
  this.array = [];
};

StockSpanner.prototype.next = function (price) {
  if (this.array.length === 0 || price < this.array[this.array.length - 1]) {
    this.array.push(price);
    return 1;
  } else {
    let count = 1,
      i = this.array.length - 1;
    while (i >= 0 && this.array[i] <= price) {
      count++;
      i--;
    }
    this.array.push(price);
    return count;
  }
};

/* optimized
let span be the array of the span of the stock price, initialized with 1
if price[i+1] >= price[i], then span[i+1] += span[i], move back span[i] steps
if price[i+1] >= price[i-span[i]], then span[i+1] += span[i-span[i]], and so on...
*/
var StockSpanner = function () {
  this.stock = [];
  this.span = [];
};

StockSpanner.prototype.next = function (price) {
  let count = 1,
    index = this.stock.length - 1;
  while (index >= 0 && this.stock[index] <= price) {
    count += this.span[index];
    index -= this.span[index];
  }
  this.stock.push(price);
  this.span.push(count);
  return count;
};

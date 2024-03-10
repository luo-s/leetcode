/*
There are n gas stations along a circular route, where the amount of gas at 
the ith station is gas[i].

You have a car with an unlimited gas tank and it costs cost[i] of gas to 
travel from the ith station to its next (i + 1)th station. 

You begin the journey with an empty tank at one of the gas stations.

Given two integer arrays gas and cost, return the starting gas station's 
index if you can travel around the circuit once in the clockwise direction, 
otherwise return -1. If there exists a solution, it is guaranteed to be unique

n == gas.length == cost.length
1 <= n <= 10^5
0 <= gas[i], cost[i] <= 10^4
*/

// https://leetcode.com/problems/gas-station/description/

/*
let i be the first station: gas[i] >= cost[i]
then for all j that j > 0 && i+j < 2n
gas[i] + gas[i+1] + ... + gas[i+j] >= cost[i] + cost[i+1] + ... + cost[i+j]
*/
var canCompleteCircuit = function (gas, cost) {
  // corner case
  if (gas.reduce((a, b) => a + b) < cost.reduce((a, b) => a + b)) return -1;
  gas = gas.concat(gas);
  cost = cost.concat(cost);
  let gasLeft = 0,
    count = 0;
  for (let i = 0; i < gas.length; i++) {
    // if cannot reach the next station, reset the process
    if (gas[i] + gasLeft < cost[i]) {
      gasLeft = 0;
      count = 0;
      continue;
    } else {
      // if can reach the next station, update gasLeft and count
      gasLeft += gas[i] - cost[i];
      count++;
      // if continuously success for gas.length / 2 times, return the index
      if (count === gas.length / 2) return i - count + 1;
    }
  }
  return -1;
};

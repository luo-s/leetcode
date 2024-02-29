/*
A frog is crossing a river. The river is divided into some number of units, 
and at each unit, there may or may not exist a stone. 

The frog can jump on a stone, but it must not jump into the water.

Given a list of stones positions (in units) in sorted ascending order, 
determine if the frog can cross the river by landing on the last stone. 

Initially, the frog is on the first stone and assumes the first jump must 
be 1 unit.

If the frog's last jump was k units, its next jump must be either 
k - 1, k, or k + 1 units. The frog can only jump in the forward direction.

2 <= stones.length <= 2000
0 <= stones[i] <= 2^31 - 1
stones[0] == 0
stones is sorted in a strictly increasing order.
*/

// memoization dfs
var canCross = function (stones) {
  if (stones[1] !== 1) return false;
  let memo = new Map();
  // jump k units from index - 1 to index
  var dfs = function (index, k) {
    if (k <= 0) return false;
    if (stones.indexOf(index) === -1) return false;
    if (index === stones[stones.length - 1]) {
      return true;
    }
    let key = index + "," + k;
    if (memo.has(key)) return memo.get(key);
    let ans =
      dfs(index + k, k) ||
      dfs(index + k + 1, k + 1) ||
      dfs(index + k - 1, k - 1);
    memo.set(key, ans);
    return ans;
  };
  return dfs(1, 1);
};

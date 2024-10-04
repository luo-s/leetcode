/*
Assume you are an awesome parent and want to give your children some cookies. 
But, you should give each child at most one cookie.

Each child i has a greed factor g[i], which is the minimum size of a cookie 
that the child will be content with; and each cookie j has a size s[j]. 
If s[j] >= g[i], we can assign the cookie j to the child i, and the child i 
will be content. Your goal is to maximize the number of your content 
children and output the maximum number.

1 <= g.length <= 3 * 10^4
0 <= s.length <= 3 * 10^4
1 <= g[i], s[j] <= 2^31 - 1
*/

// https://leetcode.com/problems/assign-cookies/description/

// feed the child with the smallest greed first, with the smallest cookie
// if the largest cookie can't feed the child, stop the process
// time complexity: O(n * m)
// space complexity: O(n)
var findContentChildren = function (g, s) {
  g.sort((a, b) => a - b);
  s = s.sort((a, b) => a - b).map((ele) => (ele = [ele, false]));
  let ans = 0;
  for (let greed of g) {
    for (let i = 0; i < s.length; i++) {
      if (s[i][0] >= greed && s[i][1] === false) {
        ans++;
        s[i][1] = true;
        break;
      }
    }
  }
  return ans;
};

// optimized space complexity: two pointers
// time complexity: O(nlog(n))
// space complexity: O(1)
var findContentChildren = function (g, s) {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  let ans = 0,
    i = 0,
    j = 0;
  while (i < g.length && j < s.length) {
    if (s[j] >= g[i]) {
      j++;
      i++;
      ans++;
    } else {
      j++;
    }
  }
  return ans;
};

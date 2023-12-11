/*
You are given an integer array score of size n, where score[i] is the score of the 
ith athlete in a competition. All the scores are guaranteed to be unique.

The athletes are placed based on their scores, where the 1st place athlete has the 
highest score, the 2nd place athlete has the 2nd highest score, and so on. The 
placement of each athlete determines their rank:

  The 1st place athlete's rank is "Gold Medal".
  The 2nd place athlete's rank is "Silver Medal".
  The 3rd place athlete's rank is "Bronze Medal".
  For the 4th place to the nth place athlete, their rank is their placement number 
  (i.e., the xth place athlete's rank is "x").

Return an array answer of size n where answer[i] is the rank of the ith athlete.
All the values in score are unique.
*/

// https://leetcode.com/problems/relative-ranks/

// time complexity O(nlogn)
// space complexity O(n)
var findRelativeRanks = (score) => {
  const place = {};
  [...score]
    .sort((a, b) => b - a)
    .map((ele, idx) => {
      if (idx === 0) place[ele] = "Gold Medal";
      else if (idx === 1) place[ele] = "Silver Medal";
      else if (idx === 2) place[ele] = "Bronze Medal";
      else place[ele] = (idx + 1).toString();
    });
  return score.map((ele) => place[ele]);
};

// counting sort
// time complexity O(n)
// space complexity O(n)
var findRelativeRanks = function (score) {
  // counting sort
  const highest = Math.max(...score);
  const lowest = Math.min(...score);
  const count = new Array(highest - lowest + 1).fill(undefined);
  score.forEach((element) => {
    count[element - lowest] = element;
  });
  // make the sorted score array DSCE
  const sortedScore = [];
  for (let ele of count) {
    if (ele !== undefined) sortedScore.push(ele);
  }
  sortedScore.reverse();
  // construct hash table to record the score and their rank
  const r = {};
  for (let i = 0; i < sortedScore.length; i++) {
    r[i + 1] = sortedScore[i];
  }
  const sss = Object.entries(r).map(
    (ele) => ([ele[0], ele[1]] = [ele[1], ele[0]])
  );
  const rank = {};
  for (let ele of sss) {
    rank[ele[0]] = ele[1];
  }
  const res = score.map((ele) => rank[ele]);
  res[res.indexOf("1")] = "Gold Medal";
  res[res.indexOf("2")] = "Silver Medal";
  res[res.indexOf("3")] = "Bronze Medal";
  return res;
};

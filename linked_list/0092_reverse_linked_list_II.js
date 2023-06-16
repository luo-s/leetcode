/*
Given the head of a singly linked list and two integers left and right where 
left <= right, reverse the nodes of the list from position left to position 
right, and return the reversed list.
*/
// https://leetcode.com/problems/reverse-linked-list-ii/
// https://leetcode.cn/problems/reverse-linked-list-ii/solution/fan-zhuan-lian-biao-ii-by-leetcode-solut-teyq/

var reverseBetween = function (head, left, right) {
  const dummyNode = new ListNode(-1, head);
  let pre = dummyNode;
  for (let i = 0; i < left - 1; ++i) {
    pre = pre.next;
  }

  let cur = pre.next;
  for (let i = 0; i < right - left; ++i) {
    const next = cur.next;
    cur.next = next.next;
    next.next = pre.next;
    pre.next = next;
  }
  return dummyNode.next;
};

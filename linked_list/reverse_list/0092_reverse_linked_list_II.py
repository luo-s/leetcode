# Given the head of a singly linked list and two integers left and right where left <= right, 
# reverse the nodes of the list from position left to position right, and return the reversed list.

# https://leetcode.com/problems/reverse-linked-list-ii/
# solution: https://leetcode.cn/problems/reverse-linked-list-ii/solutions/634701/fan-zhuan-lian-biao-ii-by-leetcode-solut-teyq/

class Solution:
    def reverseBetween(self, head: Optional[ListNode], left: int, right: int) -> Optional[ListNode]:
        prevLeft = dummy = ListNode(next=head)
        # move to left position
        for _ in range(left - 1):
            prevLeft = prevLeft.next
        # reverse between left and right
        pre = None
        cur = prevLeft.next
        for _ in range(right - left + 1):
            nxt = cur.next
            cur.next = pre 
            pre = cur
            cur = nxt
        # connect reversed list
        prevLeft.next.next = cur
        prevLeft.next = pre
        return dummy.next

# 头插法
class Solution:
    def reverseBetween(self, head: Optional[ListNode], left: int, right: int) -> Optional[ListNode]:
        dummy_head = ListNode(0, head)
        prev = dummy_head
        # move left - 1 steps
        for _ in range(left - 1):
            prev = prev.next
        curr = prev.next
        # reverse target nodes: right - left steps
        for i in range(right - left):
            # pre.next, cur.next.next, cur.next = cur.next, pre.next, cur.next.next
            next = curr.next
            curr.next = next.next
            next.next = prev.next
            prev.next = next
        return dummy_head.next
# Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list.

# k is a positive integer and is less than or equal to the length of the linked list. 
# If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.

# You may not alter the values in the list's nodes, only nodes themselves may be changed.

# https://leetcode.com/problems/reverse-nodes-in-k-group/

class Solution:
    def reverseKGroup(self, head: Optional[ListNode], k: int) -> Optional[ListNode]:
        # count the nodes
        n, cur = 0, head
        while cur:
            n += 1
            cur = cur.next

        p0 = dummy = ListNode(0, head)
        pre, cur = None, head

        while n >= k:
            n -= k
            # reverse for every k nodes
            for _ in range(k):  
                nxt = cur.next
                cur.next = pre  
                pre = cur
                cur = nxt
            # connect reversed list 
            nxt = p0.next
            nxt.next = cur
            p0.next = pre
            p0 = nxt
        return dummy.next

# 头插法
class Solution:
    def reverseKGroup(self, head: Optional[ListNode], k: int) -> Optional[ListNode]:
        pre = dummy_head = ListNode(0, head)
        cur = head
        while cur:
            # if size < k: return original list
            it = cur
            for _ in range(k):
                if not it:
                    return dummy_head.next
                it = it.next
            # Reverse k nodes
            for _ in range(k - 1):
                # pre.next, cur.next.next, cur.next = cur.next, pre.next, cur.next.next
                nxt = cur.next
                cur.next = nxt.next
                nxt.next = pre.next
                pre.next = nxt
            # Move the pointers for the next group
            pre, cur = cur, cur.next
        return dummy_head.next
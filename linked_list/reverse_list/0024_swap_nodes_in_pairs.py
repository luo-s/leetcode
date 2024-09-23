# Given a linked list, swap every two adjacent nodes and return its head. 
# You must solve the problem without modifying the values in the list's nodes 
# (i.e., only nodes themselves may be changed.)

# https://leetcode.com/problems/swap-nodes-in-pairs/

class Solution:
    def swapPairs(self, head: Optional[ListNode]) -> Optional[ListNode]:
        node0 = dummy = ListNode(next=head) 
        node1 = head
        while node1 and node1.next: 
            node2 = node1.next
            node3 = node2.next
            # swap pairs
            node0.next = node2  # 0 -> 2
            node2.next = node1  # 2 -> 1
            node1.next = node3  # 1 -> 3
            # connect swapped pairs
            node0 = node1  
            node1 = node3  
        return dummy.next 

# recursive
class Solution:
    def swapPairs(self, head: Optional[ListNode]) -> Optional[ListNode]:
        # base case
        if not head or not head.next:
            return head 

        node1 = head
        node2 = head.next
        node3 = node2.next

        node1.next = self.swapPairs(node3)  
        node2.next = node1 

        return node2  

# 头插法
class Solution:
    def swapPairs(self, head: Optional[ListNode]) -> Optional[ListNode]:
        pre = dummy_head = ListNode(0, head)
        cur = head
        while cur:
            # if size < 2, return original list
            if not cur.next:
                return dummy_head.next
            # reverse 2 nodes
            # pre.next, cur.next.next, cur.next = cur.next, pre.next, cur.next.next
            nxt = cur.next
            cur.next = nxt.next
            nxt.next = pre.next
            pre.next = nxt
            # move pointers for the next group
            pre, cur = cur, cur.next
        return dummy_head.next
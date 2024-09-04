# Given the head of a linked list head, in which each node contains an integer value.

# Between every pair of adjacent nodes, insert a new node with a value equal to the 
# greatest common divisor of them.

# Return the linked list after insertion.

# The greatest common divisor of two numbers is the largest positive integer that evenly divides both numbers.

# https://leetcode.com/problems/insert-greatest-common-divisors-in-linked-list/description/

class Solution:
    def insertGreatestCommonDivisors(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if not head or not head.next:
            return head
        cur = head
        slow, fast = cur, cur.next
        while fast:
            new_node = ListNode(math.gcd(slow.val, fast.val), fast)
            slow.next = new_node
            slow = fast
            fast = fast.next
        return head
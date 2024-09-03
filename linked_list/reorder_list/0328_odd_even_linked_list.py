# Given the head of a singly linked list, group all the nodes with odd indices 
# together followed by the nodes with even indices, and return the reordered list.

# The first node is considered odd, and the second node is even, and so on.

# Note that the relative order inside both the even and odd groups should 
# remain as it was in the input.

# You must solve the problem in O(1) extra space complexity and O(n) time complexity.
# The number of nodes in the linked list is in the range [0, 10^4].
# -10^6 <= Node.val <= 10^6

# https://leetcode.com/problems/odd-even-linked-list/description/

class Solution:
    def oddEvenList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        # edge case
        if not head or not head.next:
            return head
        # make odd and even heads
        odd = head
        even = head.next
        even_head = even  
        # make odd and even lists
        while even and even.next:
            odd.next = even.next
            odd = odd.next
            even.next = odd.next
            even = even.next
        # Link the end of odd list to the start of even list
        odd.next = even_head  
        return head
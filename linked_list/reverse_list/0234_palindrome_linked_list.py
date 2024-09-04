# Given the head of a singly linked list, 
# return true if it is a palindrome or false otherwise.

# https://leetcode.com/problems/palindrome-linked-list/description/

class Solution:
    def isPalindrome(self, head: Optional[ListNode]) -> bool:
        if not head or not head.next: 
            return True
        l1 = head
        mid = self.middleNode(head)
        l2 = mid.next
        # cut the list into 2 halves
        mid.next = None
        # reverse 2nd half
        l2 = self.reverseList(l2)
        while l1 and l2:
            if l1.val != l2.val:
                return False
            l1 = l1.next
            l2 = l2.next
        return True
    # return first mid node for even length
    def middleNode(self, head):
        slow = fast = head
        while fast.next and fast.next.next: 
        # while fast and fast.next: -> return 2nd mid node
            slow = slow.next
            fast = fast.next.next
        return slow
    # reverse list
    def reverseList(self, head):
        pre = None
        cur = head
        while cur:
            nxt = cur.next
            cur.next = pre
            pre = cur
            cur = nxt
        return pre
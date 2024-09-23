# Given the head of a linked list and an integer val, remove all the nodes of the 
# linked list that has Node.val == val, and return the new head.

# https://leetcode.com/problems/remove-linked-list-elements/

class Solution:
    def removeElements(self, head: Optional[ListNode], val: int) -> Optional[ListNode]:
        dummy_head = ListNode(0, head)
        curr = dummy_head
        while curr.next:
            if curr.next.val == val:
                curr.next = curr.next.next
            else:
                curr = curr.next
        return dummy_head.next

# two pointers    
class Solution:
    def removeElements(self, head: Optional[ListNode], val: int) -> Optional[ListNode]:
        dummy_head = ListNode(0, head)
        slow, fast = dummy_head, head
        while fast:
            # move fast to the next non-val node
            while fast and fast.val == val:
                fast = fast.next
            # if skip any nodes, remove them 
            if slow.next is not fast:
                slow.next = fast
            # move slow
            slow = slow.next
            # move fast
            fast = fast.next if fast else None
        return dummy_head.next
    
# recursion
class Solution:
    def removeElements(self, head: Optional[ListNode], val: int) -> Optional[ListNode]:
        # base case
        if not head:
            return None
        # recursive case
        head.next = self.removeElements(head.next, val)
        # remove current node or not
        if head.val == val:
            # remove current node
            return head.next   
        else:
            # keep current node
            return head
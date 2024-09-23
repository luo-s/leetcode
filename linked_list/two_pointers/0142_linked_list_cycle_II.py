# Given the head of a linked list, return the node where the cycle begins. 
# If there is no cycle, return null.

# There is a cycle in a linked list if there is some node in the list that 
# can be reached again by continuously following the next pointer. 
# Internally, pos is used to denote the index of the node that tail's next 
# pointer is connected to (0-indexed). 
# It is -1 if there is no cycle. Note that pos is not passed as a parameter.

# Do not modify the linked list.

# https://leetcode.com/problems/linked-list-cycle-ii/
# solution: https://leetcode.cn/problems/linked-list-cycle-ii/solutions/2832831/jian-ji-qing-xi-yan-jin-de-tu-shi-tui-da-nak2/

class Solution:
    def detectCycle(self, head: Optional[ListNode]) -> Optional[ListNode]:
        slow = fast = head
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next
            if fast is slow:
                while slow is not head:
                    slow = slow.next
                    head = head.next
                return slow
        return None
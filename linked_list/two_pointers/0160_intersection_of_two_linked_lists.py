# Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. 
# If the two linked lists have no intersection at all, return null.

# https://leetcode.com/problems/intersection-of-two-linked-lists/description/

class Solution:
    def getIntersectionNode(self, headA: ListNode, headB: ListNode) -> Optional[ListNode]:
        currA, currB = headA, headB
        while True:
            if currA == currB:
                return currA
            currA = currA.next if currA else headB
            currB = currB.next if currB else headA
        return None
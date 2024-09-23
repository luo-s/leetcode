# Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. 
# If the two linked lists have no intersection at all, return null.

# https://leetcode.com/problems/intersection-of-two-linked-lists/

# how to make two pointers to move same steps and meet each other?
class Solution:
    def getIntersectionNode(self, headA: ListNode, headB: ListNode) -> Optional[ListNode]:
        if not headA or not headB:
            return None
        currA, currB = headA, headB
        while currA != currB:
            currA = currA.next if currA else headB
            currB = currB.next if currB else headA
        return currA
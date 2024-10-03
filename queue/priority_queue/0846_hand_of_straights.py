# Alice has some number of cards and she wants to rearrange the cards into groups so that each group is of size groupSize, and consists of groupSize consecutive cards.

# Given an integer array hand where hand[i] is the value written on the ith card and an integer groupSize, return true if she can rearrange the cards, or false otherwise.

# https://leetcode.com/problems/hand-of-straights/

class Solution:
    def isNStraightHand(self, hand: List[int], groupSize: int) -> bool:
        from collections import Counter
        import heapq
        if len(hand) % groupSize:
            return False
        cnt = Counter(hand)
        min_heap = list(cnt.keys())
        heapq.heapify(min_heap)
        while min_heap:
            first = min_heap[0]
            for i in range(first, first + groupSize):
                if i not in cnt:
                    return False
                cnt[i] -= 1
                if cnt[i] == 0:
                    heapq.heappop(min_heap)
        return True
# You are given an integer array cards where cards[i] represents the value of the ith card. A pair of cards are matching if the cards have the same value.

# Return the minimum number of consecutive cards you have to pick up to have a pair of matching cards among the picked cards. If it is impossible to have matching cards, return -1.

# https://leetcode.com/problems/minimum-consecutive-cards-to-pick-up/

class Solution:
    def minimumCardPickup(self, cards: list[int]) -> int:
        cnt, l, ans = dict(), len(cards), float('inf')
        for i in range(l):
            if cards[i] not in cnt:
                cnt[cards[i]] = i
            else:
                ans = min(ans, i - cnt[cards[i]] + 1)
                cnt[cards[i]] = i
        return -1 if ans == float('inf') else ans
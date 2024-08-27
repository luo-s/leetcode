class Solution:
    def plusOne(self, digits: list[int]) -> list[int]:
        l, index = len(digits), -1
        # find the first index that digits[index] != 9 from last
        for i in range(l-1, -1, -1):
            if digits[i] != 9:
                index = i
                break
        # edge case: all 9s
        if index == -1:
            temp = ([0] * l)
            temp.insert(0, 1)
            return temp
        # plus one
        for i in range(l-1, i, -1):
            digits[i] = 0
        digits[index] += 1
        return digits
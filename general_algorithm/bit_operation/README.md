# 位运算

## 与 &

### 与运算的运用

1. 判断奇偶性 （`x & 1` -> 取出二进制的最右一位）
- `(x & 1) == 0` 为偶数。
- `(x & 1) == 1` 为奇数。

2. 将二进制最右侧为 1 的二进位改为 0。
- `n - 1`: 二进制数字 n 最右边的 1 变成 0 ，此 1 右边的 0 都变成 1 。
- `n & (n - 1)`: 二进制数字 n 最右边的 1 变成 0 ，其余不变。
- [0191 Numer of 1 bits](https://leetcode.com/problems/number-of-1-bits/)


## 异或 XOR 

- [That XOR Trick](https://florian.github.io/xor-trick/)

### 异或运算的性质：
1. 自反性：`x ^ x = 0, x ^ 0 = x`
2. 交换律：`x ^ y = y ^ x`
3. 结合律：`(x ^ y) ^ z = x ^ (y ^ z)` 
4. `4i ^ (4i + 1) ^ (4i + 2) ^ (4i + 3) = 0`

The XOR trick: If we have a sequence of XOR operations a ^ b ^ c ^ ..., then we can remove all pairs of duplicated values without affecting the result.

### 异或运算的应用

1. In-place swap
```
x = x ^ y   # (a ^ b, b)
y = x ^ y   # (a ^ b, a ^ b ^ b) -> (a ^ b, a)
x = x ^ y   # (a ^ b ^ a, a) -> (b ^ a)
```

2. Find the missing/duplicate number
- [0136 Single Number](https://leetcode.com/problems/single-number/)
- [0137 Single Number II](https://leetcode.com/problems/single-number-ii/)
- [0260 Single Number III](https://leetcode.com/problems/single-number-iii/)
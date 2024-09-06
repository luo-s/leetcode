# 位运算

## 位掩码

- `0xFFFFFFFF` `0x11111111111111111111111111111111`
- `0xAAAAAAAA` `0b10101010101010101010101010101010`

## 与 &

- `1 & 1 = 1`
- `1 & 0 = 0`
- `0 & 1 = 0`
- `0 & 0 = 0`

### 与运算的运用

1. 二进制树选取指定位

- `x & (2 ** k - 1)`: 取末尾 k 位

2. 判断奇偶性 （`x & 1` -> 取出二进制的最右一位）

- `(x & 1) == 0` 为偶数。
- `(x & 1) == 1` 为奇数。

3. 将二进制位 1 改为 0。

- `x & (x - 1)`: 二进制数字 x 最右边的 1 变成 0 ，其余不变。
- `x & (x + 1)`: 把右边连续的 1 变为 0。
- [0191 Numer of 1 bits](https://leetcode.com/problems/number-of-1-bits/)

4. 判断 2 的幂次方

- `x & (x - 1) == 0`: x 是 2 的幂次方

## 或 OR

- `1 | 1 = 1`
- `1 | 0 = 1`
- `0 | 1 = 1`
- `0 | 0 = 0`

### 或运算的运用

1. 将二进制位 0 改为 1。

- `x | (x + 1)`: 二进制数字 x 最右边的 0 变成 1 ，其余不变。
- `x | (x - 1)`: 把最右边连续的 0 变为 1。
- `x | (1 << k - 1)`: 把右数第 k 位变为 1。
- `x | (2 ** k - 1)`: 把末尾 k 位全部变为 1。
- `x | 1`: 把最后一位变为 1。
- `x | 1 - 0`: 把最后一位变为 0。

## 异或 XOR

[That XOR Trick](https://florian.github.io/xor-trick/)

- `0 ^ 0 = 0`
- `1 ^ 0 = 1`
- `0 ^ 1 = 1`
- `1 ^ 1 = 0`

### 异或运算的性质：

1. 自反性：`x ^ x = 0, x ^ 0 = x`
2. 交换律：`x ^ y = y ^ x`
3. 结合律：`(x ^ y) ^ z = x ^ (y ^ z)`
4. 连续四整数的异或和为零: `4i ^ (4i + 1) ^ (4i + 2) ^ (4i + 3) = 0`

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

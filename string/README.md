# 字符串（String）

字符串（String）：由零个或多个字符组成的有限序列。一般记为$s = a_1a_2...a_n (0 <= n <= ∞)$ 
- 空字符串（Null String）：`""` Falsy value
- 子串（Substring）：字符串中任意个连续的字符组成的子序列称为该字符串的「子串」。并且有两种特殊子串，起始于位置为 0、长度为 k 的子串称为 「前缀（Prefix）」。而终止于位置 n−1、长度为 k 的子串称为 「后缀（Suffix）」 

### 字符串的比较：字符串的大小比较依据“字典序”（ASCII编码）进行。

如果两个字符串 `str1 == str2`，则：
1) `str1` 和 `str2` 的长度相等。
2) `str1` 和 `str2` 对应位置上的各个字符都相同。

如果两个字符串 `str1 > str2`，则：
1) 依次比较两个字符串前 n 个字符（`n = min(len(str1), len(str2))`），有`str1[i] > str2[i]`。 
2) 如果字符串`str1`和`str2`前 n 个字符都相同，则`str1`的长度大于`str2`的长度。


# 字符串的匹配（Pattern Matching）

字符串匹配（String Matching）：又称模式匹配（Pattern Matching）。可以简单理解为，给定字符串 T 和 p，在主串 T 中寻找子串 p。主串 T 又被称为文本串，子串 p 又被称为模式串（Pattern）。

## 单模式串匹配问题

单模式匹配问题（Single Pattern Matching）：给定一个文本串 $T = t_1t_2...t_n$，再给定一个特定模式串 $p = p_1p_2...p_m$。要求从文本串 T 找出特定模式串 p 的所有出现位置。

- [暴力算法](https://algo.itcharge.cn/06.String/02.String-Single-Pattern-Matching/01.String-Brute-Force/)
    - 对于给定文本串 $T$ 与模式串 $p$，从文本串的第一个字符 $t_1$ 开始与模式串 $p$ 的第一个字符 $p_1$ 进行比较，如果相等，则继续逐个比较后续字符，否则从文本串 $T$ 的第二个字符 $t_2$ 起重新和模式串 $p$ 进行比较。依次类推，直到模式串 $p$ 中每个字符依次与文本串 $T$ 的一个连续子串相等，则模式匹配成功。否则模式匹配失败。

#### 基于前缀搜索方法：在搜索窗口内从前向后（沿着文本的正向）逐个读入文本字符，搜索窗口中文本和模式串的最长公共前缀。

- 「Knuth-Morris-Pratt (KMP) 算法」
- 「Shift-Or 算法」

#### 基于后缀搜索方法：在搜索窗口内从后向前（沿着文本的反向）逐个读入文本字符，搜索窗口中文本和模式串的最长公共后缀。使用这种搜索算法可以跳过一些文本字符，从而具有亚线性的平均时间复杂度。
- 「Boyer-Moore 算法」
- 「Horspool 算法」
- 「Sunday 算法」

#### 基于子串搜索方法：在搜索窗口内从后向前（沿着文本的反向）逐个读入文本字符，搜索满足「既是窗口中文本的后缀，也是模式串的子串」的最长字符串。与后缀搜索方法一样，使用这种搜索方法也具有亚线性的平均时间复杂度。这种方法的主要缺点在于需要识别模式串的所有子串，这是一个非常复杂的问题。

- [Rabin-Karp 算法](https://algo.itcharge.cn/06.String/02.String-Single-Pattern-Matching/02.String-Rabin-Karp/)
    - 对于给定文本串 $T$ 与模式串 $p$，通过滚动哈希算快速筛选出与模式串 $p$ 不匹配的文本位置，然后在其余位置继续检查匹配项。
    - 实现 RK 算法中一个重要步骤是 「滚动哈希算法」，通过滚动哈希算法，将每次计算子串哈希值的复杂度从 O(m) 降到了 O(1)，从而提升了整个算法效率。
    1) 模式串 $p$ 的哈希值计算方式为：$Hash(p) = p_0 \times d^{m-1} + p_1 \times d^{m-2} + ... + p_{m-1} \times d^0$
    2) 初始子串 $T_{[0,m-1]}$ 的哈希值为：$Hash(T_{[0, m-1]}) = T_0 \times d^{m-1} + T_1 \times d^{m-2} + ... + T_{m-1} \times d^0$
    3) 已知子串 $Hash(T_{[i,i+m-1]})$，将子串右移一位的哈希值为：$Hash(T_{[i+1,i+m]}) = [Hash(T_{[i,i+m-1]}) - T_i \times d^{m-1}] \times d + T_{i+m} \times d^0$

- 「Backward Dawg Matching（BDM）算法」
- 「Backward Dawg Matching（BDM）算法」
- 「Backward Oracle Matching（BOM）算法」 

## 多模式串匹配问题

多模式匹配问题（Multi Pattern Matching）：给定一个文本串 $T = t_1t_2...t_n$，再给定一组模式串 $P = p^1,p^2,...,p^r$，其中每个模式串 $p^i$ 是定义在有限字母表上的字符串 $p^i = p^i_1p^i_2...p^i_m$。要求从文本串 T 中找到模式串集合 P 中所有模式串的所有出现位置。

#### 基于前缀搜索方法：搜索从前向后（沿着文本的正向）进行，逐个读入文本字符，使用在 P 上构建的自动机进行识别。对于每个文本位置，计算既是已读入文本的后缀，同时也是 P 中某个模式串的前缀的最长字符串。

- 「Aho-Corasick Automaton（AC 自动机）算法」
- 「Multiple Shift-And 算法」

#### 基于后缀搜索方法：搜索从后向前（沿着文本的反向）进行，搜索模式串的后缀。根据后缀的下一次出现位置来移动当前文本位置。这种方法可以避免读入所有的文本字符。

- 「Commentz-Walter（Boyer-Moore 算法的扩展算法）算法」
- 「Set Horspool（Commentz-Walter 算法的简化算法）算法」
- 「Wu-Manber 算法」

#### 基于子串搜索方法：搜索从后向前（沿着文本的反向）进行，在模式串的长度为 $min(len(p^i))$ 的前缀中搜索子串，以此决定当前文本位置的移动。这种方法也可以避免读入所有的文本字符。

- 「Multiple BNDM 算法」
- 「Set Backward Dawg Matching（SBDM）算法」
- 「Set Backwrad Oracle Matching（SBOM）算法」
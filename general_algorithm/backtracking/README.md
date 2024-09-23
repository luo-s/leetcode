# 回溯算法（Backtracking）

回溯算法（Backtracking）：一种能避免不必要搜索的穷举式的搜索算法。采用试错的思想，在搜索尝试过程中寻找问题的解，当探索到某一步时，发现原先的选择并不满足求解条件，或者还需要满足更多求解条件时，就退回一步（回溯）重新选择，这种走不通就退回再走的技术称为「回溯法」，而满足回溯条件的某个状态的点称为「回溯点」。

回溯算法的基本思想是：以深度优先搜索的方式，根据产生子节点的条件约束，搜索问题的解。当发现当前节点已不满足求解条件时，就「回溯」返回，尝试其他的路径。

### 明确所有选择

- 画出搜索过程的决策树，根据决策树来确定搜索路径。

### 明确终止条件 (base case)

- 回溯算法的终止条件也就是决策树的底层，即达到无法再做选择的条件。回溯函数的终止条件一般为给定深度、叶子节点、非叶子节点（包括根节点）、所有节点等。并且还要给出在终止条件下的处理方法，比如输出答案，将当前符合条件的结果放入集合中等等。

### 决策树和终止条件翻译成代码

- 定义回溯函数（明确函数意义、传入参数、返回结果等）

  - 传入参数和全局变量：是由递归搜索阶段时的「当前状态」来决定的。最好是能通过传入参数和全局变量直接记录「当前状态」。

  - 返回结果：返回结果是在遇到递归终止条件时，需要向上一层函数返回的信息。一般回溯函数的返回结果都是单个节点或单个数值，告诉上一层函数我们当前的搜索结果是什么即可。当然，如果使用全局变量来保存「当前状态」的话，也可以不需要向上一层函数返回结果，即返回空结果

- 书写回溯函数主体（给出约束条件、选择元素、递归搜索、撤销选择部分）

- 明确递归终止条件（给出递归终止条件，以及递归终止时的处理方法）

## 回溯算法的应用

排列

1. 排列包含元素顺序的信息（[a,b] != [b,a]），因此不需要传入变量 idx 保证一直向前。
2. 如果原数组中包含重复的元素，需要在递归过程中跳过。一般会对原数组进行排序（方便查重）并引入一个新数组来 track 原数组中的元素是否使用过。`if i > 0 and nums[i] == nums[i - 1] and not used[i - 1]: continue`

- [0046 Permutations](https://leetcode.com/problems/permutations/)
- [0079 Word Search](https://leetcode.com/problems/word-search/)
- [0047 Permutations II](https://leetcode.com/problems/permutations-ii/)
- [1079 Letter Tile Possibilities](https://leetcode.com/problems/letter-tile-possibilities/)

组合

1. 由于组合中不需要元素顺序的信息，因此一般用传入变量 idx 来避免重复（保证一直向前）
2. 如果原数组中包含重复的元素，需要在递归过程中跳过。一般会对原数组进行排序（方便查重），但不需要引入新数组来 track 原数组中的元素是否使用过（有传入变量 idx 能保证一直向前）。`if i > idx and arr[i] == arr[i - 1]: continue`

- [0077 Combinations](https://leetcode.com/problems/combinations/)
- [0078 Subsets](https://leetcode.com/problems/subsets/)
- [0039 Combination Sum](https://leetcode.com/problems/combination-sum/)
- [0216 Combination Sum III](https://leetcode.com/problems/combination-sum-iii/description/)
- [0017 Letter Combinations of a Phone Number](https://leetcode.com/problems/letter-combinations-of-a-phone-number/)
- [0784 Letter Case Permutation](https://leetcode.com/problems/letter-case-permutation/)
- [0040 Combination Sum II](https://leetcode.com/problems/combination-sum-ii/)
- [0090 Subsets II](https://leetcode.com/problems/path-sum-ii/)

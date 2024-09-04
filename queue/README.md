# Queue (FIFO)

## Priority Queue

优先队列（Priority Queue）：一种特殊的队列。在优先队列中，元素被赋予优先级，当访问队列元素时，具有最高优先级的元素最先删除。

优先队列的应用场景非常多，比如：

- 数据压缩：赫夫曼编码算法；
- 最短路径算法：Dijkstra 算法；
- 最小生成树算法：Prim 算法；
- 任务调度器：根据优先级执行系统任务；
- 事件驱动仿真：顾客排队算法；
- 排序问题：查找第 k 个最小元素。

## 二叉堆（binary heap）

二叉堆结构实现优先队列：构建一个二叉堆结构，二叉堆按照优先级进行排序。入队操作就是将元素插入到二叉堆中合适位置，时间复杂度为O(log​n)。出队操作则返回二叉堆中优先级最大节点并删除，时间复杂度也是O(logn)。

## [heapq](https://docs.python.org/3/library/heapq.html) 

- `heapq.heapify(x)` transform list x into a heap, in-place, in linear time.

- `heapq.heappush(heap, item)` Push the value item onto the heap, maintaining the heap invariant.

- `heapq.pop(heap)` Pop and return the smallest item from the heap, maintaining the heap invariant. If the heap is empty, IndexError is raised. To access the smallest item without popping it, use heap[0].

- `heapq.heappushpop(heap, item)` Push item on the heap, then pop and return the smallest item from the heap. The combined action runs more efficiently than heappush() followed by a separate call to heappop().

- `heapq.heapreplace(heap, item)` Pop and return the smallest item from the heap, and also push the new item. The heap size doesn’t change. If the heap is empty, IndexError is raised. This one step operation is more efficient than a heappop() followed by heappush() and can be more appropriate when using a fixed-size heap. The pop/push combination always returns an element from the heap and replaces it with item. The value returned may be larger than the item added. If that isn’t desired, consider using heappushpop() instead. Its push/pop combination returns the smaller of the two values, leaving the larger value on the heap.

- `heapq.merge(*iterables, key=None, reverse=False)` Merge multiple sorted inputs into a single sorted output (for example, merge timestamped entries from multiple log files). Returns an iterator over the sorted values.

- `heapq.nlargest(n, iterable, key=None)`
Return a list with the n largest elements from the dataset defined by iterable. key, if provided, specifies a function of one argument that is used to extract a comparison key from each element in iterable (for example, key=str.lower). Equivalent to: sorted(iterable, key=key, reverse=True)[:n].

- `heapq.nsmallest(n, iterable, key=None)`
Return a list with the n smallest elements from the dataset defined by iterable. key, if provided, specifies a function of one argument that is used to extract a comparison key from each element in iterable (for example, key=str.lower). Equivalent to: sorted(iterable, key=key)[:n].
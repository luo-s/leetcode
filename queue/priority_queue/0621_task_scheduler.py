# You are given an array of CPU tasks, each labeled with a letter from A to Z, and a number n. Each CPU interval can be idle or allow the completion of one task. Tasks can be completed in any order, but there's a constraint: there has to be a gap of at least n intervals between two tasks with the same label.

# Return the minimum number of CPU intervals required to complete all tasks.

# https://leetcode.com/problems/task-scheduler/

class Solution:
    def leastInterval(self, tasks: List[str], n: int) -> int:
        freq = dict()
        for task in tasks:
            freq[task] = freq.get(task, 0) + 1
        
        mx_freq = max(freq.values())
        mx_freq_cnt = 0
        for task in freq:
            if freq[task] == mx_freq:
                mx_freq_cnt += 1
        
        ans = (mx_freq - 1) * (n + 1) + mx_freq_cnt
        return max(ans,len(tasks))
    
# higher built-in functions
class Solution:
    def leastInterval(self, tasks: List[str], n: int) -> int:
        from collections import Counter
        freq = Counter(tasks)
        
        mx_freq = max(freq.values())
        mx_freq_cnt = list(freq.values()).count(mx_freq)
        
        ans = (mx_freq - 1) * (n + 1) + mx_freq_cnt
        return max(ans,len(tasks))

# heap and queue
import heapq
from collections import Counter, deque
class Solution:
    def leastInterval(self, tasks: List[str], n: int) -> int:
        count = Counter(tasks)
        maxHeap = [-cnt for cnt in count.values()]
        heapq.heapify(maxHeap)

        time = 0
        q = deque()  # pairs of [-cnt, idleTime]
        while maxHeap or q:
            time += 1

            if not maxHeap:
                time = q[0][1]
            else:
                cnt = 1 + heapq.heappop(maxHeap)
                if cnt:
                    q.append([cnt, time + n])
            if q and q[0][1] == time:
                heapq.heappush(maxHeap, q.popleft()[0])
        return time

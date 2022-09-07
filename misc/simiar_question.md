# bfs

- https://leetcode.com/problems/subsets/discuss/27281/A-general-approach-to-backtracking-questions-in-Java-(Subsets-Permutations-Combination-Sum-Palindrome-Partitioning)

- https://leetcode.com/problems/subsets (\*)
- https://leetcode.com/problems/subsets-ii/ (\*)
- https://leetcode.com/problems/permutations (\*)
- https://leetcode.com/problems/permutations-ii (\*)
- https://leetcode.com/problems/combination-sum (\*)
- https://leetcode.com/problems/combination-sum-ii (\*)
- https://leetcode.com/problems/palindrome-partitioning (\*)
- https://leetcode.com/discuss/interview-question/1625460/AMAZON-OA-Find-K-maximum-Priority
- https://leetcode.com/problems/factor-combinations (\*)
- https://leetcode.com/problems/palindrome-permutation (\*)
- https://leetcode.com/problems/palindrome-permutation-ii
- https://leetcode.com/problems/word-pattern-i (\*)
- https://leetcode.com/problems/word-pattern-ii/ (\*)
- https://leetcode.com/problems/flip-game-i (\*)
- https://leetcode.com/problems/flip-game-ii (\*)
- https://leetcode.com/problems/generalized-abbreviation (\*)

- https://leetcode.com/problems/android-unlock-patterns/ (x)
- https://medium.com/@rebeccahezhang/leetcode-351-android-unlock-patterns-d9bae4a8a958 (x)
- https://massivealgorithms.blogspot.com/2016/06/leetcode-351-android-unlock-patterns.html (x)
- https://cheonhyangzhang.gitbooks.io/leetcode-solutions/content/351-android-unlock-patterns.html (x)

- https://leetcode.com/problems/robot-room-cleaner/, https://wentao-shao.gitbook.io/leetcode/graph-search/489.robot-room-cleaner (\*)
- https://leetcode.com/problems/campus-bikes-ii/ (\*)
- https://leetcode.com/problems/shortest-path-in-a-grid-with-obstacles-elimination/ (\*)
- https://leetcode.com/problems/brace-expansion/ (\*)
- https://leetcode.com/problems/stepping-numbers/ (\*)

- https://leetcode.com/problems/synonymous-sentences/ (\*)
- queue (str) -> word arr (split single str) -> replace word (edge and graph)
- why queue -> word arr -> replace?
- beause we can exhaust
- word arr (using i in ind) -> replace word (using j in edge)


- https://leetcode.com/problems/maximum-number-of-accepted-invitations/ (\*)
- https://leetcode.com/problems/minimum-number-of-lines-to-cover-points/ (\*)
- https://leetcode.com/problems/nested-list-weight-sum/ (\*)
- https://leetcode.com/problems/different-ways-to-add-parentheses/ (\*)

- https://leetcode.com/problems/longest-increasing-path-in-a-matrix/ (\*)
- why we need to map.set(i_j, distance)?
- because each 2d loop, we start from fresh.
- why we need to start from fresh?
- because we can get max = each time


- https://leetcode.com/problems/accounts-merge/ (\*)
- https://leetcode.com/problems/accounts-merge/discuss/494151/JavaScript-Solution-DFS
- why there is seen, but no seeing?
- because we don't have a single go down path; seeing.add() and seeing.delete() are no need
- why do we need an extra name graph?
- because name_graph[email] = name, will get name, from email_arr, to build merge
- why there is no graph, we need to build it?
- because we can add item without concerning, just add
- why dfs return email_arr?
- because return [] or email_arr, later we add name at 1st position
- why we have loop to loop map_key, then sub loop to loop edges?
- beause in the top level, we have other operations like name, sort, etc
- why loop [key, val] of map?
- because key and val

- https://leetcode.com/problems/number-of-islands (\*)
- paint this island to '0'
- '1' is str, '0' is str

- https://leetcode.com/problems/max-area-of-island (\*)


- https://leetcode.com/problems/making-a-large-island/ (\*)
- we label diff island in grid
- why?
- then we can count the area
- then we travel the label grid
- why?
- because if we hit g[r][c] = 0, we can try to connect surround island
- why connect?
- for largest island
- why we need to have seen = new Set() before 4 dir loop?
- because image we are in cell = 0, if cell = 1, then it connects to 4 other islands, to form largest
- so we put seen before 4 dir loop
- why we put Math.max() after 4 dir loop?
- same idea, we need to wait for the 4 island to connect

- https://leetcode.com/problems/shortest-bridge/ (\*)
- avoid variable repated as the flow down?
- why?
- variable starts to overwrite with each other, bad
- Math.abs(r1 - r2)
- Not Math.abs(r1, r2), why?
- because it can accept r1 + r2, etc; be sepcific

- https://leetcode.com/problems/count-sub-islands/ (\*)
- g1: [[1, 0], [0, 1]]
- g2: [[1, 1], [0, 1]]
- g1 has 2 islands
- g2 has 1 islands
- if in 2d loop assign each cell individually, it will break the islands
- why it will breaks the island?
- because island is connected blocked
- why connected blocked is consider an island.
- because disconnected islands are consider 2 islands

- https://leetcode.com/problems/find-all-groups-of-farmland/ (\*)
- in the 2d loop, dfs(i, j), i, j are the smallest i, j?
- why is that?
- because we enter the path init
- after single dfs, maxRow, maxCol will get
- why?
- because in single dfs, we eventually encounter maxRow, maxCol

- https://leetcode.com/problems/web-crawler (\*)
- why we need seen in web crawl?
- because each link is like node, it is a graph.
- travel in graph, need seen to avoid repeated
- why no seeing here?
- seeing.add -> loop -> seeing.delete; this is single path to avoid cycle

- https://leetcode.com/problems/number-of-distinct-islands/ (\*)
- in 2d loop, dir = 'x'?
- why we don't put dir = 'o', same as return base?
- because init === 'x'
- base return (exhaust) === 'o'
- 4 dir = u (up), r (right), down (d), left (l)
- why shape === curr_dir + up + right + down + left?
- because curr_dir (self) + up (future up) + right (future right) + down (future down) + left (future left)
- why mod grid === seen, to avoid repeated?
- because mod grid, avoid repeated; seen is like mirror

- https://leetcode.com/problems/swim-in-rising-water/ (\*)
- why use k? 
- i, j is for dfs index; use k is for 4 dir loop
- why put guard before 4 dir?
- because everyting in 1 place, instead of 4 dir; do it earlier

- https://leetcode.com/problems/the-maze (\*)
- so if we have a dp (set with inifinity), why we need to init it?
- because in later code, we need to cal; curr_state = prev_state + action
- why need to use let row = ..., not const row = ...?
- because in the 4 dir loop, we keep updating let row
- why not count + dist[row_start][col_start] < dist[row_start][col_start]?
- well, it should be count + dist[r_start][c_start] < dist[r_curr][c_curr]

- https://leetcode.com/problems/the-maze-ii (\*)
- should we use seen in the loop of 4 directions, no; visited or empty path should allow
- why we should not do dfs within the 4 directions loop, because after 4 directions finish, we update the distnce, it has good value

- https://leetcode.com/problems/flood-fill (\*)
- img[r][c] !== startColor, stop (because other pixel)
- img[r][c] === newColor, stop (because already fill)
- origColor = img[r][c], because it wants to change all same color

- https://leetcode.com/problems/pacific-atlantic-water-flow/ (\*)
- why we cannot have just 1 seen arr?
- because we have pacific arr and atlantic arr
- one is not enough and mix up

- https://leetcode.com/problems/battleships-in-a-board/ (\*)
- ship is 1 to k (col) or 1 to k (row)
- why put seen check and empty path (battle ship) check in 2d loop?
- because dfs just goes down, even seen it. ++res will inc a lot

- https://leetcode.com/problems/course-schedule/ (\*)
- in dfs, after the guard condi, if no seeing / seen, it will infinite loop
- why need to set seeing / seen, after guard, because infinite loop
- why seeing before edge loop?
- because later we clear seeing (set), allow other paths
- why only set seen after edge loop?
- because seen === finish / completed
- why we care about cycle / !cycle here?
- because it is not arr that stable, that is arr ind === node ind
- this thing can be non-stable

- https://leetcode.com/problems/course-schedule-ii/ (\*)
- similar to course schedule i above
- the output is 1D arr; graph (map) is key/val, so no; seeing is for instant path
- only seen is left, convert set to arr;
- why the order in seen is the order of output arr?
- because that is the order to add

- https://leetcode.com/problems/critical-connections-in-a-network/ (\*)
- in loop, there is con, return, nothing
- con: u want loop run
- return: u don't want loop run; out directly
- nothing: allow code below run
-
- set is not arr, cannot for i=...
-
- why there must be 1 dfs?
- because we need to go down
- why dfs is in edge loop?
- because we have min rankAtNode, we have the push res
- why visited = arr, rankAtNode = ar? why not use set?
- because node num is nicely matched to arr num; use set no good

# read, write

- https://leetcode.com/problems/merge-sorted-array (\*)
- https://leetcode.com/problems/duplicate-zeros (\*, brute_force)
- https://leetcode.com/problems/sort-array-by-parity (\*)
- https://leetcode.com/problems/sort-array-by-parity-ii/ (\*)
- https://leetcode.com/problems/remove-duplicates-from-sorted-array (\*)
- https://leetcode.com/problems/remove-element (\*)
- https://leetcode.com/problems/move-zeroes (\*)
- https://www.geeksforgeeks.org/minimum-swaps-required-group-1s-together/
- https://poitevinpm.medium.com/leetcode-2134-minimum-swaps-to-group-all-1s-together-ii-a9a19d85d4f5

# swap

- https://www.geeksforgeeks.org/minimum-swaps-required-group-1s-together/ (\*)
- https://leetcode.com/problems/maximum-swap/ (\*)
- https://leetcode.com/problems/smallest-string-with-swaps/ (x)
- https://leetcode.com/discuss/interview-question/780698/got-this-in-an-interview-how-to-solve (x)
- https://leetcode.com/discuss/interview-question/1517196/Amazon-or-OA-2021-or-Hackerrank, find_min_swap (\*)
- https://leetcode.com/problems/move-zeroes/ (\*)

# Monotonic Stack

- https://leetcode.com/problems/daily-temperatures/ (\*)
- https://leetcode.com/problems/shortest-unsorted-continuous-subarray (\*)
- https://leetcode.com/problems/next-greater-element-i/ (\*)
- https://leetcode.com/problems/next-greater-element-ii/ (\*)
- https://leetcode.com/problems/online-stock-span/ (\*)
- https://leetcode.com/problems/132-pattern/ (\*)
- https://leetcode.com/problems/sum-of-subarray-minimums/ (x)
- https://leetcode.com/problems/largest-rectangle-in-histogram/ (x)
- https://leetcode.com/problems/sum-of-subarray-ranges/

# laser beam

- https://leetcode.com/discuss/interview-question/1669493/AMAZON-OA
- https://leetcode.com/problems/number-of-laser-beams-in-a-bank/description/ (\*)

# pt to orig

- https://leetcode.com/problems/k-closest-points-to-origin/

# paint fence problem

- https://leetcode.com/problems/paint-fence/, https://baihuqian.github.io/2018-07-29-paint-fence/ (x)
- https://leetcode.com/discuss/interview-question/1488281/Amazon-OA (\*)

# https://leetcode.com/discuss/interview-question/1655441/Amazon-or-OA

- it essentially asks for max length of subarray which can product one

A question about Amazon student badges but ultimately the problem was given an arr of -1 or 1, return the maximum subarray length with a product of 1.
The array is of size 2 and above and only contains -1 and 1
e.g arr = [-1,-1,1,1,-1], return 4, since index 0 to 3 have the max length with product equal to 1

I tried to use a sliding window but only passed 4/13 cases. there was somthing i had to fix in the logic for the case arr = [ -1,-1,-1,-1,-1, 1]

Given an array containing only 0 and 1 as its elements. We have to sort the array in such a manner that all the ones are grouped together and all the zeros are grouped together. The group of ones can be either at the start of the array or at the end of the array. The constraint while sorting is that every one/zero can be swapped only with its adjacent zero/one. Find the minimum number of moves to sort the array as per the description.
Example:
input array ={0,1,0,1}
Final array = {0,0,1,1}
Minimum moves = 1 (1 at index 1 is swapped with 0 at index 2)

input array = { 1101}
Final array - {1110}
Minimum moves = 1 {1 at index 2 is swapped with index 3}

I passed all test cases on this one 13/13.

I ran a sliding window to check number of swaps if the elements on the left should be 0s before 1s, and at each 0 found by right index, I found the number of swaps needed
repeated the same above for the case if the elements on the left should be 1s before 0s,
returned the minimum of both operations.

Do I have even a miniscule chance of moving forward

# https://leetcode.com/discuss/interview-question/1557009/amhttps://leetcode.com/discuss/interview-question/1557009/amazon-online-coding-assessment-sde-2

- https://leetcode.com/problems/valid-parentheses/ (\*)
- There are 3 rules for a valid string:

An empty string is valid
You can add same character to a valid string X, and create another valid string yXy
You can concatenate two valid strings X and Y, so XY will also be valid.
Ex: vv, xbbx, bbccdd, xyffyxdd are all valid.
I tried using recursion. but could not complete all test cases. Good approaches or solutions will be helpful.

# parentheses

- https://leetcode.com/problems/generate-parentheses/ (\*)
- https://leetcode.com/problems/check-if-a-parentheses-string-can-be-valid/ (x)
- https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/ (\*)
- https://leetcode.com/problems/score-of-parentheses/ (\*)
- https://leetcode.com/problems/different-ways-to-add-parentheses/ (\*)
- https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/ (\*)
- https://leetcode.com/problems/valid-parenthesis-string/ (\*)
- https://www.1point3acres.com/bbs/thread-847941-1-1.html
- https://leetcode.com/problems/valid-parentheses/ (\*)

# retail

- https://leetcode.com/discuss/interview-question/1695225/Amazon-OA-or-Part-1-70-Min-or-SDE-Position
- https://leetcode.com/discuss/interview-question/1688875/Amazon-SDE1-or-Number-of-Retailers-who-can-server-given-requests

# product 1

- https://leetcode.com/discuss/interview-question/1692832/Amazon-or-Online-Assessmentor-Product-of-1 (\*)
- https://leetcode.com/problems/maximum-length-of-subarray-with-positive-product/ (\*)
- https://leetcode.com/problems/product-of-array-except-self/ (\*)
- https://leetcode.com/problems/maximum-product-subarray/ (look_for_val) (\*)
- https://leetcode.com/problems/sign-of-the-product-of-an-array (\*)
- https://leetcode.com/problems/product-of-the-last-k-numbers/ (\*)
- https://leetcode.com/problems/maximum-product-of-three-numbers/ (\*)
- https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/ (\*)
- https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/ (\*)

# flip 1 dp

- https://leetcode.com/problems/flip-string-to-monotone-increasing/

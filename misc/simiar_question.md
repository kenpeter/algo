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
- why we don't have a worker loop then dfs?
- because only worker ind = 0 is useful, ind=1, 2, 3, we missing worker
- why we have bike_seen?
- because worker -> bike (connected), worker -> bike (connected) each level, to avoid repeated
- why dp[worker_ind][bike_ind] need a 2D dp?
- because workder -> bike (connected)
- why dp[workder_ind][bike_ind] only store sub path, why not store full path?
- because we not sure dp[worker_ind][bike_ind] = dp[worker_ind-1][bike_ind-1] + action
- also we have acc_path = dp[w_ind][b_ind] + dp[w_ind][b_ind] + ....
- why w_ind >= worker.len, min(min, acc_path)?
- because after all the level, acc_path becomes final
- why we need to seen -> dfs -> unseen? 
- because set -> dfs -> unset


- https://leetcode.com/problems/shortest-path-in-a-grid-with-obstacles-elimination/ (\*)
- why loop q.size (with q.len > 0) -> 4 dir?
- because bfs we exhaust this queue level, then we exhaust next queue level.
- because 4 dir is like future move
- why curr_row, curr_col, curr_k is same in the 4 dir loop?
- because we are trying, not real
- why we ++res after exhaust this queue level?
- because we are doing bfs.
- why bfs?
- because we try to exhaust each level
- why exhaust each level?
- because we have the ++res
- in the 4 dir loop, next_k <= k && used[r][c][next_k], then push to queue, why we don't have g[r][c] === 0 and g[r][c] === 1?
- because next_k is from 0 -> k, so used[r][c][next_k] is all situation
- because used[r][c][next_k] === true, we have visisited, then no need to push to queue

- https://leetcode.com/problems/brace-expansion/ (\*)
- why we don't have outter loop then put dfs into it?
- because {a, b}c{a, b} is entire str, we have str_ind all the way
- why res = path1 (sub_path_char + sub_path_char + ..) + path2 (sub_path_char ..) + path3?
- because sub_path_char is the sub path dfs
- why we have arr dfs?
- because {a,b} -> form arr
- why we have normal char dfs?
- {a, b}c, c is the only char


- https://leetcode.com/problems/stepping-numbers/ (\*)
- why outter loop i=1 -> i=9, then dfs?
- it is like the max path in grid or flood-fill
- why it is like max path in grid or flood-fill?
- because we extend from base num
- when low_boundary = 0, why res.push(0)?
- because last_digit = curr % 10, 0 % 10 always zero, no good
- if(curr >= low) res.push(curr), why no return here?
- because we can build next step number (less or more), based on this curr
- why prev = curr * 10 + last_digit - 1? because curr(digit) and last_digit(digit), diff = 1
- same for next
- why if(last_digit > 0) dfs(prev), because prev is less and less, prev hit low boundary.
- why if(last_digit < 9) dfs(next), because next is more and more, next hit up boundary.

- https://leetcode.com/problems/synonymous-sentences/ (\*)
- queue (str) -> word arr (split single str) -> replace word (edge and graph)
- why queue -> word arr -> replace?
- beause we can exhaust
- word arr (using i in ind) -> replace word (using j in edge)


- https://leetcode.com/problems/maximum-number-of-accepted-invitations/ (\*)
- why loop boy ind (row len), then dfs?
- because it is like max path len in grid; we go down each girl ind (col len)
- why use g_visit in each top level loop?
- because it is like the max path len in grid
- why g_visit set true / false?
- because seen / visisted / paint
- why g_match as global?
- because g_match[girl_ind] = boy_ind; assign boy to girl
- why loop each girl from i=0, within dfs?
- because brute force
- why dfs(g_match[girl_ind])?
- because we g_match[girl_ind] === boy_ind (row_ind); restart dfs in row
-
- why code flow like this?
- 1. can invite?
- 2. seen this girl? 
- 3. if can invite and never seen, can we assign boy to this girl
- 4. if we cannot assign, can we switch (restart dfs)
- 5. out

- https://leetcode.com/problems/minimum-number-of-lines-to-cover-points/ (\*)
- 1. no pt left
- 2. we have 1st pt, can existing lines cover 1st pt?
- 3. we cannot cover 1st pt, if only 1 pt, then inc #, and return
- 4. now we have 1st pt and other pts, form new lines
- summary: we surround 1st pt to do code logic
- why surround 1st pt to do logic?
- because if we can cover 1st pt, rest of pt can cover
- why we don't take out 1st pt physically?
- because it may not be covered, so need to stay; other i can cover
- why pt_arr.slice(0) and line_arr.slice(0)?
- because it is double paths; It is easier for different sub tree

- https://leetcode.com/problems/nested-list-weight-sum
- https://leetcode.com/problems/nested-list-weight-sum-ii (\*)
- why we use localArr in dfs param?
- because arr is keep passing down and consume
- when getting max depth, why we need to math.max in end node and go down code
- because each code section is in the level


- https://leetcode.com/problems/different-ways-to-add-parentheses/ (\*)
- why single number is the base case?
- because res = (a) + (b), so dfs will see a and b
- why put a into [a]?
- because 2d loop to deal with combo; [a, b] vs [a1, b1]

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
- why '1' is str, '0' is str?
- because look at the question, 1 str, 0 str

- https://leetcode.com/problems/max-area-of-island (\*)
- 1 island === 1 dfs go down
- why?
- because they are connected

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
- rankAtNode = new Array(n).fill(0), why fill 0?
- because ready to assign rank 0
- why we need a global rank?
- becuase node goes down, rank goes down
- why conns.len not conns?
- because conns === arr, arr.len
- why currRank = rank, then nodeAtRank[node] = currRank?
- because it is at this position, we need to assign rank
- why we seen this node, we still need to update min_node_rank and push res?
- becuase when update nodeAtRank[node], it is async, we need to update again
- why rankAtNode[node] = min_rank?
- because we want node small and close each other, then it is critical nodes
- why currRank (prev min rank) < rankAtNode[edge], need to push res?
- why not rankAtNode[child] (curr min rank) < rankAtNode[edge]?
- because curr min rank always < rankAtNode[edge], no point

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

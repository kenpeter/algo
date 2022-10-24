# bfs

- https://leetcode.com/problems/subsets/discuss/27281/A-general-approach-to-backtracking-questions-in-Java-(Subsets-Permutations-Combination-Sum-Palindrome-Partitioning)

- https://leetcode.com/problems/subsets (\*)
- why we don't push ele in the dfs base / boundary check?
- why we push ele in the dfs loop?
- because we formt the path in dfs loop
- it is already formed, so no need to push ele in dfs base

- https://leetcode.com/problems/subsets-ii/ (\*)

- https://leetcode.com/problems/permutations (\*)
- why used arr is so good in dfs
- we can use path_arr.includes(ele) to achieve unique
- if there are repeated num, we know exactly who used / who not used
- for dfs loop, why i=0? why we re-scan from zero?
- because if i=start_ind, we skip / miss many elements
- we want to have all elements
- why not dfs(i+1, path)?
- because i+1 will skip many elements
- why used[ind] = true -> dfs -> used[ind] = false?
- because dfs in the middle

- https://leetcode.com/problems/permutations-ii (\*)
- why we have 2 ways to acc path?
- 1. in base / boundary check, path.slice(0), res.push(path)
- this is easiest, because we just copy
- but waste mem
- 2. we don't copy in base / boundary check, we use single path arr (global)
- path.push() -> dfs -> path.pop()
- save mem, but a bit confused
- why in loop, (i=0 && ns[i-1] === ns[i] && used[i-1] === true) con, is to use LAST ELEMENT?
- for last same ele, from 0 to last same ele, used[i-1] === false (always)
- so we can form its own unique path
- all prev same eles, are duplicated

- https://leetcode.com/problems/combination-sum (\*)
- why we cannot use ind >= arr.length, instead use acc_sum >= tar?
- because ind can be the same index, repeat again and again
- why we use same_dfs_i?
- because same num can be used to form sum

- https://leetcode.com/problems/combination-sum-ii (\*)
- in dfs loop, why we put i > start_ind in the con statement (curr and prev ele same same)?
- why not put loop(i=ind+1, i<arr.length)?
- or why not put loop(i=ind, i<arr.length-1)?
- because put i > start_ind in the con statement, we can use this single ele, this single ele will be pushed to path arr, it bypass the con statement
- why in loop, if(i > ind && ns[i-1] === n[i]) continue, why i > ind is to use FIRST ELEMENT?
- because i=ind, is to be used; later same ele skips

- https://leetcode.com/problems/palindrome-partitioning (\*)
- for func isPal(), why ++i and --j?
- because if i and j not move, inifinite loop
- why substring(start_ind, end_ind) become diff dfs path?
- because they are diff possible, diff path

- https://leetcode.com/discuss/interview-question/1625460/AMAZON-OA-Find-K-maximum-Priority


- https://leetcode.com/problems/factor-combinations (\*)
- why dfs_n decrease, while dfs_curr increases?
- because dfs_n is being consumed by mod
- because dfs_curr in each dfs loop, dfs_curr inc, to pass down, to maintain inc order in result
- why dfs_n === 1 is the base case?
- because dfs_n is being consumed by mod
- why for i=curr; i <= dfs_n?
- i <= dfs_n, because dfs_n is being consumed and eventually === 1



- https://leetcode.com/problems/palindrome-permutation (\*)
- why aaabb, then a = 3 freq, b = 2 feq?
- because permutation, we can move around, for all orders
- why map.set(key), then map.delete(key)?
- beause map.size will reduce
- then map.size <= 1, means palindrome

- https://leetcode.com/problems/palindrome-permutation-ii

- https://leetcode.com/problems/word-pattern-i (\*)
- why pattern and match_sub_str should have the same frequency at start?
- because all operations below, we assume pattern and match_sub_str to be same frequency, so the loop in same step
- why set store sub_str, not pattern_char?
- because mp(pattern_char, sub_str), map store the pattern_char
- why map and set are together?
- because e.g. map(a, b), map(a, c) these will never happen; beause b and c must be unique
- why map and set are in 4 combos?
- 1. seen in map, in set (con)
- 2. seen in map, not in set (return false)
- 3. not seen in map, in set (return false)
- 4. not seen in map, not in set (set, then con)
- because map and set together
- why 3 factors mp(pattern), set(pattern), mp.get(pattern) === income_pattern, to prove equal?
- mp(pattern) and set(pattern), never say sub_str equal or not
- so we need to have mp.get(pattern) === income_pattern
- why we return true at the end?
- because in the loop, we try to return false
- same as in loop we try to return true, but no way
- then last return false

- https://leetcode.com/problems/word-pattern-ii/ (\*)
- why p_ind done scan pattern, why s_ind done scan string?
- because if they are all done in same speed, so equal
- if they are in diff speed, then non-equal
- why 4 combo?
- because
- 1. seen, set
- 2. seen, !set
- 3. !seen, set
- 4. !seen, !set
- why no +1, s_ind -> s_ind + sub.len + 1?
- because e.g. abcd, start at b, bcd === 3 len, b + 3 len === over len, so no +1
- why we have diff dfs path?
- because p_ind and s_ind are in diff speed
- why set map, set -> dfs -> unset map, set?
- because dfs is in middle

- https://leetcode.com/problems/flip-game-i (\*)
- why in loop, i-1 and i together?
- because 2 consecutive chars to flip
- why sub(0, i-1) + (--) + sub(i+1)?
- because i === curr, i-1 === prev

- https://leetcode.com/problems/flip-game-ii (\*)
- why we start at i=1?
- because i === curr, i-1 === prev, so i starts at 1
- why we need to be care of var's scope?
- because if we have same var, we conflict
- because if not local var, we confuse var
- why we have a flip before dfs?
- because this is the player 1 flip
- because player 1 flip, then player flip
- why condi = dfs(curr_s) is the overall player 2 flip?
- because dfs represent the overall outcome
- why dfs prepresent overall outcome?
- because it goes down to all paths


- https://leetcode.com/problems/generalized-abbreviation (\*)
- in the dfs boundary check / base, why there is no curr_char?
- because end of str, there is no curr_char
- full = prev_str (sub_path_1) + counter (sub_path_2) + curr_char(sub_path_3, no)
- why counter === 0 or counter > 0?
- because if counter acc, then we have abbrev the chars, then c > 0; c === 0 means we have not used
- why we have only 2 dfs choices?
- becuase either counter acc or we convert the counter acc to str
- why?
- that is how the counter abbrev used
- why choice 1, prev_str (no change) + counter (inc) + curr_char (no change)?
- because counter acc
- why choice 2, prev_str (merge counter) + counter (merge to prev_str, and reset) + curr_char (merge to prev_str)?
- because counter converted
- why counter reset to 0?
- because the counter converted all

- https://leetcode.com/problems/android-unlock-patterns/ (x)
- https://medium.com/@rebeccahezhang/leetcode-351-android-unlock-patterns-d9bae4a8a958 (x)
- https://massivealgorithms.blogspot.com/2016/06/leetcode-351-android-unlock-patterns.html (x)
- https://cheonhyangzhang.gitbooks.io/leetcode-solutions/content/351-android-unlock-patterns.html (x)

- https://leetcode.com/problems/robot-room-cleaner/, https://wentao-shao.gitbook.io/leetcode/graph-search/489.robot-room-cleaner (\*)
- why no loop then dfs?
- because we don't even know the grid, we don't know the loop
- why start at dir=0, r=0, c=0?
- because we don't know where we start, then dir=0, r=0, c=0 is the choice
- why pass dir along r and c as param in dfs?
- because in the same r and c, each dir is diff; we need to diff them
- why no dfs check?
- there are 2 way to check: check before pass to dfs or check on top of dfs
- in this case, we check before pass to dfs
- why we call ro.clean() and set visited on top of dfs?
- because same reason, we check before pass to dfs
- why dir + i (the 4 dir)?
- because we keep rotating, dir + i is a way to rotate
- why (dir + i) % 4?
- because dir=0,1,2,3; i=0,1,2,3; dir+i=6 overflow, %4 keep in range
- why keep in range?
- because dir[ind], ind%4 in range
- why !seen and ro.move (detect we can forward), then dfs?
- because conditional dfs, we cannot just dfs
- why we need to revert the robot?
- beause if seen + ro.move, we physically move here, so we need to revert
- why whether dfs or not, we need to ro.turnRight()?
- because we need to move on another direction
- why we need to avoid global var and local var having same name?
- because global var and local var confuse each other
- const new_dir = (dir + i) % 4 === new_dir and new_ind
- because this contains dir, so new_dir
- because this contains %4, so it is new_ind, for arr


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
- for graph, why we use hash, rather than map?
- we can use use map, but hash is mush eaiser to assign vertex and assign arr/set to the end
- why we use global seen, in dfs travel; why not use a local seen?
- because when we travel, we want to hit the cycle; when it is cycle
- it means we stop and this dfs path is done, and return sub result to prev dfs
- why we have dfs in outerloop, then within dfs we have another dfs?
- because outerloop, we init the dfs
- within dfs, we need to dfs need to self travel
- within outerloop, return_email_arr = dfs(email), why return_email_arr can be []?
- because prev dfs travel may hit this email (vertex), so we hit again, we return []
- within outerloop, why we sort the email_arr?
- because looks nice and question asks
- within outerloop, why we unshift person_name to start?
- because question asks
- why we use first_email as vertex, then conenct rest of emails?
- why not do N^2, each node connect with each other once
- because we know that first_email is in the same boat as other email in arr
- It is representative, this also avoid N^2
- then why rest_email connects first_email only?
- this is the same idea that first_email as vertex, connect to rest_emails
- rest email only connects back to first_email
- why in same_arr, we form cycle; why in diff email_arr, same vertex can appear, hence edges inc?
- because some arr processes 1st, then other arr processes later
- why graph like this?
- [a]; a->x (no edge)
- [a, b]; a->b, b->a (cycle)
- [a, b, c]; a->(b and c); (same_arr, more set)
- [a, b], [a, c]; a->(b and c); (diff_arr, same vertex)
- why we need a name_hash?
- because name_hash[email] = person_name, so diff email as key entry, will have same person_name
- when build graph, why we check graph[curr_email] === undefined, then graph[curr_email] = new Set()?
- because later we do graph[curr_email].add(ele), without new Set() before, this is invalid add operation
- this allows natural operation
- when build graph, when forming a cycle, why we don't need j === 1?
- because j === 1, it is 1st email; it has vertex, but it has no edge
- why for edge we use set, not arr?
- because edge can be repeated, arr allows repeated, we don't want repeated.

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
- why color click !== bucket fill, we take no action?
- because there is no dfs, then we don't want to go down
- color === bucket fill, we want to go down with dfs
- why we need to remember the color we click?
- the color we click is called neighbour color color
- which all same neighbour color should be painted with new color
- why there are 3 diff colors?
- g[r][c] === curr_color, it may diff from neighbour_color and paint_color
- neighbour_color === same color in the same area
- paint_color === we want new color for this area
- what is the color relationship?
- g[r][c] === neighbour_color, we are in the same area, can paint new color
- g[r][c] !== neighbour_color, not in same area, cannot paint new color
- g[r][c] === paint_color, local_seen, return, to avoid loop
- g[c][c] !== paint_color, so can paint
- why pass neighbour_color into dfs func?
- so we know the next dfs level, g[r][c] is the same neighbour


- https://leetcode.com/problems/pacific-atlantic-water-flow/ (\*)
- what is pArr (pacific), aArr (atlantic)?
- pArr === local_seen
- why we don't modify the cell?
- there are 2 ways for local seen
- 1. modify cell
- 2. a copy
- here we make a copy, because we have pacific and atlantic, 2 diff
- on top of dfs, why we don't return anything
- return 0, '', [], none of them
- because if pArr[i][j] === aArr[i][j], that means common cell, common ground, return
- on top of dfs, why cannot flow, we need to return?
- because we need to flow high to low
- why flow high to low?
- 2 ways to paint: equal cell or descending / ascending
- here we using descending
- I don't think we can flow low to high
- on top of dfs, why we seen it, we return?
- to avoid loop, either modify cell or a copy; use a copy
- in the 4 direction pass to dfs, why pass arr into dfs?
- that is the local_seen, pArr / aArr.
- we are using same dfs func for pacific and atlantic, so use arr
- why we use current cell height as max, for current dfs? why not use same maxHeight for entire flow?
- because as we flow, we have 2 diff dfs level to flow; the height is diff in each dfs level; we cannot use same max height
- hence each dfs level is diff
- when paint grid, why we only go top and left?
- because that is for pacific
- when paint grid, why we only go right and bottom?
- because that is for atlantic
- why we don't do a 2D loop, then loop each cell?
- because base on the diagram, top and left === pacific, the init cell
- right and bottom === atlantic, the init cell
- for the init dfs, why we use -Infinity as maxHeight?
- because we want the first cell to flow and act like a maxHeight, no matter what
- why we use 2D loop for each cell, pArr[i][j] === aArr[i][j], to detect commont ground?
- because both seen it then it means both flow, hence common ground

- https://leetcode.com/problems/battleships-in-a-board/ (\*)
- why for flood-fill, we need to use standard 2D loop?
- because init cell -> all connected cells paint
- will not touch other areas
- why in the 2D loop, we need to check empty cell?
- because init cell -> all connected cells paint
- will not touch other areas
- why in the 2D loop, we ++res?
- because init cell -> all connected cells paint
- so that is the whole area === result
- why we check boundary on top of dfs?
- because future cell can travel or not
- why we check empty cell on top of dfs?
- because future cell can travel or not
- in the boundary check / empty_cell check, why return nothing?
- because we paint cell === result count
- what u want me return, 0, '', [], none
- why we modify the cell?
- paint the cell, we don't want to hit again global_seen
- why 4 directions?
- future cell can travel or not


- https://leetcode.com/problems/course-schedule/ (\*)
- why we detect the cycle in outerloop?
- because if 1 iteration is cycle, then return false
- if the outerloop does not return, we have a final return after outerloop
- this is typical pattern
- why we init local_seen at each iteration, in outerloop?
- because we have an outerloop here; it manages its own dfs path
- why I don't detect global_seen.has, local_seen.has in outerloop?
- because we have it detect within dfs.
- again, 1 iteration fail, return within outerloop;
- finisih all iterations, return success at the end
- when build graph, why we can have 2D arr or hash?
- because there are 2 ways to build graph; 2D arr === hash
- why the graph is 1 direction?
- because [0, 1], if do 0 then 1 must do first, 0 -> 1
- we cannot go 1 -> 0 in graph, that is not the question asking
- why local_seen === cycle, global_seen === avoid_loop?
- local_seen === cycle, because it is in own dfs path, we hit again
- global_seen === avoid_loop, because it is in entire dfs path
- why we do: local_seen.add -> dfs -> local_seen.del?
- because node in local_seen, in this dfs path need to be in sync
- each dfs is like each sub path
- why we do: dfs -> global_seen.add?
- because after dfs all done, global_seen can say we done visit for this node
- why only this question require local_seen.delete after edge loop?
- because denote_max_bomb, max_time_to_inform_employee, critical_connection_in_network; either is using global_seen or local_seen, but none of them do local_seen.del after edge loop
- if we are using global_seen, it does not make sense global_seen.del, why?
- because global_seen.del is global, it needs to persist
- local_seen can be deleted in each dfs path


- https://leetcode.com/problems/course-schedule-ii/ (\*)
- why glocal_seen's entry === course dep order?
- e.g.
- [0, 1] === to do 0, must do 1 first
- graph 0 -> 1
- dfs bottom up, 1 -> 0
- so result === do 1 first, then do 0, which question asking
- e.g.
- [1, 0] === to do 1, must do 0 first
- graph 1 -> 0
- dfs bottom up, 0 -> 1
- so result === do 0 first, then do 1
- summary: course dep order === dfs travel order
- why within dfs, why put local_seen before global_seen?
- because local_seen === cycle; global_seen === avoid_loop
- why return true (local_seen)?
- return === we seen this in own dfs path
- true === cycle, why?
- because seen this in own dfs path, if keep going, cycle
- why return false (global_seen)?
- return === we seen this in global dfs paths
- false === not a cycle, why?
- cycle is detected by local_seen, not our task; not a cycle, because we just seen this
- why put local_seen.del, global_seen.add after dfs?
- because after dfs finish
- why only course_schedule require local_seen.del after edge loop?
- because max_num_denote_bomb, max_time_inform_employee, crital_connection_in_network; either using local_seen or global_seen, but none of them need local_seen.del after edge loop
- it does not make sense, that global_seen.del, why?
- because it is global_seen.del === global, it needs to persistent
- local_seen.del can be done


- https://leetcode.com/problems/critical-connections-in-a-network/ (\*)
- why we put seen.has in outer loop?
- because seen.has in outer loop make it faster.
- seen.has can sit in outer loop and seen.has can sit in dfs, at the same time
- why dfs(child_ind, parent_ind), has child_ind, parent ind?
- because 3 ways: parent -> child -> edge
- why 3 ways?
- because dfs(child_id, parent_ind), then pass dfs(edge_ind, child_ind)
- why we need to label each node with rank?
- otherwise, how do I know which one is more important, which one is on top
- parent -> child -> edge
- why rankAtNode = array(n).fill(-1), why use -1 or 0?
- because the rank starts at 1
- why we have 2 graph assignments?
- beacuse graph[vertex] = edge and graph[edge] = vertex
- why rank starts at 0, not 1?
- because in dfs, we have ++rank, which === 1
- why on top of dfs, ++rank?
- beacuse that is the real dfs rank
- why on top of dfs, we do not check child === parent?
- because we are not checking child === parent, parent (*) -> child -> edge (*)
- we are checking parent === edge, need to skip
- why use Array.from(set) to loop set?
- because set is set, not arr; Array.from can help
- why compare child rank with edge rank, after dfs?
- because child rank and edge rank should have the latest rank
- why assign smaller edge rank to child rank?
- because child rank will be on top once again; parent (top) -> child (bottom 0) -> edge (bottom 1)
- why compare curr_rank with edge rank, after dfs?
- because edge rank should have latest rank;
- curr_rank < edge_rank, that means edge_rank (top) -> curr_rank (bottom), so edge is imporant now -> [edge_ind, child_ind]
- why not curr_rank > edge_rank, then push result? curr_rank (parent) -> edge_rank (child)
- because the prev rankAtNode[child_ind] = min(edge_ind), we update with smaller, so it is similar
- also because we re-arrange parent child order
- why we don't use child_rank VS edge_rank?
- because child_rank keeps updating, it is not stable
- why I use local_seen (path.add -> dfs -> path.del) and global_seen here?
- why we don't use local_seen in critical_net_work_node (leetcode) and denote_max_bomb (leet_code)?
- because this quesion is to detect cycle; then local_seen is a good way to detect cycle

- https://leetcode.com/problems/detonate-the-maximum-bombs/
- why there are 2 ways to init dfs?
- 1. direct dif; e.g. have an init index, then dfs all the way
- 2. loop -> then dfs
- which way to choose?
- for this question, we don't have a single index, so it is likely loop -> then dfs
- when do we use global seen? when do we use local seen?
- if we have loop -> then dfs, then we need to use local seen.
- (because we have multiple init dfs ways, so local seen)
- if we have direct dfs, then we use global seen.
- (because there is 1 dfs way, so use global seen, seen or not seen)
- why we need to have max in outerloop?
- because there is no submax within dfs, there is only acc.
- there is no outerloop max and dfs submax, 
- because each iteration in outerloop, max is enough
- we compare each diff dfs path, and find out the max, among diff dfs paths
- why we use 2D loop to build graph?
- for max time to inform employee question, we use 1D array to build graph
- because we have manager_id = manager_arr[employee_ind]
- for this one, i=0, denote self + rest
- i=1, denote self + rest
- i=2
- so use 2D array to build graph
- for bomb array, why each element === [x, y, radius]?
- because x, y we know the position
- having radius, we can use c^2 = a^2 + b^2, to compare the radius
- if raidus >= the c distance, we can denote; otherwise, we cannot
- why we need to have i_raidus (we use to compare c distance) and j_radius (we don't use)?
- why we need to have x_i, y_i, then x_j, y_j?
- because i stable, then j loop;
- use this way we can exhaust all 1 vs 1 combo
- why we need to use this formula, c^2 = a^2 + b^2?
- because radius_i compare with c distance
- if radius_i >= c, we can denote, then we need to push to edges arr
- this comes up a question, for graph, do I use new Set() or just use arr?
- 1. use arr, we can just push element, we can loop edge loop very easy (many people use this, this question uses)
- 2. use set, set.add(); when loop Array.from(edge_set)
- when we build graph, why we care graph[vertex] init or not?
- not init, graph[vertex] = [], then graph[vertex].push
- already init, graph[vertex].push, directly
- why on top of dfs, why we have acc here, why not submax here?
- becuase we have max in outerloop, to compare.
- here we acc each dfs path, to form acc
- why I cannot use i in edge loop directly, why use e_ind = edges[i]?
- i is not the real thing, it is the index; e_ind = edges[i], is what we push, when build graph
- why we use seen.has within edge loop, not on top of dfs?
- 2 ways to put seen.has
- 1. on top of dfs (for curr)
- 2. within dfs loop (for future)
- why in edge loop, we have ++acc?
- beause it is for this edge iteration, so ++acc; we have other edge iteration
- so at least we finish this edge loop iterations
- then we have ++acc; acc = acc + dfs(edge_index), this level + its sub_level

- https://leetcode.com/problems/time-needed-to-inform-all-employees/
- why there is no loop then dfs?
- becaus we have a single headID
- why we don't need a 2D loop here?
- i loop all employee index
- j loop loop sub employee index
- because manager_arr already have index === employee, val === manager
- then manager_arr[employee_can_also_be_manager] = manager_id
- then graph[manager_id] = employee_id
- when build graph, when loop employee, why i === headID, we skip
- because manager_arr = [-1, 2, 2, 2]
- when i = 0, then val = -1; manager_arr[-1] === undefined, so need to skip
- why only have 1 skip, i === headID; why not more
- we only have 1D employee loop;
- also we only have 1 headId
- why we need submax = Max(submax, dfs(new_head_id)) in edge loop?
- because we have diff dfs paths, we need to get the max
- why timeInform[curr_head_id] + submax?
- timeInform[curr_head_id] === this level
- submax === another dfs level
- why we don't have local_seen here, only global_seen?
- because only course_scheduler (leetcode), ask to detect cycle; this does not ask to detect cycle

- https://leetcode.com/problems/minesweeper/submissions/
- why do we need 8 cell grid directions?
- because 1 click in the middle, all 8 cell grid directions get exploded
- it is like a sun shine.
- why init click has start_row and start_col?
- because that is where we start and we land on the grid.
- why there is no loop then dfs?
- because we have click (start_row, start_col), then we init dfs, then go down
- in the init dfs, why we need to handle mine (M) or init dfs?
- because if we don't handle mine now, it will go down to dfs, dfs will look for all future 8 directions. There is no way to handle current mine
- why we pass 8 directions to dfs?
- because later we have row = curr_row + row_d AND col = curr_col + col_d, for future move
- why the board has the actual value?
- because when we start to to click and dfs each cell, we need to know mine (M, acc num), empty (E, put into dfs queue), blank (B, reveal cell), digit (D, surround mine num), reveal mine (X, explode)
- because we can acc mine num and dfs queue
- why in the top of dfs, we have an empty dfs queue array; why not use a global array?
- because each dfs will have its own click (or starting point); it will hit 8 grid directions and form new dfs queue, in this dfs level.
- next dfs level will have own starting point
- within dfs, why we loop the 8 dir array directly? Why we don't have other loop operation?
- because there is no other operation; we don't need seen.has as there is no cycle hit
- why if we click a cell, it is like a sunshine; shine 8 directions
- because the middle is the central cell, then 8 directions are the shines
- why we loop the 8 directions?
- it can be 4 directions (e.g. flood fill) or 8 directions (mine sweep)
- because it clicks in middle, then it explodes in all 8 directions.
- it form row = curr_row + row_d; col = curr_col + col_d
- why we need row = curr_row + row_d; col = curr_col + col_d?
- because after each direction, we will form a new future move, hence we can check boundary, for future move
- why we only check boundary, we don't have other stuff to check?
- because the next cell will be
- mine (M, looks like a mine)
- empty (E, more dfs path)
- blank (B, reveal blank cell)
- digit (D, surround mine num)
- explode (X, explode mine)
- why there is no seen.has on top of dfs?
- because there is no cycle we will hit, not graph
-
- in dir loop, why we need to care mine (M)?
- because there we acc the mine num, and assign to the click point
- it also helps to stop dfs; because hit the stop point
- why we need to care empty square (E)?
- because if it is empty, we can push to queue arr, then loop -> dfs
- this allows new starting point
- why we don't care blank (B)?
- because aleady known AND there is no contrib to mine acc and dfs queue
- why we don't care digit (D)?
- because known AND there is no contribute to mine acc and dfs queue
- why we don't care explode (X)?
- Because it exploded, it is game over.
- Further to M, E, B, D, X, if other dfs path done it before, current dfs path should ignore it (to avoid repeated action)
- why we acc mine num?
- because need to assign mine num to this starting point.
- why we assign starting point mine num, there is no further dfs?
- because we hit the mine (stop point), we need to stop now, no dfs
- why we assign acc mine num to the starting point's cell?
- because to warn user that there are mines around; it is for the UI of the game
- so why do we assign blank to the starting point?
- because in this dfs level, if click is used, to reveal it, to let UI know.
- the dfs queue is below, is acting like further click (further reveal)
- why we assign blank before next dfs?
- because it is this dfs level, we need to finish the task here
- why the element in queue order is the direction order?
- because we loop in the 8 grid directions, so that is the loop order
- queue order === direction order
- why dfs return, it returns from the bottom?
- because dfs travel from top to bottom, when it reaches a stop condition, it travels from bottom to top, as a whole abstract.
- there is no way for it to travel drectly from starting point
- 
- why we need to use global, local, curr, etc to diff local var and global bar?
- if nested func, it is very easy to confused. must use
- why only empty path (E), we push to the dfs queue?
- because we do not want to dfs easier, must be careful dfs
- why we use board[r][c] = string(mineNum)?
- because all cells are string; why we need to use number
- why above the loop dfs queue, we need to board[r][c] = 'B'?
- because need to clean this cell, then move to next dfs;
- if no clear, we cannot move to next cell


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

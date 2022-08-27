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
- https://leetcode.com/problems/maximum-number-of-accepted-invitations/ (\*)
- https://leetcode.com/problems/minimum-number-of-lines-to-cover-points/ (\*)
- https://leetcode.com/problems/nested-list-weight-sum/ (\*)
- https://leetcode.com/problems/different-ways-to-add-parentheses/ (\*)

- https://leetcode.com/problems/longest-increasing-path-in-a-matrix/ (\*)
-

- https://leetcode.com/problems/accounts-merge/ (\*)
- https://leetcode.com/problems/accounts-merge/discuss/494151/JavaScript-Solution-DFS
- use seen in init travel graph
- use seen in sub travel graph (set)
- cannot put seen in dfs, as refresh each time

- https://leetcode.com/problems/number-of-islands (\*)
- paint this island to '0'
- '1' is str, '0' is str

- https://leetcode.com/problems/max-area-of-island (\*)
- https://leetcode.com/problems/making-a-large-island/ (\*)
- we don't go down to the path easily
- param updated, so use updated param

- https://leetcode.com/problems/shortest-bridge/ (\*)
- [i, j], cell_len = |x2-x1| + [y2-y1] - 1;
- remember to paint

- https://leetcode.com/problems/count-sub-islands/ (\*)
- because the dfs === init + self loop, so need g[i][j] to guard

- https://leetcode.com/problems/find-all-groups-of-farmland/ (\*)
- without paint, it will infinite loop

- https://leetcode.com/problems/web-crawler (\*)
- init, set.add(url), as may be no more urls

- https://leetcode.com/problems/number-of-distinct-islands/ (\*)
- shape == direction + up + right + down + left
- start direction = 'x' (init)
- dfs return 'o' (something return)

- https://leetcode.com/problems/swim-in-rising-water/ (\*)
- time === depth, time++ in loop
- each iteration is new
- seen.add === paint

- https://leetcode.com/problems/the-maze (\*)
- dfs always consider base
- each direction, 1 direction only (empty path || visited), bacause later will check
- (block || visited) continue
- hit the boundary, need to go back

- https://leetcode.com/problems/the-maze-ii (\*)
- go down to the path, where distance is less; not random go down
- in each dir, we do a fresh start (because state will be init same)
- init the dp arr, as it needs to cal later

- https://leetcode.com/problems/flood-fill (\*)
- img[r][c] !== startColor, stop (because other pixel)
- img[r][c] === newColor, stop (because already fill)
- origColor = img[r][c], because it wants to change all same color

- https://leetcode.com/problems/pacific-atlantic-water-flow/ (\*)
- pacific === atlantic, not enough; pacific === atlantic === 1 (visited)
- row loop then col loop
- water, height flow to low

- https://leetcode.com/problems/battleships-in-a-board/ (\*)
- ship is 1 to k (col) or 1 to k (row)
- paint in own grid === seen in set

- https://leetcode.com/problems/course-schedule/ (\*)
- seeing, hit again, will be cycle
- seeing, clean each time, so next one can use; seeing.add -> seeing.delete
- seen, hit again, non-cycle, because sucess
- vertex can has no edges, so need check
- if loop graph, no relationship, item miss; loop courseNum

- https://leetcode.com/problems/course-schedule-ii/ (\*)
- seeing, hit again, will be cycle
- seeing, clean each time, so next one can use; seeing.add -> seeing.delete
- seen, hit again, non-cycle, because sucess
- vertex can has no edges, so need check
- if loop graph, no relationship, item miss; loop courseNum

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

# DP

https://leetcode.com/discuss/general-discussion/491522/dynamic-programming-questions-thread

- Divide all numbers into two groups
- what is the minimum difference between the sum of two groups.

# knapsack

- https://leetcode.com/problems/coin-change-2/discuss/99212/Knapsack-problem-Java-solution-with-thinking-process-O(nm)-Time-and-O(m)-Space

#### non-repeated ele, num_only, fill up multiple tars (3d)

##### non-repeated ele (0, 1), ele fill up tar m, n, max_combo (3d->2d)

- transfer:
- row ele
- col tar_m, col tar_n, 3d => (2d)
- left side === 0 (val(1))
- dp[k][i][j] === AT THIS ele, REACH tar, FINAL max_combo
- loop ele
- loop tar_m
- loop tar_n
- with: dp[k][i][j] = ma(to_up, val(1) + to_up_left) (non-repeated)
- without: dp[][][] = to_up
- https://leetcode.com/problems/ones-and-zeroes/

#### non-repeated ele, weight/size, value, fill up tar (2d)

##### non-repeated ele, weight, value, fill up tar (2d)

- transfer:
- row ele
- col tar (weight)
- left side === 0 (val(ele))
- dp[i][j] === AT THIS ele, REACH tar, FINAL max_val
- loop ele
- loop tar
- without: dp[i][j] = to_up
- with: dp[i][j] = to_up_left(non-repeated) + val(ele)
- https://www.lintcode.com/problem/backpack-ii

#### non-repeated ele, num_only, fill up half tar (2d)

##### pick 2 non-repeated ele, canncel out, 1 or 0 left, min_diff (2d)

- transfer: (a + b) - (c + d), (totTar - aTar) - aTar === diff
- row ele
- col ha (1/2)
- left side == true
- dp[i][j] === AT THIS ele, REACH step tar, FINAL true/false
- loop ele
- loop ha
- 1_up || to_left_up(non-repeated) ==> dp[i][j] = true, ma(ma, j)
- https://leetcode.com/problems/last-stone-weight-ii/

##### non-repeated ele, into 2 sets, equal sum, true/false (2d)

- transfer: ha = sum / 2
- row ele
- col ha (1/2)
- left side == true
- dp[i][j] === AT THIS ele, REACH step tar, FINAL true/false
- loop ele
- loop ha
- 1_up || to_left_up(non-repeated) ==> dp[i][j] = true
- https://leetcode.com/problems/partition-equal-subset-sum/discuss/90592/01-knapsack-detailed-explanation

p
p
p
p

#### repeated no_posi ele, num_only, fill up tar (2d)

##### repeated no_posi ele, fill up to tar, min_combo. (2d)

- transfer:
- row ele
- col tar
- left side 0 (val(1))
- dp[i][j] === AT THIS ele, REACH tar, FINAL min_combo
- loop ele
- loop tar
- with: dp[i][j] = MIN(1_up, val(1) + to_left(repeated))
- without: dp[i][j] = 1_up
- https://leetcode.com/problems/coin-change/

##### repeated no_posi ele, fill up to tar, total_num_combo (2d)

- transfer:
- row ele
- col tar
- left side === 1 (no val below)
- dp[i][j] === AT THIS ele, REACH tar, FINAL total_num_combo
- loop ele
- loop tar
- dp[i][j] = 1_up **+** to_left(repeated)
- dp[i][j] = 1_up
- https://leetcode.com/problems/coin-change-2/

#### repeated ele, num_only, fill up to tar (1d)

##### repeated ele, fill up to tar, min_combo. (1d)

- transfer:
- row ele
- left side 1/0
- dp[i] === AT THIS tar, FINAL min_combo, INF
- loop ele
- loop tar, loop dp, L(j=w..), j>=w
- dp[i] = MIN(dp[i], dp[j-w] + val(1))
- https://leetcode.com/problems/coin-change/

##### repeated no_posi ele, fill up to tar, total_num_combo. (1d)

- transfer:
- row ele
- left side === 1 (no val below)
- dp[i] === AT THIS tar, FINAL total_num_combo
- loop ele
- loop tar (1d backward)
- with: dp[i]
- without: dp[j-w]
- dp[i] = with + without
- https://leetcode.com/problems/coin-change-2/

##### repeated no_posi ele, fill up to tar, total_num_combo. (1d)

- same as above
- https://www.lintcode.com/problem/backpack-v

##### 1 num breaks diff nums (repeated), max_product (1d)

- transfer: repeated ele, fill up to tar, max_product (1d)
- row ele
- left side === 0 (multiply, so 1)
- dp[i] === AT THIS tar, FINAL max_product
- loop ele
- loop tar (1d backward)
- with: dp[i] = dp[i]
- without: dp[i] = dp[j-w] \* val(w)
- dp[i] = Math.max
- https://leetcode.com/problems/integer-break

#### repeated posi ele, fill up tar (1d)

##### repeated posi ele, fill up to tar, total_num_combo. (1d)

- transfer: no_posi -> posi
- row ele
- left side === 1 (no val below)
- dp[i] === AT THIS tar, FINAL total_num_combo
- loop tar (each tar use all #)
- loop ele
- dp[i] = dp[i] + dp[i-w]
- https://www.lintcode.com/problem/combination-sum-iv

##### repeated posi ele, fill up to tar, total_num_combo. (1d)

- transfer: no_posi -> posi
- row ele
- left side === 1 (no val below)
- dp[i] === AT THIS tar, FINAL total_num_combo
- loop tar (each tar use all #)
- loop ele
- dp[i] = dp[i] + dp[i-w]
- https://leetcode.com/problems/combination-sum-iv/

#### non-repeated ele, num_only, half tar (1d)

##### non-repeated ele, into 2 sets, equal sum, true/false (1d)

- transfer: ha = sum / 2
- row ele
- left side == true
- dp[i] === AT THIS ele, REACH ha, FINAL true/false
- loop ele
- loop ha (backward, why? prev stable)
- i>=w, dp[i] = dp[i] || dp[i-w]
- https://leetcode.com/problems/partition-equal-subset-sum/discuss/90592/01-knapsack-detailed-explanation

##### pick 2 non-repeated ele, canncel out, 1 or 0 left, min_diff (1d)

- transfer: ha = sum / 2
- row ele
- left side == true
- dp[i] === AT THIS ele, REACH ha, FINAL true/false
- loop ele
- loop ha (backward, why? prev stable)
- i>=w, dp[i] = dp[i] || dp[i-w]
- ma(ma, j)
- https://leetcode.com/problems/last-stone-weight-ii/discuss/635621/Dp-solution-with-explaination-(cpp)

# binary search

# hash

# 2 pointer

# str

# backtrack

- https://leetcode.com/problems/partition-to-k-equal-sum-subsets/discuss/180014/Backtracking-Thinking-Process

# BST - DFS

# b-tree, link

# important questions

https://aaronice.gitbook.io/lintcode/problem-solving-summary/

Leetcode 前 400 重点 250 题 题号 题目名称 讲解链接
1 Two Sum 视频讲解

3 Longest Substring Without Repeating Characters 视频讲解

4 Median of Two Sorted Arrays 视频讲解

5 Longest Palindromic Substring 视频讲解

7 Reverse Integer 视频讲解

8 String to Integer (atoi) 视频讲解

10 Regular Expression Matching 视频讲解

11 Container With Most Water 视频讲解

12 Integer to Roman 视频讲解

13 Roman to Integer 视频讲解

15 3Sum 视频讲解

17 Letter Combinations of a Phone Number 视频讲解

18 4Sum 视频讲解

20 Valid Parentheses 视频讲解

22 Generate Parentheses 视频讲解

23 Merge k Sorted Lists 视频讲解

26 Remove Duplicates from Sorted Array 视频讲解

27 Remove Element 视频讲解

28 Implement strStr() 视频讲解

29 Divide Two Integers 视频讲解

31 Next Permutation 视频讲解

32 Longest Valid Parentheses 视频讲解

33 Search in Rotated Sorted Array 视频讲解

34 Find First and Last Position of Element in Sorted Array 视频讲解

35 Search Insert Position 视频讲解

36 Valid Sudoku 视频讲解

37 Sudoku Solver 视频讲解

38 Count and Say 视频讲解

39 Combination Sum 视频讲解

40 Combination Sum II 视频讲解

41 First Missing Positive 视频讲解

42 Trapping Rain Water 视频讲解

43 Multiply Strings 视频讲解

44 Wildcard Matching 视频讲解

45 Jump Game II 视频讲解

46 Permutations 视频讲解

47 Permutations II 视频讲解

48 Rotate Image 视频讲解

49 Group Anagrams 视频讲解

50 Pow(x, n) 视频讲解

51 N-Queens 视频讲解

52 N-Queens II 视频讲解

53 Maximum Subarray 视频讲解

54 Spiral Matrix 视频讲解

55 Jump Game 视频讲解

56 Merge Intervals 视频讲解

57 Insert Interval 视频讲解

59 Spiral Matrix II 视频讲解

60 Permutation Sequence 视频讲解

62 Unique Paths 视频讲解

64 Minimum Path Sum 视频讲解

65 Valid Number 视频讲解

66 Plus One 视频讲解

67 Add Binary 视频讲解

68 Text Justification 视频讲解

69 Sqrt(x) 视频讲解

70 Climbing Stairs 视频讲解

71 Simplify Path 视频讲解

72 Edit Distance 视频讲解

74 Search a 2D Matrix 视频讲解

75 Sort Colors 视频讲解

76 Minimum Window Substring 视频讲解

77 Combinations 视频讲解

78 Subsets 视频讲解

79 Word Search 视频讲解

80 Remove Duplicates from Sorted Array II 视频讲解

81 Search in Rotated Sorted Array II 视频讲解

82 Remove Duplicates from Sorted List II 视频讲解

84 Largest Rectangle in Histogram 视频讲解

85 Maximal Rectangle 视频讲解

88 Merge Sorted Array 视频讲解

90 Subsets II 视频讲解

91 Decode Ways 视频讲解

96 Unique Binary Search Trees 视频讲解

98 Validate Binary Search Tree 视频讲解

101 Symmetric Tree 视频讲解

104 Maximum Depth of Binary Tree 视频讲解

108 Convert Sorted Array to Binary Search Tree 视频讲解

110 Balanced Binary Tree 视频讲解

111 Minimum Depth of Binary Tree 视频讲解

112 Path Sum 视频讲解

113 Path Sum II 视频讲解

115 Distinct Subsequences 视频讲解

116 Populating Next Right Pointers in Each Node 视频讲解

117 Populating Next Right Pointers in Each Node II 视频讲解

121 Best Time to Buy and Sell Stock 视频讲解

122 Best Time to Buy and Sell Stock II 视频讲解

123 Best Time to Buy and Sell Stock III 视频讲解

124 Binary Tree Maximum Path Sum 视频讲解

125 Valid Palindrome 视频讲解

126 Word Ladder II 视频讲解

127 Word Ladder 视频讲解

128 Longest Consecutive Sequence 视频讲解

130 Surrounded Regions 视频讲解

133 Clone Graph 视频讲解

134 Gas Station 视频讲解

138 Copy List with Random Pointer 视频讲解

139 Word Break 视频讲解

140 Word Break II 视频讲解

142 Linked List Cycle II 视频讲解

146 LRU Cache 视频讲解

149 Max Points on a Line 视频讲解

150 Evaluate Reverse Polish Notation 视频讲解

152 Maximum Product Subarray 视频讲解

153 Find Minimum in Rotated Sorted Array 视频讲解

154 Find Minimum in Rotated Sorted Array II 视频讲解

155 Min Stack 视频讲解

157 Read N Characters Given Read4 视频讲解

158 Read N Characters Given Read4 II - Call multiple times 视频讲解

161 One Edit Distance 视频讲解

162 Find Peak Element 视频讲解

163 Missing Ranges 视频讲解

168 Excel Sheet Column Title 视频讲解

171 Excel Sheet Column Number 视频讲解

173 Binary Search Tree Iterator 视频讲解

174 Dungeon Game 视频讲解

186 Reverse Words in a String II 视频讲解

188 Best Time to Buy and Sell Stock IV 视频讲解

189 Rotate Array 视频讲解

191 Number of 1 Bits 视频讲解

198 House Robber 视频讲解

200 Number of Islands 视频讲解

201 Bitwise AND of Numbers Range 视频讲解

202 Happy Number 视频讲解

204 Count Primes 视频讲解

205 Isomorphic Strings 视频讲解

207 Course Schedule 视频讲解

208 Implement Trie (Prefix Tree) 视频讲解

209 Minimum Size Subarray Sum 视频讲解

210 Course Schedule II 视频讲解

211 Add and Search Word - Data structure design 视频讲解

212 Word Search II 视频讲解

213 House Robber II 视频讲解

214 Shortest Palindrome 视频讲解

215 Kth Largest Element in an Array 视频讲解

216 Combination Sum III 视频讲解

217 Contains Duplicate 视频讲解

218 The Skyline Problem 视频讲解

219 Contains Duplicate II 视频讲解

220 Contains Duplicate III 视频讲解

221 Maximal Square 视频讲解

224 Basic Calculator 视频讲解

225 Implement Stack using Queues 视频讲解

226 Invert Binary Tree 视频讲解

227 Basic Calculator II 视频讲解

228 Summary Ranges 视频讲解

230 Kth Smallest Element in a BST 视频讲解

231 Power of Two 视频讲解

232 Implement Queue using Stacks 视频讲解

235 Lowest Common Ancestor of a Binary Search Tree 视频讲解

236 Lowest Common Ancestor of a Binary Tree 视频讲解

238 Product of Array Except Self 视频讲解

239 Sliding Window Maximum 视频讲解

240 Search a 2D Matrix II 视频讲解

241 Different Ways to Add Parentheses 视频讲解

242 Valid Anagram 视频讲解

244 Shortest Word Distance II 视频讲解

245 Shortest Word Distance III 视频讲解

249 Group Shifted Strings 视频讲解

251 Flatten 2D Vector 视频讲解

252 Meeting Rooms 视频讲解

253 Meeting Rooms II 视频讲解

254 Factor Combinations 视频讲解

256 Paint House 视频讲解

257 Binary Tree Paths 视频讲解

261 Graph Valid Tree 视频讲解

263 Ugly Number 视频讲解

264 Ugly Number II 视频讲解

265 Paint House II 视频讲解

268 Missing Number 视频讲解

269 Alien Dictionary 视频讲解

270 Closest Binary Search Tree Value 视频讲解

271 Encode and Decode Strings 视频讲解

273 Integer to English Words 视频讲解

274 H-Index 视频讲解

275 H-Index II 视频讲解

276 Paint Fence 视频讲解

277 Find the Celebrity 视频讲解

278 First Bad Version 视频讲解

279 Perfect Squares 视频讲解

280 Wiggle Sort 视频讲解

282 Expression Add Operators 视频讲解

283 Move Zeroes 视频讲解

284 Peeking Iterator 视频讲解

285 Inorder Successor in BST 视频讲解

286 Walls and Gates 视频讲解

287 Find the Duplicate Number 视频讲解

288 Unique Word Abbreviation 视频讲解

289 Game of Life 视频讲解

290 Word Pattern 视频讲解

291 Word Pattern II 视频讲解

293 Flip Game 视频讲解

294 Flip Game II 视频讲解

295 Find Median from Data Stream 视频讲解

296 Best Meeting Point 视频讲解

297 Serialize and Deserialize Binary Tree 视频讲解

298 Binary Tree Longest Consecutive Sequence 视频讲解

299 Bulls and Cows 视频讲解

300 Longest Increasing Subsequence 视频讲解

301 Remove Invalid Parentheses 视频讲解

302 Smallest Rectangle Enclosing Black Pixels 视频讲解

305 Number of Islands II 视频讲解

307 Range Sum Query - Mutable 视频讲解

308 Range Sum Query 2D - Mutable 视频讲解

309 Best Time to Buy and Sell Stock with Cooldown 视频讲解

311 Sparse Matrix Multiplication 视频讲解

312 Burst Balloons 视频讲解

314 Binary Tree Vertical Order Traversal 视频讲解

316 Remove Duplicate Letters 视频讲解

317 Shortest Distance from All Buildings 视频讲解

318 Maximum Product of Word Lengths 视频讲解

322 Coin Change 视频讲解

323 Number of Connected Components in an Undirected Graph 视频讲解

324 Wiggle Sort II 视频讲解

325 Maximum Size Subarray Sum Equals k 视频讲解

329 Longest Increasing Path in a Matrix 视频讲解

334 Increasing Triplet Subsequence 视频讲解

336 Palindrome Pairs 视频讲解

337 House Robber III 视频讲解

338 Counting Bits 视频讲解

339 Nested List Weight Sum 视频讲解

340 Longest Substring with At Most K Distinct Characters 视频讲解

341 Flatten Nested List Iterator 视频讲解

346 Moving Average from Data Stream 视频讲解

347 Top K Frequent Elements 视频讲解

348 Design Tic-Tac-Toe 视频讲解

350 Intersection of Two Arrays II 视频讲解

351 Android Unlock Patterns 视频讲解

352 Data Stream as Disjoint Intervals 视频讲解

353 Design Snake Game 视频讲解

354 Russian Doll Envelopes 视频讲解

355 Design Twitter 视频讲解

359 Logger Rate Limiter 视频讲解

361 Bomb Enemy 视频讲解

362 Design Hit Counter 视频讲解

364 Nested List Weight Sum II 视频讲解

367 Valid Perfect Square 视频讲解

374 Guess Number Higher or Lower 视频讲解

375 Guess Number Higher or Lower II 视频讲解

376 Wiggle Subsequence 视频讲解

377 Combination Sum IV 视频讲解

378 Kth Smallest Element in a Sorted Matrix 视频讲解

379 Design Phone Directory 视频讲解

380 Insert Delete GetRandom O(1) 视频讲解

381 Insert Delete GetRandom O(1) - Duplicates allowed 视频讲解

384 Shuffle an Array 视频讲解

385 Mini Parser 视频讲解

389 Find the Difference 视频讲解

394 Decode String 视频讲解

398 Random Pick Index

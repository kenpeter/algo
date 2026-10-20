window.SITE_DATA = {
  "generatedAt": "2026-10-20T12:03:26.198Z",
  "title": "Algorithm Quest",
  "subtitle": "Problem walkthroughs, test cases and five implementations each.",
  "groups": [
    {
      "id": "arrays-greedy",
      "name": "Arrays & Greedy",
      "description": "Linear scans, greedy repair, prefix sums and hashing on arrays.",
      "icon": "📁",
      "problemIds": [
        "village",
        "subarr_sum"
      ]
    },
    {
      "id": "dynamic-programming",
      "name": "Dynamic Programming",
      "description": "Interval DP, memoisation and shortest paths over state graphs.",
      "icon": "📁",
      "problemIds": [
        "refueling"
      ]
    }
  ],
  "problems": [
    {
      "id": "village",
      "groupId": "arrays-greedy",
      "title": "Village",
      "subtitle": "Minimum trees to make every neighbourhood sustainable",
      "difficulty": "Medium",
      "tags": [
        "Greedy",
        "Arrays",
        "Simulation"
      ],
      "signature": "solution(A)",
      "javaSignature": "class Solution { public int solution(int[] A); }",
      "statement": [
        "We are provided with a plan of an industrial village, represented by an array `A` consisting of `N` integers. The K-th value (for K within the range `0..N-1`) represents either:",
        "• a forest consisting of `A[K]` trees (if `A[K]` is positive); or",
        "• an industrial building (if `A[K]` is non-positive), producing `-A[K]` units of pollution.",
        "One tree is able to neutralize one unit of pollution. Our goal is to make every neighbourhood sustainable, i.e. for every field, the sum of its value and the values of its neighbouring fields (if they exist) is non-negative.",
        "For example, given `A = [1, -3, 2]`, there is one tree in field 0, an industrial building producing 3 units of pollution in field 1, and two trees in field 2. We can plant two trees in field 1, obtaining `[1, -1, 2]`; then every neighbourhood sum is non-negative.",
        "What is the minimum number of trees we have to plant in order to make every field’s neighbourhood sustainable?"
      ],
      "constraints": [
        "`N` is an integer within the range `[1..100,000]`.",
        "Each element of array `A` is an integer within the range `[-10,000..10,000]`."
      ],
      "examples": [
        {
          "name": "Example 1",
          "args": [
            [
              1,
              -3,
              2
            ]
          ],
          "expected": 2,
          "explanation": "Plant 2 trees in field 1: [1, -1, 2]. Neighbourhood sums: 1+(-1)=0, 1+(-1)+2=2, (-1)+2=1."
        },
        {
          "name": "Example 2",
          "args": [
            [
              -3,
              2,
              4,
              -5,
              3
            ]
          ],
          "expected": 3,
          "explanation": "Plant 1 tree in field 0 and 2 trees in field 4: [-2, 2, 4, -5, 5]. Every neighbourhood sum is at least 0."
        },
        {
          "name": "Example 3",
          "args": [
            [
              -2,
              1,
              -3,
              1
            ]
          ],
          "expected": 4,
          "explanation": "Plant 2 trees each in fields 1 and 2: [-2, 3, -1, 1]. Every neighbourhood sum is non-negative."
        }
      ],
      "tests": [
        {
          "name": "Single positive field",
          "args": [
            [
              5
            ]
          ],
          "expected": 0
        },
        {
          "name": "Single negative field",
          "args": [
            [
              -5
            ]
          ],
          "expected": 5
        },
        {
          "name": "Single zero field",
          "args": [
            [
              0
            ]
          ],
          "expected": 0
        },
        {
          "name": "All positive",
          "args": [
            [
              1,
              2,
              3,
              4,
              5
            ]
          ],
          "expected": 0
        },
        {
          "name": "All negative, length 3",
          "args": [
            [
              -1,
              -1,
              -1
            ]
          ],
          "expected": 3
        },
        {
          "name": "All negative, length 4",
          "args": [
            [
              -5,
              -5,
              -5,
              -5
            ]
          ],
          "expected": 20
        },
        {
          "name": "Negative pair",
          "args": [
            [
              -4,
              -4
            ]
          ],
          "expected": 8
        },
        {
          "name": "Empty array",
          "args": [
            []
          ],
          "expected": 0
        }
      ],
      "randomCheck": {
        "count": 400,
        "description": "Arrays of length 1..5 with values in [-2..2], compared against an exhaustive branch-and-bound search."
      },
      "solutions": [
        {
          "id": "01",
          "name": "Greedy left-to-right (array copy)",
          "complexity": "O(N) time, O(N) space",
          "code": "/**\n * Village — implementation 1\n * Greedy left-to-right on a copy of the input.\n *\n * When field i is unsustainable, the deficit is planted in i+1 (or i in the\n * last field). Fields left of i are already fixed, so only i and i+1 can still\n * change, and i+1 is at least as useful as i for the remaining constraints.\n *\n * Time O(N) | Space O(N)\n */\nfunction solution(A) {\n  const n = A.length;\n  if (n === 0) return 0;\n\n  const arr = A.slice();\n  let planted = 0;\n\n  for (let i = 0; i < n; i++) {\n    const left = i > 0 ? arr[i - 1] : 0;\n    const right = i + 1 < n ? arr[i + 1] : 0;\n    const sum = left + arr[i] + right;\n\n    if (sum < 0) {\n      const need = -sum;\n      if (i + 1 < n) arr[i + 1] += need;\n      else arr[i] += need;\n      planted += need;\n    }\n  }\n\n  return planted;\n}\n\nmodule.exports = solution;"
        },
        {
          "id": "02",
          "name": "Greedy left-to-right (rolling, O(1) extra space)",
          "complexity": "O(N) time, O(1) extra space",
          "code": "/**\n * Village — implementation 2\n * Greedy left-to-right with O(1) extra space (input is never mutated).\n *\n * Plantings are only ever added to field i+1, so at step i the only modified\n * values are i-1 (addPrev) and i (addCur). Everything else can be read from A.\n *\n * Time O(N) | Space O(1)\n */\nfunction solution(A) {\n  const n = A.length;\n  if (n === 0) return 0;\n\n  let addPrev = 0; // trees planted into i-1 by the previous step\n  let addCur = 0;  // trees planted into i by the previous step\n  let planted = 0;\n\n  for (let i = 0; i < n; i++) {\n    const left = i > 0 ? A[i - 1] + addPrev : 0;\n    const center = A[i] + addCur;\n    const right = i + 1 < n ? A[i + 1] : 0;\n    const sum = left + center + right;\n\n    let addNext = 0;\n    if (sum < 0) {\n      const need = -sum;\n      if (i + 1 < n) addNext = need;\n      else addCur += need; // last field: plant here\n      planted += need;\n    }\n\n    addPrev = addCur;\n    addCur = addNext;\n  }\n\n  return planted;\n}\n\nmodule.exports = solution;"
        },
        {
          "id": "03",
          "name": "Greedy right-to-left (array copy)",
          "complexity": "O(N) time, O(N) space",
          "code": "/**\n * Village — implementation 3\n * Greedy right-to-left (mirror image of implementation 1).\n *\n * When field i is unsustainable, plant the deficit in i-1 (or i in the first\n * field). By symmetry with the left-to-right greedy this is also optimal.\n *\n * Time O(N) | Space O(N)\n */\nfunction solution(A) {\n  const n = A.length;\n  if (n === 0) return 0;\n\n  const arr = A.slice();\n  let planted = 0;\n\n  for (let i = n - 1; i >= 0; i--) {\n    const left = i > 0 ? arr[i - 1] : 0;\n    const right = i + 1 < n ? arr[i + 1] : 0;\n    const sum = left + arr[i] + right;\n\n    if (sum < 0) {\n      const need = -sum;\n      if (i > 0) arr[i - 1] += need;\n      else arr[i] += need;\n      planted += need;\n    }\n  }\n\n  return planted;\n}\n\nmodule.exports = solution;"
        },
        {
          "id": "04",
          "name": "Branch-and-bound exact search (reference)",
          "complexity": "exponential time, O(N) space",
          "code": "/**\n * Village — implementation 4\n * Exact branch-and-bound search (reference implementation, small N only).\n *\n * Fills the planting vector left to right. As soon as x[i] is chosen,\n * neighbourhood i-1 is fully determined, so an infeasible branch is pruned\n * immediately. Planting more than a neighbourhood's deficit is allowed but\n * bounded, so the search remains exhaustive.\n *\n * Time exponential (O(L^N) worst case) | Space O(N)\n * L = 2 * max|A| + 2 is always a safe per-field upper bound for small inputs.\n */\nfunction solution(A) {\n  const n = A.length;\n  if (n === 0) return 0;\n\n  const limit = 2 * Math.max(...A.map(Math.abs)) + 2;\n  const x = new Array(n).fill(0);\n  let best = Infinity;\n\n  const satisfies = (i) => {\n    let sum = A[i] + x[i];\n    if (i > 0) sum += A[i - 1] + x[i - 1];\n    if (i + 1 < n) sum += A[i + 1] + x[i + 1];\n    return sum >= 0;\n  };\n\n  const search = (i, planted) => {\n    if (planted >= best) return; // branch and bound\n    if (i === n) {\n      if (satisfies(n - 1)) best = planted;\n      return;\n    }\n    for (let trees = 0; trees <= limit; trees++) {\n      x[i] = trees;\n      if (i > 0 && !satisfies(i - 1)) continue;\n      search(i + 1, planted + trees);\n    }\n    x[i] = 0;\n  };\n\n  search(0, 0);\n  return best;\n}\n\nmodule.exports = solution;"
        },
        {
          "id": "05",
          "name": "Exhaustive enumeration (reference)",
          "complexity": "O(L^N · N) time, O(N) space",
          "code": "/**\n * Village — implementation 5\n * Fully exhaustive enumeration (reference implementation, tiny N only).\n *\n * Tries every planting vector in [0, limit]^N, checks all neighbourhoods at\n * the end, and keeps the smallest total. No pruning other than the trivial\n * \"cheaper than the best so far\" cut, so it is deliberately slow.\n *\n * Time O(L^N * N) | Space O(N)\n */\nfunction solution(A) {\n  const n = A.length;\n  if (n === 0) return 0;\n\n  const limit = 2 * Math.max(...A.map(Math.abs)) + 2;\n  const x = new Array(n).fill(0);\n  let best = Infinity;\n\n  const feasible = () => {\n    for (let i = 0; i < n; i++) {\n      let sum = A[i] + x[i];\n      if (i > 0) sum += A[i - 1] + x[i - 1];\n      if (i + 1 < n) sum += A[i + 1] + x[i + 1];\n      if (sum < 0) return false;\n    }\n    return true;\n  };\n\n  const enumerate = (i, planted) => {\n    if (planted >= best) return;\n    if (i === n) {\n      if (feasible()) best = planted;\n      return;\n    }\n    for (let trees = 0; trees <= limit; trees++) {\n      x[i] = trees;\n      enumerate(i + 1, planted + trees);\n    }\n  };\n\n  enumerate(0, 0);\n  return best;\n}\n\nmodule.exports = solution;"
        }
      ],
      "file": "village"
    },
    {
      "id": "refueling",
      "groupId": "dynamic-programming",
      "title": "Refueling",
      "subtitle": "Maximum number of cities Tom can visit",
      "difficulty": "Hard",
      "tags": [
        "Dynamic Programming",
        "Intervals",
        "Two Pointers"
      ],
      "signature": "solution(A, X)",
      "javaSignature": "class Solution { public int solution(int[] A, int[] X); }",
      "statement": [
        "There are `N` cities arranged in a row (numbered from `0` to `N-1`). The K-th city is located at position `X[K]` and contains `A[K]` litres of fuel.",
        "Tom is planning a trip. He wants to visit as many cities as possible. Unfortunately, he is limited by the available fuel. To be precise, at the departure time Tom begins with an empty tank and immediately refuels his car at the starting city. The amount of fuel consumed when travelling from city `i` to city `j` is equal to `|X[i] - X[j]|` litres.",
        "Tom can arbitrarily choose the city from which to start his trip. He may drive in either direction.",
        "Write a function that, given two arrays `A` and `X` consisting of `N` integers each, returns the maximum number of different cities that Tom can visit."
      ],
      "constraints": [
        "`N` is an integer within the range `[1..700]`.",
        "Each element of array `A` is an integer within the range `[0..1,000,000]`.",
        "Each element of array `X` is an integer within the range `[1..1,000,000]`.",
        "`X[K] < X[K+1]` for each K within the range `[0..N-2]`."
      ],
      "examples": [
        {
          "name": "Example 1",
          "args": [
            [
              4,
              1,
              4,
              3,
              3
            ],
            [
              8,
              10,
              11,
              13,
              100
            ]
          ],
          "expected": 4,
          "explanation": "Start at city 1 (fuel 1), drive to city 2 (cost 1, refuel 4), then to city 0 (cost 3, refuel 4), then to city 3 (cost 3, refuel 3). Four different cities."
        },
        {
          "name": "Example 2",
          "args": [
            [
              0,
              10,
              0
            ],
            [
              1,
              2,
              3
            ]
          ],
          "expected": 3,
          "explanation": "Start at city 1 with 10 litres, visit city 0, then city 2. All three cities can be visited."
        },
        {
          "name": "Example 3",
          "args": [
            [
              0,
              1,
              0,
              1,
              1,
              1,
              0
            ],
            [
              1,
              2,
              3,
              4,
              5,
              6,
              7
            ]
          ],
          "expected": 4,
          "explanation": "Start at city 3 (or city 5) and collect fuel one city at a time; four cities is the maximum."
        }
      ],
      "tests": [
        {
          "name": "Single city",
          "args": [
            [
              7
            ],
            [
              3
            ]
          ],
          "expected": 1
        },
        {
          "name": "Single city with no fuel",
          "args": [
            [
              0
            ],
            [
              3
            ]
          ],
          "expected": 1
        },
        {
          "name": "Two cities, enough fuel",
          "args": [
            [
              1,
              0
            ],
            [
              0,
              1
            ]
          ],
          "expected": 2
        },
        {
          "name": "Two cities, not enough fuel",
          "args": [
            [
              1,
              0
            ],
            [
              0,
              5
            ]
          ],
          "expected": 1
        },
        {
          "name": "All other cities out of reach",
          "args": [
            [
              1,
              0,
              0
            ],
            [
              0,
              100,
              200
            ]
          ],
          "expected": 1
        },
        {
          "name": "Fuel chain across the row",
          "args": [
            [
              1,
              1,
              1,
              1
            ],
            [
              0,
              1,
              2,
              3
            ]
          ],
          "expected": 4
        },
        {
          "name": "Long gap cannot be crossed",
          "args": [
            [
              5,
              5,
              5
            ],
            [
              0,
              10,
              20
            ]
          ],
          "expected": 1
        },
        {
          "name": "Visit in both directions",
          "args": [
            [
              3,
              1,
              3
            ],
            [
              0,
              2,
              4
            ]
          ],
          "expected": 3
        },
        {
          "name": "Empty input",
          "args": [
            [],
            []
          ],
          "expected": 0
        }
      ],
      "randomCheck": {
        "count": 400,
        "description": "1..6 cities with strictly increasing positions and fuel 0..7, compared against a brute-force search over (visited set, city) states."
      },
      "solutions": [
        {
          "id": "01",
          "name": "Interval DP (2-D tables)",
          "complexity": "O(N^2) time, O(N^2) space",
          "code": "/**\n * Refueling — implementation 1\n * Interval DP with two 2-D tables.\n *\n * reachL[l][r] / reachR[l][r] = maximum fuel left after visiting exactly the\n * cities l..r and standing at l / r. Process intervals by increasing length.\n *\n * Time O(N^2) | Space O(N^2)\n */\nconst NEG = -Infinity;\n\nfunction solution(A, X) {\n  const n = A.length;\n  if (n === 0) return 0;\n\n  const reachL = Array.from({ length: n }, () => new Array(n).fill(NEG));\n  const reachR = Array.from({ length: n }, () => new Array(n).fill(NEG));\n\n  for (let i = 0; i < n; i++) {\n    reachL[i][i] = A[i];\n    reachR[i][i] = A[i];\n  }\n\n  let best = 1;\n\n  for (let len = 2; len <= n; len++) {\n    for (let l = 0; l + len - 1 < n; l++) {\n      const r = l + len - 1;\n\n      // Finish at l, coming from interval [l+1, r].\n      let atL = NEG;\n      const fromL1 = X[l + 1] - X[l];\n      if (reachL[l + 1][r] >= fromL1) atL = Math.max(atL, reachL[l + 1][r] - fromL1);\n      const fromR = X[r] - X[l];\n      if (reachR[l + 1][r] >= fromR) atL = Math.max(atL, reachR[l + 1][r] - fromR);\n      if (atL !== NEG) {\n        reachL[l][r] = atL + A[l];\n        best = len;\n      }\n\n      // Finish at r, coming from interval [l, r-1].\n      let atR = NEG;\n      const fromL = X[r] - X[l];\n      if (reachL[l][r - 1] >= fromL) atR = Math.max(atR, reachL[l][r - 1] - fromL);\n      const fromR1 = X[r] - X[r - 1];\n      if (reachR[l][r - 1] >= fromR1) atR = Math.max(atR, reachR[l][r - 1] - fromR1);\n      if (atR !== NEG) {\n        reachR[l][r] = atR + A[r];\n        best = len;\n      }\n    }\n  }\n\n  return best;\n}\n\nmodule.exports = solution;"
        },
        {
          "id": "02",
          "name": "Interval DP (rolling arrays)",
          "complexity": "O(N^2) time, O(N) space",
          "code": "/**\n * Refueling — implementation 2\n * Interval DP with rolling 1-D arrays (O(N) space).\n *\n * For the current interval length, only intervals of length-1 are needed:\n *   [l+1, r] starts at l+1  -> prevL[l+1], prevR[l+1]\n *   [l, r-1] starts at l    -> prevL[l],   prevR[l]\n * so the O(N^2) table can be collapsed to two arrays of size N.\n *\n * Time O(N^2) | Space O(N)\n */\nconst NEG = -Infinity;\n\nfunction solution(A, X) {\n  const n = A.length;\n  if (n === 0) return 0;\n\n  let prevL = A.slice();\n  let prevR = A.slice();\n  let best = 1;\n\n  for (let len = 2; len <= n; len++) {\n    const curL = new Array(n).fill(NEG);\n    const curR = new Array(n).fill(NEG);\n\n    for (let l = 0; l + len - 1 < n; l++) {\n      const r = l + len - 1;\n\n      // Finish at l using interval [l+1, r].\n      let atL = NEG;\n      const c1 = X[l + 1] - X[l];\n      if (prevL[l + 1] >= c1) atL = Math.max(atL, prevL[l + 1] - c1);\n      const c2 = X[r] - X[l];\n      if (prevR[l + 1] >= c2) atL = Math.max(atL, prevR[l + 1] - c2);\n      if (atL !== NEG) {\n        curL[l] = atL + A[l];\n        best = len;\n      }\n\n      // Finish at r using interval [l, r-1].\n      let atR = NEG;\n      const c3 = X[r] - X[l];\n      if (prevL[l] >= c3) atR = Math.max(atR, prevL[l] - c3);\n      const c4 = X[r] - X[r - 1];\n      if (prevR[l] >= c4) atR = Math.max(atR, prevR[l] - c4);\n      if (atR !== NEG) {\n        curR[l] = atR + A[r];\n        best = len;\n      }\n    }\n\n    prevL = curL;\n    prevR = curR;\n  }\n\n  return best;\n}\n\nmodule.exports = solution;"
        },
        {
          "id": "03",
          "name": "Memoised recursion (top-down DP)",
          "complexity": "O(N^2) time, O(N^2) space",
          "code": "/**\n * Refueling — implementation 3\n * Top-down memoised interval DP.\n *\n * Same recurrence as implementation 1, but computed lazily: solve(l, r)\n * returns [max fuel standing at l, max fuel standing at r] and caches results.\n * Unlike implementations 1 and 2 it only visits intervals that are reachable.\n *\n * Time O(N^2) | Space O(N^2) (memo table)\n */\nconst NEG = -Infinity;\n\nfunction solution(A, X) {\n  const n = A.length;\n  if (n === 0) return 0;\n\n  const memo = new Map();\n\n  const solve = (l, r) => {\n    if (l === r) return [A[l], A[l]];\n\n    const key = l * n + r;\n    const cached = memo.get(key);\n    if (cached !== undefined) return cached;\n\n    const [leftAtL, leftAtR] = solve(l + 1, r); // interval [l+1, r]\n    const [rightAtL, rightAtR] = solve(l, r - 1); // interval [l, r-1]\n\n    let atL = NEG;\n    const lFromL1 = X[l + 1] - X[l];\n    if (leftAtL >= lFromL1) atL = Math.max(atL, leftAtL - lFromL1);\n    const lFromR = X[r] - X[l];\n    if (leftAtR >= lFromR) atL = Math.max(atL, leftAtR - lFromR);\n\n    let atR = NEG;\n    const rFromL = X[r] - X[l];\n    if (rightAtL >= rFromL) atR = Math.max(atR, rightAtL - rFromL);\n    const rFromR1 = X[r] - X[r - 1];\n    if (rightAtR >= rFromR1) atR = Math.max(atR, rightAtR - rFromR1);\n\n    const result = [\n      atL === NEG ? NEG : atL + A[l],\n      atR === NEG ? NEG : atR + A[r],\n    ];\n    memo.set(key, result);\n    return result;\n  };\n\n  let best = 1;\n  for (let len = 2; len <= n; len++) {\n    for (let l = 0; l + len - 1 < n; l++) {\n      const [atL, atR] = solve(l, l + len - 1);\n      if (atL !== NEG || atR !== NEG) best = len;\n    }\n  }\n  return best;\n}\n\nmodule.exports = solution;"
        },
        {
          "id": "04",
          "name": "Dijkstra over interval states (minimum travel cost)",
          "complexity": "O(N^2 log N) time, O(N^2) space",
          "code": "/**\n * Refueling — implementation 4\n * Dijkstra over interval states, minimising total travel.\n *\n * State: (l, r, side) = cities l..r visited, standing at l (side 0) or r\n * (side 1). For a fixed state the fuel collected so far is fixed\n * (sum of A[l..r]), so remaining fuel = collected - travelCost. Maximising the\n * remaining fuel is therefore the same as minimising the travel cost, and a\n * state is usable exactly when\n *\n *     cost <= sum(A[l..r])\n *\n * We run Dijkstra on the (acyclic) interval graph, starting from every single\n * city with cost 0, and keep the largest interval that can be settled.\n *\n * Time O(N^2 log N) | Space O(N^2)\n */\nclass MinHeap {\n  constructor(capacity) {\n    this.costs = new Float64Array(capacity);\n    this.states = new Int32Array(capacity);\n    this.sides = new Int8Array(capacity);\n    this.size = 0;\n  }\n\n  push(cost, state, side) {\n    let i = this.size++;\n    this.costs[i] = cost;\n    this.states[i] = state;\n    this.sides[i] = side;\n\n    while (i > 0) {\n      const parent = (i - 1) >> 1;\n      if (this.costs[parent] <= this.costs[i]) break;\n      this.swap(parent, i);\n      i = parent;\n    }\n  }\n\n  pop() {\n    const top = { cost: this.costs[0], state: this.states[0], side: this.sides[0] };\n    this.size -= 1;\n    if (this.size > 0) {\n      this.costs[0] = this.costs[this.size];\n      this.states[0] = this.states[this.size];\n      this.sides[0] = this.sides[this.size];\n\n      let i = 0;\n      for (;;) {\n        const left = 2 * i + 1;\n        const right = 2 * i + 2;\n        let smallest = i;\n        if (left < this.size && this.costs[left] < this.costs[smallest]) smallest = left;\n        if (right < this.size && this.costs[right] < this.costs[smallest]) smallest = right;\n        if (smallest === i) break;\n        this.swap(smallest, i);\n        i = smallest;\n      }\n    }\n    return top;\n  }\n\n  swap(a, b) {\n    const cost = this.costs[a];\n    this.costs[a] = this.costs[b];\n    this.costs[b] = cost;\n\n    const state = this.states[a];\n    this.states[a] = this.states[b];\n    this.states[b] = state;\n\n    const side = this.sides[a];\n    this.sides[a] = this.sides[b];\n    this.sides[b] = side;\n  }\n}\n\nfunction solution(A, X) {\n  const n = A.length;\n  if (n === 0) return 0;\n\n  const fuelPrefix = new Float64Array(n + 1);\n  for (let i = 0; i < n; i++) fuelPrefix[i + 1] = fuelPrefix[i] + A[i];\n\n  const stateCount = n * n;\n  const distL = new Float64Array(stateCount).fill(Infinity);\n  const distR = new Float64Array(stateCount).fill(Infinity);\n  const heap = new MinHeap(4 * stateCount + 2 * n + 16);\n\n  let best = 1;\n  for (let i = 0; i < n; i++) {\n    distL[i * n + i] = 0;\n    distR[i * n + i] = 0;\n    heap.push(0, i * n + i, 0);\n    heap.push(0, i * n + i, 1);\n  }\n\n  while (heap.size > 0) {\n    const { cost, state, side } = heap.pop();\n    const dist = side === 0 ? distL : distR;\n    if (dist[state] !== cost) continue; // stale heap entry\n\n    const r = state % n;\n    const l = (state - r) / n;\n    if (r - l + 1 > best) best = r - l + 1;\n\n    const position = side === 0 ? l : r;\n    // Fuel collected so far is fixed for the interval; subtract the travel cost.\n    const fuelNow = fuelPrefix[r + 1] - fuelPrefix[l] - cost;\n\n    if (l > 0) {\n      const step = X[position] - X[l - 1];\n      const nextCost = cost + step;\n      const nextState = (l - 1) * n + r;\n      if (step <= fuelNow && nextCost < distL[nextState]) {\n        distL[nextState] = nextCost;\n        heap.push(nextCost, nextState, 0);\n      }\n    }\n\n    if (r + 1 < n) {\n      const step = X[r + 1] - X[position];\n      const nextCost = cost + step;\n      const nextState = l * n + (r + 1);\n      if (step <= fuelNow && nextCost < distR[nextState]) {\n        distR[nextState] = nextCost;\n        heap.push(nextCost, nextState, 1);\n      }\n    }\n  }\n\n  return best;\n}\n\nmodule.exports = solution;"
        },
        {
          "id": "05",
          "name": "Brute force over (bitmask, city) states (reference)",
          "complexity": "O(2^N · N^2) time, exponential space",
          "code": "/**\n * Refueling — implementation 5\n * Brute-force search over (visited set, current city) states.\n *\n * Keeps the maximum fuel reachable for every (city, bitmask) pair and expands\n * to any unvisited city that is within reach. Exact, but exponential.\n *\n * Time O(2^N · N^2) | Space O(2^N · N)  (reference implementation)\n */\nfunction solution(A, X) {\n  const n = A.length;\n  if (n === 0) return 0;\n\n  const size = 1 << n;\n  const fuel = new Array(size * n).fill(-Infinity);\n  const queue = [];\n  let best = 1;\n\n  for (let s = 0; s < n; s++) {\n    const index = s * size + (1 << s);\n    fuel[index] = A[s];\n    queue.push([index, 1 << s, s]);\n  }\n\n  for (let head = 0; head < queue.length; head++) {\n    const [index, mask, current] = queue[head];\n    const available = fuel[index];\n\n    for (let next = 0; next < n; next++) {\n      if (mask & (1 << next)) continue;\n      const cost = Math.abs(X[current] - X[next]);\n      if (cost > available) continue;\n\n      const nextMask = mask | (1 << next);\n      const nextIndex = next * size + nextMask;\n      const nextFuel = available - cost + A[next];\n      if (nextFuel <= fuel[nextIndex]) continue;\n      fuel[nextIndex] = nextFuel;\n      queue.push([nextIndex, nextMask, next]);\n\n      let count = 0;\n      for (let m = nextMask; m; m &= m - 1) count += 1;\n      if (count > best) best = count;\n    }\n  }\n\n  return best;\n}\n\nmodule.exports = solution;"
        }
      ],
      "file": "refueling"
    },
    {
      "id": "subarr_sum",
      "groupId": "arrays-greedy",
      "title": "Subarray sum",
      "subtitle": "Largest sum with equal first and last elements",
      "difficulty": "Easy",
      "tags": [
        "Prefix Sums",
        "Hash Map",
        "Arrays"
      ],
      "signature": "solution(A)",
      "javaSignature": "function solution(A);",
      "statement": [
        "You are given an array `A` consisting of `N` positive integers. Consider subarrays of `A`, with at least two elements, whose first and last elements have the same value.",
        "For example, for array `A = [1, 3, 6, 1, 6, 6, 9, 9]`, the following subarrays meet the requirements:",
        "• `[1, 3, 6, 1]`: first and last elements are equal to 1; the sum of the subarray is 11.",
        "• `[6, 1, 6]`: first and last elements are equal to 6; the sum of the subarray is 13.",
        "• `[6, 1, 6, 6]`: first and last elements are equal to 6; the sum of the subarray is 19.",
        "• `[6, 6]`: first and last elements are equal to 6; the sum of the subarray is 12.",
        "• `[9, 9]`: first and last elements are equal to 9; the sum of the subarray is 18.",
        "The subarray with the largest sum is `[6, 1, 6, 6]` and its sum is 19.",
        "Write a function that, given an array `A` of `N` positive integers, returns the largest sum of a subarray whose first and last elements have the same value.",
        "If there is no such subarray, return `-1`."
      ],
      "constraints": [
        "`N` is an integer within the range `[2..100,000]`.",
        "Each element of array `A` is an integer within the range `[1..10,000]`."
      ],
      "examples": [
        {
          "name": "Example 1",
          "args": [
            [
              1,
              3,
              6,
              1,
              6,
              6,
              9,
              9
            ]
          ],
          "expected": 19,
          "explanation": "The best subarray is [6, 1, 6, 6], with sum 19."
        },
        {
          "name": "Example 2",
          "args": [
            [
              5,
              1,
              4,
              3
            ]
          ],
          "expected": -1,
          "explanation": "All values are distinct, so no valid subarray exists."
        },
        {
          "name": "Example 3",
          "args": [
            [
              2,
              2,
              2,
              3,
              2,
              3
            ]
          ],
          "expected": 11,
          "explanation": "The best subarray is [2, 2, 2, 3, 2], with sum 11."
        }
      ],
      "tests": [
        {
          "name": "Minimum size, equal pair",
          "args": [
            [
              1,
              1
            ]
          ],
          "expected": 2
        },
        {
          "name": "Minimum size, different pair",
          "args": [
            [
              1,
              2
            ]
          ],
          "expected": -1
        },
        {
          "name": "Single element",
          "args": [
            [
              7
            ]
          ],
          "expected": -1
        },
        {
          "name": "Empty array",
          "args": [
            []
          ],
          "expected": -1
        },
        {
          "name": "All distinct",
          "args": [
            [
              1,
              2,
              3,
              4,
              5
            ]
          ],
          "expected": -1
        },
        {
          "name": "All equal",
          "args": [
            [
              3,
              3,
              3,
              3
            ]
          ],
          "expected": 12
        },
        {
          "name": "Wide span beats a close pair",
          "args": [
            [
              1,
              100,
              100,
              1
            ]
          ],
          "expected": 202
        },
        {
          "name": "Inner pair is larger",
          "args": [
            [
              9,
              1,
              9,
              2
            ]
          ],
          "expected": 19
        },
        {
          "name": "Maximum element values",
          "args": [
            [
              10000,
              10000
            ]
          ],
          "expected": 20000
        },
        {
          "name": "Positive values only",
          "args": [
            [
              2,
              1,
              1,
              2
            ]
          ],
          "expected": 6
        }
      ],
      "randomCheck": {
        "count": 500,
        "description": "Arrays of length 1..9 with values in [1..5], compared against an O(N^2) brute force over all subarrays."
      },
      "solutions": [
        {
          "id": "01",
          "name": "Prefix sums + first/last occurrence maps",
          "complexity": "O(N) time, O(N) space",
          "code": "/**\n * Subarray sum — implementation 1\n * Prefix sums + first/last occurrence maps.\n *\n * All values are positive, so for each value the widest span (first -> last\n * occurrence) yields the largest sum for that value.\n *\n * Time O(N) | Space O(N)\n */\nfunction solution(A) {\n  const n = A.length;\n  if (n < 2) return -1;\n\n  const first = new Map();\n  const last = new Map();\n  const prefix = new Array(n + 1).fill(0);\n\n  for (let i = 0; i < n; i++) {\n    prefix[i + 1] = prefix[i] + A[i];\n    if (!first.has(A[i])) first.set(A[i], i);\n    last.set(A[i], i);\n  }\n\n  let best = -1;\n  for (const [value, start] of first) {\n    const end = last.get(value);\n    if (end === start) continue;\n    const sum = prefix[end + 1] - prefix[start];\n    if (sum > best) best = sum;\n  }\n  return best;\n}\n\nmodule.exports = solution;"
        },
        {
          "id": "02",
          "name": "Single left-to-right pass (earliest prefix map)",
          "complexity": "O(N) time, O(N) space",
          "code": "/**\n * Subarray sum — implementation 2\n * Single left-to-right pass.\n *\n * For each value store the running prefix sum *before* its first occurrence.\n * When the value appears again at i, the best subarray ending at i is\n * A[start..i] = (prefix before i) + A[i] - (prefix before start).\n *\n * Time O(N) | Space O(N) (one map, no prefix array)\n */\nfunction solution(A) {\n  const n = A.length;\n  if (n < 2) return -1;\n\n  const prefixBeforeFirst = new Map();\n  let prefix = 0; // sum of A[0..i-1]\n  let best = -1;\n\n  for (let i = 0; i < n; i++) {\n    if (prefixBeforeFirst.has(A[i])) {\n      const start = prefixBeforeFirst.get(A[i]);\n      const sum = prefix + A[i] - start;\n      if (sum > best) best = sum;\n    } else {\n      prefixBeforeFirst.set(A[i], prefix);\n    }\n    prefix += A[i];\n  }\n\n  return best;\n}\n\nmodule.exports = solution;"
        },
        {
          "id": "03",
          "name": "Single right-to-left pass (latest suffix map)",
          "complexity": "O(N) time, O(N) space",
          "code": "/**\n * Subarray sum — implementation 3\n * Single right-to-left pass.\n *\n * Mirror of implementation 2: for each value remember the suffix sum *after*\n * its last (rightmost) occurrence. Seeing the value again at i closes the best\n * subarray starting at i: A[i] + (suffix after i) - (suffix after its last\n * occurrence).\n *\n * Time O(N) | Space O(N)\n */\nfunction solution(A) {\n  const n = A.length;\n  if (n < 2) return -1;\n\n  const suffixAfterLast = new Map();\n  let suffix = 0; // sum of A[i+1..n-1]\n  let best = -1;\n\n  for (let i = n - 1; i >= 0; i--) {\n    if (suffixAfterLast.has(A[i])) {\n      const lastEnd = suffixAfterLast.get(A[i]);\n      const sum = A[i] + suffix - lastEnd;\n      if (sum > best) best = sum;\n    } else {\n      suffixAfterLast.set(A[i], suffix);\n    }\n    suffix += A[i];\n  }\n\n  return best;\n}\n\nmodule.exports = solution;"
        },
        {
          "id": "04",
          "name": "Coordinate compression + typed arrays",
          "complexity": "O(N log N) time, O(N) space",
          "code": "/**\n * Subarray sum — implementation 4\n * Coordinate compression + typed arrays.\n *\n * Values are compressed to dense ids, so no hash map is needed for the scan.\n * Sorting dominates: O(N log N).\n *\n * Time O(N log N) | Space O(N)\n */\nfunction solution(A) {\n  const n = A.length;\n  if (n < 2) return -1;\n\n  const ids = Array.from(new Set(A)).sort((a, b) => a - b);\n  const idOf = new Map();\n  for (let k = 0; k < ids.length; k++) idOf.set(ids[k], k);\n\n  const m = ids.length;\n  const first = new Int32Array(m).fill(-1);\n  const last = new Int32Array(m).fill(-1);\n  const prefix = new Float64Array(n + 1);\n\n  for (let i = 0; i < n; i++) {\n    prefix[i + 1] = prefix[i] + A[i];\n    const k = idOf.get(A[i]);\n    if (first[k] === -1) first[k] = i;\n    last[k] = i;\n  }\n\n  let best = -1;\n  for (let k = 0; k < m; k++) {\n    if (first[k] === last[k]) continue;\n    const sum = prefix[last[k] + 1] - prefix[first[k]];\n    if (sum > best) best = sum;\n  }\n\n  return best;\n}\n\nmodule.exports = solution;"
        },
        {
          "id": "05",
          "name": "Brute force over all subarrays (reference)",
          "complexity": "O(N^2) time, O(1) space",
          "code": "/**\n * Subarray sum — implementation 5\n * Brute force over all subarrays (reference implementation).\n *\n * Time O(N^2) | Space O(1)\n */\nfunction solution(A) {\n  const n = A.length;\n  if (n < 2) return -1;\n\n  let best = -1;\n  for (let i = 0; i < n; i++) {\n    let sum = A[i];\n    for (let j = i + 1; j < n; j++) {\n      sum += A[j];\n      if (A[j] === A[i] && sum > best) best = sum;\n    }\n  }\n  return best;\n}\n\nmodule.exports = solution;"
        }
      ],
      "file": "subarr_sum"
    }
  ],
  "stats": {
    "problems": 3,
    "solutions": 15,
    "writtenTests": 36,
    "randomTests": 1300
  }
};

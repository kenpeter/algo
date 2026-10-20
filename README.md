# Algorithm Quest

Solutions, tests and walkthroughs for three Codility-style problems, published
as a phone-friendly static site.

**Live site:** https://kenpeter.github.io/algorithm-quest/

The site is organised as **folders → problems → problem page**:

1. Home lists the topic folders.
2. A folder lists every problem in that topic.
3. A problem page shows the full statement, all test cases, and all five
   solutions.

## Problems

| Repo folder | Site folder | Problem | Function | Five solutions |
| --- | --- | --- | --- | --- |
| [`village/`](village) | Arrays & Greedy | Village | `solution(A)` | greedy (copy), greedy (O(1) space), greedy mirrored, branch & bound, exhaustive |
| [`refueling/`](refueling) | Dynamic Programming | Refueling | `solution(A, X)` | interval DP, rolling DP, memoised recursion, Dijkstra over intervals, brute force |
| [`subarr_sum/`](subarr_sum) | Arrays & Greedy | Subarray sum | `solution(A)` | prefix + first/last, one pass left, one pass right, compression, brute force |

Each problem folder contains:

- `problem.js` — statement, constraints, examples and edge cases (the single
  source of truth used by both the tests and the website).
- `solutions/` — five independent implementations plus `index.js` metadata.
- `solutions/index.js` — names, complexities and benchmark sizes.
- `solution.test.js` — runs every implementation against every case.
- `README.md` — short write-up of the problem and the approaches.

## Run the tests

```bash
npm test                    # all three problems
node village/solution.test.js
node refueling/solution.test.js
node subarr_sum/solution.test.js
```

Each suite runs the statement examples, the edge cases, and 400–500 randomised
cases against an independent brute-force oracle. All five implementations must
match every expected value.

## Build the website

The site is plain HTML/CSS/JS in `docs/` (no dependencies, no build step at
runtime). `docs/data.js` is generated from the problem and solution sources so
the site can never drift from the code:

```bash
npm run build:site          # node site/build.js
```

Then open `docs/index.html`, or serve it locally:

```bash
python3 -m http.server 8000 --directory docs
```

## GitHub Pages

Pages is configured to serve the `docs/` folder from the `main` branch, so
every push that regenerates `docs/data.js` updates the site automatically.

## Layout

```
.
├── docs/                 # GitHub Pages site (index.html, app.js, style.css, data.js)
├── shared/test-suite.js  # shared assertions + seeded PRNG harness
├── site/build.js         # generates docs/data.js
├── village/
├── refueling/
└── subarr_sum/
```

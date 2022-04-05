// https://cheonhyangzhang.gitbooks.io/leetcode-solutions/content/254-factor-combinations---medium.html

/*

public class Solution {
  private List<List<Integer>> result;
  public List<List<Integer>> getFactors(int n) {
    result = new ArrayList<>();
    if (n <= 1) {
      return result;
    }
    dfs(new ArrayList<>(), n, 2);
    return result;
  }

  private void dfs(List<Integer> path, int n, int start) {
    if (n == 1) {
      if (path.size() > 1) {
        result.add(new ArrayList<>(path));
      }
      return;
    }
    int maxFactor = Math.max(2, (int)Math.sqrt(n));
    for (int factor = start; factor <= maxFactor; factor++) {
      if (n % factor == 0) {
        path.add(factor);
        dfs(path, n / factor, factor);
        path.remove(path.size() - 1);
      }
    }
  }
}

*/

const recur = (res, tmp, n, ind) => {
  if (n === 1) {
    if (tmp.length > 1) {
      res.push(tmp);
    }
    return;
  }

  for (let factor = ind; factor <= n; factor++) {
    if (n % factor == 0) {
      const tmp1 = tmp.slice(0);
      tmp1.push(factor);
      recur(res, tmp1, n / factor, factor);
    }
  }
};

const factorCombo = (n) => {
  const res = [];
  const tmp = [];
  if (n <= 1) {
    return res;
  }

  recur(res, tmp, n, 2);
  return res;
};

const ns = 12;
const out = factorCombo(ns);
console.log(out);

var dfs = function (visited, arr, ind) {
  if (ind < 0 || ind >= arr.length) return false;
  if (arr[ind] === 0) return true;
  if (visited[ind] !== undefined) return false; // repeated, but fail case

  // for graph, visited or not; dp is cache
  visited[ind] = true;

  const condi1 = dfs(visited, arr, ind - arr[ind]);
  const condi2 = dfs(visited, arr, ind + arr[ind]);
  const condi = condi1 || condi2;

  return condi;
};

var canReach = function (arr, ind) {
  const visited = Array(arr.length).fill(undefined);
  return dfs(visited, arr, ind);
};

const arr = [4, 4, 1, 3, 0, 3];
const ind = 2;
const out = canReach(arr, ind);
console.log(out);

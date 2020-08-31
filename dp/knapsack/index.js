/*
// list of value
// list of weight
// n is the last index of val[], wt[], e.g. 4 items
// W is the weight. e.g. 5p
int knapsack(int val[], int wt[], int n, int W)
{
  // * n, row, 4+1 = 5
  // * w, col, 5+1 
  int dp[n+1][W+1];

  // mem set
  memset(dp, 0, sizeof dp);

  // loop 4 items
  // i is dp index
  for (int i = 1; i <= n; i++)
  {
    // loop 5 weight
    for (w = 1; w <= W; w++)
    {
      // * i is the current item in dp
      // * i-1 is prev in dp
      dp[i][w] = dp[i-1][w]; 

      // wt[i-1], still have weight
      if (wt[i-1] <= w)
        // try to update it
        // val[i-1] is real current index
        // wt[i-1] is real current index
        // dp[i-1] -- prev
        dp[i][w] = max(dp[i][w], val[i-1] + dp[i-1][w-wt[i-1]]);  
    }
  }
  return dp[n][W];
}
*/

/*
const ks = (valArr, wtArr, len, lastWeight) => {
  const dp = [];
  const n = len;
  const m = lastWeight;
  for (let i = 0; i <= n; i++) {
    dp[i] = Array(m + 1).fill(0);
  }

  // weight is adding up

  // loop item
  for (let i = 1; i <= n; i++) {
    // loop weight
    for (let j = 1; j <= m; j++) {
      // * wtArr[i-1], curr weight in the loop
      // * valArr[i-1], curr val in the loop
      // * dp[i-1], prev dp value
      // * lastWeight - wtArr[i-1] (curr), "what is the weight left"

      if (j - wtArr[i - 1] >= 0) {
        // inc
        dp[i][j] = Math.max(
          dp[i - 1][j],
          valArr[i - 1] + dp[i - 1][j - wtArr[i - 1]]
        );
      } else {
        // exc
        dp[i][j] = dp[i - 1][j];
      }
    }
  }

  //test
  console.log("+++++ dp", dp);

  return dp[n][m];
};

const valArr = [60, 50, 70, 30];
const wtArr = [5, 3, 4, 2];
const len = 4; // 4 items to pick from
const lastWeight = 5;
const out = ks(valArr, wtArr, len, lastWeight);
console.log("++++ out", out);
*/

/*
int findMaxForm(vector<string>& strs, int m, int n) {
  // how many items in strs
  int len = strs.size();
  // 3d array
  int dp[len+1][m+1][n+1];
  memset(dp, 0, sizeof dp);
  
  // * 0 -> len
  // * looping items
  for (int i=1;i<=len;i++){
      // * left -> right
      // * e.g. ks, items
      for (int j=0;j<=m;j++){
          // * left -> right
          // * e.g. ks, weight
          for (int k=0;k<=n;k++){
              // get 1s
              int ones = count(strs[i-1].begin(), strs[i-1].end(), '1');
              // get 0s
              int zeros = strs[i-1].size()-ones;
              // no take
              int res = dp[i-1][j][k];
              // * j small -> zeros -> n
              // * k small -> ones -> m
              if (zeros<=j && ones<=k) 
                 res = max(res, dp[i-1][j-zeros][k-ones]+1); // take
              dp[i][j][k] = res;
          }
      }
  }
  
  return dp[len][m][n];
}
*/

const ks = (arr, lastWeight) => {
  const dp = [];
  for (let i = 0; i <= arr.length; i++) {
    dp[i] = Array(lastWeight + 1).fill(0);
  }

  for (let i = 1; i <= arr.length; i++) {
    for (let j = 0; j <= lastWeight; j++) {
      const val = arr[i - 1][0];
      const weight = arr[i - 1][1];

      // * not pick vs pick
      // * up and left
      if (j - weight >= 0)
        dp[i][j] = Math.max(dp[i - 1][j], val + dp[i - 1][j - weight]);
      // not pick, up, flow down
      else dp[i][j] = dp[i - 1][j];
    }
  }

  //test
  console.log("@@@@ dp", dp);

  return dp[arr.length][lastWeight];
};

const arr = [
  [60, 5],
  [50, 3],
  [70, 4],
  [30, 2],
];
const lastWeight = 5;
const out = ks(arr, lastWeight);
console.log("+++++ out", out);

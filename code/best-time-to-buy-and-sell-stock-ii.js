let maxProfit = (A, profit = 0) => {
  let N = A.length;
  for (let i = 0, j = 0; i < N; i = j) {
    //test
    console.log("1st loop: ", "i", i, "j", j);

    while (i < N - 1 && A[i] > A[i + 1]) {
      ++i;
      //test
      console.log("valley loop: ", "i", i, "j", j);
    }

    // if last ele
    j = i;

    // * if last ele, this loop no run
    // * back_to_top, infinite_loop
    while (j < N - 1 && A[j] < A[j + 1]) {
      ++j;
      //test
      console.log("peak loop: ", "i", i, "j", j);
    }

    profit += Math.max(0, A[j] - A[i]);
  }
  return profit;
};

const input = [7, 1, 5, 3, 6, 4];
const out = maxProfit(input);

var canJump = function (ns) {
  const dp = Array(ns.length).fill(false);
  dp[0] = true;

  for (let i = 1; i < ns.length; ++i) {
    if (dp[i] === true) {
      continue;
    }

    // able to reach prev step
    if (dp[i - 1]) {
      const steps = ns[i - 1];
      for (let j = 0; j <= steps; ++j) {
        const k = i - 1 + j;
        // able to reach curr
        if (k === i) {
          dp[i] = true;
          continue;
        }

        // beyond
        if (k > i) {
          dp[k] = true;
        }
      } // el
    } else {
      // we cannot reach here
      dp[i] = false;
      break;
    }
  } // el

  return dp[dp.length - 1];
};

// const ns = [0];
// const out = canJump(ns);
// console.log(out);

// const ns = [2, 0];
// const out = canJump(ns);
// console.log(out);

const ns = [2, 0, 0];
const out = canJump(ns);
console.log(out);

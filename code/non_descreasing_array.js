const check = (ns) => {
  if (ns == null || ns.length <= 1) return true;

  // the count of continuous non-decreasing sub-array
  let c = 1; // one here, because no go to the loop, count 1
  let index = 0;

  const n = ns.length;
  for (let i = 1; i < n; i++) {
    // * i is the drop
    // * i-1 still inc
    if (ns[i] < ns[i - 1]) {
      //test
      console.log("=== i", i);
      index = i;
      c++;
    }
  }

  if (c == 1) return true;
  if (c == 2) {
    // if the discord happens at start or end position, we can modify
    // it to match the condition
    if (index == 1 || index == n - 1) return true;

    // if in the middle, we modify nums[index - 2]
    // index - 2, (index - 1, index) , index + 1
    if (nums[index + 1] >= nums[index - 1] || nums[index] >= nums[index - 2]) {
      return true;
    }
    return false;
  }

  return false;
};

// const input = [1, 2, 1, 2, 1, 2, 1];
input = [3, 5, 19, 7, 23];
const out = check(input);

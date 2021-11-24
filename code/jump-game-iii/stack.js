const canReach = (arr, ind) => {
  const stack = [];
  // stack 1st
  stack.push(ind);
  const set = new Set();

  // seen 1st
  set.add(ind);

  // has item
  while (stack.length > 0) {
    const initPos = stack.pop();

    if (arr[initPos] === 0) {
      return true;
    }

    const left = initPos - arr[initPos];
    const right = initPos + arr[initPos];

    // Check if left is valid and not in our hashet to avoid cycles
    if (left >= 0 && left < arr.length && !set.has(left)) {
      set.add(left);
      stack.push(left);
    }

    // Check if right is valid and not in our hashet to avoid cycles
    if (right >= 0 && right < arr.length && !set.has(right)) {
      set.add(right);
      stack.push(right);
    }
  } // el

  return false;
};

const arr = [4, 4, 1, 3, 0, 3];
const ind = 2;
const out = canReach(arr, ind);
console.log(out);

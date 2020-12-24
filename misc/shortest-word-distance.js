const shortestDistance = (arr, w0, w1) => {
  // 2_tracking_var
  let w0_ind = -1;
  let w1_ind = -1;
  let minD = arr.length;
  for (let i = 0; i < arr.length; ++i) {
    const w = arr[i];
    if (w === w0) {
      w0_ind = i;
    }

    if (w === w1) {
      w1_ind = i;
    }

    if (w0_ind >= 0 && w1_ind >= 0) {
      minD = Math.min(minD, Math.abs(w1_ind - w0_ind));
    }
  }

  return minD;
};

let arr, out, w0, w1;

// w0 = "b";
// w1 = "d";
// arr = ["a", "b", "c", "d", "b"];
// out = shortestDistance(arr, w0, w1);
// console.log("+++ out", out);

w0 = "d";
w1 = "a";
arr = ["a", "b", "c", "d", "b"];
out = shortestDistance(arr, w0, w1);
console.log("+++ out", out);

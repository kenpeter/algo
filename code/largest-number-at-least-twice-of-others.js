var dominantIndex = function (ns) {
  const k = 2;
  const q = Array(k).fill(false);

  let i, j, z;
  for (i = 0; i < ns.length; ++i) {
    // normal
    for (j = q.length - 1; j >= 0; --j) {
      // queue
      if (q[j] === false || ns[i] > q[j][0]) {
        // find
        for (z = 1; z <= j; ++z) {
          q[z - 1] = q[z]; // shift
        }
        q[j] = [ns[i], i];
        break;
      }
    }
  }

  if (q[0] === false) {
    return q[1][1];
  } else {
    if (q[1][0] >= 2 * q[0][0]) {
      return q[1][1];
    } else {
      return -1;
    }
  }
};

// const input = [3, 6, 1, 0];
const input = [1];
const out = dominantIndex(input);
console.log(out);

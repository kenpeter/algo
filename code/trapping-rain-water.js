function trap(h) {
  // * no height
  // * h arr empty
  // * no water
  if (h == null || h.length === 0) return 0;

  // * res empty
  let res = 0;
  // * loop each h element
  // * at i, look left, look right
  for (let i = 0; i < h.length; i++) {
    // left max
    let lMax = 0;
    // right max
    let rMax = 0;

    // at i, look left
    for (let j = 0; j < i; j++) {
      lMax = Math.max(lMax, h[j]);
    }

    // at i, look right
    for (let j = i + 1; j < h.length; j++) {
      rMax = Math.max(rMax, h[j]);
    }

    // for each vertical
    const water = Math.min(lMax, rMax) - h[i];

    // <0, no need
    if (water > 0) res += water;
  }

  return res;
}

const input = [4, 2, 0, 3, 2, 5];
const out = trap(input);
console.log("++", out);

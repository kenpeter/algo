var checkSubarraySum = function (ns, tar) {
  const m = new Map();
  let s = 0;

  // e.g.
  // * tar = 7; [7], 0_ind - (-1) = 1_bad (single num)
  // * tar = 7; [0, 7], 1_ind - (-1) = 2_good (all the way)
  m.set(0, -1);

  for (let i = 0; i < ns.length; ++i) {
    const n = ns[i];
    s = s + n;

    // mod control ind
    let ind = s % tar;

    // hit once (meet again)
    if (m.get(ind) !== undefined) {
      // e.g.
      // * posi: ind_1 - ind_0 = 1_bad;
      // * posi: ind_2 - ind_0 = 1_good
      if (i - m.get(ind) > 1) return true;
    } else {
      m.set(ind, i);
    }
  }

  return false;
};

// const ns = [2, 4, 3];
// const tar = 6;
// const out = checkSubarraySum(ns, tar);
// console.log(out);

// const ns = [0];
// const tar = 1;
// const out = checkSubarraySum(ns, tar);
// console.log(out);

// // 0(0) be checked, no use; 0(0) push posi, 4(1) push posi, 3(2) as 7 enough len
// const ns = [0, 4, 3];
// const tar = 7;
// const out = checkSubarraySum(ns, tar);
// console.log(out);

// // 0(0) be checked, no use; 0(0) push posi, 7(1) enough len
// const ns = [0, 7];
// const tar = 7;
// const out = checkSubarraySum(ns, tar);
// console.log(out);

// // compare with 0 ind, too short
// const ns = [7];
// const tar = 7;
// const out = checkSubarraySum(ns, tar);
// console.log(out);

// // met again 4, 7; too short
// const ns = [4, 7];
// const tar = 7;
// const out = checkSubarraySum(ns, tar);
// console.log(out);

// // met again 4(1), 7(2); too short
// const ns = [4, 4, 7];
// const tar = 7;
// const out = checkSubarraySum(ns, tar);
// console.log(out);

// // met again 4(1), 7(2); too short
// const ns = [4, 4, 7];
// const tar = 7;
// const out = checkSubarraySum(ns, tar);
// console.log(out);

// //
// const ns = [23, 2, 4, 6, 7];
// const tar = 6;
// const out = checkSubarraySum(ns, tar);
// console.log(out);

const ns = [23, 2, 4, 6, 6];
const tar = 7;
const out = checkSubarraySum(ns, tar);
console.log(out);

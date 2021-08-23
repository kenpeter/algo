// sm: (presum) + (presum%mod controls range) + hash(posi)
var checkSubarraySum = function (ns, tar) {
  const m = new Map();
  let s = 0;

  // once and once only
  m.set(0, -1);

  for (let i = 0; i < ns.length; ++i) {
    const n = ns[i];
    s = s + n;

    let ind = s % tar;

    // * meet again, potential subarr % tar
    // * never set
    if (m.get(ind) !== undefined) {
      if (i - m.get(ind) > 1) return true;
    } else {
      // only fresh added
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

//
const ns = [23, 2, 4, 6, 7];
const tar = 6;
const out = checkSubarraySum(ns, tar);
console.log(out);

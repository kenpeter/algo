// var findShortestSubArray = function (ns) {
//   const h = {};
//   let maxF = 0;
//   for (let i = 0; i < ns.length; ++i) {
//     const n = ns[i];
//     if (h[n] === undefined) {
//       h[n] = { f: 1, s: i, e: i, d: 0 };
//     } else {
//       h[n] = { f: h[n].f + 1, s: h[n].s, e: i, d: i - h[n].s + 1 };
//     }
//     maxF = Math.max(maxF, h[n].f);
//   }

//   let minD = Number.MAX_SAFE_INTEGER;
//   for (let key in h) {
//     const n = h[key];
//     if (n.f === maxF) {
//       minD = Math.min(minD, n.d);
//     }
//   }

//   return minD;
// };

// const input = [1, 2, 2, 3, 1];
// const out = findShortestSubArray(input);

// console.log("=== out", out);

// one loop, same_key, access multi; h[n] = freq, h[n] = first_posi, etc
// var findShortestSubArray = function (nums) {
//   // no len, re 0
//   if (!nums.length) return 0;

//   // * h[n] = freq
//   // key: value in the input nums
//   // value: their num of occurences
//   const counter = new Map();

//   // * h[n] = first_posi
//   // key: value in the input nums
//   // value: the index of their first occurence
//   const firstOccurences = new Map();

//   // * global max freq. We have 1, 2, 3...
//   // global maximum freq
//   let maxFreq = 0;

//   // * end - start = longest_distance
//   // global minimum length of subarray that has the same degree of the entire array
//   let minLen = nums.length;

//   // * const [ind, num] = arr.entries; get ind + num
//   // one pass only
//   for (const [idx, num] of nums.entries()) {
//     // * hash[n] = freq
//     // update the frequency
//     counter.set(num, counter.has(num) ? counter.get(num) + 1 : 1);
//     // * hash[n] = posi_ind
//     // in case this is the first time we see this value
//     if (!firstOccurences.has(num)) firstOccurences.set(num, idx);

//     // * get larger freq, it FORCES minLen to take LONGER distance
//     // * why? needs to cover
//     // two cases to update the minLen
//     // case 1: we find a larger maximum frequency
//     if (counter.get(num) > maxFreq) {
//       maxFreq = counter.get(num);
//       minLen = idx - firstOccurences.get(num) + 1;
//     }

//     // * same freq, takes less len
//     // case 2: the frequency of current num is the same as the global one
//     // but the length between its first seen index and current index is shorter
//     else if (counter.get(num) === maxFreq) {
//       minLen = Math.min(minLen, idx - firstOccurences.get(num) + 1);
//     }
//   }

//   return minLen;
// };

var findShortestSubArray = function (ns) {
  // * multi hash
  const freqHash = {};
  const startIndHash = {};
  // * multi tracking_var
  let maxF = 0;
  // * end - start
  let minLen = ns.length;

  // entries() => [ind, n]
  for (const [ind, n] of ns.entries()) {
    // build freq
    if (freqHash[n] === undefined) {
      freqHash[n] = 1;
    } else {
      freqHash[n] = freqHash[n] + 1;
    }

    // * start ind
    if (startIndHash[n] === undefined) {
      startIndHash[n] = ind;
    }

    // * force to update minLen, because maxF larger
    if (freqHash[n] > maxF) {
      maxF = freqHash[n];
      minLen = ind - startIndHash[n] + 1; // force
    } else if (freqHash[n] === maxF) {
      // * update minLen, because same freq, smaller minLen
      minLen = Math.min(minLen, ind - startIndHash[n] + 1);
    }
  }

  //test
  console.log("--- freqHash", freqHash, "startIndHash", startIndHash);

  return minLen;
};

const input = [1, 2, 2, 3, 1];
const out = findShortestSubArray(input);

console.log("+++ out", out);

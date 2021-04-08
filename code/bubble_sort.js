const swap = (ns, i, j) => {
  const t = ns[i];
  ns[i] = ns[j];
  ns[j] = t;
};

// // method 1: 1 iteration, push 1 bubble to end
// const bubbleSort = (ns) => {
//   // not useful, but exhaust all bubble
//   for (let i = 0; i < ns.length; ++i) {
//     for (let j = 0; j < ns.length; ++j) {
//       // 1 iteration, push 1 bubble to end
//       if (ns[j] > ns[j + 1]) {
//         swap(ns, j, j + 1);
//       }
//     }
//   }
// };

// const input = [4, 3, 2, 1];
// bubbleSort(input);
// console.log(input);

// method 2: if anything not sort, bubble continue
const bubbleSort = (ns) => {
  let checked;
  do {
    // if anything not sort, bubble continue
    checked = false;
    for (let j = 0; j < ns.length; ++j) {
      // if anything not sort, bubble continue
      if (ns[j] > ns[j + 1]) {
        swap(ns, j, j + 1);
        checked = true; // if anything not sort, bubble continue
      }
    }
  } while (checked);
};

const input = [4, 3, 2, 1];
bubbleSort(input);
console.log(input);

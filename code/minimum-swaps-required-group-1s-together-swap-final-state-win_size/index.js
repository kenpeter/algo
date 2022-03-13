q; // https://www.geeksforgeeks.org/minimum-swaps-required-group-1s-together/

// const minSwaps = (ns) => {
//   let winSize = 0;

//   // total ones (win size)
//   for (let i = 0; i < ns.length; ++i) winSize += ns[i];

//   let currOnes = 0; // curr ones
//   let maxOnes = 0; // max ones

//   // start of win
//   let i = 0;

//   // end of win
//   let j = 0;

//   while (j < ns.length) {
//     // if 1, inc
//     // if 0, !inc
//     currOnes += ns[j];

//     // we reach the win size
//     if (j - i + 1 == winSize) {
//       // max ones vs curr ones
//       maxOnes = Math.max(maxOnes, currOnes);

//       // because going to move, 1 will reduce; zero no change
//       if (ns[i] === 1) currOnes--;

//       // slide
//       i++;
//     }

//     // win expanding
//     ++j;
//   } // el

//   return winSize - maxOnes;
// };

const minSwaps = (ns) => {
  // win_size (fixed size)
  let win_size = 0;
  for (let i = 0; i < ns.length; ++i) {
    if (ns[i] === 1) {
      ++win_size;
    }
  }

  // curr win (fixdd size)
  let i = 0;
  let j = win_size - 1;

  // next win
  i = i + 1;
  j = j + 1;

  // max (journey)
  let max = 0;

  // curr win (value)
  let curr_ones = 0;
  for (let i = 0; i < win_size; ++i) {
    if (ns[i] === 1) {
      ++curr_ones;
    }
  }

  while (j < ns.length) {
    if (ns[i - 1] === 1) {
      --curr_ones;
    }

    if (ns[j] === 1) {
      ++curr_ones;
    }

    max = Math.max(max, curr_ones);

    ++i;
    ++j;
  }

  return win_size - max;
};

// const ns = [1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1];
// const out = minSwaps(ns);
// console.log(out);

// const ns = [1, 0, 1, 0, 1];
// const out = minSwaps(ns);
// console.log(out);

// const ns = [1, 0, 1, 0, 1, 1];
// const out = minSwaps(ns);
// console.log(out);

const ns = [0, 0, 0, 1, 0];
const out = minSwaps(ns);
console.log(out);

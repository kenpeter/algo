const mycal = (input) => {
  const res = [];
  const a = [];

  // loop each income time
  for (let i = 0; i < input.length; ++i) {
    let i_s = input[i][0];
    let i_e = input[i][1];

    // fill second
    let s = i_s;
    while (s < i_e) {
      a[s] = (a[s] || 0) + 1;
      ++s;
    } // end loop

    // whether fit or not
    res[i] = true;
    s = i_s;
    let overFlag = false;
    while (s < i_e) {
      // not fit, revert
      if (a[s] > 1) {
        r_s = i_s;
        while (r_s < i_e) {
          a[r_s] = (a[r_s] || 0) - 1;
          ++r_s;
        } // end loop

        res[i] = false;
        break;
      }

      ++s;
    } // end loop
  } // end loop

  return res;
};

// const input = [
//   [10, 20],
//   [15, 25],
//   [20, 30],
// ];

const input = [
  [1, 3],
  [2, 4],
  [5, 6],
];

const out = mycal(input);
console.log(out);

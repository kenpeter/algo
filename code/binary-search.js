const search = (arr, v) => {
  // sort
  arr.sort((a, b) => a - b);

  let l = 0; // ind 0
  let r = arr.length; // pt_outside

  // left < right
  while (l < r) {
    // * len = (limit - pos) / 2, strange_round_down;
    const p = l + ((r - l) >> 1);

    // left inc, p_move_right
    if (arr[p] < v) {
      l = p + 1;
    } else if (arr[p] > v) {
      // right desc, p_move_left
      r = p;
    } else {
      // * left_pt_res; r_smaller, force_loop_stop
      r = p;
    }
  } // end_loop

  // left_pt_res; r_smaller, foce_loop_stop
  if (l < arr.length && arr[l] === v) {
    return l;
  } else {
    // insert posi
    return l;
  }
};

const input = [1, 2, 3];
const find = 3;
const out = search(input, find);
console.log("++", "out", out);

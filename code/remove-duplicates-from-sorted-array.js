// sm: in_place, i_present, j_consume, assign_at_diff
var removeDuplicates = function (ns) {
  let i = 0;
  let j = 0;
  while (j < ns.length) {
    // i_represent
    if (ns[i] === ns[j]) {
      ++j; // j_explode
    } else {
      ++i;
      ns[i] = ns[j];
      ++j;
    }
  }

  return ++i;
};

const input = [1, 1, 1, 1, 2, 2];
const out = removeDuplicates(input);
console.log("++", "out", out);

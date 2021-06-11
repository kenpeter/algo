// sm: EITHER 1 by 1 (can long press), OR long press ( look_back(same type) ); look_back (same_type)
var isLongPressedName = function (na, ty) {
  if (ty.length < na.length) return false;

  let i = 0;
  let j = 0;
  let f1 = false;
  let f2 = false;

  while (i < na.length && j < ty.length) {
    // * 1 by 1 (afterward, long press)
    while (i < na.length && j < ty.length && na[i] === ty[j]) {
      ++i;
      ++j;
      f1 = true;
      continue;
    }

    // * look_back (same type)
    while (j < ty.length && ty[j - 1] === ty[j]) {
      ++j;
      f2 = true;
      continue;
    }

    // either 1 by 1 OR look_back (same type)
    if (f1 === false && f2 === false) return false;

    // if 1 side not done, false; they should finish same time
    if (i >= na.length && j < ty.length) return false;
    if (i < na.length && j >= ty.length) return false;

    // reset
    f1 = false;
    f2 = false;
  }

  return true;
};

// true
const in1 = "vtkgn";
const in2 = "vttkgnn";

// false
// const in1 = "alex";
// const in2 = "aaleexa";

// false
// const in1 = "pyplrz";
// const in2 = "ppyypllr";

const out = isLongPressedName(in1, in2);
console.log(out);

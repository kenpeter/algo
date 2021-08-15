const firstBad = (a) => {
  let l = 0;
  let r = a.length;
  const tar = a[a.length - 1];

  while (l < r) {
    const ind = Math.floor((l + r) / 2);

    if (a[ind] < tar) {
      l = ind + 1;
    } else if (a[ind] > tar) {
      r = ind;
    } else {
      console.log("here");
      return ind;
    }
  } // end loop

  return l;
};

const a = [1, 2, 3, 4, 5, 5, 5];
const out = firstBad(a);
console.log(out);

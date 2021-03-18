const heightChecker = (heights) => {
  // input heights

  //test
  console.log("++ heights", heights);

  // 0 -> 100, so len = 101
  const count = new Int8Array(101);

  //
  for (let i = 0; i < heights.length; ++i) ++count[heights[i]];

  let ret = (idx = 0);
  for (let i = 0; i < 101; ++i) {
    // * i, 0->100;
    // * count === 0, loop stop, but c === -1
    while (count[i]--) {
      //test
      console.log("idx", idx, "heights[idx]", heights[idx], "i", i);

      // idx from 0 to 5; index for all height
      heights[idx++] !== i && ++ret;
    }

    //test
    console.log("=== count[i]", count[i]);
  }

  return ret;
};

const input = [1, 1, 4, 2, 1, 3];
const out = heightChecker(input);
console.log("++ out", out);

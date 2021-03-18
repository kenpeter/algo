var maxNumberOfBalloons = function (s) {
  let t1 = ["b", "a", "l", "l", "o", "o", "n"];
  let s1 = s.split("");
  let res = 0;

  let i = 0;
  let j = 0;
  // big pool, reduce
  for (i = 0; i < s1.length; ++i) {
    //test
    console.log("+++ i", i, "j", j, "s1", s1, "t1", t1);

    // 1 target cycle
    for (j = 0; j < t1.length; ++j) {
      let ind = -1;
      // e.g. bbaalloonn.indexOf(a)
      if ((ind = s1.indexOf(t1[j]))) {
        // target, reduce
        t1.splice(j, 1);
        s1.splice(ind, 1);
      } // end loop

      if (t1 === "") {
        ++res;
      }
    } // end loop

    // reset
    t1 = ["b", "a", "l", "l", "o", "o", "n"];
  } // end loop

  return res;
};

const input = "nlaebolko";
const out = maxNumberOfBalloons(input);

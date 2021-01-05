var commonChars = function (a) {
  // first as common
  let com = a[0];

  // loop word
  for (let i = 1; i < a.length; ++i) {
    // loop char
    for (let j = 0; j < com.length; ++j) {
      // word orig len
      const orig_l = a[i].length;

      // char
      const c = com[j];

      // char is common to w and c; rm from w, so next_round won't use.
      a[i] = a[i].replace(c, "");

      if (orig_l === a[i].length) {
        // char is !common to w and c; rm from c, so next_round won't use
        com = com.replace(c, "");
        --j; // str reduce, ind rewind
      }
    }
  }

  return com.split("");
};

//const input = ["cool", "lock", "cook"];
const input = ["bella", "label", "roller"];
const out = commonChars(input);
console.log("++ out", out);

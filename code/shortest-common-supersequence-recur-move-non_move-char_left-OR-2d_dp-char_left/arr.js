const createFourD = (s1, s2, s3, s4) => {
  return Array(s1.length + 1)
    .fill("")
    .map((_, i) => {
      return Array(s2.length + 1)
        .fill("")
        .map((_, j) => {
          return Array(s3.length + 1)
            .fill("")
            .map((_, k) => {
              return Array(s4.length + 1)
                .fill("")
                .map((_, l) => {
                  return "";
                });
            });
        });
    });
};

const s1 = "abcd";
const s2 = "abc";
const s3 = "ab";
const s4 = "a";
const dp = createFourD(s1, s2, s3, s4);
console.log(JSON.stringify(dp, null, 4));

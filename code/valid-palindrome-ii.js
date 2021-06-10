var validPalindrome = function (s) {
  let i = 0;
  let j = s.length - 1;

  while (i < j) {
    if (s[i] === s[j]) {
      ++i;
      --j;
      continue;
    }

    let i1 = i + 1;
    let j1 = j - 1;

    // i vs j1
    while (i < j1) {
      if (s[i] === s[j1]) {
        ++i;
        --j1;
        continue;
      } else {
        break; // see next
      }
    }

    if (i >= j1) return true;

    // i1 vs j
    while (i1 < j) {
      if (s[i1] === s[j]) {
        ++i1;
        --j;
        continue;
      } else {
        return false;
      }
    }

    if (i1 >= j) return true;
  }

  return true;
};

const input = "abc";
const out = validPalindrome(input);
console.log(out);

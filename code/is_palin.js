var isAN = (input) => {
  return /^[a-z0-9]+$/i.test(input);
};

var isPalindrome = function (s) {
  if (s.length === 0) return true;

  let i = 0;
  let j = s.length - 1;
  while (i <= j) {
    while (!isAN(s[i])) {
      ++i;
    }
    while (!isAN(s[j])) {
      --j;
    }

    //test
    //console.log("++++ s[i]", s[i], "s[j]", s[j]);

    // equal keep going
    if (s[i].toLowerCase() === s[j].toLowerCase()) {
      ++i;
      --j;
    } else {
      return false;
    }
  }

  return true;
};

//const input = "A man, a plan, a canal: Panama";
//const input = "race a car";
const input = " ";
const out = isPalindrome(input);
console.log("+++ out", out);

var isPalindrome = function (s) {
  let i = 0;
  let j = s.length - 1;
  while (i < j) {
    while (i < j && !s[i].match(/^[0-9a-z]$/i)) ++i;

    while (i < j && !s[j].match(/^[0-9a-z]$/i)) --j;

    if (s[i].toLowerCase() !== s[j].toLowerCase()) return false;

    ++i;
    --j;
  }

  return true;
};

const input = "A man, a plan, a canal: Panama";
const out = isPalindrome(input);
console.log(out);

// sm: ind = num % len
var distributeCandies = function (candy_num, people_n) {
  const arr = Array(people_n).fill(0);
  let i = 0;
  let give = 0;
  while (candy_num > 0) {
    // * give inc
    // * ind = num % len
    i = give % people_n;
    if (candy_num >= ++give) {
      arr[i] = arr[i] + give;
    } else {
      arr[i] = arr[i] + candy_num;
    }
    candy_num = candy_num - give; // candy_num reducing
  }
  return arr;
};

const out = distributeCandies(10, 3);
//const out = distributeCandies(7, 4);
console.log(out);

const room = (input) => {
  const s_a = [];
  const e_a = [];
  for (let i = 0; i < input.length; ++i) {
    s_a[i] = input[i][0];
    e_a[i] = input[i][1];
  }

  s_a.sort((a, b) => a - b);
  e_a.sort((a, b) => a - b);

  let i = 0;
  let j = 0;
  let room = 0;
  let max = 0;

  while (i < input.length && j < input.length) {
    if (s_a[i] < e_a[j]) {
      ++room;
      ++i;
    } else {
      --room;
      ++j;
    }
    max = Math.max(max, room);
  }
  return max;
};

const input = [
  [0, 30],
  [5, 10],
  [15, 20],
];

const out = room(input);
console.log(out);

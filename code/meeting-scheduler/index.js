// https://massivealgorithms.blogspot.com/2019/11/leetcode-1229-meeting-scheduler.html
const sch = (s1, s2, du) => {
  s1.sort((a, b) => a - b);
  s2.sort((a, b) => a - b);

  let i = 0;
  let j = 0;
  while (i < s1.length && j < s2.length) {
    const s = s1[i][0];
    const e = s1[i][1];

    const i_s = s2[j][0];
    const i_e = s2[j][1];

    if (i_s <= e && i_e >= s) {
      // inter
      const t_s = Math.max(i_s, s);
      const t_e = Math.min(i_e, e);
      const gap = t_e - t_s;
      if (gap >= du) {
        return [t_s, t_s + du];
      }
    } else {
      // !inter
    }

    if (e <= i_e) {
      ++i;
    } else {
      ++j;
    }
  } // el

  return [];
};

// const s1 = [
//   [10, 50],
//   [60, 120],
//   [140, 210],
// ];
// const s2 = [
//   [0, 15],
//   [60, 70],
// ];
// const du = 8;

const s1 = [
  [10, 50],
  [60, 120],
  [140, 210],
];
const s2 = [
  [0, 15],
  [60, 70],
];
const du = 12;

const out = sch(s1, s2, du);
console.log(out);

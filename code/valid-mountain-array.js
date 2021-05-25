// // sm: skip_loop (all the way up); skip_loop (all the way down)
// var validMountainArray = function (a) {
//   if (a.length < 3) return false;

//   let i = 0;
//   let is_up = false;
//   let is_down = false;
//   // look_ahead
//   while (i < a.length - 1) {
//     // skip_loop (all the way up)
//     while (i < a.length - 1 && a[i] < a[i + 1]) {
//       ++i;
//       is_up = true;
//     }

//     // skip_loop (all the way down)
//     while (i < a.length - 1 && a[i] > a[i + 1]) {
//       ++i;
//       is_down = true;
//     }

//     // all the way up; all the way down; finish
//     break;
//   }

//   return is_up && is_down && a.length - 1 === i;
// };

// sm: skip_loop (all the way up); skip_loop (all the way up, backward)
var validMountainArray = function (a) {
  if (a.length < 3) return false;

  let i = 0;
  // forward up
  while (i <= a.length - 2 && a[i] < a[i + 1]) {
    ++i;
  }

  let j = a.length - 1;
  // backward up
  while (j >= 1 && a[j] < a[j - 1]) {
    --j;
  }

  const condi = i === j && i > 0 && j < a.length - 1;

  return condi;
};

const input = [0, 2, 3, 4, 5, 2, 1, 0];
const out = validMountainArray(input);
console.log(out);

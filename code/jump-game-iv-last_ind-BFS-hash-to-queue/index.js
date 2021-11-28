// https://www.youtube.com/watch?v=JYbU8RH1OSQ
const minJumps = (a) => {
  const len = a.length;
  if (len === 1) return 0; // e.g. [7], step = 0, no jump

  // map
  const m = new Map();
  for (let i = 0; i < len; ++i) {
    const it = a[i];
    if (m.has(it)) {
      m.get(it).push(i);
    } else {
      m.set(it, [i]);
    }
  }

  const q = [0]; // first item ind
  let step = 0;
  while (q.length > 0) {
    ++step;
    const size = q.length;
    for (let i = 0; i < size; ++i) {
      const ind = q.shift();

      const left = ind - 1;
      if (left >= 0 && m.has(a[left])) {
        q.push(left);
      }

      const right = ind + 1;
      if (right <= a.length - 1 && m.has(a[right])) {
        if (right === a.length - 1) return step;
        q.push(right);
      }

      if (m.has(a[ind])) {
        const arr = m.get(a[ind]);
        for (let j = 0; j < arr.length; ++j) {
          if (arr[j] == a.length - 1) return step;
          if (ind !== arr[j]) {
            q.push(arr[j]);
          }
        } // el
      }

      m.delete(a[ind]);
    } // el
  } // el

  return step;
};

const a = [100, -23, -23, 404, 100, 23, 23, 23, 3, 404];
const out = minJumps(a);
console.log(out);

// const a = [6, 1, 9];
// const out = minJumps(a);
// console.log(out);

// const a = [11, 22, 7, 7, 7, 7, 7, 7, 7, 22, 13];
// const out = minJumps(a);
// console.log(out);

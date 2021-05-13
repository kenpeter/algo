const carPooling = function (trip, cap) {
  const cal = {};
  for (let i = 0; i < trip.length; ++i) {
    const n = trip[i][0];
    const s = trip[i][1];
    const e = trip[i][2];
    cal[s] = (cal[s] || 0) + n;
    cal[e] = (cal[e] || 0) - n;
  }

  let c = 0;
  for (let t in cal) {
    c = c + cal[t];
    if (c > cap) {
      return false;
    }
  }

  return true;
};

const trip = [
  [2, 1, 5],
  [3, 3, 7],
];
const cap = 4;
const out = carPooling(trip, cap);
console.log("++", "out", out);

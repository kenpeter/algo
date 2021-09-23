var suggestedProducts = function (ps, s) {
  // * mz > mazzzzz (whatever leading)
  // * mab > maa (same, compare rest)
  // * ma > m (same, compare rest)
  // * localeCompare
  ps.sort();
  const res = [];

  //test
  console.log(ps);

  for (let i = 0; i < s.length; ++i) {
    const tar = s.substring(0, i + 1);

    // left most
    let l = 0;
    let r = ps.length;

    while (l < r) {
      const ind = Math.floor((l + r) / 2);
      const ps_ind = ps[ind];
      const condi = tar > ps_ind;

      // localeCompare
      if (condi) {
        l = ind + 1;
      } else {
        r = ind;
      }
    } // end loop

    const sug = [];
    for (let j = 0; j < 3; ++j) {
      if (l + j < ps.length && ps[l + j].startsWith(tar)) {
        sug.push(ps[l + j]);
      }
    } // end loop

    res.push(sug);
  } // end loop

  return res;
};

const ps = ["baggage", "bags", "banner", "box", "cloths"];
const s = "bags";

/*
[ 'baggage', 'bags', 'banner', 'box', 'cloths' ]

*/

/*
++ ps [ 'mobile', 'moneypot', 'monitor', 'mouse', 'mousepad' ]
++ res [
  { sum: 553, str: 'mouse' },
  { sum: 632, str: 'mobile' },
  { sum: 776, str: 'monitor' },
  { sum: 862, str: 'mousepad' },
  { sum: 891, str: 'moneypot' }
*/
suggestedProducts(ps, s);

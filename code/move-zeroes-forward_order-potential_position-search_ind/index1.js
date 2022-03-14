var moveZeroes = function (ns) {
  let read_ind = 0;
  let write_ind = 0;
  while (read_ind < ns.length) {
    if (ns[read_ind] === 0) {
      ++read_ind;
    } else {
      ns[write_ind++] = ns[read_ind++];
    }
  } // el

  while (write_ind < ns.length) {
    ns[write_ind++] = 0;
  } // el

  return ns;
};

const ns = [0, 1, 0, 3, 12];
moveZeroes(ns);
console.log(ns);

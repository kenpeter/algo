// sm: l=0, r=len (outbound); loop(l < r); l=ind+1, r=ind (include); work
var searchInsert = function (ns, tar) {
  let l = 0;
  let r = ns.length; // outbound
  let ind;

  while (l < r) {
    ind = Math.floor((l + r) / 2);

    if (ns[ind] < tar) {
      l = ind + 1;
    } else if (ns[ind] > tar) {
      r = ind;
    } else {
      return ind; // existed
    }
  }

  return l; // insert
};

// sm: l=0, r=len-1 (inbound); loop(l < r); l=ind+1, r=ind (include); !work
var searchInsert = function (ns, tar) {
  let l = 0;
  let r = ns.length - 1; // inbound, cannot insert outbound
  let ind;

  while (l < r) {
    ind = Math.floor((l + r) / 2);

    if (ns[ind] < tar) {
      l = ind + 1;
    } else if (ns[ind] > tar) {
      r = ind;
    } else {
      return ind; // existed
    }
  }

  return l; // insert
};

// sm: l=0, r=len (inbound); loop(l < r); l=ind+1, r=ind-1 (exclude); !work
var searchInsert = function (ns, tar) {
  let l = 0;
  let r = ns.length;
  let ind;

  while (l < r) {
    ind = Math.floor((l + r) / 2);

    if (ns[ind] < tar) {
      l = ind + 1;
    } else if (ns[ind] > tar) {
      r = ind - 1;
    } else {
      return ind; // existed
    }
  }

  return l; // insert
};

// sm: l=0, r=len (outbound); loop(l < r); l=ind+1, r=ind (include); work
var searchInsert = function (ns, tar) {
  let l = 0;
  let r = ns.length;
  let ind;

  while (l < r) {
    ind = Math.floor((l + r) / 2);

    if (ns[ind] < tar) {
      l = ind + 1;
    } else if (ns[ind] > tar) {
      r = ind;
    } else {
      return ind; // existed
    }
  }

  return l; // insert
};

// sm: l=0, r=len-1 (inbound); loop(l<=r); l=ind+1, r=ind (include); work
var searchInsert = function (ns, tar) {
  let l = 0;
  let r = ns.length - 1;
  let ind;

  while (l <= r) {
    ind = Math.floor((l + r) / 2);

    if (ns[ind] < tar) {
      l = ind + 1;
    } else if (ns[ind] > tar) {
      r = ind - 1;
    } else {
      return ind; // existed
    }
  }

  return l; // insert
};

// sm: l=0, r=len (outbound); recurive(l<=r); l=ind+1, r=ind (include); work
var searchInsert = function (ns, tar) {
  let l = 0;
  let r = ns.length;
  return recur(ns, l, r, tar);
};

var recur = function (ns, l, r, tar) {
  if (l >= r) {
    return l;
  }

  const ind = Math.floor((l + r) / 2);

  if (ns[ind] === tar) {
    return ind;
  } else if (ns[ind] < tar) {
    return recur(ns, ind + 1, r, tar);
  } else if (ns[ind] > tar) {
    return recur(ns, l, ind, tar);
  }
};

const ns = [1, 3, 5, 6];
const tar = 5;
const out = searchInsert(ns, tar);
console.log(out);

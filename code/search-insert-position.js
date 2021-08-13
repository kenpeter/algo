// // sm: l=0, r=len (outbound); ind = (l+r)/2 (non-matter); l=ind+1, r=ind (include); work
// var searchInsert = function (ns, tar) {
//   let l = 0;
//   let r = ns.length; // outbound
//   let ind;

//   while (l < r) {
//     ind = Math.floor((l + r) / 2);

//     if (ns[ind] < tar) {
//       l = ind + 1;
//     } else if (ns[ind] > tar) {
//       r = ind;
//     } else {
//       return ind; // existed
//     }
//   }

//   return l; // insert
// };

// // sm: l=0, r=len-1 (inbound*); ind = (l+r)/2 (non-matter); l=ind+1, r=ind (include); !work
// var searchInsert = function (ns, tar) {
//   let l = 0;
//   let r = ns.length - 1; // inbound, cannot insert outbound
//   let ind;

//   while (l < r) {
//     ind = Math.floor((l + r) / 2);

//     if (ns[ind] < tar) {
//       l = ind + 1;
//     } else if (ns[ind] > tar) {
//       r = ind;
//     } else {
//       return ind; // existed
//     }
//   }

//   return l; // insert
// };

// // sm: l=0, r=len (inbound); ind = (l+r)/2 (non-matter); l=ind+1, r=ind-1 (exclude*); !work
// var searchInsert = function (ns, tar) {
//   let l = 0;
//   let r = ns.length;
//   let ind;

//   while (l < r) {
//     ind = Math.floor((l + r) / 2);

//     if (ns[ind] < tar) {
//       l = ind + 1;
//     } else if (ns[ind] > tar) {
//       r = ind - 1;
//     } else {
//       return ind; // existed
//     }
//   }

//   return l; // insert
// };

// sm: l=0, r=len (outbound); ind = l+(r-l)/2 (non-matter*); l=ind+1, r=ind (include); work
var searchInsert = function (ns, tar) {
  let l = 0;
  let r = ns.length;
  let ind;

  while (l < r) {
    ind = l + Math.floor((r - l) / 2);

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

const ns = [1, 3, 5, 6];
const tar = 7;
const out = searchInsert(ns, tar);
console.log(out);

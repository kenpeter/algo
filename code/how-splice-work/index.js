// insert
// insert at 0 ind
const a1 = [1, 2, 3];
a1.splice(0, 0, 9);
console.log(a1);

// insert at 1st ind
const a2 = [1, 2, 3];
a2.splice(1, 0, 9);
console.log(a2);

// insert at 3rd ind
const a3 = [1, 2, 3];
a3.splice(2, 0, 9);
console.log(a3);

// =====================

// del
// del at 0 ind
const b1 = [1, 2, 3];
b1.splice(0, 1);
console.log(b1);

// del at 1 ind
const b2 = [1, 2, 3];
b2.splice(1, 1);
console.log(b2);

// del at 2nd ind
const b3 = [1, 2, 3];
b3.splice(2, 1);
console.log(b3);

// =====================

// replace
// replace at 0 ind
const c1 = [1, 2, 3];
c1.splice(0, 1, 9);
console.log(c1);

// replace at 1 ind
const c2 = [1, 2, 3];
c2.splice(1, 1, 9);
console.log(c2);

// replace at 2 ind
const c3 = [1, 2, 3];
c3.splice(2, 1, 9);
console.log(c3);

const insert = (s, index, val) => {
  return s.substring(0, index) + val + s.substr(index);
};

//const input = "4881234";
const input = "1000";
const out = insert(input, 1, ".");
console.log("++ out", out);

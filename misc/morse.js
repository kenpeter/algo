var uniqueMorseRepresentations = function (ws) {
  const az = {
    a: ".-",
    b: "-...",
    c: "-.-.",
    d: "-..",
    e: ".",
    f: "..-.",
    g: "--.",
    h: "....",
    i: "..",
    j: ".---",
    k: "-.-",
    l: ".-..",
    m: "--",
    n: "-.",
    o: "---",
    p: ".--.",
    q: "--.-",
    r: ".-.",
    s: "...",
    t: "-",
    u: "..-",
    v: "...-",
    w: ".--",
    x: "-..-",
    y: "-.--",
    z: "--..",
  };

  const set = new Set();

  // loop each word
  for (let i = 0; i < ws.length; i++) {
    const w = ws[i];

    // single letter
    let t_res = "";
    for (let j = 0; j < w.length; j++) {
      const l = w[j];
      t_res = t_res + az[l];

      //test
      //console.log("+++ t_res", t_res);
    } // end loop

    // 1 word
    set.add(t_res);
  }

  return set.size;
};

const input = ["gin", "zen", "gig", "msg"];
const out = uniqueMorseRepresentations(input);
console.log("++ out", out);

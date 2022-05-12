// https://massivealgorithms.blogspot.com/2015/10/leetcode-291-word-pattern-ii.html

/*

  public boolean wordPatternMatch(String pattern, String str) {
    Map<Character, String> map = new HashMap<>();
    Set<String> set = new HashSet<>();
    
    return isMatch(str, 0, pattern, 0, map, set);
  }
  
  boolean isMatch(String str, int i, String pat, int j, Map<Character, String> map, Set<String> set) {
    // base case
    if (i == str.length() && j == pat.length()) return true;
    if (i == str.length() || j == pat.length()) return false;
    
    // get current pattern character
    char c = pat.charAt(j);
    
    // if the pattern character exists
    if (map.containsKey(c)) {
      String s = map.get(c);
      
      // then check if we can use it to match str[i...i+s.length()]
      if (!str.startsWith(s, i)) {
        return false;
      }
      
      // if it can match, great, continue to match the rest
      return isMatch(str, i + s.length(), pat, j + 1, map, set);
    }
    
    // pattern character does not exist in the map
    for (int k = i; k < str.length(); k++) {
      String p = str.substring(i, k + 1);

      if (set.contains(p)) {
        continue;
      }

      // create or update it
      map.put(c, p);
      set.add(p);
      
      // continue to match the rest
      if (isMatch(str, k + 1, pat, j + 1, map, set)) {
        return true;
      }

      // backtracking
      map.remove(c);
      set.remove(p);
    }
    
    // we've tried our best but still no luck
    return false;
  }

*/

const wordPatternMatch = (str, pattern) => {
  // map
  const map = new Map();
  // set
  const set = new Set();
  // 1st 0 === i
  // 2nd 0 === j
  return isMatch(str, 0, pattern, 0, map, set);
};

const isMatch = (str, i, pat, j, map, set) => {
  // all exhaust
  if (i === str.length && j === pat.length) return true;
  // 1 exhaust, but the other not
  if (i === str.length || j === pat.length) return false;

  // curr char in pattern
  const c = pat[j];

  // we see this pattern again
  if (map.get(c)) {
    // get pattern
    const s = map.get(c);

    // quick match
    // then check if we can use it to match str[i...i+s.length()]
    if (!str.startsWith(s, i)) {
      return false;
    }

    // the abstract path
    return isMatch(str, i + s.length, pat, j + 1, map, set);
  }

  // loop char in str
  for (let k = i; k < str.length; k++) {
    // a -> sub
    const p = str.substring(i, k + 1);

    // 2nd time to see this pattern?
    if (set.has(p)) {
      continue;
    }

    // add
    map.set(c, p);
    set.add(p);

    // the abstract path
    if (isMatch(str, k + 1, pat, j + 1, map, set)) {
      return true;
    }

    // remove
    map.delete(c);
    set.delete(p);
  }

  // we've tried our best but still no luck
  return false;
};

// const pat = "aa";
// const str = "xx";
// const out = wordPatternMatch(str, pat);
// console.log(out);

const pat = "a";
const str = "xy";
const out = wordPatternMatch(str, pat);
console.log(out);

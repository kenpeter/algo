// https://protegejj.gitbook.io/algorithm-practice/leetcode/backtracking/320-generalized-abbreviation


class Solution {
    public List<String> generateAbbreviations(String word) {
        List<String> res = new ArrayList<>();

        getAbbreviations(word, 0, 0, "", res);
        return res;
    }

    public void getAbbreviations(String word, int pos, int count, String curStr, List<String> res) {
        if (pos == word.length()) {
            if (count > 0) {
                curStr += count;
            }
            res.add(curStr);
            return;
        }

        // Abbreviate the current character
        getAbbreviations(word, pos + 1, count + 1, curStr, res);
        // Keep the current character
        getAbbreviations(word, pos + 1, 0, curStr + (count > 0 ? count : "") + word.charAt(pos), res);
    }
 }
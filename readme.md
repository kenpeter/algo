# str

## i, j cross over; 2 portions; i write, j read

##### rev word in str; rev_whole_str (group stay), rev_each_word(i_start, j_end), clean space(i write, j read)

- EG
- SUMMA => rev_whole (group_stay); rev_each_word; clean_space (i write, j read)
- (1) rev_whole_str (group_stay)
- i, j cross over;
- (2) rev_each_word(i_start, j_end)
- i_start, j_end, i=new_cycle
- (3) clean_space (i write, j read)
- letf_good, right_waste
- front_space, copy, end_space, 1 space;
- https://leetcode.com/problems/reverse-words-in-a-string

##### rev word in str; no_lead_end_space, word_separate_1_space; rev_str (group stay), rev each word, clean space;

- SUMMA => same as above;
- or diff (1) clean_space (2) rev_each_word (group_stay) (3) rev_whole_str (final)
- https://www.lintcode.com/problem/reverse-words-in-a-string-ii

<br/>
<br/>

## s.len - i == any_left; mod(equal_chunk)

##### 12|345|678 -> 12.345.678; i(start), j(no); i move right, j(no); s.len - i == any_left; mod(equal_chunk)

- EG
- SUMMA => equal_chunk
- loop char (forward)
- if i > 0 (avoid .1); (s.len - i) % 3 == 0, s.len-i == actual_len_left, mod (equal_chunk)
- res = res + "." (add .)
- res = res + s[i] (append char)
- https://leetcode.com/problems/thousand-separator

<br/>
<br/>

## count(full || b_eof) VS out_req_left

##### read_4_char api func; count(full || b_eof); out_req_left == out_req_n_char - total_acc;

- EG
- SUMMA
- loop !eof(when small) && total < out_req_n_char (when small)
- count(full || mod_left) = read_4_char
- count = mi( count(full || mod_left), when_small; out_req_left, when_small )
- copy char
- https://evelynn.gitbooks.io/google-interview/content/read_n_characters_given_read4.html

<br/>
<br/>

## i(start), j(end); j - i === word_len / same_kind

##### count(#) and say(def); i(start), j(start); i stay, j move right; j - i === same_kind

- EG
- 1 -> one 1;
- 11 -> two 1;
- 21 -> one 2 one 1;
- 1211 -> one 1 one 2 two 1;
- SUMMA => count(#) + say(def)
- edge_case (1 -> "1")
- loop input_num
- res = say(res) (update_res)
- sub_loop diff kind
- subsub_loop same kind (i stays, j moving)
- https://leetcode.com/problems/count-and-say

##### count_last_word_len; i(end), j(end); i stay, j move right; j - i === word_len

- EG
- \_ab\_\_ab_bc\_\_
- SUMMA => i(end), j(end); i stay, j move right
- loop chars;
- i stays, j move right
- https://leetcode.com/problems/length-of-last-word

##### is palindrome; i(start), j(end); i move right, j move left; loop_skip_alph#

- EG
- SUMMA
- loop chars;
- i(start), j(end)
- sub_loop(skip_alph#) ++i
- sub_loop(skip_alph#) --j
- https://leetcode.com/problems/valid-palindrome

<br/>
<br/>

## insert: s.s(0, i) + val + s.s(i+1)

##### 1|234|567 -> 1.234.567; i(no), j(end); i(no), j move left; insert: sub(0, i) + val + sub(i)

- EG
- SUMMA => i(no), j(end); i(no), j move left
- loop chars;
- i(no), j(end); i(no), j move left
- 1234567 -> 1.234.567 (backward; 1st ".", 2 steps; 2nd ".", 3 steps, becau "." added)
- insert => sub(0, ind) + val + sub(ind)
- https://leetcode.com/problems/thousand-separator

##### ++++ -> [--++, +--+, ++--]; i=1(LOOK_BACK); insert: sub(0, i) + val + sub(i)

- EG
- SUMMA
- loop chars
- i=1(LOOK_BACK); s.sub(0, i-1, i_LOOK_BACK) + "--" + s.sub(i+1, 2_char)
- arr.push
- https://xiaoguan.gitbooks.io/leetcode/content/LeetCode/293-flip-game-easy.html

<br/>
<br/>

## skip_loop(condi)

##### reverse a, e, i, o, u; i(start), j(end); i, j cross over; skip_loop(b_cross_over, in_vowel?)

- EG
- SUMMA
- loop str
- i(start), j(end); i, j cross over
- skip_loop(i<j(b_cross_over), in_vowel?) ++i
- skip_loop(i<j(b_cross_over), in_vowel?) --j
- rev
- https://leetcode.com/problems/reverse-vowels-of-a-string/

##### skip_loop(i, j bound || inbound || skip_space || skip_char)

- EG
- SUMMA
- FUNC reverseWord:
- skip_loop(i < j(i_start, j_end) || (i_inbound, i_skip_space)) ++i;
- skip_loop(j < i(i_start, j_end) || (j_inbound, j_skip_char)) ++j;
- FUNC cleanSpace:
- skip_loop(j_inbound, j_skip_space) ++j;
- skip_loop(j_inbound, j_skip_char) copy;
- skip_loop(j_inblound, j_skip_space) ++j;
- last_add_space
- https://leetcode.com/problems/reverse-words-in-a-string/

<br/>
<br/>

## arr size change in motion

##### rm vowel in str; rm_item, a.len, next_item_move_left, next_item_move_left; --i, ++i(back_to_top)

- EG
- SUMMA
- loop str
- rm_item, next_item_move_left, a.len reduce; --i, ++i (back_to_top);
- https://www.geeksforgeeks.org/program-remove-vowels-string/

<br/>
<br/>

## pattern(inc)\_match_neighbour(inc)

##### pattern_form_whole, cut_half, max_pattern_len; pattern(inc)\_match_neighbour(inc)

- EG
- abc|abc(max_pattern_len == 6/2 == 3); (a)(b)cabc (len_1, x) -> (ab)(ca)bc (len_2, x) -> (abc)(abc) (len_3, y)
- a|b|c(max_p_len == 3/2 == 1.5 == 1, 2\*2 too big); (a)(b)(c) (len_1, x)
- SUMMA
- loop max_pattern_len (s -> b), pattern stay subloop
- sub_loop; j <s.len; i(start), j(end), VS_same_pattern; next_neighbour i = i+len, j = j+len
- if i === s.len, all_neighbour_match
- https://leetcode.com/problems/repeated-substring-pattern

<br/>
<br/>

## substr

##### search_needle_in_parent; i_start, j_sub_start; i, j move right; substr

- EG
- SUMMA
- edge_case => parent_empty; child_empty; both_empty
- loop parent ( p[i] )
- loop child ( p[i+j(sub)] == c[j(sub)]; substr )
- https://leetcode.com/problems/implement-strstr

##### i=0, j=(substr OR s.limit), rev; i=2\*k, j=(substr OR s.limit), rev

- EG
- k = 2, ab(k)ab(k)|ab(k)a; i=0, j=k OR, rev; i=2\*k, j=i+k OR, rev
- SUMMA
- loop chars (i < s.len, i move)
- i=0, j=(substr OR s.limit), rev; i = 2\*k, j=(substr or s.limit), rev
- https://leetcode.com/problems/reverse-string-ii

##### LLL, substr, false_student_record

- EG
- e.g. 'PPALLP', 1_A(\*), 2_con_L(\*), good; 'PPALLL', 1_A(\*), 3_con_L(x), bad
- SUMMA
- loop chars
- LLL, substr (skip_loop)
- https://leetcode.com/problems/student-attendance-record-i

##### aaabcc, a has 3 (substr), so max

- EG
- e.g. aaabcc, a has 3, so max
- SUMMA
- loop chars
- aaa, substr (skip_loop)
- https://leetcode.com/problems/consecutive-characters/

<br/>
<br/>

## each cycle; either finish_curr OR finish_prev, restart

##### each cycle; if consecutive, either finish_curr OR finish_prev, restart

- EG
- e.g. 'PPALLP', 1_A(\*), 2_con_L(\*), good; 'PPALLL', 1_A(\*), 3_con_L(x), bad
- SUMMA
- loop chars
- if consecutive, either finish_curr(acc) OR finish_prev, restart(counter = 0)
- https://leetcode.com/problems/student-attendance-record-i

##### aaabcc, 3 consecutive; i-1, i(LOOK_BACK); either finish_curr or (finish_prev, restart)

- EG
- aaabcc, a 3, so max
- SUMMA
- ma = 1, c(counter) = 1 (SETUP)
- loop chars
- i-1, i(LOOK_BACK); if equal char, c++, finish_curr;
- else finish_prev( ma(ma, c) ); restart(c = 1)
- aaab(cc), last_c use
- https://leetcode.com/problems/consecutive-characters

<br/>
<br/>

## a VS b -> res, res VS c

##### each_str_prefix; a VS b -> res, res VS c;

- EG
- SUMMA
- SETUP => res = 1st_item
- loop strs (at 2nd_item)
- sub_loop str
- char match; not_match_break
- a VS b -> res; then res VS c
- https://leetcode.com/problems/longest-common-prefix

##### each_str_prefix; a VS b -> res, res VS c; backward_indexOf_0, substr_reducing

- EG
- SUMMA
- SETUP => res = 1st_item
- loop strs (at 2nd_item)
- sub_loop str
- backward_indexOf_0; substr_reducing;
- a VS b -> res; then res VS c
- https://leetcode.com/problems/longest-common-prefix

<br/>
<br/>

## min_len_match, a VS b VS c VS d -> res (same_time_match)

##### each_str_prefix; min_len_match, a VS b VS c VS d -> res (same_time_match)

- EG
- SUMMA
- find_min_len (s.reduce((acc, curr) => {}, 0)) (SETUP)
- loop str (min_len)
- sub_loop strs (at 2nd_item)
- if strs[str_ind][char_ind] == curr, con
- else return res (no_break)
- https://www.geeksforgeeks.org/longest-common-prefix-using-character-by-character-matching

<br/>
<br/>

## compare(sb 1 group || b 1 group) / in_hash(sb 1 group || b 1 group)

##### IVIV(roman) -> IV(s, s+1) -> compare(sb 1 group || b 1 group); i(start), i(start+1), j(x, end), j(x, end-1); i move right; access_hash

- EG
- IVIV -> (sb)(sb) -> (IV)(IV)
- VIVI -> (b)(sb)(b, end) -> (V)(IV)(I)
- SUMMA => sb 1 group, b 1 group
- build HASH (from Q, has all combo)
- loop chars
- curr = h[i], next = h[i+1] (LOOK_AHEAD)
- if curr >= next, b 1 group
- else next < curr, sb 1 group, fast_forward
- else the_end_char
- https://leetcode.com/problems/roman-to-integer

##### IVIV(roman) -> IV(s, s+1) -> in_hash(sb 1 group || b 1 group); i(start), i(start+1), j(x, end), j(x, end-1); i move right; access_hash

- EG
- IVIV -> (in_h)(in_h) -> (IV)(IV)
- VIVI -> (in_h)(in_h)(in_h) -> (V)(IV)(I)
- SUMMA => h[ s[i] + s[i+1] ] (LOOK_AHEAD)
- build HASH (from Q, has all combo)
- loop chars
- if h[ s[i] + s[i+1] ], fast_forward
- else 1_char_acc
- https://leetcode.com/problems/roman-to-integer

<br/>
<br/>

## start, end, start+1(LOOK_AHEAD), end-1(LOOK_BACK); start <-> end-1 || start+1 <-> end; i move right, j move left

##### start, end, start+1(LOOK_AHEAD), end-1(LOOK_BACK); start <-> end-1 (del_right) || start+1 <-> end (del_left); i move right, j move left

- EG
- c|abba -> c(s)a(s+1)bb(e-1)a(e) -> (s+1 <-> e) -> del_left
- abba|c -> a(s)b(s+1)ba(e-1)c(e) -> (s <-> e-1) -> del_right
- SUMMA
- loop chars
- (i, j; conid; ++i, --j) (combine ind, cross over)
- sub_loop; s+1 <-> e (del_left); i, j cross over
- sub_loop, s <-> e-1 (del_right); i, j cross over
- https://leetcode.com/problems/valid-palindrome-ii

## LOOK_BACK

##### ++++ -> [--++, +--+, ++--]; i-1, i(LOOK_BACK); insert: sub(0, i) + val + sub(i)

- EG
- SUMMA
- loop chars
- i-1, i(LOOK_BACK); s.sub(0, i-1) + "--" + s.sub(i+1, 2_char)
- arr.push
- https://xiaoguan.gitbooks.io/leetcode/content/LeetCode/293-flip-game-easy.html

##### find_word_segment; letter space == word_segment; i-1, i(LOOK_BACK);

- EG
- ab\_\_\_cd\_\_efg\_\_; b\_, d\_, g\_ means 3 word_segment
- SUMMA => letter space == word_segment
- loop chars
- i-1, i(LOOK_BACK); if(s[i-1] == ' ', s[i] == letter), word_segment++
- https://leetcode.com/problems/number-of-segments-in-a-string

<br/>
<br/>

## find_word_segment; feature represent entire;

##### find_word_segment; feature represent entire (letter space == word_segment);

- EG
- ..
- SUMMA => feature represent entire (letter space == word_segment)
- ..
- ..
- https://leetcode.com/problems/number-of-segments-in-a-string

<br/>
<br/>

## build_hash, use_hash

##### build_hash; 3999 - 1000(use_hash), 2999 - 1000(use_hash), 1999 - 1000, .. -> (MMM)(CM)(?)(?)

- EG
- 3999 -> (3000)(900)(90)(9) -> (MMM)(CM)(?)(?)
- SUMMA
- build_hash (single_double_roman; hash no order)
- loop hash
- loop tar (use_hash)
- https://leetcode.com/problems/integer-to-roman

##### build_hash(parent); --parent_pool_hash[child_str] (use_hash)

- EG
- SUMMA
- build_hash (parent)
- loop child_str
- if(parent_pool_hash[child] !== undef && --parent_pool_hash[child] >= 0, use_hash)
- https://leetcode.com/problems/ransom-note

##### 1st unique char in str; build_hash; use_hash(loop_up_in_order);

- EG
- SUMMA
- build_hash (char frequency)
- loop char (loop_char_in_order)
- meet frequency 1
- https://leetcode.com/problems/first-unique-character-in-a-string

##### "aabc", [ab, bc]; a<b>abc</b>; build_mem, slide_word(i, i+len);

- ..
- ..
- build_mem
- ..
- ..
- slide word (j, j+len), (s.len - w.len, dynamic_loop)
- ..
- ..
- https://massivealgorithms.blogspot.com/2017/06/leetcode-616-add-bold-tag-in-string.html

<br/>
<br/>

## indexOf === lastIndexOf, only_1_no_repeat

##### 1st unique char in str; indexOf === lastIndexOf, only_1_no_repeat

- EG
- SUMMA
- loop chars
- indexOf === lastIndexOf, only_1_no_repeat
- https://leetcode.com/problems/first-unique-character-in-a-string

## use_split, use_set

##### mails_in_arr (use_split, use_set); rm dot, rm chars after '+'

- EG
- SUMMA
- loop mail_arr
- mail, split('@'), split('+'), replace dot;
- set.add (unique), set.size
- https://leetcode.com/problems/unique-email-addresses

<br/>
<br/>

## use divide, use_remain

##### \_\_a\_\_b_c\_\_\_; distibute space (use_divide, use_remain), extra at end

- EG
- SUMMA
- edge_case (1_word)
- how_many_word
- how_many_space
- space_segment = how_many_space / (how_many_word - 1); 4 words, 3 spaces
- remain = how_many_space % (how_many_word - 1)
- join
- https://leetcode.com/problems/rearrange-spaces-between-words/

<br/>
<br/>

## const_var && variable_var in loop

##### USA, Cap, cap; const_var && variable_var in loop

- EG
- SUMMA
- loop chars (i=1)
- in_loop, const_var && variable_var;
- if 1st up/low, not matter; 2nd !same rest, re false
- if 1st_low && rest_up, re false
- https://leetcode.com/problems/detect-capital

##### pattern_form_whole, cut_half, max_pattern_len; const_pattern VS variable_neighbour

- EG
- ..
- SUMMA
- loop max_pattern_len (s -> b), const_pattern (in_subloop)
- sub_loop; const_pattern VS sub(i, j) - variable_neighbour
- ..
- https://leetcode.com/problems/repeated-substring-pattern

<br/>
<br/>

## ++var, --var

##### ++parent(++var), --child(--var)

- EG
- SUMMA
- parent_pool_hash
- loop child_str
- if(parent_pool_hash[child] !== undef && --parent_pool_hash[child] >= 0, use_hash)
- https://leetcode.com/problems/ransom-note

##### ++vertical(++var), --vertical(--var); ++horizontal(++var), --horizontal(--var)

- EG
- SUMMA
- loop chars (e.g. LLRRUD, robot move)
- ++vertical(++var), --vertical(--var); ++horizontal(++var), --horizontal(--var)
- https://leetcode.com/problems/robot-return-to-origin

<br/>
<br/>

## slide_word_in_str

##### "aabc", [ab, bc]; a<b>abc</b>; build_mem, slide_word(i, i+len)

- EG
- SUMMA
- build_mem
- loop ele (words)
- loop tar (str)
- dynamic loop_len
- slide word (j, j+len), (s.len - w.len, dynamic_loop)
- loop mind_map
- start_loop, <b>
- mid_loop: greedy
- end_loop, </b>
- https://massivealgorithms.blogspot.com/2017/06/leetcode-616-add-bold-tag-in-string.html

<br/>
<br/>

## largest is uncommon

###### largest uncommon, abcde..... z VS abc, largest

- EG
- SUMMA
- e.g. abc === abc, re -1, no uncommon
- e.g. abcde..... z VS abc, largest, uncommon
- https://leetcode.com/problems/longest-uncommon-subsequence-i

<br/>
<br/>

## get_all_substring

##### get_all_substring

- EG
- SUMMA
- e.g. "abc"
- loop (i start; small)
- subloop (j end; big; i j cross over)
- sub(i, j)

<br/>
<br/>
<br/>
<br/>

## greatest common divisor (gcd)

##### AAAA - AAA(rm_prefix) = A, (gcd); AAA - A(rm_prefix) = A, (gcd)

- EG
- AAAA(3) - AAA(1) = A(2);
- AAA(3) - A(1) = AA(2);
- AA(3) - A(1) = AA(2);
- AA(3) - A(1) = A(2);
- A - A = 0 (done)
- SUMMA
- long - short, keep going
- recur
- (1) long > short; (2) false_case(not_prefix); (3) good_case(short.empty); (4) con(rm_prefix)
- https://leetcode.com/problems/greatest-common-divisor-of-strings

<br/>
<br/>
<br/>
<br/>

# DP

https://leetcode.com/discuss/general-discussion/491522/dynamic-programming-questions-thread

# misc dp

## each digit as group; double digit as group

##### 1D; 1,2,3 -> ABC (each digit as group), 12,3 -> KC (double digit as group); num_combo

- dp[i] === AT this ele (num_char), FINAL num_combo
- init side === 1 (num_combo_1D; flow down)
- loop ele (num_char)
- curr_digit (0 skip; 1 good flow down)
- curr_digit in 1->9(single_char); dp[i] = dp[i-1](curr digit flow down);
- <br/>
- p_digit + curr_digit (undef_0 skip; undef_1 skip; "12" good flow)
- p_digit + curr_digit in 10->26(double_char); dp[i] = dp[i](acc) + i>=2 ? dp[i-2](2 digit flow down)
- SUMMRY
- curr_digit, done; p_digit + curr_digit, done
- https://leetcode.com/problems/decode-ways

<br/>
<br/>

## digit 180 degree rotate

##### 14 -> 1(1)4(x) -> 0 (1 bad, 0); 20 -> 2(1)0(0) -> 1 (some rotate, 1); 22 -> 2(1)2(1) -> 1 (every rotate, 1)

- EG
- 0 1 2 3 4 5 6 7 8 9 (input_num)
- 0 1 5 x x 2 9 x 8 6 (digit rotate 180 degree)
- 0 0 1 0 0 1 1 0 0 1 (can rotate give 1)
-
- 14 -> 1(1)4(x) -> 0 (1 bad, 0)
- 20 -> 2(1)0(0) -> 1 (some rotate, 1)
- 22 -> 2(1)2(1) -> 1 (every rotate, 1)
- SUMMA
- 3, 4, 7 need to out early
- 2, 5, 6, 9 sure give 1; combo with 0, 1, 8 give 1
- loop input_num
- dp[i] = dp[i-1] + mycount_above(input_num)
- https://leetcode.com/problems/rotated-digits

<br/>
<br/>
<br/>
<br/>

# building matrix

## diff types of init side

##### fake_top_left_all_empty

00000
0
0
0
0

##### fake_top_1_val

01000
0
0
0
0

##### fake_left_1_val

00000
1
0
0
0

##### fake_top_vals

11111
0
0
0
0

##### fake_left_vals

10000
1
1
1
1

##### fake_top_left_vals

11111
1
1
1
1

##### physi_1_1_val

00000
01
0
0
0

##### physi_top_vals

00000
01111
0
0
0

##### physi_left_vals

00000
01
01
01
01

##### physi_top_left_vals

00000
01111
01
01
01

##### fake_top_left_vals

11111
1
1
1
1

## 1D/2D; physi_1_1_val; top_contrib, left_contrib; num_combo(add)/min/max

##### 2D; physi_1_1_val; top_contrib, left_contrib; num_combo(add)/min/max

- n+1, m+1 size
- dp[i][j] => AT THIS row, AT THIS col, FINAL num_combo
- init side => physi_1_1_val(num_combo) || fake_top_1_val || fake_left_1_val;
- loop row (n)
- loop col (m)
- dp[i][j] = dp[i-1][j](top) + dp[i][j-1](left); add
- re dp[n][m]
- https://leetcode.com/problems/unique-paths/

##### 1D; physi_1_1_val; top_contrib, left_contrib; num_combo(add)

- m+1 size
- dp[i] => AT THIS col, FINAL num_combo
- init side => physi_1_1_val(num)combo
- loop row (n)
- loop col (m)
- dp[j] = dp[j](top; press_row) + dp[j-1](left, press_row)
- re dp[m]
- https://leetcode.com/problems/unique-paths/

##### 2D; physi_1_1_val; top_contrib, left_contrib, obstacle; num_combo(add)

- n+1, m+1 size
- dp[i][j] => AT this row, AT this col, FINAL num_combo
- init side => physi_1_1_val(num_combo); dp[1][1] == 1 || 0 (dep obstacle); init_in_loop
- loop row (n)
- loop col (m)
- if obstacle, dp[i][j] = 0 (self no)
- else no obstacle, dp[i][j] = dp[i-1][j](top) + dp[i][j-1](left);
- re dp[n][m]
- https://leetcode.com/problems/unique-paths-ii/

##### 1D; physi_1_1_val; top_contrib, left_contrib, obstacle; num_combo(add)

- m+1 size
- dp[j] => AT this col, FINAL num_combo
- init side => physi_1_1_val(num_combo); dp[1] == 1 || 0 (dep obstacle); init_in_loop
- loop row (n)
- loop col (m)
- if obstacle, dp[j] = 0 (self no)
- else no obstacle, dp[j] = dp[j](top; press_row) + dp[j-1](left; press_row);
- re dp[m]
- https://leetcode.com/problems/unique-paths-ii/

##### 2D; physi_1_1_val; top_contrib, left_contrib; min_path

- n+1, m+1 size
- dp[i][j] => AT this col, AT this row, FINAL min_path
- init side => during_loop
- loop row (n)
- loop col (m)
- if 1st row, dp[i][j] = dp[i][j-1](left) + grid[i-1][j-1]
- if 1st col, dp[i][j] = dp[i-1][j](top) + grid[i-1][j-1]
- else dp[j] = MIN(dp[i][j-1](left), dp[i-1][j](top)) + grid[i-1][j-1]
- https://leetcode.com/problems/minimum-path-sum/

##### 1D; physi_1_1_val; top_contrib, left_contrib; min_path

- m+1 size
- dp[i][j] => AT this col, AT this row, FINAL min_path
- init side => during_loop
- loop row (n)
- loop col (m)
- if 1st row, dp[j] = dp[j-1](left; press_row) + grid[i-1][j-1]
- if 1st col, dp[j] = dp[j](top; press_row) + grid[i-1][j-1]
- else dp[j] = MIN(dp[j-1](left; press_row), dp[j](top; press_row)) + grid[i-1][j-1]
- https://leetcode.com/problems/minimum-path-sum/

##### 2D; fake_top_left_vals; bottom_up, bottom_contrib, bottom_right_contrib; min_path

- n, m size (dp_size == ma_size)
- dp[i-1][j] => AT this col, AT this row, FINAL min_path
- init side => fill_bottom_row
- loop row (bottom_up; i=n-1(ele); i>=0(ele))
- loop col (bottom_forward; j=0; j>=i(j+1))
- dp[i-1][j] = MIN(dp[i-1][j], dp[i-1][j+1]) + grid[i-1][j](dp_use_i)
- re dp[0][0]
- https://leetcode.com/problems/triangle/

##### 1D; fake_top_left_vals; bottom_up, bottom_contrib, bottom_right_contrib; min_path

- m size
- dp[j] => AT this col, FINAL min_path
- init side => fill_bottom_row
- loop row (bottom_up; i=n-1(ele); i>=0(ele))
- loop col (bottom_forward; j=0; j>=i(j+1))
- dp[j] = MIN(dp[j](press_row), dp[j+1](press_row)) + grid[i-1][j]
- re dp[0]
- https://leetcode.com/problems/triangle/

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

## 3 loops; dp_3D; dimensions; multi_tar; max_combo

##### 3 loops; dp_3D; NO_ORDER ele, reach tar_n, tar_m; max_combo

- n+1, m+1, z+1 size
- dp[k][i][j] === AT this ele, AT this tar_m, AT this tar_n, FINAL max_combo
- init side === 0 (max_nopress, so 0s; below_val)
- loop ele (forward, NO_ORDER)
- loop tar_m (forward)
- loop tar_n (forward)
- direction
- j >= zero && k >= one, dp[k][i][j] = ma( dp[i-1][j][k](top, ele_1st), 1 + dp[i-1][j-zero][k-one](diag, init_noval, val(1)) )
- else, dp[k][i][j] = dp[i-1][j][k](top, ele_1st)
- https://leetcode.com/problems/ones-and-zeroes/

## 3 loops; dp_2D, press_ele; dimensions; num_combo(add)

##### 3 loops; dp_2D, press_ele; n dice, n face (ORDER ele), reach tar; num_combo(add)

- n+1, m+1 size
- 3D; dp[dice][face][tar] => AT this dice, AT this face, AT this tar, FINAL num_combo(add)
- 2D, press_ele; dp[i][j] => AT this dice, AT this tar, FINAL num_combo(add)
- init side => physi_1_1_val (num_combo_press, so 1; below_noval)
- loop dice (forward)
- loop tar (forward; ORDER, 1+2, 2+1, diff)
- loop face (forward; ele)
- direction
- j>=k, dp[i][j] = dp[i][j](orig, tar_1st, ORDER; press_ele) + dp[i][j-k(face)](left, num_combo; press_ele) % module;
- SUMMARY
- loop1, loop2, loop3 ORDER_DIFF dp[3][2][1]
- https://leetcode.com/problems/number-of-dice-rolls-with-target-sum

<br/>
<br/>

## num breaks into sub_num; product, square, formular_etc; max/min

##### 1D; 1 num breaks sub nums; NO_ORDER ele, reach tar; max_product

- m+1 size
- dp[j] => AT this num, FINAL max_product
- init side => 1 (multiply 1)
- loop ele (forward; NO_ORDER, 1*2, 2*1, same)
- loop tar (forward; dp_ind_constraint)
- direction
- dp[j] = MAX(dp[j](top, ele\*1st; press\*ele), dp[j-i](diag, init_x_formu_var; press_ele; x+y=tar) \* i(x\*y = max_product)), no_inject_vs
- https://leetcode.com/problems/integer-break

##### 1D; squares_addup_num; ORDER ele; reach tar; min_combo

- m+1 size
- dp[i] => AT this num, FINAL min_combo
- init side => 0 (min_press, so 0; below_val)
- loop tar (forward; ORDER? 1^2 + 2^2, affect_next_diff)
- loop ele (forward; dp_ind_constraint)
- direction
- mi = mi( mi, dp[i-j\*j](diag, init_noval, val(1); press_ele; x^2+y^2 = tar) + 1 ), inject_vs
- end_loop_up_dp
- https://leetcode.com/problems/perfect-squares

<br/>
<br/>

## cut a rod, dp_recal_constraint

##### 1D; cut a rod, unit_len_value, n\*unit_len_value; ORDER ele; reach tar; max_val

- m+1 size
- dp[i] => AT this len, FINAL max_val
- init side => 0 (max_press, so 0; below_val)
- loop tar (forward; ORDER, len1*v, len2*v, order_diff)
- loop ele (forward; dp_recal_constraint)
- direction
- dp[i] = MAX(dp[i](orig, tar_1st, ORDER; press_ele), dp[i-j(ele)](diag, init_noval, val(w); press_ele; x+y=sub_tar) + price_arr[i-j](<val(w)>) )
- https://www.lintcode.com/problem/cutting-a-rod
- https://www.lintcode.com/discuss/1266/

<br/>
<br/>

## (a+b) - (c+d)

##### 2D; NO_ORDER ele (cancel out); reach gen_tar(2d_forward_tar); min_diff(condi)

- transfer: (a + b) - (c + d), (totTar - aTar) - aTar === diff; ha = sum / 2
- n+1, ha+1 size
- dp[i][j] === AT this ele, AT this tar, FINAL condi
- init side == fake_left_vals (condi_nopress, so trues; below_noval)
- loop ele (forward; NO_ORDER)
- loop ha (forward)
- direction
- dp[i][j] = dp[i-1][j](top, ele_1st) || dp[i-1][j-i](diag, condi; x+y=ha); ma VS j(sub_tar), inject_vs
- https://leetcode.com/problems/last-stone-weight-ii/

##### 1D; NO_ORDER ele; (canncel out); reach gen_tar(1d_gen_tar_backward); min_diff

- transfer: ha = sum / 2
- ha+1 size
- dp[j] === AT this ha; FINAL condi (question min_diff; dp[j] == true, to_update_max)
- init side == true (condi_press, so true; below_noval)
- loop ele (forward; NO_ORDER, 1+2, 2+1, same)
- loop ha (backward, 1d_gen_tar; dp_ind_constraint)
- direction
- dp[j] = dp[j](top, ele_1st; press_ele) || dp[j-i(ele)](diag, condi; press_ele; x+y=ha); ma VS j(sub_tar), inject_vs
- https://leetcode.com/problems/last-stone-weight-ii/discuss/635621/Dp-solution-with-explaination-(cpp)

##### 1D; NO_ORDER ele; (add -/+); reach gen_tar(1d_gen_tar_backward); num_combo(add)

- transfer: s(#) = [1, 2, 3, 4, 5], tar = 3
- s(#) = [+1, -2, +3, -4, +5], tar = 3
- (1+3+5) - (2+4) == 3 ====> s(+p) - s(+n) == tar
- s(+p) - s(+n) + s(#) == tar + s(#)
- s(+p) - s(+n) + s(+p) + s(+n) == tar + s(+p) + s(+n)
- 2 \* s(+p) == tar + s(#)
- s(+p) == (tar + s(#)) / 2
- x
- x
- m+1 size
- dp[j] === AT this ha, FINAL num_combo(add)
- init side == 1 (num_combo_press, so 1; below_noval)
- loop ele (forward; NO_ORDER, 1+2, 2+1, same)
- loop ha (backward, 1d_gen_tar; dp_ind_constraint)
- direction
- dp[j] = dp[j](top, ele_1st; press_ele) + dp[j-i(ele)](left, num_combo_left; press_ele; x+y=tar)
- https://medium.com/swlh/solving-the-target-sum-problem-with-dynamic-programming-and-more-b76bd2a661f9
- https://leetcode.com/problems/target-sum/discuss/97334/Java-(15-ms)-C%2B%2B-(3-ms)-O(ns)-iterative-DP-solution-using-subset-sum-with-explanation

##### 2D; NO_ORDER ele; (2 equal set); reach gen_tar(1d_backward_tar); condi

- transfer: ha = sum / 2
- n+1, ha+1 size
- dp[i][j] === AT this ele, AT this tar, FINAL condi
- init side == fake_left_vals (condi_nopress, so trues; below_noval)
- loop ele (forward; NO_ORDER)
- loop ha (forward)
- direction
- dp[i][j] = dp[i-1][j](top, ele_1st) || dp[i-1][j-i](diag, condi; x+y=tar)
- https://leetcode.com/problems/partition-equal-subset-sum/discuss/90592/01-knapsack-detailed-explanation

##### 1D; NO_ORDER ele; (2 equal set); reach gen_tar(1d_backward_tar); condi

- transfer: ha = sum / 2
- ha+1 size
- dp[i] === AT this ha, FINAL condi (question condi)
- init side == true (condi_press, so true; below_noval)
- loop ele (forward; NO_ORDER, 1+2, 2+1, same)
- loop ha (backward; gen_tar; dp_ind_constraint)
- direction
- dp[j] = dp[j](top, ele_1st; press_ele) || dp[j-i(ele)](diag, condi; press_ele; x+y=tar);
- https://leetcode.com/problems/partition-equal-subset-sum/discuss/90592/01-knapsack-detailed-explanation

<br/>
<br/>

## child chars(ele); parent chars(tar); action; condi

##### 2D; child chars(ele); parent chars(tar); chop_char_subseq; condi

- n+1, m+1 size
- dp[i][j] => AT this child_char; AT this parent_char; FINAL condi(chop_char_subseq);
- init side => fake_top_vals (each_child_use_diag)
- loop child (child_1st, each_child_use_diag)
- loop parent
- direction
- if, dp[i][j-1](left, each_child_use_diag) == true, dp[i][j](condi) = true
- if, dp[i-1][j-1](diag, each_child_use_diag) == true && c[i] == p[j](char == char), dp[i][j](condi) = true
- https://leetcode.com/problems/is-subsequence/

##### 2D; child chars(ele); parent chars(tar); head_tail_equal, sub_head_tail_equal; condi

- n, m size (dp size == str size, becau head tail)
- dp[i][j] => AT this end_char_index; AT this start_char_index; FINAL condi(is_palindrom);
- init side => nothing (dp size == str size)
- loop parent (parent_1st, head_tail_compress)
- loop child
- direction
- if, p[i] == c[i](char == char), i-j<=2(shortcut), dp[i][j] = true
- if, p[i] == c[i](char == char), dp[i-1][j+1](else) == true, dp[i][j] = true
- https://leetcode.com/problems/longest-palindromic-substring/

##### 1D; child chars(ele); parent chars(tar); child_build_parent; condi

- m+1 size
- dp[i] === AT str posi; FINAL condi(from question)
- init side === true (condi_press, so true; below_noval)
- loop parent (parent_1st, child_build_parent)
- loop child
- direction
- dp[i] = ( dp[i](orig, tar_1st, ORDER; press_child) || ( dp[i - w_l](left, p_w + c_w == f_w; press_child; w_l + rest = fw_l) && s.sub == w(word_match) ) )
- https://leetcode.com/problems/word-break

<br/>
<br/>

## ele; addup to tar; loop_ele, loop_tar; num_combo/min/max

##### 2D; NO_ORDER ele; addup to tar; num_combo(add) (vs min_num_combo)

- n+1, m+1 size
- dp[i][j] === AT this ele, AT this tar, FINAL num_combo
- init side => fake_left_vals (num_combo_nopress, so 1s; below_noval)
- loop ele (forward; NO_ORDER)
- loop tar (forward)
- direction
- j>=i(w), dp[i][j] = dp[i-1][j](top, ele_1st) + dp[i][j-i(ele)](left, num_combo_left)
- else, dp[i][j] = dp[i-1][j](top)
- https://leetcode.com/problems/coin-change-2/

##### 1D; NO_ORDER ele; addup to tar; num_combo(add) (vs min_num_combo)

- m+1 size
- dp[j] === AT this tar, FINAL num_combo
- init side === 1 (num_combo_press, so 1; below_noval)
- loop ele (forward; NO_ORDER, 1+2, 2+1, same)
- loop tar (forward, dp_ind_constraint)
- direction
- dp[j] = dp[j](top, ele_1st; press_ele) + dp[j-i(ele)](left, num_combo_left; press_ele; x+y=tar);
- https://leetcode.com/problems/coin-change-2/

##### 2D; NO_ORDER ele; addup to tar; min_num_combo (vs num_combo)

- n+1, m+1 size
- dp[i][j] === AT this ele, AT this tar, FINAL min_num_combo
- init side === 0 (min_nopress, so 0s; below_val)
- loop ele (forward)
- loop tar (forward)
- direction
- j>=i(w): dp[i][j] = mi( dp[i-1][j](top, ele_1st, NO_ORDER), 1 + dp[i][j-i(ele)](left, num_combo_left) )
- else: dp[i][j] = dp[i-1][j]
- https://leetcode.com/problems/coin-change/

##### 1D; NO_ORDER ele; addup to tar; min_num_combo (vs num_combo)

- m+1 size
- dp[j] => AT this num, FINAL min_num_combo/-1
- init side => 0 (min_press, so 0; below_val)
- loop ele (forward; NO_ORDER, 1+2, 2+1, same)
- loop tar (forward; dp_ind_constraint, j=w; j<=t)
- direction
- dp[j] = MIN(dp[j](top, ele_1st, NO_ORDER; press_ele), 1 + dp[j-i(ele)](left, num_combo_left; press_ele; x+y=tar) )
- https://leetcode.com/problems/coin-change/

## ele; addup to tar; loop_tar, loop_ele; permu_num_combo

##### 2D; ORDER ele; addup to tar; loop_tar, loop_ele; permu_num_combo(add)

- n+1, m+1 size
- dp[i][j] === AT this tar, AT this ele, FINAL num_combo (add)
- init side => fake_top_vals (num_combo_nopress, so 1s; below_noval)
- loop tar (forward; ORDER, question said permu)
- loop ele (forward; dp_ind_constraint)
- direction
- dp[i][j] = dp[i][j](orig, tar_1st, ORDER) + dp[i-j(ele)][ele.len](diag?, permu_last_len_max; x+y=tar; ele.len_last, tar_1st); (add)
- https://leetcode.com/problems/combination-sum-iv/discuss/702432/Java-or-1D-or-2D-or-Bottom-Up-or-Top-Down

##### 1D; ORDER ele; addup to tar; loop_tar, loop_ele; permu_num_combo(add)

- m+1 size
- dp[i] === AT this tar, FINAL num_combo (add)
- init side => 1 (num_combo_press, so 1; below_noval)
- loop tar (forward; ORDER, question said permu)
- loop ele (forward; dp_ind_constraint)
- direction
- dp[i] = dp[i](orig, tar_1st, ORDER; press_ele) + dp[i-j(ele)](diag?, permu_last_len_max; press_ele; x+y=tar)
- https://leetcode.com/problems/combination-sum-iv/

<br/>
<br/>

# binary search

# hash

# 2 pointer

# str

# backtrack

- https://leetcode.com/problems/partition-to-k-equal-sum-subsets/discuss/180014/Backtracking-Thinking-Process

# BST - DFS

# b-tree, link

# important questions

https://aaronice.gitbook.io/lintcode/problem-solving-summary/

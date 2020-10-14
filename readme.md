# str

## i, j cross over; 2 portions; i write, j read

##### rev word in str; rev_str (group stay), rev each word, clean space

- EG
- SUMMA => rev str; rev each word (group stay); clean_space (i write, j read)
- (1) rev whole str
- i, j will cross over;
- swap;
- (2) rev each word (group stay)
- 2 portions: 1. find start_posi; 2. i skip space
- 2 portions: 1. j find end_posi; 2. j skip char
- (3) clean_space (i write, j read)
- a.join('').substring(0, i), use copy_left, right waste
- skip_front_space, copy, skip_end_space, 1 space;
- https://leetcode.com/problems/reverse-words-in-a-string

##### rev word in str; no_lead_end_space, word_separate_1_space; rev_str (group stay), rev each word, clean space;

- SUMMA => same as above;
- or diff (1) clean_space (2) rev each word (3) rev whole str
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

## start, end, start+1(LOOK_AHEAD), end-1(LOOK_BACK); start <-> end-1 || start+1 <-> end; i move right, j move left

##### start, end, start+1(LOOK_AHEAD), end-1(LOOK_BACK); start <-> end-1 (del_right) || start+1 <-> end (del_left); i move right, j move left

- EG
- c|abba -> c(s)a(s+1)bb(e-1)a(e) -> (s+1 <-> e) -> del_left
- abba|c -> a(s)b(s+1)ba(e-1)c(e) -> (s <-> e-1) -> del_right
- SUMMA
- loop input_str
- (i, j; conid; ++i, --j) (combine ind, cross over)
- sub_loop; s+1 <-> e (del_left); i, j cross over
- sub_loop, s <-> e-1 (del_right); i, j cross over
- https://leetcode.com/problems/valid-palindrome-ii

<br/>
<br/>

## i(start), j(end), word_len

##### count(#) and say(def); i(start), j(start); i stay, j move right; loop_same_kind

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

##### count_last_word_len; i(end), j(end); i stay, j move right; none

- EG
- \_ab\_\_ab_bc\_\_
- SUMMA => i(end), j(end); i stay, j move right
- loop input_str;
- i stays, j move right
- https://leetcode.com/problems/length-of-last-word

##### is palindrome; i(start), j(end); i move right, j move left; loop_skip_alph#

- EG
- SUMMA
- loop input_str;
- i(start), j(end)
- sub_loop(skip_alph#) ++i
- sub_loop(skip_alph#) --j
- https://leetcode.com/problems/valid-palindrome

##### rev str by word; no_lead_end_space, word_separate_1_space; word_len

- EG
- SUMMA
- loop str (until j hit space)
- rev_word
- end_loop, rev_last_word, rev_entire
- https://www.lintcode.com/problem/reverse-words-in-a-string-ii

<br/>
<br/>

## insert: s.s(0, i) + val + s.s(i+1)

##### 1|234|567 -> 1.234.567; i(no), j(end); i(no), j move left; insert: sub(0, i) + val + sub(i)

- EG
- SUMMA => i(no), j(end); i(no), j move left
- loop input_str;
- i(no), j(end); i(no), j move left
- 1234567 -> 1.234.567 (backward; 1st ".", 2 steps; 2nd ".", 3 steps, becau "." added)
- insert => sub(0, ind) + val + sub(ind)
- https://leetcode.com/problems/thousand-separator

##### ++++ -> [--++, +--+, ++--]; i=1(LOOK_BACK), insert

- EG
- SUMMA
- loop input_str
- i=1(LOOK_BACK); s.sub(0, i-1, i_look_back) + "--" + s.sub(i+1, 2_char)
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

- ..
- ..
- FUNC reverseWord:
- skip_loop(i < j(i_start, j_end) || (i_inbound, i_skip_space)) ++i;
- skip_loop(j < i(i_start, j_end) || (j_inbound, j_skip_char)) ++j;
- FUNC cleanSpace:
- skip_loop(j_inbound, j_skip_space) ++j;
- skip_loop(j_inbound, j_skip_char) copy;
- skip_loop(j_inblound, j_skip_space) ++j;
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
- abc|abc(max_p_len==6/2==3) -> (a)(b)cabc (len_1, x) -> (ab)(ca)bc (len_2, x) -> (abc)(abc) (len_3, y)
- a|b|c(max_p_len==3/2==1.5==1, 2\*2 too big) -> (a)(b)(c) (len_1, x)
- SUMMA => pattern_form_whole, cut_half, max_pattern_len; pattern(inc)\_match_neighbour(inc)
- loop max_pattern_len (small -> big)
- sub_loop s.sub(0, i) == s.sub(i, i + len - 1)
- https://leetcode.com/problems/repeated-substring-pattern

<br/>
<br/>

## ind + range match

##### search_needle_in_parent; i(start), j(sub_start); i, j move right; ind + range match

- EG
- SUMMA
- edge_case => parent_empty; child_empty; both_empty
- loop parent ( p[i] )
- loop child ( p[i+j(sub)] == c[j(sub)]; ind + range match)
- https://leetcode.com/problems/implement-strstr

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
- loop input_str
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
- loop input_str
- if h[ s[i] + s[i+1] ], fast_forward
- else 1_char_acc
- https://leetcode.com/problems/roman-to-integer

<br/>
<br/>

## loop hash, loop tar(full_consume_1_hash)

##### 3999(int) -> (3000)(900)(90)(9) (full_consume_1_hash) -> (MMM)(CM)(?)(?)

- EG
- 3999 -> (3000)(900)(90)(9) -> (MMM)(CM)(?)(?)
- SUMMA => tar full consume 1 ele
- build HASH (from Q, hash no order, arr.reverse() has order)
- loop roman_hash
- loop tar (full_consume_1_hash)
- https://leetcode.com/problems/integer-to-roman

<br/>
<br/>

## build_hash, access_hash, consume_hash

##### parent_pool >> child_str, build_hash; parent_pool_hash[child_str], access_hash; --parent_pool_hash[child_str], consume_hash

- EG
- SUMMA
- parent_pool >> child_str, build_hash
- loop child_str
- if(parent_pool_hash[child] !== undef, access_hash && --parent_pool_hash[child] >= 0, consume_hash)
- https://leetcode.com/problems/ransom-note

# DP

https://leetcode.com/discuss/general-discussion/491522/dynamic-programming-questions-thread

# misc dp

## ?

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

Leetcode 前 400 重点 250 题 题号 题目名称 讲解链接
1 Two Sum 视频讲解

3 Longest Substring Without Repeating Characters 视频讲解

4 Median of Two Sorted Arrays 视频讲解

5 Longest Palindromic Substring 视频讲解

7 Reverse Integer 视频讲解

8 String to Integer (atoi) 视频讲解

10 Regular Expression Matching 视频讲解

11 Container With Most Water 视频讲解

12 Integer to Roman 视频讲解

13 Roman to Integer 视频讲解

15 3Sum 视频讲解

17 Letter Combinations of a Phone Number 视频讲解

18 4Sum 视频讲解

20 Valid Parentheses 视频讲解

22 Generate Parentheses 视频讲解

23 Merge k Sorted Lists 视频讲解

26 Remove Duplicates from Sorted Array 视频讲解

27 Remove Element 视频讲解

28 Implement strStr() 视频讲解

29 Divide Two Integers 视频讲解

31 Next Permutation 视频讲解

32 Longest Valid Parentheses 视频讲解

33 Search in Rotated Sorted Array 视频讲解

34 Find First and Last Position of Element in Sorted Array 视频讲解

35 Search Insert Position 视频讲解

36 Valid Sudoku 视频讲解

37 Sudoku Solver 视频讲解

38 Count and Say 视频讲解

39 Combination Sum 视频讲解

40 Combination Sum II 视频讲解

41 First Missing Positive 视频讲解

42 Trapping Rain Water 视频讲解

43 Multiply Strings 视频讲解

44 Wildcard Matching 视频讲解

45 Jump Game II 视频讲解

46 Permutations 视频讲解

47 Permutations II 视频讲解

48 Rotate Image 视频讲解

49 Group Anagrams 视频讲解

50 Pow(x, n) 视频讲解

51 N-Queens 视频讲解

52 N-Queens II 视频讲解

53 Maximum Subarray 视频讲解

54 Spiral Matrix 视频讲解

55 Jump Game 视频讲解

56 Merge Intervals 视频讲解

57 Insert Interval 视频讲解

59 Spiral Matrix II 视频讲解

60 Permutation Sequence 视频讲解

62 Unique Paths 视频讲解

64 Minimum Path Sum 视频讲解

65 Valid Number 视频讲解

66 Plus One 视频讲解

67 Add Binary 视频讲解

68 Text Justification 视频讲解

69 Sqrt(x) 视频讲解

70 Climbing Stairs 视频讲解

71 Simplify Path 视频讲解

72 Edit Distance 视频讲解

74 Search a 2D Matrix 视频讲解

75 Sort Colors 视频讲解

76 Minimum Window Substring 视频讲解

77 Combinations 视频讲解

78 Subsets 视频讲解

79 Word Search 视频讲解

80 Remove Duplicates from Sorted Array II 视频讲解

81 Search in Rotated Sorted Array II 视频讲解

82 Remove Duplicates from Sorted List II 视频讲解

84 Largest Rectangle in Histogram 视频讲解

85 Maximal Rectangle 视频讲解

88 Merge Sorted Array 视频讲解

90 Subsets II 视频讲解

91 Decode Ways 视频讲解

96 Unique Binary Search Trees 视频讲解

98 Validate Binary Search Tree 视频讲解

101 Symmetric Tree 视频讲解

104 Maximum Depth of Binary Tree 视频讲解

108 Convert Sorted Array to Binary Search Tree 视频讲解

110 Balanced Binary Tree 视频讲解

111 Minimum Depth of Binary Tree 视频讲解

112 Path Sum 视频讲解

113 Path Sum II 视频讲解

115 Distinct Subsequences 视频讲解

116 Populating Next Right Pointers in Each Node 视频讲解

117 Populating Next Right Pointers in Each Node II 视频讲解

121 Best Time to Buy and Sell Stock 视频讲解

122 Best Time to Buy and Sell Stock II 视频讲解

123 Best Time to Buy and Sell Stock III 视频讲解

124 Binary Tree Maximum Path Sum 视频讲解

125 Valid Palindrome 视频讲解

126 Word Ladder II 视频讲解

127 Word Ladder 视频讲解

128 Longest Consecutive Sequence 视频讲解

130 Surrounded Regions 视频讲解

133 Clone Graph 视频讲解

134 Gas Station 视频讲解

138 Copy List with Random Pointer 视频讲解

139 Word Break 视频讲解

140 Word Break II 视频讲解

142 Linked List Cycle II 视频讲解

146 LRU Cache 视频讲解

149 Max Points on a Line 视频讲解

150 Evaluate Reverse Polish Notation 视频讲解

152 Maximum Product Subarray 视频讲解

153 Find Minimum in Rotated Sorted Array 视频讲解

154 Find Minimum in Rotated Sorted Array II 视频讲解

155 Min Stack 视频讲解

157 Read N Characters Given Read4 视频讲解

158 Read N Characters Given Read4 II - Call multiple times 视频讲解

161 One Edit Distance 视频讲解

162 Find Peak Element 视频讲解

163 Missing Ranges 视频讲解

168 Excel Sheet Column Title 视频讲解

171 Excel Sheet Column Number 视频讲解

173 Binary Search Tree Iterator 视频讲解

174 Dungeon Game 视频讲解

186 Reverse Words in a String II 视频讲解

188 Best Time to Buy and Sell Stock IV 视频讲解

189 Rotate Array 视频讲解

191 Number of 1 Bits 视频讲解

198 House Robber 视频讲解

200 Number of Islands 视频讲解

201 Bitwise AND of Numbers Range 视频讲解

202 Happy Number 视频讲解

204 Count Primes 视频讲解

205 Isomorphic Strings 视频讲解

207 Course Schedule 视频讲解

208 Implement Trie (Prefix Tree) 视频讲解

209 Minimum Size Subarray Sum 视频讲解

210 Course Schedule II 视频讲解

211 Add and Search Word - Data structure design 视频讲解

212 Word Search II 视频讲解

213 House Robber II 视频讲解

214 Shortest Palindrome 视频讲解

215 Kth Largest Element in an Array 视频讲解

216 Combination Sum III 视频讲解

217 Contains Duplicate 视频讲解

218 The Skyline Problem 视频讲解

219 Contains Duplicate II 视频讲解

220 Contains Duplicate III 视频讲解

221 Maximal Square 视频讲解

224 Basic Calculator 视频讲解

225 Implement Stack using Queues 视频讲解

226 Invert Binary Tree 视频讲解

227 Basic Calculator II 视频讲解

228 Summary Ranges 视频讲解

230 Kth Smallest Element in a BST 视频讲解

231 Power of Two 视频讲解

232 Implement Queue using Stacks 视频讲解

235 Lowest Common Ancestor of a Binary Search Tree 视频讲解

236 Lowest Common Ancestor of a Binary Tree 视频讲解

238 Product of Array Except Self 视频讲解

239 Sliding Window Maximum 视频讲解

240 Search a 2D Matrix II 视频讲解

241 Different Ways to Add Parentheses 视频讲解

242 Valid Anagram 视频讲解

244 Shortest Word Distance II 视频讲解

245 Shortest Word Distance III 视频讲解

249 Group Shifted Strings 视频讲解

251 Flatten 2D Vector 视频讲解

252 Meeting Rooms 视频讲解

253 Meeting Rooms II 视频讲解

254 Factor Combinations 视频讲解

256 Paint House 视频讲解

257 Binary Tree Paths 视频讲解

261 Graph Valid Tree 视频讲解

263 Ugly Number 视频讲解

264 Ugly Number II 视频讲解

265 Paint House II 视频讲解

268 Missing Number 视频讲解

269 Alien Dictionary 视频讲解

270 Closest Binary Search Tree Value 视频讲解

271 Encode and Decode Strings 视频讲解

273 Integer to English Words 视频讲解

274 H-Index 视频讲解

275 H-Index II 视频讲解

276 Paint Fence 视频讲解

277 Find the Celebrity 视频讲解

278 First Bad Version 视频讲解

279 Perfect Squares 视频讲解

280 Wiggle Sort 视频讲解

282 Expression Add Operators 视频讲解

283 Move Zeroes 视频讲解

284 Peeking Iterator 视频讲解

285 Inorder Successor in BST 视频讲解

286 Walls and Gates 视频讲解

287 Find the Duplicate Number 视频讲解

288 Unique Word Abbreviation 视频讲解

289 Game of Life 视频讲解

290 Word Pattern 视频讲解

291 Word Pattern II 视频讲解

293 Flip Game 视频讲解

294 Flip Game II 视频讲解

295 Find Median from Data Stream 视频讲解

296 Best Meeting Point 视频讲解

297 Serialize and Deserialize Binary Tree 视频讲解

298 Binary Tree Longest Consecutive Sequence 视频讲解

299 Bulls and Cows 视频讲解

300 Longest Increasing Subsequence 视频讲解

301 Remove Invalid Parentheses 视频讲解

302 Smallest Rectangle Enclosing Black Pixels 视频讲解

305 Number of Islands II 视频讲解

307 Range Sum Query - Mutable 视频讲解

308 Range Sum Query 2D - Mutable 视频讲解

309 Best Time to Buy and Sell Stock with Cooldown 视频讲解

311 Sparse Matrix Multiplication 视频讲解

312 Burst Balloons 视频讲解

314 Binary Tree Vertical Order Traversal 视频讲解

316 Remove Duplicate Letters 视频讲解

317 Shortest Distance from All Buildings 视频讲解

318 Maximum Product of Word Lengths 视频讲解

322 Coin Change 视频讲解

323 Number of Connected Components in an Undirected Graph 视频讲解

324 Wiggle Sort II 视频讲解

325 Maximum Size Subarray Sum Equals k 视频讲解

329 Longest Increasing Path in a Matrix 视频讲解

334 Increasing Triplet Subsequence 视频讲解

336 Palindrome Pairs 视频讲解

337 House Robber III 视频讲解

338 Counting Bits 视频讲解

339 Nested List Weight Sum 视频讲解

340 Longest Substring with At Most K Distinct Characters 视频讲解

341 Flatten Nested List Iterator 视频讲解

346 Moving Average from Data Stream 视频讲解

347 Top K Frequent Elements 视频讲解

348 Design Tic-Tac-Toe 视频讲解

350 Intersection of Two Arrays II 视频讲解

351 Android Unlock Patterns 视频讲解

352 Data Stream as Disjoint Intervals 视频讲解

353 Design Snake Game 视频讲解

354 Russian Doll Envelopes 视频讲解

355 Design Twitter 视频讲解

359 Logger Rate Limiter 视频讲解

361 Bomb Enemy 视频讲解

362 Design Hit Counter 视频讲解

364 Nested List Weight Sum II 视频讲解

367 Valid Perfect Square 视频讲解

374 Guess Number Higher or Lower 视频讲解

375 Guess Number Higher or Lower II 视频讲解

376 Wiggle Subsequence 视频讲解

377 Combination Sum IV 视频讲解

378 Kth Smallest Element in a Sorted Matrix 视频讲解

379 Design Phone Directory 视频讲解

380 Insert Delete GetRandom O(1) 视频讲解

381 Insert Delete GetRandom O(1) - Duplicates allowed 视频讲解

384 Shuffle an Array 视频讲解

385 Mini Parser 视频讲解

389 Find the Difference 视频讲解

394 Decode String 视频讲解

398 Random Pick Index

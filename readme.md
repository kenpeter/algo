# list

- https://www.geeksforgeeks.org/must-do-coding-questions-for-companies-like-amazon-microsoft-adobe/#arrays

<br/>
<br/>
<br/>
<br/>
<br/>

# arr

## out_loop (many cycles); in_loop (1 cycle); big 2 side, down; small 2 side, up

##### out_loop (many cycles); in_loop (1 cycle); big 2 side, down; small 2 side, up

- EG
- 1st cycle
- [1, 6(i), 3, 4, 3, 5](just_loop, no_chg) -> [1, 5, 3, 4, 3, 5](t_chg)
- [1, 6, 3(i), 4, 3, 5](..) -> [1, 5, 4, 4, 3, 5](..)
- [1, 6, 3, 4(i), 3, 5](..) -> [1, 4, 4, 3, 3, 5](..)
- [1, 6, 3, 4, 3(i), 5](..) -> [1, 4, 4, 3, 4, 5](..)
-
- 2nd cycle
- [1, 4(i), 4, 3, 4, 5](just_loop, no_chg) -> [1, 4, 4, 3, 4, 5](t_chg)
- [1, 4, 4(i), 3, 4, 5](..) -> [1, 4, 4, 3, 4, 5](..)
- [1, 4, 4, 3(i), 4, 5](..) -> [1, 4, 4, 4, 4, 5](..)
- [1, 4, 4, 3, 4(i), 5](..) -> [1, 4, 4, 4, 4, 5](..)
-
- 3rd cycle
- [1, 4(i), 4(i), 4(i), 4(i), 5](i_exhaust, no more)
- SUMMA
-
- out_loop (many cycles)
-
- tmp = arr (clone)
- in_loop (1 cycle)
- big 2 side, down; op=true;
- small 2 side, up; op=true;
- if op == false, break
- end_in_loop, arr = tmp (revert);
-
- https://leetcode.com/problems/array-transformation
- https://www.programmersought.com/article/74733416873

<br/>
<br/>

## intersection(1_ele_in_another) -> unique(set); unique(set) -> intersection(1_ele_in_another);

##### [1, 1, 1] and [1, 1] -> [1, 1]-> [1]; intersection -> unique

- EG
- SUMMA
- intersection: (1_ele_in_another)
- unique: ([...set])
-
- https://leetcode.com/problems/intersection-of-two-arrays

##### [1, 1, 1] and [1, 1] -> [1, 1] -> [1]; unique -> intersection

- EG
- SUMMA
- unique: ([...set], [...set])
- intersection: (1_ele_in_another)
-
- https://leetcode.com/problems/intersection-of-two-arrays

##### [1, 1, 1] and [1, 1] -> [1, 1]-> [1]; unique -> intersection

- EG
- SUMMA
- unique: (map_ns1[ns1])
- intersection: map_ns1[ns2] -> map_ns2[ns2]
-
- https://leetcode.com/problems/intersection-of-two-arrays

<br/>
<br/>
<br/>
<br/>

## ele independent (update_no_matter_what); sum independent, (conditional_update)

##### ele independent (update_no_matter_what, even/odd); sum independent, (conditional_update, even)

- EG
- SUMMA
- cal total_even_sum (with input_query)
- ele independent; ele (update_no_matter_what, even/odd)
- sum independent; (conditional_update, even)
-
- loop ele
-
- if ele even, sum = sum - ele (conditional_update, even; if !minus, ele dup)
-
- new_ele = ele + val (update_no_matter_what, even/odd)
- if new_ele even, sum = sum + new_ele; (conditional_update, even)
- res.push(sum)
- https://leetcode.com/problems/sum-of-even-numbers-after-queries

<br/>
<br/>

## 1 loop, 2_same_kind_var track pureness

##### [1, 2, 3], good; [3, 2, 1], good; [2, 2, 2], good; [1, 2, -100, 100], bad

- EG
- [1, 2, 3](asc), pure (1 loop, 2_same_kind_var track pureness)
- [3, 2, 1](desc), prue (..)
- [2, 2, 2](equal), pure (..)
- [1, 2, -100, 100], !pure (..)
-
- SUMMA
- loop eles
- if asc + desc set, !pure (1 loop, 2_same_kind_var track pureness)
- if asc set, pure (..)
- if desc set, pure (..)
- if asc + desc !set, !touch, equal (..)
- https://leetcode.com/problems/monotonic-array

<br/>
<br/>

## slide_window_avoid_rest_ops

##### slide_window_avoid_rest_ops; res == 1; i < a.len - len VS a[i+len]; sorted, a[i] == start_val, a[i+len] == end_val, start_val == end_val

- EG
- [1, 2, 2, 6, 6, 6, 6, 7, 10], len = 9, quarter_len = 9/4 -> floor(2.25) = 2;
- ceil(2.25) = 3, 3\*4_quarter = 12_too_big
- SUMMA
-
- len = a.len / 4 (floor)
- single_loop(i=0; i < a.len - len; ..); (i < a.len - len VS a[i+len])
- if a[i] == a[i + len], re a[i]; (sorted, a[i] == start_val, a[i+len] == end_val, start_val == end_val)
- https://leetcode.com/problems/element-appearing-more-than-25-in-sorted-array

##### slide_window_avoid_rest_ops; [2, 3, 1, 1, 1] -> [1, 1, 1, 2, 3]; res == 1; i < a.len - len VS a[i+len]; sorted, a[i] == start_val, a[i+len] == end_val, start_val == end_val

- EG
- SUMMA
- len => 5_odd / 2 = 2.5, ceil, len >= 3 (half)
- len => 4_even / 2 = 2, nothing, len > 2 (half)
-
- len = a.len / 2 (ceil)
- single_loop(i=0; i < a.len - len; ..) (i < a.len - len VS a[i+len])
- if a[i] == a[i + major_len] == input, re true (sorted, a[i] == start_val, a[i+len] == end_val, start_val == end_val)
- end_loop, re false
-
- https://www.geeksforgeeks.org/check-for-majority-element-in-a-sorted-array

##### slide_window_avoid_rest_ops; max_in_slide_win; i_diff_spd_pt_same_start; j_diff_spd_pt_same_end; sum == curr_win_size_in_val, plus ns[j] == extend_win_right; end-start, affect curr_win_size_in_len; sum == curr_win_size_in_val, minus ns[j] == shrink_win_left;

- EG
- [2, 3, 4, 1, 5], k = 3; e.g. [2, 3, 4] or [2, 4, 1] or [4, 1, 5]; max = 4+1+5=10
- SUMMA
-
- i_diff_spd_pt_same_start
- j_diff_spd_pt_same_end
-
- outloop (j < len)
- sum = sum + ns[j] (sum == curr_win_size_in_val, plus ns[j] == extend_win_right)
-
- if end - start = k-1 (end-start, affect curr_win_size_in_len)
- ma = ma(ma, sum) (update_max)
- sum = sum - ns[i] (sum == curr_win_size_in_val, minus ns[j] == shrink_win_left)
- end_if, ++j (extend_win_right)
-
- re max / k
- https://leetcode.com/problems/maximum-average-subarray-i

<br/>
<br/>

## ?

##### greedy, sort, group_2

- EG
- SUMMA
- [4, 3, 2, 1] -> [1, 2, 3, 4] (greedy, sort)
- max = min(1, 2) + min(3, 4) (group_2)
- https://leetcode.com/problems/array-partition-i/

<br/>
<br/>

## ele === index; mark_num

##### [2, 5, 3, 1, 1] (missing 4); ind = ele - 1; [2-1(ind), 5-1(ind), 3-1(ind), 1-1(ind), 1-1(ind)]; [-2, -5, -3, x, -1]; ele = ind + 1; ele === ind; mark_num

- EG
- SUMMA
- loop eles
- if pure - or +, ind info lost; num val has to stay; can mark -
- ind needs +
- because 1 -> n, so index - 1
-
- access ele; meet again or brand new ele
- make it always -
- if sth not mark, someone else has dup and they occupy the position.
- https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array

<br/>
<br/>

## arr_full_sum(sort) - arr_actual_sum(sort)

##### missing_1_num; [3, 0, 1] -> [0, 1, 3] (2 missing) -> [0, 1, 2, 3] (full); diff = [0, 1, 2, 3](full_sum) - [0, 1, 3](actual_sum)

- EG
- SUMMA
- ns has zero
- ns = [3, 0, 1] -> [0, 1, 3] -> [0, 1, 3] (missing 2)
- full: [0, 1, 2, 3]
- diff = [0, 1, 2, 3] - [0, 1, 3]
- https://leetcode.com/problems/missing-number

<br/>
<br/>

## loop_eles + build hash / sort_then_middle

##### [2, 3, 1, 1, 1]; hash[n] = freq, sudden_reach_condi, return

- EG
- SUMMA
- major_len => 5_odd / 2 = 2.5, major_len >= 3 (half)
- major_len => 4_even / 2 = 2, major_len > 2 (half)
- loop eles
- hash[n] = freq; if freq > major, re num (sudden_reach_condi)
- https://leetcode.com/problems/majority-element

##### [2, 3, 1, 1, 1] -> [1, 1, 1(cover posi), 2, 3]; a.sort, return a[floor(len/2)]

- EG
- SUMMA
- a.sort (major cover lots of positions)
- re a[floor(len/2)]; e.g. [3, 3, 4], ceil(3/2=1.5) = 2, wrong ind, so floor(len/2)
- https://leetcode.com/problems/majority-element

##### [2, 3, 1, 1, 1] -> [1, 1, 1, 2, 3]; vote_algo; same_ele_vote, diff_ele_vote_cancel, vote_exhaust_new_major

- EG
- SUMMA
- vote_algo
- major = ns[0]; counter = 1; (1st_ele major)
-
- loop ele (i=1)
- if c === 0; major = n[i], c=1 (vote_exhaust_new_major)
- if major === ns[i]; ++c (same_ele_vote)
- else --c (diff_ele_vote_cancel)
- https://leetcode.com/problems/majority-element

##### [2, 3, 1, 1, 1] -> [1, 1, 1, 2, 3]; major_len (i_start + len)

- EG
- SUMMA
- major_len => 5_odd / 2 = 2.5, major_len >= 3 (half)
- major_len => 4_even / 2 = 2, major_len > 2 (half)
- loop(i=0; i < major; ++i)
- if a[i] == input && a[i + major_len] == input, re true (i_start + len)
- end_loop, re false
- https://www.geeksforgeeks.org/check-for-majority-element-in-a-sorted-array

<br/>
<br/>

## flow_down (priority queue like)

##### [1, 1, 2, 2, 3, 3] -> 1 is 3rd max; (1) flow_down (priority queue like) (2) priority queue

- EG
- SUMMA
- method 1:
- prepare on the fly (hash); flow_down (priority queue like)
-
- method 2:
- prepare before (hash); priority queue (find insert posi, shift left); m1 = -max (num vs num)
- https://leetcode.com/problems/third-maximum-number

##### [3,6,1,0], 6 (>= 2 \* everyone); (1) flow_down (priority queue like) (2) priority queue

- EG
- SUMMA
- method 1:
- rem posi; flow_down (priority queue like)
-
- method 2:
- rem posi; priority queue
-
- https://leetcode.com/submissions/detail/494400148/
- https://leetcode.com/problems/largest-number-at-least-twice-of-others

##### [3,4,5,2], max prod of 2 num, 4\*5=20; (1) flow_down (priority queue like) (2) priority queue

- EG
- SUMMA
- - method 1:
- rem posi; flow_down (priority queue like)
-
- method 2:
- rem posi; priority queue
- https://leetcode.com/submissions/detail/494662342/
- https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array

##### [10, -1, -2, -3] -> 10 \* (-2) \* (-3); +, +, + VS +max, -, -

- EG
- SUMMA
- flowdown or priority queue; +, +, + VS +max, -, -
- https://leetcode.com/submissions/detail/494667667/
- https://leetcode.com/problems/maximum-product-of-three-numbers

##### top 5 subject scores for each student; [[1, 91], [1, 92], [2, 81], [1, 60]] -> [[1, 91], [1, 92], [1, 60], [2, 81]]; prepare before (hash) + flow_down

- EG
- SUMMA
- prepare before (hash) + flow_down
-
- https://www.cnblogs.com/cnoodle/p/13722300.html
- https://leetcode.com/problems/high-five

##### kth largest element; priority queue (find insert posi, shift_left)

- EG
- SUMMA
- priority queue (find insert posi, shift_left)
- https://leetcode.com/submissions/detail/494223381/
- https://leetcode.com/problems/kth-largest-element-in-an-array

<br/>
<br/>
<br/>
<br/>
<br/>

## non_decrease_arr; (1)left_before_edge; (2)too_low, i-1, i, i+1; (3)too_high, i-2, i; (4)right_edge

##### non_decrease_arr; (1)left_before_edge; (2)too_low, i-1, i, i+1; (3)too_high, i-2, i; (4)right_edge

- EG
- SUMMA
-
- i=0
- [0(i_no_i-1), 1, 2, 3, 4], 5pt
-
- i=1
- [1, -100(i_look_back, drop, out_of_trend_low), 2, 3, 4], 5pt; (left_before_edge)
-
- i=2
- [1, 2, -100(i, drop, out_of_trend_low), 3, 4], 5pt; (too_low; i-1, i, i+1)
-
- i=3
- [1, 2, 100(out_of_trend_high), 3(i, drop), 4], 5pt; (too high; i-2, i)
- .....
-
- i=len-2
- [1, 2, 3, -100(i, drop, out_of_trend_high), 4], 5pt; (too low; i-1, i, i+1)
-
- i=len-1
- [1, 2, 3, 4, -100(i, drop, i_last)], 5pt; (right_edge)
-
- https://leetcode.com/problems/non-decreasing-array

<br/>
<br/>

## skip_loop_up_highest, skip_loop_down_lowest;

##### [0, 1, 2, 3, 4, 3, 2, 1, 0]; skip_loop_up_highest; skip_loop_down_lowest;

- EG
- SUMMA
- loop(i < ps.len-1) (loop_condi_reduce, arr_ind_inc; vice versa)
-
- skip_loop_down_lowest(i < a.len - 1 && a[i] > a[i+1]), ++i, is_up=true
- end_loop, a[i] (lowest)
-
- skip_loop_up_highest( i < a.len - 1 && a[i] < a[i+1]), ++i, is_down=true
- end_loop, a[i] (highest)
-
- re is_up && is_down && a.len-1 == i
- https://leetcode.com/problems/valid-mountain-array

##### [0, 1, 2, 3, 4, 3, 2, 1, 0]; skip_loop_up_highest(forward); skip_loop_up_highest(backward);

- EG
- SUMMA
-
- 2_pts_meet; skip_loop_up_highest(forward); skip_loop_up_highest(backward)
-
- skip_loop_up_highest(forward) (i < a.len - 1 && a[i] < a[i+1]), ++i;
- skip_loop_up_highest(backward) (j > 1 && a[j] < a[j-1]), --j;
-
- re i > 0 (i_use) && j < a.len-1 (j_use) && i === j (meet)
- https://leetcode.com/problems/valid-mountain-array

<br/>
<br/>
<br/>
<br/>
<br/>

## INVERSE_QUESTION; when saying true, false, yes, no; inverse

##### INVERSE_QUESTION; matrix; most re_fail, else re_true; 2_ele_diag, upto_2nd_last

- EG
- SUMMA
- INVERSE_QUESTION; most re_fail, else re_true
- loop(i=0; i<=len-2; ..) (normal_scan_loop, 2_ele_diag, upto_2nd_last)
- loop(j=0; j<=len-2; ..) (normal_scan_loop, 2_ele_diag, upto_2nd_last)
- if ma[i][j] !== ma[i+1][j+1] re_fail (INVERSE_QUESTION, most re_fail)
-
- https://leetcode.com/problems/toeplitz-matrix

<br/>
<br/>
<br/>
<br/>
<br/>

## backward

##### 10 -> B or 11 -> B; 0 -> A; 0_end; backward + seq_1s

- EG
- 10 -> B or 11 -> B; 0 -> A; 0_end
-
- [0(end)], t
-
- [0, 0(end)], t
- [1, 0(end)], f
-
- [0, 0, 0(end)], t; (0 + 0_end, because 1 uses 1st 0)
- [0, 1, 0(end)], f; (odd_sequence_1s)
- [1, 0, 0(end)], t; (0 + 0_end)
- [1, 1, 0(end)], t; (even_seq_1s)
-
- [0, 0, 0, 0(end)], t; (0 + 0_end)
- [0, 0, 1, 0(end)], f; (odd_seq_1s)
- [0, 1, 0, 0(end)], t; (0 + 0_end)
- [1, 0, 0, 0(end)], t; (0 + 0_end)
- [0, 1, 1, 0(end)], t; (even_seq_1s)
-
- SUMMA
- loop(i=len-2; ns[i]!==0 && i>=0; --i); ignore_ending_0
- backward; count_seq_1s; odd_seq_1s false; even_seq_1s true;
-
- https://leetcode.com/problems/1-bit-and-2-bit-characters

###### n1: [1, 2, 3, 4(end_m_r), 0, 0(end_w)]; n2: [2, 2(end_n_r)]; backward, 1_write, 2_reads

- EG
- SUMMA
- end_write, end_m_read, end_n_read (1_write, 2_reads)
- while(n>=0) (scan_from_right)
- n1[end_w--] = n1[end_m_r] > n2[end_n_r] ? n1[end_m_r--] (1_write, 2_reads)
- n1[end_w--] = n1[end_m_r] <= n2[end_n_r] ? n2[end_n_r--] (1_write, 2_reads)
- https://leetcode.com/problems/merge-sorted-array

###### backward, IGNORE_CARRY (9) or ADD_ONE (0, 1, 2..8)

- EG
- SUMMA
- backward loop eles
- if ds[i] === IGNORE_CARRY (9); ds[i] = 0; con_loop
- if ds[i] === ADD_ONE (0, 1, 2..8); ds[i]++; return
- end_loop, prepend 1; e.g. 999, con_loop
- https://leetcode.com/problems/plus-one

<br/>
<br/>

## curr_ele = max(..rest_arr)

##### curr_ele = max(..rest_arr)

- EG
- SUMMA
- [4(i), 3, 2, 1] -> [3(i), 3, 2, 1]; curr_ele == 4, replace_with_3
- [3, 3(i), 2, 1] -> [3, 2(i), 2, 1]; curr_ele == 3, replace_with_2
- ..
- [3, 2, 2, 1(i)] -> [3, 2, 2, -1(i)]; last_ele = -1
-
- single_loop(i=0; i<len..)
- a[i] = ma(...a.slice(i+1))
- end_loop a[a.len-1] = -1
-
- https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side

<br/>
<br/>

## parity (2_things)

##### parity (2_things); [2, 2, 2, 3, 3]; even_to_even; odd_to_odd; even_to_odd; odd_to_even

- EG
- posi = [2, 2, 2, 3, 3]; posi 1 == 0 chip; posi 2 == 3 chips; posi 3 == 2 chips
- odd_to_odd, even_to_even, cost 0; odd_to_even, even_to_odd, cost 1
- SUMMA
- loop eles
- if odd, ++odd
- if even, ++even
-
- end_loop;
- if odd == arr.len, re 0; (odd_to_odd, cost 0)
- if even == arr.len, re 0; (even_to_even, cost 0)
- else re min(odd, even) (e.g. [2, 2, 2, 3, 3], 3 less moves)
- https://leetcode.com/problems/minimum-cost-to-move-chips-to-the-same-position

<br/>
<br/>
<br/>
<br/>
<br/>

## when_same_flip_both, when_diff_do_nothing

##### [1, 0](when_diff) -> [0, 1](rev) -> [1, 0](flip) -> when_diff_do_nothing; [1, 1](when_same) -> [1, 1](rev) -> [0, 0](flip) -> when_same_flip_both;

- EG
- SUMMA
- loop_rows (2D)
- loop_cols (2D)
- start_i, end_j
- if(ma[k][i] == ma[k][j]), when_same_flip_both
- if(ma[k][i] != ma[k][j]), when_diff_do_nothing
- https://leetcode.com/problems/flipping-an-image

<br/>
<br/>

## rev non_x; i, j cross over; skip_loop(when_x)

##### rev non_vowel (rev position, rev word); i_start, j_end; i, j cross over; skip_loop(when_vowel)

- EG
- SUMMA
- loop chars
- i_start, j_end; i, j cross over
- skip_loop(i<j, when_vowel) ++i; no i<=s.len-1
- skip_loop(i<j, when_vowel) --j; no j>=0
- rev
- https://leetcode.com/problems/reverse-vowels-of-a-string

##### rev non_symbol (rev position, rev word); i_start, j_end; i, j cross over; skip_loop(when_symbol)

- EG
- SUMMA
- loop chars
- i_start, j_end; i, j cross over
- skip_loop(i<j, when_letter) ++i; no i<=s.len-1
- skip_loop(i<j, when_letter) --j; no j>=0
- rev
- https://leetcode.com/problems/reverse-only-letters

##### aaaabbb -> [[0, 3], [4, 6]]; loop_char; i_start, j_end; skip_loop; reset

- EG
- SUMMA
- out_loop (loop_char)
- i, j (i_start, j_end)
- in_loop (skip_loop)
- i=j (reset)
- https://leetcode.com/problems/positions-of-large-groups

<br/>
<br/>

## transpose matrix -> (i, j) swap (j, i)

##### transpose matrix -> (i, j) swap (j, i)

- EG
  1 2 3
  4 5 6
  =>
  1 4
  2 5
  3 6
- (0, 0) -> (0, 0)
- (0, 1) -> (1, 0)
- (0, 2) -> (2, 0)
- ...
- SUMMA
-
- build res matrix
- loop_row
- loop_col
- res[j][i] = ns[i][j]
- https://leetcode.com/problems/transpose-matrix

<br/>
<br/>

## outloop(row_1D_arr_slot_xxx); inloop(col_1D_arr_slot_xxx); row_1D_arr_slot_xxx X col_1D_arr_slot_xxx -> 2D

##### outloop(row_1D_arr_slot_acc); inloop(col_1D_arr_slot_acc); row_1D_arr_slot_acc x col_1D_arr_slot_acc -> 2D

- EG
- method 1: do_row, do_col; do_row, do_col
- ind: [[0_row, 1_col], [1_row, 1_col]]
- 0 0 -> 1 1 -> 1 2 ==> 1 2 -> 1 3
- 0 0 -> 0 0 -> 0 1 ==> 1 2 -> 1 3
-
- method 2: do_row, do_row; do_col, do_col
- ind: [0_row, 1_row]
- 0 0 -> 1 1 -> 1 1
- 0 0 -> 0 0 -> 1 1
-
- ind: [1_col, 1_col]
- 0 0 -> 0 1 -> 0 2
- 0 0 -> 0 1 -> 0 2
- merge_2
-
- do_row, do_col; do_row, do_col ===> do_row, do_row; do_col, do_col
- SUMMA
-
- single_loop(income_ind_arr)
- row_1D_arr_slot_acc
- col_1D_arr_slot_acc
-
- outloop(row_1D_arr_slot_acc)
- inloop(col_1D_slot_acc)
- if (row_1D_arr_slot_acc[i] + col_1D_slot_acc[j]) % 2 == 0, ++counter
-
- https://leetcode.com/problems/cells-with-odd-values-in-a-matrix

##### outloop(row_1D_arr_slot_max, move_down); inloop(col_1D_arr_slot_min, move_right); row_1D_arr_slot_max x col_1D_arr_slot_min -> 2D

- EG
  matrix:
  1, 2, 3, 4
  5, 6, 7, 8
  9, 10, 11, 12
- outloop(row_1D_arr_slot_max, move_down)
- inloop(col_1D_arr_slot_min, move_right)
-
- row_1D_arr_max = [1, 2, 3, 4] -> [5, 6, 7, 8] -> [9, 10, 11, 12]
- col_1D_arr_min = [1, 5, 9] -> [1, 5, 9] -> [1, 5, 9] -> [1, 5, 9]
-
- 1D x 1D = outloop(row_1D_arr_slot_max) x inloop(col_1D_arr_slot_min)
- res = [9], cross_over
-
- SUMMA
-
- outloop(row_1D_arr_slot_max, move_down)
- inloop(col_1D_arr_slot_min, move_right)
- row_1D_arr_max[i] = ma(matrix[i][j], ma[i]) (slot_not_finish)
- col_1D_arr_min[j] = mi(matrix[i][j], mi[j]) (slot_finish)
-
- outloop(row_1D_arr_slot_max)
- inloop(col_1D_arr_slot_min)
- if ma[i] == mi[j], arr.push (row_1D_arr_slot_max x col_1D_arr_slot_min -> 2D)
- https://leetcode.com/problems/lucky-numbers-in-a-matrix

<br/>
<br/>

## sorted_desc_matrix, row_desc, col_desc; top_left_big, bottom_right_small; row_ind_go_up,col_above_same_or_behind

###### sorted_desc_matrix, row_desc, col_desc; top_left_big, bottom_right_small; row_ind_go_up,col_above_same_or_behind

- EG
- SUMMA
- ! + + + + + +
- ! + + + - - -
- ! + + - - - -
- ! + - - - - -
- ! - - - - - -
- sorted_desc_matrix, row_desc, col_desc
- top_left_big, bottom_right_small
-
- ! + + + + + +
- ! + + + - - -
- ! + + - - - -
- ! + -(col_above_same_or_behind) - - - -
- ! -(col) - - - - - (row_ind_go_up)
-
- https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix

<br/>
<br/>
<br/>
<br/>

## 2D -> 1D -> 2D

###### 2D -> 1D -> 2D; 1D[i_total] = 2D[i_total / w][i_total % w]; 2D[i][j] = 1D[r * w + c];

- EG
- SUMMA
- 2D -> 1D -> 2D; a_old[i_total / old_w][i_total % old_w] -> a_mid[i_total = i_total = r * width + c] -> a_new[i_total / new_w][i_total % new_w]
- old_w \* old_h === new_w \* new_h;
-
- loop(i_total=0; i < old_w \* old_h; ..); 2D -> 1D; a_old[i_total / old_w][i_total % old_w] -> a_mid[i_total = r * width + c]
- a_new[i_total / new_w][] = a_old[i_total / old_w][i_total % old_w]

- https://leetcode.com/problems/reshape-the-matrix

##### 2D -> 1D -> 2D; 1D[i_total] = 2D[i_total / w][i_total % w]; 2D[i][j] = 1D[r * w + c];

- EG
- SUMMA
- 2D -> 1D; loop(i=0; i<m\*n; ..); a_mid[i_total] = a_old[i_total / old_w][i_total % old_w];
- shift; loop(i=0; i<m\*n; ..); a_new_1D[(i_total + k) % len] = a_mid[i_total];
- 1D -> 2D; in_loop, out_loop; a_new_2D[i][j] = a_new_1D[i * width + j];
- https://leetcode.com/problems/shift-2d-grid

##### 2D -> 1D; 1D[i_total] = 2D[i_total / w][i_total % w]; 2D[i][j] = 1D[r * w + c];

- EG
- SUMMA
- [ r:[0, 1, 2], [3, 4, 5], [6, 7, 8], c:[0, 3, 6], [1, 4, 7], diag[2, 5, 8], [0, 4, 8], [2, 4, 6] ] (3_win)
-
- loop input_arr (fill_tic_tac)
- a_mid[ c * width + r ] = (i_A_OR_B % 2) + 1; (2D -> 1D; a_old[r][c] -> a_mid[ c * width + r])
-
- loop win
- if a_mid[ win[i][0] ] == a_mid[ win[i][1] ] == a_mid[ win[i][2] ] && not_eq_zero (3_win)
- either re 'A' or 'B'
-
- end_loop; input_arr.len === 9 re 'DRAW'; else 'PENDING'
- https://leetcode.com/problems/find-winner-on-a-tic-tac-toe-game

<br/>
<br/>
<br/>
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

## i(start), j(end); j - i === word_len / same_kind / consecutive

##### count(#) and say(def); i(start), j(start); i stay, j move right, j - i === same_kind

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

##### count_last_word_len; i(end), j(end); i stay, j move right, j - i === word_len

- EG
- \_ab\_\_ab_bc\_\_
- SUMMA => i(end), j(end); i stay, j move right
- loop chars;
- i stays, j move right
- https://leetcode.com/problems/length-of-last-word

##### aaabc -> i pt a, j move right, !(j-i == consecutive); i pt b, j move right, !(j-i == consecutive)

- EG
- SUMMA
- loop chars (i stay)
- loop j, move until !consecutive
- https://helloacm.com/counting-substrings-with-only-one-distinct-letter-with-different-algorithms/

<br/>
<br/>

## subarray consecutive; subsequence !consecutive

##### baabb (only a, b); subseq palin == bbb, subseq palin == aa

- EG
- SUMMA
- s.len == 0, re 0
- s is palin, re 1 (remove 1 sebseq palin)
- s is not palin, rm a, rm b; re 2
- https://leetcode.com/problems/remove-palindromic-subsequences

<br/>
<br/>

## rm_1_item; (len_reduce, --i && ++i_back_to_top)

##### rm vowel in str; splice; (len_reduce, --i && ++i_back_to_top)

- EG
- SUMMA
- loop chars
- arr.splice(i, 1_delete_count), remove_in_place
- splice; (len_reduce, --i && ++i_back_to_top)
- https://www.geeksforgeeks.org/program-remove-vowels-string

##### [-1, -1, 0, 1, 1, 2, 2] -> [-1, 0, 1, 2];

- EG
- SUMMA
- loop eles
- i=1, i<a.len
- if a[i] == a[i-1], a.splice(i-1, 1_delete_count); (len_reduce, --i && ++i_back_to_top)
- https://www.geeksforgeeks.org/program-remove-vowels-string

##### ip addr, 123.41.51.61 -> 123[.]41[.]51[.]61; insert "[" start, insert "]" end

- EG
- SUMMA
- loop chars
- arr.splice(ind, 0_delete_count, "["), insert at ind front
- i = i+2; 123.(i)41.xxxx -> 123[.4(i)1
- arr.splice(ind, 0_delete_count, "]"), insert at ind front
- https://leetcode.com/problems/defanging-an-ip-address

<br/>
<br/>
<br/>
<br/>
<br/>

## what_diff_type_pt? (1) i_slow_pt_diff, j_fast_pt_diff(LOOK_BACK); (2) i_same_spd_pt_diff, j_same_spd_pt_diff(i_start + len); (3) i_same_spd_pt_diff, j_same_spd_pt_diff(tracking_var); (4) i_diff_spd_pt_same, j_diff_spd_pt_same(????);

##### i_slow_pt_diff, j_fast_pt_diff(LOOK_BACK); abc VS abc (normal, good); abc VS aabbcc (long press, good); abc VS aabbd (both fail)

- EG
- abc VS abc (normal typing, true_same)
- abc VS aabbcc (long press, true_same)
- abc VS aabbd (both fail, fail_diff)
- SUMMA
-
- i pt to one (i_slow_pt_diff)
- j pt to another (j_fast_pt_diff, LOOK_BACK)
-
- loop chars (long_str)
- if normal typing, ++i, ++j
- if long press, ++j (j_fast_pt_diff, LOOK_BACK)
- if both fail, re fail
-
- re i === short.len (i must to end)
- https://leetcode.com/problems/long-pressed-name

##### i_same_spd_pt_diff, j_same_spd_pt_diff(tracking_var); "ab" VS "ba" (A_can_swap)

- EG
- abc VS ab; diff_len, A_cannot_swap
- aab VS aab; same_and_dup, A_can_swap "aa"
- ab VS ba; i_same_spd_pt_diff, j_same_spd_pt_diff(tracking_var)
- SUMMA
-
- if diff_len, A_cannot_swap, re f
- if same_and_dup, A_can_swap, re t
- else i_same_spd_pt_diff, j_same_spd_pt_diff(tracking_var);
- e.g. ab VS ba; var1 = [a, b], var2 = [b, a]
-
- if var1[0] == var2[1] && var1[1] == var2[0]
- https://leetcode.com/problems/buddy-strings

<br/>
<br/>

## consecutive(keep_doing); inconsecutive(sudden_hit_condi, reset)

##### ++absent; ++late; consecutive(keep_doing); inconsecutive(sudden_hit_condi, reset)

- EG
- A (absent); L (late); P (present)
- 'APA'; 1_A, 1_P, 1_A
- 2_absent; bad
-
- 'PPALLP'; 2_P, 1_A, 2_L, 1_P
- inconsecutive_3_late, no_2_absent; good
-
- 'PPALLL'; 2_P, 1_A, 3_L
- consecutive_3_l; bad
- SUMMA
-
- loop chars
- if s[i] === 'A', ++absent
-
- if s[i] === 'L'; ++late; consecutive(keep_doing)
- else s[i] !== 'L'; late = 0; inconsecutive(sudden_hit_condi, reset)
-
- absent >= 2, re f;
- late >= 3, re f;
- https://leetcode.com/problems/student-attendance-record-i

##### [-1, 1, -1, 1, -1, 1]; sum / 3 = equal_part; consecutive(keep_doing); inconsecutive(sudden_reach_condi, reset)

- EG
- SUMMA
- loop eles
- count = 0 (want 3 times)
- s = s + ns[i]; consecutive(keep_doing)
- if s === sum / 3, ++count, s=0; inconsecutive(sudden_hit_condi, reset)
- re count >= 3 (edge_case, more than 3 times)
- https://leetcode.com/problems/partition-array-into-three-parts-with-equal-sum

##### aaabcc; 3_a, 1_b, 2_c; max=3;

- EG
- aaabcc, consecutive 3a, so max
- SUMMA
-
- counter = 1
- loop chars
- if s[i-1](look_back) == s[i]; ++counter; consecutive(keep_doing)
- else counter = 1; inconsecutive(sudden_hit_condi, reset)
- https://leetcode.com/problems/consecutive-characters

##### 00011100 -> [3, 3, 2]; min(3, 3) -> 3; min(3, 2) -> 2; 3+2 = 5; build_consecutive_arr;consecutive(keep_doing); inconsecutive(sudden_hit_condi, reset); loop_and_min;

- EG
- build_consecutive_arr (build_knowledge)
- 00011100 -> [3, 3, 2]; min(3, 3) -> 3; min(3, 2) -> 2;
- 3+2=5
-
- 0101100 -> [1, 1, 1, 2, 2]; min(1, 1) -> 1; min(1, 1) -> 1, min(1, 2) -> 1, min(2, 2) -> 2;
- 1 + 1 + 1 + 2 = 5
- SUMMA
-
- loop chars
- build_consecutive_arr
- counter = 1
- if s[i-1](LOOK_BACK) == s[i], ++c; consecutive(keep_doing)
- else a.push(prev_result); c=1; inconsecutive(sudden_hit_condi, reset)
-
-
- loop_and_min; e.g. [3, 3, 2] -> min(3, 3) + min(3, 2
- https://leetcode.com/problems/count-binary-substrings

##### [3, 2, 1, 2, 3, 4] -> 1, 2, 3, 4; counter == 4; consecutive(keep_doing); inconsecutive(sudden_hit_condi, reset)

- EG
- SUMMA
-
- counter = 1
- loop chars
- if ns[i] > ns[i-1]; ++counter; update_max; consecutive(keep_doing)
- else c = 1; inconsecutive(sudden_hit_condi, reset)
-
- if ma ==0, not_set, ma = 1 (edge_case, not enter)
- https://leetcode.com/problems/longest-continuous-increasing-subsequence

##### [100, 99, 1, 2] -> [1, 2, 99, 100]; shortest_dist(sort_neighbour) = a[i+1] - a[i]; consecutive(keep_doing); consecutive(sudden_reach_condi, reset)

- EG
- [100, 99, 1, 2] -> [1, 2, 99, 100]; shortest_dist(sort_neighbour) = a[i+1] - a[i]; consecutive(keep_doing); inconsecutive(sudden_reach_condi, reset)
- SUMMA
-
- shortest_dist(neighbours) = a[i+1] - a[i]
- loop(i=0; i < len-1; ) (LOOK_AHEAD)
- dist = a[i+1] - a[i];
-
- if dist < mi
- reset_mi
- reset_arr; inconsecutive(sudden_reach_condi, reset)
- res.p(a[i], a[i+1])
-
- if dist == mi, res.p(..) consecutive(keep_doing)
- https://leetcode.com/problems/minimum-absolute-difference

##### [2, 3, 3, 5, 6] -> [2, 3(odd), 3(odd), 5(odd), 6]; consecutive(keep_doing); inconsecutive(sudden_reach_condi, reset)

- EG
- [2, 3, 3, 5, 6] -> [2, 3(odd), 3(odd), 5(odd), 6]; re true
- SUMMA
- loop eles
- if even, res.push; consecutive(keep_doing)
- if odd, res = []; inconsecutive(sudden_reach_condi, reset)
- https://leetcode.com/problems/three-consecutive-odds/submissions

<br/>
<br/>

## prev_bound, prev_char; next_bound, next_char

##### k?a -> kba (!k, !a); prev_bound, prev_char; next_bound, next_char

- EG
- ? -> s[i-1] == undef, s[i+1] == undef
- ?a -> s[i-1] == undef, s[i+1](a) !== b -> ba
- a? -> s[i-1](a) !== b, s[i+1] == undef -> ab
- k?a -> s[i-1](k) !== b, s[i+1](a) !== b -> kba
-
- SUMMA
- loop chars
- loop (a, b, c)
- if c == '?'
- if ( i > 0 (prev_bound) && a[i-1] == 'a'+j ) con; prev == 'a'+? (perv_char), collide, con
-
- if ( i+1 < s.len (next_bound) && a[i+1] == 'a'+j ) con; next == 'a'+?, (next_char), collide, con
- a[i] = 'a'+j, final
- https://leetcode.com/problems/replace-all-s-to-avoid-consecutive-repeating-characters

<br/>
<br/>

## in_loop; prefix_reduce_1_char; compare_with_input_word

##### in_loop(non_found_prefix_loop); prefix_reduce_1_char; compare_with_input_word

- EG
- ["flower","flow","flight"]; flower as prefix; flower vs flow -> flow(er); flow vs flight -> fl(ow);
- SUMMA
-
- arr[0] as prefix (global)
- out_loop (i=1, i<len) (outloop_each_word)

- in_loop(non_found_prefix_loop)
- (prefix_reduce_1_char; compare_with_input_word)
- prefix === '', re ''
- end_loop, prefix
- https://leetcode.com/problems/longest-common-prefix
- https://www.geeksforgeeks.org/longest-common-prefix-using-character-by-character-matching (vertical w by w matching char)

##### ["cool", "lock", "cook"]; cook as common; cool vs lock -> co (ol); co vs cook -> co(); if_common, rm from input_word; if_non_common, rm from common

- EG
- SUMMA
-
- arr[0] as common (global)
- out_loop (i=1, i<len) (outloop_each_word)
-
- in_loop(loop_each_char_in_common)
- (1)
- vertical compare
- common: aac; first_a stay; for next input_word (global)
- input: abc; first_a gone; next_common_char won't check again
-
- (2)
- vertical compare
- common: xy; first_x gone; next input_word won't use (global)
- input: abc; first_a stay; next_common_char may hit
-
- in_summary; if_common, rm from input_word; if_non_common, rm from common
-
- https://leetcode.com/problems/find-common-characters

<br/>
<br/>

## vertical_compare

##### [1, 1, 4, 2, 1, 3] -> min_move_become_sort -> [1, 1, 1, 2, 3, 4]

- EG
- [1, 1, 4, 2, 1, 3] -> sort -> [1, 1, 1, 2, 3, 4]; vertical_compare; not_equal_res_inc
- SUMMA
- orig_arr;
- sort_arr;
- loop ele
- vertical_compare; not_equal_res_inc
- https://leetcode.com/problems/height-checker

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
- curr = h[i], next = h[i+1] (LOOK_AHEAD, i_stay)
- if curr >= next, b 1 group
- else next < curr, sb 1 group, fast_forward
- else the_end_char
- https://leetcode.com/problems/roman-to-integer

##### IVIV(roman) -> IV(s, s+1) -> in_hash(sb 1 group || b 1 group); i(start), i(start+1), j(x, end), j(x, end-1); i move right; access_hash

- EG
- IVIV -> (in_h)(in_h) -> (IV)(IV)
- VIVI -> (in_h)(in_h)(in_h) -> (V)(IV)(I)
- SUMMA => h[ s[i] + s[i+1] ] (LOOK_AHEAD, i_stay)
- build HASH (from Q, has all combo)
- loop chars
- if h[ s[i] + s[i+1] ], fast_forward
- else 1_char_acc
- https://leetcode.com/problems/roman-to-integer

<br/>
<br/>

## loop 1 -> 1000; loop a -> b; xxxx; (natural_bottom_up)

##### a2 in a1; a1 follows a2 order; res build_from_ground

- EG
- a1: [3, 4, 1, 1, 2, 2]
- a2: [1, 2]
- h: {3:1, 4:1, 1:2, 2:2} (build_knowledge)
- out: [1, 1, 2, 2, 3, 4]
- SUMMA
-
- ..
- ..
- loop 0->1000 (e.g. loop 1 -> 1000 or loop a -> z, natural_bottom_up)
- use all freq
- res.push(build_from_ground)
-
- https://leetcode.com/problems/relative-sort-array

##### [1,1,4,2,1,3] -> how_many_move -> [1, 1, 1, 2, 3, 4]; natural_bottom_up + consume_hash === input_arr_len

- EG
- [1,1,4,2,1,3] -> how_many_move -> [1, 1, 1, 2, 3, 4] (sort)
- SUMMA
- hash 0, 1, 2, 3 -> 100 (natural_bottom_up)
- out_loop 1 -> 100 (natural_bottom_up)
-
- input_arr_ind = 0 (global)
- i === height
- in_loop( (hash[i]--) > 0); (natural_bottom_up + consume_hash === input_arr_len)
- input_arr[ input_arr_ind ] !== i_height; res++; e.g. input_arr[1] may == input_arr[100], beause dup
- https://leetcode.com/problems/height-checker

##### missing_positive_num; hash_prepare + bottom_up + fill_gap_in_hash

- EG
- ns = [3,4,-1,1], missing == 2
- ns = [-1], missing == 1
- SUMMA
- single_loop (hash_prepare)
- single_loop (i=1; i<=max) (max, natural_bottom_up)
- if hash[ns[i]], con; else re (fill_gap)
-
- https://leetcode.com/problems/first-missing-positive

##### missing_positive_num; hash_prepare + bottom_up + fill_gap_in_hash

- EG
- ns = [1, 2, 3, 4, 6], no_gap_until_5, missing == 5
- SUMMA
- single_loop (hash_prepare)
- single_loop (i=1; i<=len) (len, natural_bottom_up)
- if hash[ns[i]], con; else re (fill_gap)
-
- https://leetcode.com/problems/first-missing-positive/discuss/927112/Three-JS-Solutions

##### missing_positive_num; positive_uniq + find_gap_in_input

- EG
- ns = [1, 2, 3, 4, 6], no_gap_until_5, missing == 5
- SUMMA
- set, sort, filter (positive_uniq)
- single_loop (ele); j == ns[i]\_no_gap, ++j; (find_1st_gap_in_input)
- https://leetcode.com/problems/first-missing-positive/discuss/927112/Three-JS-Solutions

<br/>
<br/>

## LOOK_BACK, LOOK_SELF, LOOK_AHEAD

##### place flower in pot_array

- EG
- [1,0,0,0,0,0,1], k = 2 -> [1,0,0(1),0,0(1),0,1]
- SUMMA
- if fb[i-1] = 1, skip (LOOK_BACK)
- if fb[i] = 1, skip (LOOK_SELF)
- if fb[i+1] = 1, skip (LOOK_AHEAD)
- after_all, ++counter
-
- end_loop, counter >= k?
- https://leetcode.com/problems/can-place-flowers

## LOOK_BACK(same OR inc; i=1), LOOK_AHEAD

##### (L, R-1) VS (L+1, R) ====> a(L)bba(R-1)c(skip) -> abba(palindrome); c(skip)a(L+1)bba(R) -> abba(palindrome);

- EG
- SUMMA
- loop char (i_start, j_end, will meet)
- if s[i] !== s[j] (not palindrome, try del 1 char)
- skip_loop(L, R-1), will meet; (L, R-1) VS (L+1, R)
- skip_loop(L+1, R), will meet; (L, R-1) VS (L+1, R)
- if L > R-1 || L+1 > R, re true
- else re false
- https://leetcode.com/problems/valid-palindrome-ii

<br/>
<br/>

## LOOK_BACK(same OR inc; i=1)

##### ++++ -> [--++, +--+, ++--] how_many_combo; if s[i-1], s[i], LOOK_BACK, build_from_ground (sub(0, i-1), sub(i+1))

- EG
- SUMMA
- loop char
- loop(i=1, i<len, ++i) (LOOK_BACK)
- if s[i-1] == '+' && s[i] == '+'; (LOOK_BACK)
- build_from_ground == before + '--' (s[i-1], s[i]) + rest (build_from_ground)
- build_from_ground == sub(0, i-1)(exclude) + '--' + sub(i+1) (build_from_ground)
- https://xiaoguan.gitbooks.io/leetcode/content/LeetCode/293-flip-game-easy.html

##### find_word_segment; letter space == word_segment; i-1, i(LOOK_BACK, i_move);

- EG
- ab\_\_\_cd\_\_efg\_\_; b\_, d\_, g\_ means 3 word_segment
- SUMMA => letter space == word_segment
- loop chars
- i-1, i(LOOK_BACK, i_move); if(s[i-1] == ' ', s[i] == letter), word_segment++
- https://leetcode.com/problems/number-of-segments-in-a-string

##### [5, 37, 12, 5] -> rank: [1, 3, 2, 1]; LOOK_BACK, when_same_rank_stay, when_diff_rank_inc

- EG
- SUMMA
- copy_arr
- sort_arr
- LOOK_BACK(same; i=1)
-
- loop_sort_arr;
- LOOK_BACK(same; i=1), when_same_rank_stay, when_diff_rank_inc;
-
- loop_orig_arr, assign_rank
- https://leetcode.com/problems/number-of-segments-in-a-string

<br/>
<br/>

## build_from_ground_rearrange (a_i + a_j VS res_i + res_j)

##### a2 in a1; a1 follows a2 order; res build_from_ground_rearrange(i_hash_fill_res + j_natural_bottom_up_fill_res VS res_ind )

- EG
- a1: [3, 4, 1, 1, 2, 2]
- a2: [1, 2]
- h_a1: {3:1, 4:1, 1:2, 2:2}
- out: [1, 1, 2, 2, 3, 4]
- SUMMA
-
- h_a1
-
- loop a2 (a1 follows a2 order)
- use h_a1 to print freq (i_hash_fill_res)
- res.push
- end_loop, reset freq
-
- loop 0->1000 (e.g. loop 1 -> 1000 or loop a -> z; j_natural_bottom_up_fill_res)
- use all freq
- res.push
-
- https://leetcode.com/problems/relative-sort-array

##### ++++ -> [--++, +--+, ++--] how_many; if s[i-1], s[i], LOOK_BACK, build_from_ground_rearrange( i-1_fill_res + i_fill_res VS res_ind)

- EG
- SUMMA
- loop char
- loop(i=1, i<len, ++i)
- if s[i-1] == '+' && s[i] == '+'; (LOOK_BACK)
- ++++ (i-1=0, i=1)
- res == sub(0, i-1)(exclude) + '--' + sub(i+1)(rest)
-
- https://xiaoguan.gitbooks.io/leetcode/content/LeetCode/293-flip-game-easy.html

##### build_from_ground_rearrange(i_big_fill_res, i_small_fill_res VS res_ind); [-4(i_start), -3, 1, 2(j_big)] -> [1, 4, 9, 16];

- EG
- sort + -; big head?, big tail?
-
- why push big -> small?
- if small to big, e.g. [-4(i_small), -3, 1, 2(j_big)] -> [2^2, 1^2, -3^2, ..] (wrong)
-
- push big -> small
- [-4(i_small), -3, 1, 2(j_big)] -> [1, 4, 9, 16];
-
- SUMMA
-
- res = [], ind = j_end;
- i_small, j_big
- loop(i <= j)
- if ns[i]^2 > ns[j]^2, res[ind--](can be arr / hash) = ns[i]^2; (i_big_fill_res; res_ind)
- if ns[i]^2 <= ns[j]^2, res[ind--](can be arr / hash) = ns[j]^2 (i_small_fill_res; res_ind)
- https://leetcode.com/problems/squares-of-a-sorted-array

<br/>
<br/>

## rewind

##### 110#11#12# -> (1)(10#)(11#)(12#) -> ajkl

- EG
- SUMMA
- loop chars
- move along, keep replacing, move back 2 chars
- https://leetcode.com/problems/decrypt-string-from-alphabet-to-integer-mapping

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

## build_hash_freq, --hash_freq[n]

##### build_hash_freq; --hash_freq[char]

- EG
- SUMMA
- build_hash_freq
- loop chars
- if(hash_freq[char] !== undef && --hash_freq[char] >= 0)
- https://leetcode.com/problems/ransom-note

##### chars build words; can "atach" build "cat", "dog", "xxxxx" each time?

- EG
- ws = ["cat", "dog", "xxxx"]; chars = "atach"
- SUMMA
- build_hash_freq
- loop ws
- loop ws[i] (char)
- if hash_freq[n] === undef || --hash_freq[n] < 0, skip this
- https://leetcode.com/problems/find-words-that-can-be-formed-by-characters

##### 1st unique char in str; hash_freq, lookup_in_order

- EG
- SUMMA
- hash_freq
- loop chars (lookup_in_order)
- meet frequency 1
- https://leetcode.com/problems/first-unique-character-in-a-string

##### aaabb, build_palindrome; a:3 (odd), b:2 (even); hash_freq, take_all_even

- EG
- SUMMA
- hash_freq
- e.g. a:3 (even), can use all
- e.g. b:2 (odd), can use 3-1=2; later add 1
- ba a ab
- https://leetcode.com/problems/longest-palindrome

##### hash; max(...arr)

- EG
- SUMMA
- loop eles
- if h[n] !== undef, h[n] = 1;
- else delete h[n]
- end_loop; max(... Obj.keys(hash) )
- https://leetcode.com/problems/largest-unique-number/

<br/>
<br/>

## hash[ str(complex_ele) ]; dp(same_var_curr) = dp(same_var_prev) + x

##### [[1,2],[2,1],[3,4],[5,6]] -> [[1,2],[1, 2],[3,4],[5,6]] 1 pair; hash[ str(complex_ele) ]; dp(same_var_curr) = dp(same_var_prev) + x

- EG
- n=1, a -> 0
- n=2, aa -> a(a) -> 1 pair (0_dp + 1_last_few_num)
- n=3, aaa -> a(aa) -> 3 pairs (1_dp + 2_last_few_num)
- n=4, aaaa -> a(aaa) -> 6 pairs (3 + 3)
- n=5, aaaaa -> a(aaaa) -> 10 pairs (6 + 4)
- so dp[n] = dp[n-1] + (n-1) ==> dp(same_var_curr) = dp(same_var_prev) + (n-1)
- SUMMA
-
- e.g. [[1,2],[2,1],[3,4],[5,6]]
- loop ele
- hash[str(ele)] (stringify_for_complex_ele)
- if hash[n] > 1, use dp(same_var_curr) = dp(same_var_prev) + (n-1)
-
- https://leetcode.com/problems/number-of-equivalent-domino-pairs

<br/>
<br/>

## prebuild hash_init_posi / build hash_init_posi along (met / !met) / update hash_init_posi along (met / !met) / build hash_init_posi along (met_the_other / !met_the_other)

##### cal total distance; prebuild hash_init_posi;

- EG
- keyboard: abcdefghijklmnopqrstuvwxyz, word: cba, that is 1 keyboard position (a-z)
- keyboard: pqrstuvwxyzabcdefghijklmno, word: pom, that is another keyboard position (p-o)
- SUMMA
-
- prebuild hash posi
- loop chars (e.g. cba)
- LOOK_BACK(i=1); dist = h[i] - h[i-1]; res = res + dist
- https://codedestine.com/single-row-keyboard-string-problem

##### max distance; build hash_init_posi along (met / !met);

- EG
- SUMMA
- loop chars;
- if met, dist = i - h[n](init_posi) - 1;
- if !met, (build hash_init_posi along)
- https://leetcode.com/problems/largest-substring-between-two-equal-characters

##### 2 same num distance <= k; update hash_init_posi along (met / !met)

- EG
- SUMMA
- loop eles
- if met; if i - h[n] <= k, re t; else h[n] = update_posi (update hash_init_posi along)
- if !met; h[n] = init_posi; (build hash_init_posi along)
- https://leetcode.com/problems/contains-duplicate-ii

<br/>
<br/>

## one pass; hash_obj(freq, distance); sudden_meet_condi, update_freq, update_distance

##### [1,2,1,2,1,3,3,2]; {1:3, 2:3, 3:2}; 1 and 2 same max_freq, but 1 is shorter dist; (1) one pass; hash_obj: {freq, distance}; sudden_meet_condi(freq > max_freq || freq == max_freq), update_freq, update_distance

- EG
- SUMMA
- loop eles (one pass)
- hash_obj: {freq, distance}
- sudden_meet_condi(freq > max_freq || freq == max_freq), update_freq, update_distance;
- https://leetcode.com/problems/degree-of-an-array

<br/>
<br/>

## 1_tracking_var, 2_tracking_var, 3_tracking_var, etc

##### ns: [a, b, c, d, b]; w0=b, w1=d

- EG
- SUMMA
- 1st_tracking_var: w0_ind = -1
- 2nd_tracking_var: w1_ind = -1
-
- loop eles
- if(item === w0), w0_ind = i
- if(item === w1), w1_ind = i
- if(w0_ind >= 0 && w0_ind >= 0), minD = mi(minD, abs(w0_ind - w1_ind))
- why abs(w0_ind - w1_ind) min?
- https://leetcode.com/problems/shortest-word-distance/
- https://tenderleo.gitbooks.io/leetcode-solutions-/content/GoogleEasy/243.html

###### 2_tracking_var, minFreq, minDistance

- https://leetcode.com/problems/third-maximum-number

###### 3_tracking_var, m0, m1, m2

- https://leetcode.com/problems/third-maximum-number

###### 5_tracking_var, ma0, ma1, ma2, mi0, mi2

- https://leetcode.com/problems/maximum-product-of-three-numbers

<br/>
<br/>

## hash, sort_hash, rev_sort_hash

##### aaabbbccc -> (abc)(cba)(abc)(cba) -> (inc)(desc)(inc)(desc); hash, sort_hash, rev_sort_hash

- EG
- SUMMA
- hash (no order)
- loop (res.len < s.len)
- sort_hash
- hash_key_arr -> ascending -> copy new sort_hash
-
- rev_sort_hash
- hash_key_arr -> descending -> copy new rev_sort_hash
-
- repeat
- https://leetcode.com/problems/increasing-decreasing-string

<br/>
<br/>

## nums -> digi_sum_prepare_hash -> group_sum

##### [1, 2, 11, 12]\_num -> [1, 2, 2, 3]\_digi_sum_prepare_hash -> [1, 2, 2, 3]\_group_sum; nums -> digi_sum_prepare_hash -> group_sum

- EG
- SUMMA
-
- nums -> digi_sum_prepare_hash -> group_sum
- https://leetcode.com/problems/count-largest-group

<br/>
<br/>

## indexOf === lastIndexOf, only_1_no_repeat

##### 1st unique char in str; indexOf === lastIndexOf, only_1_no_repeat

- EG
- SUMMA
- loop chars
- indexOf === lastIndexOf, only_1_no_repeat
- https://leetcode.com/problems/first-unique-character-in-a-string

<br/>
<br/>

## split(/+s/), set

##### mails_in_arr (split, set); rm dot, rm chars after '+'

- EG
- SUMMA
- loop mail_arr
- mail, split('@'), split('+'), replace dot;
- set.add (unique), set.size
- https://leetcode.com/problems/unique-email-addresses

##### , -> \_ (maintain segment); trim_head_tail, split(/+s/)

- EG
- \_abc_d,e,f_g\_ -> \_abc_d_e_f_g\_(maintain segment) -> abc_d_e_f_g(trim_head_tail, split(/+s/)) -> [abc, d, e, f, g]
- SUMMA
- , -> \_ (maintain segment)
- trim_head_tail, split(/+s/)
- build_hash, to freq
- https://leetcode.com/problems/most-common-word/

##### morse code hash, use_set

- EG
- SUMMA
- set.add(ele), set.size
- https://leetcode.com/problems/unique-morse-code-words

<br/>
<br/>

## mod_to_use, contain

##### ele + 1; mod_to_use, contain

- EG
- SUMMA
- loop eles (orig_arr)
- if orig_arr.includes(ele + 1); ++count; (loop_each_ele, mod_to_use)
- https://leetcode.com/problems/counting-elements
- https://codenuclear.com/leetcode-counting-elements-30days-challenge

##### 2\*ele; mod_to_use, contain

- EG
- SUMMA
- loop eles (orig_arr)
- if 1 zero, skip_this_zero; if >= 2 zeros, no_skip
- if orig_arr.includes(2\*ele); re true; (loop_each_ele, mod_to_use)
- https://leetcode.com/problems/check-if-n-and-its-double-exist

##### 2\*ele, ele/2; mod_to_use, contain

- EG
- SUMMA
- loop eles
- if set.con(2\*ele) || set.con(ele/2), re true; (loop_each_ele, mod_to_use)
- else set.add(ele)
- https://leetcode.com/problems/check-if-n-and-its-double-exist

<br/>
<br/>

## up_ups || up_lows || low_lows

##### CHINA || China || china -> up_ups, up_lows, low_lows

- EG
- SUMMA
- re CHINA || China || china
- loop chars
- re up_ups(w) || up_lows(w) || low_lows(w);
- up_ups == up?(w[0]) && up?(w[i], loop)
- up_lows == up?(w[0]) && low?(w[i], loop)
- low_lows == low?(w[0]) && low?(w[i], loop)
- https://leetcode.com/problems/detect-capital

<br/>
<br/>

## query_arr(like_2D), words_arr(like_2D); query_smallest_dist_arr, word_smallest_dist_arr; in_loop, out_loop

##### query_arr(like_2D), words_arr(like_2D); query_smallest_dist_arr, word_smallest_dist_arr; in_loop, out_loop

- EG
- qs -> [aza, bab]; ws -> [czzc, ddz]
- qs1 -> [3_a_dist, 1_a_dist]; ws1 -> [4_c_dist, 2_d_dist]
- res -> [1, 2]
- 3_a_dist < 4_c_dist(\*), 3_a_dist > 2_d_dist(x), so 1)
- 1_a_dist < 4_c_dist(\*), 1_a_dist < 2_d_dist(\*), so 2)
- SUMMA
-
- qs_sort, find_smallest, a[0]
- ws_sort, find_smallest, a[0]
- dist = lastInd(a[0]) - ind(a[0]) + 1
- qs1 -> [3_a_dist, 1_a_dist]; ws1 -> [4_c_dist, 2_d_dist]
- out_loop, in_loop; qs1[0], qs1[1] stay
- https://leetcode.com/problems/compare-strings-by-frequency-of-the-smallest-character

<br/>
<br/>

## outloop, inloop

##### outloop, inloop; use_up single def_num, 3999 -> 2999 -> 1999 -> 999 -> 99 -> 9 -> 0 === (MMM)(CM)(?)(?)

- EG
- 3999 -> 2999 -> 1999 -> 999 -> 99 -> 9 -> 0
- SUMMA
- def_num (hash)
- const h = {
  1: "I",
  4: "IV",
  ..
  9: "IX",
  ..
  90: "XC",
  ...
  900: "CM"
  1000: "M"
  }
- hash -> arr -> rev
- outloop: loop each def_num
- inloop: use_up single def_num, move next
- num -> roman, build str
- https://leetcode.com/problems/integer-to-roman

##### aaAaA (rm Aa) -> aaA (rm aA) -> a (rm nothing, stop);

- EG
- SUMMA
- outloop: while(prev_s.len !== curr_s.len)
- inloop: (i=0, i+1<s.len); s[i+1] - s[i] == 32, s.rm('Aa')
-
- A - a = 32, B - b = 32...
- https://leetcode.com/problems/make-the-string-great

##### abcabc -> a VS b(len_1) -> ab VS ca(len_2) -> abc VS abc(len_3); pick pattern_len stable, rest move

- EG
- ..
- SUMMA
- len = 6, half_len = 3
- abcabc (len_1(stable), OUTLOOP)
- a VS b, a VS c, a VS a, a VS b, a VS c (slide_char, INLOOP)
-
- abcabc (len_2(stable), OUTLOOP)
- ab VS ca, ab VS bc (slide_char, INLOOP)
-
- abcabc (len_3(stable), OUTLOOP)
- abc VS abc (slide_char, INLOOP)
-
- outloop: pattern
- inloop: move pattern
- https://leetcode.com/problems/repeated-substring-pattern

## back_to_zero, TWO / +1|-1 / MULTI_CANCEL / MULTI_ONE_GO

##### ++parent, --child; back_to_zero(TWO)

- EG
- SUMMA
- parent_hash ( h[e] = (h[e] || 0) + 1 )
- loop child_chars
- if(parent_hash[child] && --parent_hash[child] back_to_zero(TWO) >= 0)
- https://leetcode.com/problems/ransom-note

##### LLLLRRRR, (-1)(-1)(-1)(-1)(+1)(+1)(+1)(+1), res == 1; back_to_zero(+1|-1)

- EG
- LLLLRRRR, (-1)(-1)(-1)(-1)(+1)(+1)(+1)(+1)|, res == 1; greedy split when 0
- RLLLRR, (+1)(-1)|(-1)(-1)(+1)(+1), res == 2; greedy split when 0
- SUMMA
- loop chars
- back_to_zero(TWO, ++var, --var)
- greedy split when 0
- https://leetcode.com/problems/split-a-string-in-balanced-strings

##### [a, b], [b, c], [c, d], so desti == d; a(+1), b(-1), b(+1, back_to_zero(+1|-1)), c(-1), c(+1, back_to_zero(TWO)), d(-1);

- EG
- SUMMA
- loop paths
- [a, b], [b, c], [c, d], so desti == d; a(+1), b(-1), b(+1, back_to_zero(+1|-1)), c(-1), c(+1, back_to_zero(+1|-1)), d(-1)
- h[b] = +1, h[b] = +1 + (-1) == 0
- https://leetcode.com/problems/destination-city

##### aabbb, build_palin? back_to_zero(+1|-1)

- EG
- aabbb, build_palin?; a(+1)a(-1) b(+1)b(-1)b(+1); b:1 (left), can; back_to_zero(+1|-1)
- aabb, build_palin?; a(+1)a(-1) b(+1)b(-1)b; nothing (left), can; back_to_zero(+1|-1)
- ab, build_palin?; a(+1) b(+1); a:1, b:1 (left), no; back_to_zero(+1|-1)
- SUMMA
- loop chars
- if not exist, set.add; if exist, set.delete; back_to_zero(+1|-1)
- set.size === 1 || set.size === 0
- https://medium.com/swlh/palindrome-permutations-9752d8e71c7f

##### ++vertical, --vertical; ++horizontal, --horizontal; back_to_zero(MULTI)

- EG
- SUMMA
- loop chars (e.g. LLRRUD, robot move)
- back_to_zero(MULTI); ++vertical, --vertical; ++horizontal, --horizontal
- https://leetcode.com/problems/robot-return-to-origin

##### ++vertical, --vertical; ++horizontal, --horizontal; meet_old_point(MULTI)

- EG
- NNS (north, north, south); (0, 0) -> @(0, 1) -> (0, 2) -> @(0, 1); coord = old_coord + path
- SUMMA
- loop chars
- ++vertical, --vertical; ++horizontal, --horizontal; meet_old_point(MULTI);
- coord = old_coord + path
- https://leetcode.com/problems/path-crossing

##### bbaalloooonn, balloon, 2\*balloon; back_to_zero(MULTI_ONE_GO)

- EG
- SUMMA
- build_hash
- back_to_zero(MULTI_ONE_GO)
- https://leetcode.com/problems/maximum-number-of-balloons

<br/>
<br/>

## orig structure -> new structure

##### "aabc", [ab, bc]; a<b>abc</b>; (orig ab -> new 11; orig bc -> new 11)

- EG
- SUMMA
- loop words
- ..
- aabc, [ab, bc] -> [0, 1, 1, 1] (orig ab -> 11; orig bc -> 11)
- ..
- https://massivealgorithms.blogspot.com/2017/06/leetcode-616-add-bold-tag-in-string.html

##### LLLLRRRR, (-1)(-1)(-1)(-1)(+1)(+1)(+1)(+1); (orig L, R -> new -1, +1)

- EG
- SUMMA
- loop chars
- RLLLRR, (+1)(-1)|(-1)(-1)(+1)(+1), res == 2; (orig, L, R -> -1, +1)
- https://leetcode.com/problems/split-a-string-in-balanced-strings

##### ++vertical, --vertical; ++horizontal, --horizontal; (orig v -> new +1, -1; orig h -> new +1, -1)

- EG
- SUMMA
- loop chars (e.g. LLRRUD, robot move)
- back_to_zero(MULTI); ++vertical, --vertical; ++horizontal, --horizontal
- https://leetcode.com/problems/robot-return-to-origin

<br/>
<br/>

## slide_word (loop_word, slide_word, substring_equal)

##### "aabc", [ab, bc]; a<b>abc</b>; slide_word (loop_word, slide_word, substring_equal)

- EG
- SUMMA
- loop words
- slide_word (j, j+len), (s.len - w.len, dynamic_len)
- substring_equal
- fill_substring
- start_loop, <b>
- mid_loop: greedy
- end_loop, </b>
- https://massivealgorithms.blogspot.com/2017/06/leetcode-616-add-bold-tag-in-string.html

##### ababa, [aba, ab] -> [(0, 2), (2, 4)...]; slide_word (loop_word, slide_word, substring_equal)

- EG
- SUMMA
- loop words
- slide_word (j, j+len), (s.len - w.len, dynamic_len)
- substring_equal
- res.sort
- https://medium.com/algorithm-and-datastructure/index-pairs-of-a-string-7b7c8306ead0

<br/>
<br/>

## build_knowledge

##### build_knowledge(# shift); backward; i_read, i_write_almost;

- EG
- SUMMA
- [0(0, sh=0), 0(1, sh=1), 0(2, sh=2), 0(3, sh=3), 1(4)], len = 5;
- shift(prev_0s) + ind < len ===> 2 + 2 = 4 < 5
- shift(prev_0s) + ind < len ===> 3 + 3 = 6 > 5 (build_knowledge, # shift)
- loop_stop, sh == 3 (1 extra)
-
- loop(i=i-1; sh>0 ..) (backward)
- if i+sh < len (avoid 1 extra); read i, write i+sh (normal, i_read, i_write_almost)
- if a[i] == 0; read i, write i+(--sh) (dup 0, i_read, i_write_almost)
-
- https://leetcode.com/problems/duplicate-zeros/discuss/312743/JavaC%2B%2B-O(n)-or-O(1)

##### a2 in a1; a1 follows a2 order; res build_from_ground

- EG
- a1: [3, 4, 1, 1, 2, 2]
- a2: [1, 2]
- h: {3:1, 4:1, 1:2, 2:2} (build_knowledge)
- out: [1, 1, 2, 2, 3, 4]
- SUMMA
- ..
- ..
- https://leetcode.com/problems/relative-sort-array

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

## loop ele, subloop eles

##### ["mass","as","hero","superhero"], inside_ele substring ["as","hero"]; loop ele, subloop eles

- EG
- SUMMA
- loop ele
- subloop eles
- if not_same, not_in_res, substring, res.push
- https://leetcode.com/problems/string-matching-in-an-array

<br/>
<br/>

## sort(other_attr ? other_attr : default_attr)

##### letter_log, digi_log; data_into_diff_steam; sort(other_attr ? other_attr : default_attr)

- EG
- SUMMA
- "dig1 8 1 5 1" (start + num)
- "let2 own kit dig" (start + word)
-
- in: ["dig1 8 1 5 1", "let1 art can","dig2 3 6", "let2 own kit dig", "let3 art zero"]
- out: ["let1 art can", "let3 art zero", "dig1 8 1 5 1", "let2 own kit dig"]
- letter_sort, digi_orig_order;
-
- loop eles
- if letter, letter_arr; if digi digi_arr; (data_into_diff_stream)
-
- end_loop, sort(other_attr ? other_attr : default_attr), lexico_compare
- https://leetcode.com/problems/reorder-data-in-log-files

##### sort(other_attr ? other_attr : default_attr); sort -> slice -> map

- EG
- SUMMA
- [[1,0,0,0], [1,1,1,1], [1,0,0,0], [1,0,0,0]]
- res = [[1_count, 0_ind], [4, 1], [1, 2], [1, 3]]
-
- res.sort(other_attr ? other_attr : default_attr);
- res.sort.slice.map: sort(other_attr ? other_attr : default_attr) -> slice_portion -> map_sub_attr)
- https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix

##### ababa, [aba, ab] -> [(0, 2), (2, 4)...]; slide_word (loop_word, slide_word, substring_equal)

- EG
- SUMMA
- ..
- ..
- ..
- res.sort, [(0, 3), (0, 1), (1, 2), (1, 1)] -> [(0, 1), (0, 3), (1, 1), (1, 2)]
- https://medium.com/algorithm-and-datastructure/index-pairs-of-a-string-7b7c8306ead0

<br/>
<br/>

## small_var (maintain meaning), big_var (maintain meaning)

##### ABABAB(3\*AB), ABAB(2\*AB), gcd = AB; AAAA - AAA(rm_prefix) = A; AAA - A(rm_prefix) = A

- EG
- (ab)abab vs ab, ababab.sub(ab.len) == abab; abab vs ab
- (ab)ab vs ab, abab.sub(ab.len) == ab; ab vs ab
- ab vs ab, ab.sub(ab.len) == ''; gcd
- SUMMA
- long - short, keep going
- recur
- (1) long_var (maintain meaning) > short_var (maintain meaning); (2) false_case( !abab.sub(ab) ); (3) good_case( s1 there, s2 == '' ); (4) con( (ab)ab, ab )
- https://leetcode.com/problems/greatest-common-divisor-of-strings

##### abc12; abc long, 12 short; (bs)(bs)(b) -> (a1)(b1)c

- EG
- SUMMA
- get_letter_arr(split, filter, isNaN), get_num_arr(split, filter, isNaN)
- big_var (maintain meaning) > small_var (maintain meaning)
- (bs)(bs)(b), bs + bs + extra
- (bs)(bs), bs + bs + no_extra
- arr.pop_end()
- https://leetcode.com/problems/reformat-the-string

## to_num VS to_char, get distance

##### Hello -> hello

- EG
- SUMMA
- loop chars
- if cap; 'a'.charCodeAt(0) + (s[i] - 'A'.charCodeAt(0)), to_num; fromCharCode, to_char
- distance(c - a) === distance(C - A)
- https://leetcode.com/problems/to-lower-case

<br/>
<br/>
<br/>
<br/>
<br/>

## special case 1st, then normal case

##### 110#11#12# -> (1)(10#)(11#)(12#) -> s.replace(/10#/) -> special 1st, (1)jkl -> ajkl

- EG
- SUMMA
- special case 1st, then normal case; s.replace(/10#/)
- https://leetcode.com/problems/decrypt-string-from-alphabet-to-integer-mapping

<br/>
<br/>
<br/>
<br/>
<br/>

## greatest common divisor (gcd)

##### keep long_before_short; long_has_no_short; short_full_consumed; gcd_recur_rm_common

- EG
- AAAA - AAA = A;
- AAA - A = AA;
- AA - A = A;
- A - A = 0 (done)
- SUMMA
-
- gcd_recur
- if short_str.len > long_str.len (keep short_before_long)
- if long.index(short) === 0, re ''; (long_has_no_short)
- if short.len === 0, re big; (short full consumed)
- else gcd( long.substr(short), short ); (gcd_recur_rm_common)
- https://leetcode.com/problems/greatest-common-divisor-of-strings

##### keep start_before_end; curr_res in total_res, when_condi; total_res_with_loop; part_cycle = curr_res; rest_part_cycle = tot_res - curr_res

- EG
- [1_distance, 2_d, 3_d, 4_d]; 1_ind -> 2_ind, 2_distance
- SUMMA
- if start_ind > end_ind; swap; keep_1_direction_cycle
-
- loop eles
- if i >= start_ind(0_ind) && i < dest_ind(1_ind); res = res + dist[i] (curr_res in total_res, when_condi)
- tot = tot + dist[i] (total_res_with_loop)
-
- end_loop; part_of_cycle = curr_res; rest_part_of_cycle = tot_res - curr_res
- https://leetcode.com/problems/distance-between-bus-stops

##### another gcd, [1,1,2,2,2,2] -> [1, 1], [2, 2], [2, 2]

- EG
- SUMMA
- https://leetcode.com/problems/x-of-a-kind-in-a-deck-of-cards/discuss/248225/JavaScript-O(N)-Buckets-and-GCD-wExplanation

<br/>
<br/>
<br/>
<br/>

# DP

https://leetcode.com/discuss/general-discussion/491522/dynamic-programming-questions-thread

<br/>
<br/>
<br/>
<br/>

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

## dp[i] = dp[i_prev] + sth

- dp[i] = dp[i_prev] + curr_ele
- dp[i] = dp[i_prev] + func(curr_ele)
- dp[i] = reset + curr_ele

##### aaabc -> aaa_3_char, aa_2_char, a_1_char, b_1_char, c_1_char -> 3+2+1+1+1=8; dp[i]\_curr_freq = dp[i-1]\_prev_freq + dp[i]\_curr_freq

- EG
- SUMMA
- single_loop (i=1_look_back; i<len...)
-
- DP_EXPLAIN
- dp_slot == arr.len
- dp[a.len].fill(1) == 1_char_freq
-
- i == curr_ind
- dp[i] == curr_freq
- i-1 == prev_ind
- dp[i-1] == prev_freq
-
- single_loop (i=1_look_back; i<len...)
- dp[i]\_curr_freq = dp[i-1]\_prev_freq + dp[i]\_curr_freq
-
- https://helloacm.com/counting-substrings-with-only-one-distinct-letter-with-different-algorithms

##### N = 12; 1 -> 0(0), 2 -> 5(1), 3 -> x(0)... 10 -> 10(0), 11 -> 11(0), 12 -> 15; contain [3, 4, 7], then\*all_fail; contain [2, 5, 6, 9], then_give_1

- EG
- mycount
- 0 1 2 3 4 5 6 7 8 9 10 11 12 13 (each_num)
- 0 1 5 x x 2 9 x 8 6 10 11 12 1x (e.g. 2 -> 5, 180 degrees)
- 0 0 1 0 0 1 1 0 0 1 00 00 01 00 (contain [3, 4, 7], then_all_fail; contain [2, 5, 6, 9], give_1)
-
- double_digits
- 14 -> 1(1)4(x) -> 0 (contain [3, 4, 7], then_all_fail)
- 20 -> 2(1)0(0) -> 1 (contain [2, 5, 6, 9], give_1)
- 22 -> 2(1)2(1) -> 1 (......)
- SUMMA
-
- contain [3, 4, 7], then_all_fail
- contain [2, 5, 6, 9], then_give_1
-
- single_loop(i=1; i<=N...)
-
- DP_EXPLAIN
- dp_slot == N+1
- dp[N+1].fill(0)

- i == curr_input_num
- dp[i] == curr_rotate_addup
- i-1 == prev_input_num
- dp[i-1] == prev_rotate_addup
-
- dp[i] = dp[i-1] + mycount(i)

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

###### 2D; trangle to square DP; head + content + tail

- EG
- rowNum = 4, so [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1]]
- SUMMA
- dp[i][j] => i at this rowNum, i=0, i<=rowNum-1;
- dp[i][j] => j at this content, j=1(avoid head), j<i(avoid tail);
- dp[i][j] => res
-
- out_loop rowNum
- pa = [] (build_1D)
- in_loop content (avoid head / tail)
- pa[i] = [] (build_2D); pa[i][0] = 1(start)
- pa[i][j] = pa[i-1][j-1](diag) + pa[i-1][j](top)
- pa[i][i] = 1(end)
- https://leetcode.com/problems/pascals-triangle

##### 2D; fake_top_left_vals; bottom_up, bottom_contrib, bottom_right_contrib; min_path

- n, m size (dp_size == ma_size)
- dp[i-1][j] => AT this col, AT this row, FINAL min_path
- init side => fill_bottom_row
- loop row (bottom_up; i=n-1(ele); i>=0(ele))
- loop col (bottom_forward; j=0; j>=i(j+1))
- dp[i-1][j] = MIN(dp[i-1][j], dp[i-1][j+1]) + grid[i-1][j](dp_use_i)
- re dp[0][0]
- https://leetcode.com/problems/triangle

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

##### 1D; backward, curr_overwrite, prev_nochange

- EG
- SUMMA
- dp[0] = 1 (start)
- dp[i+1] = 1 (push_new_end)
- dp[j] => j at this num; j=i(backward, 2nd_last), j>0(avoid_head)
- dp[j] => res
-
- out_loop numRow (top -> bottom)
- dp[0] = 1 (start)
- dp[i+1] = 1 (push_new_end)
- in_loop #; j=i(backward, curr_overwrite, prev_nochange; 2nd_last), j>0(avoid_head)
- dp[j] = dp[j-1](prev) + dp[j](curr)
- https://leetcode.com/problems/pascals-triangle-ii

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
- https://leetcode.com/problems/longest-palindromic-substring

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

<br/>
<br/>

## 2_start, 2_ending

##### 1D; min_cost_climb; 2_start, 2_ending

- EG
- SUMMA
- dp[i] => i, at each index
- dp[i] => dp[i], cost so far
- dp[i-1] => prev_step_1, acc_cost
- dp[i-2] => prev_step_2, acc_cost
- dp[x-y] => none
- dp[0] => init, start_0 (2_start)
- dp[1] => init, start_1 (2_start)
- ns[i] => ele, curr_cost
-
- loop eles (i=2, i<len)
- dp[i] = mi(dp[i-1], dp[i-2])(2_start) + ns[i]
- re mi(dp[len-1], dp[len-2]) (2_ending)
- https://leetcode.com/problems/min-cost-climbing-stairs

##### climb, draw_the_tree_cache

- EG
- climb, take_1_step or take_2_step
- SUMMA
-
- draw_the_tree_cache
-
- init:
- recur_cache VS dp_arr
- dp[0]: when_tar_exhaust
-
- single_loop:
- recur_func VS dp_func
- sub_tars contrib top_tar; count = count + recur(sub_tar)\_abstract_return
- sub_tars_cache
-
- https://leetcode.com/problems/climbing-stairs

##### climb, draw_the_tree_dp

- EG
- climb, take_1_step or take_2_step
- SUMMA
-
- draw_the_tree_dp
-
- init:
- dp_arr VS recur_cache
- dp[0]: when_tar_exhaust
-
- outloop:
- bottom -> top VS top -> bottom -> slow_cover_top
-
- inloop:
- dp_func VS recur_func
- sub_tars contrib top_tar: dp[tar] = dp[tar-ns[0]] + dp[tar-ns[1]] + dp[tar-ns[2]]... -> dp[tar] = dp[tar]\_acc_inloop + dp[tar-ns[i]];
- avoid_ind_overconsume
-
- https://leetcode.com/problems/climbing-stairs

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

# =============================================================================

# dp (real_understanding)

## dp, order !important (ele -> tar)

##### arr\*to_2_equal_sum_part; order !important (ele -> tar)

- EG
- SUMMA
-
- method 1:
- draw_the_tree_no_cache
- knapsack recur; recur_as_loop_i
-
- method 2:
- draw_the_tree_2d_cache
- knapsack recur, recur_as_loop_i
-
- method 3:
- 2d_cache
- same as above, 2d_cache(dp[i][tar] == dp[tar][i])
-
- method 4:
- 2d_cache
- combination_sum recur, no recur_as_loop_i
-
- method 5:
- 2d_cache
- tar -> ele (order important; want_more dp[..][len])
- ele -> tar (order !important; want_less dp[..][j-1]; loop_order_can_swap) <--
-
- method 6:
- 2d_cache
- tar -> ele (order important; want_more dp[..][len]) <--
- ele -> tar (order !important; want_less dp[..][j-1]; loop_order_can_swap)
-
- method 7:
- 1d_cache
- backward_loop, use_prev_dp; forward_loop, overwritten_prev_dp
-
- see my solution: https://leetcode.com/submissions/detail/468284357
- https://leetcode.com/problems/partition-equal-subset-sum

<br/>
<br/>
<br/>
<br/>
<br/>

## dp, order important (tar -> ele)

##### combo_sum_4; order_important (tar -> ele)

- EG
- SUMMA
-
- method 1:
- draw_the_tree_no_cache(timeout); recur_abstract_return
-
- method 2:
- 1d_cache
- draw_the_tree_cache; recur_abstract_return
-
- method 3:
- 2d_cache
- tar -> ele (order important; want_more, dp[..][j-1]) <--
- ele -> tar (order !important; want_less, dp[..][len]; loop_order_can_swap) x
-
- method 4:
- 1d_cache
- forward_loop, no_overwritten_prev_dp (dp[..][len])
-
- method 5:
- 1d_cache
- backward_loop, use_prev_dp
-
- my solution: https://leetcode.com/submissions/detail/468503374/
- https://leetcode.com/problems/combination-sum-iv

##### buy sell stock k_tran = unlimit; recur == dp, some_param == dp_ind, ele == ele

- EG
- SUMMA
-
- method 1:
- dp[ind][can_buy] = buy or no_action; dp[ind][can_buy] = sell or no_action; k_tran = unlimit (so no care)
-
- method 2:
- recur == dp, some_param == dp_ind, ele == ele
-
- method 3:
- 1D_dp, order important; recur == dp; some_param == dp_ind; ele == ele
-
- method 4:
- const_var; recur == dp; some_param == dp_ind; ele == ele
-
- method 5:
- peak-valley; find_bottom, ind_exceed_condi; find_top, ind_exceed_condi;
-
- https://leetcode.com/submissions/detail/474057458/
- https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii

<br/>
<br/>
<br/>
<br/>
<br/>

## curr = (con_subarray || startover_subarray) + ele

##### max_subarray; curr = (con_subarray || startover_subarray) + ele

- EG
- SUMMA
-
- method 1:
- brute_force; i_stable, j_stable, k_loop (everytime_startover_subarray)
-
- method 2:
- brute_force; i_stable, j_loop, (everytime_prev_subarray)
-
- method 3:
- dp; curr = (con_subarray || startover_subarray) + ele
-
- method 4:
- dp; curr = (con_subarray || startover_subarray) + ele; dp[i], dp[i-1] using_same_var
-
- https://leetcode.com/submissions/detail/472100127/
- https://leetcode.com/problems/maximum-subarray

##### buy_low_sell_high_once;

- EG
- SUMMA
-
- method 1:
- brute_force; i_stable vs j_loop
-
- method 2:
- big_segment == small_segments (prepare), then max_subarray problem
-
- method 3:
- big_segment == small_segments (in_fly), then max_subarray problem
-
- method 4:
- i vs i-1 partition (1_min)
-
- https://leetcode.com/problems/best-time-to-buy-and-sell-stock

<br/>
<br/>
<br/>
<br/>
<br/>

## 2pt (i_start, j_end)

##### reverse group eles in arr; build_fresh; easier

- EG
- [1, 2, 3, 4, 5], k = 3 -> [3, 2, 1, 5, 4]
- SUMMA
-
- build_fresh (inject); i_start, j_end (j backward inject)
- j abstract (inbound or outbound)
-
- https://practice.geeksforgeeks.org/viewSol.php?subId=2654ac371c531fa9fb2c06f5690a0623&pid=701191&user=figo2476
- https://practice.geeksforgeeks.org/problems/reverse-array-in-groups0255/1

##### trap rain water; max_hold_most_water (left), max_hold_most_water (right)

- EG
- SUMMA
-
- 2pt, max_hold_most_water (left), max_hold_most_water (right); small_move (already consumed)
-
- https://leetcode.com/submissions/detail/495366729/
- https://leetcode.com/problems/trapping-rain-water

##### rev_each_word, keep space; i_start, j_end; rev_a_word

- EG
- SUMMA
-
- 2pt, skip_loop (i_start), skip_loop (j_end); rev; next
-
- https://leetcode.com/submissions/detail/410447049/
- https://leetcode.com/problems/reverse-words-in-a-string-iii

##### even num on left, odd num on right; skip_loop (hit odd), skip_loop (hit even), swap; even_left, odd_right

- EG
- SUMMA
- skip_loop (hit odd), skip_loop (hit even), swap; even_left, odd_right
- https://leetcode.com/problems/sort-array-by-parity

##### even num on left, odd num on right; build_fresh (easier), i_write (start), j_write (end), n_read; left_partition_even, right_partition_odd

- EG
- SUMMA
- build_fresh (easier), i_write (start), j_write (end), n_read; left_partition_even, right_partition_odd
- https://leetcode.com/problems/sort-array-by-parity

##### is palindrome; i_start == j_end, cross; brute_force

- EG
- SUMMA
- skip_loop (non-alpha-num); i_start == j_end, cross; brute_force
- https://leetcode.com/problems/valid-palindrome

<br/>
<br/>
<br/>
<br/>
<br/>

## 2pt, i_start, j_start

##### even num at even ind, odd num at odd ind; build_fresh (easier), i_write (start), j_write (start), n_read; even at even, odd at odd

- EG
- SUMMA
- build_fresh (easier), i_write (start), j_write (start), n_read; i (correct_posi), j (correct_posi)
- https://leetcode.com/problems/sort-array-by-parity-ii/

<br/>
<br/>
<br/>
<br/>
<br/>

## 2pt, i_start, j_extending

##### subarray_sum == k (+); i_start, j_extending; range

- EG
- SUMMA
-
- 2pt, i_start (stable), j_start (extending); brute_force; can_exist_early (+)
-
- https://practice.geeksforgeeks.org/viewSol.php?subId=8667e105a253bc4200a06c456b6b0142&pid=701236&user=figo2476

##### subarray_sum == k (+/-); i_start, j_extending; range

- EG
- SUMMA
-
- 2pt, i_start (stable), j_start (extending); brute_force; cannot_exit_early (+/-)
-
- https://leetcode.com/problems/subarray-sum-equals-k
- https://leetcode.com/submissions/detail/469373460/

<br/>
<br/>
<br/>
<br/>
<br/>

## 2pt (i, i+len)

##### rev str in k; 0->k rev, k->2k no; question_ask

- EG
- SUMMA
-
- 0 (k len rev); 1k (no); 2k (k len rev); 3k (no); 4k (k len rev); i+k (question_ask)
- j_end abstract
- https://leetcode.com/problems/reverse-string-ii

##### [1, 2, 3, 4] -> [2, 4, 4, 4]; one 2, then three 4; i = i+2 (question_show)

- EG
- SUMMA
- i = i+2 (question_show)
- https://leetcode.com/problems/decompress-run-length-encoded-list

<br/>
<br/>
<br/>
<br/>
<br/>

## 2pt (i+len, 0+len)

##### find a str in another str; i+len vs 0+len; compare

- EG
- SUMMA
-
- 2pt, i_start (stable, brute_force); i+len (extending), 0+len (extending); compare
-
- https://leetcode.com/problems/implement-strstr

<br/>
<br/>
<br/>
<br/>
<br/>

## 3pt (i_start, j_end-1, k_end)

##### 2_ele_sum == 3rd_ele; smallest + 2nd_largest == largest; likely success

- EG
- SUMMA
-
- sort; i_start (smallest) + j_end (2nd_largest) = k_end (largest); likely success
-
- https://practice.geeksforgeeks.org/problems/count-the-triplets4615/1
- https://practice.geeksforgeeks.org/viewSol.php?subId=897008f882370645ad43ee369da48b30&pid=702837&user=figo2476

##### in arr, a^2 + b^2 == c^2; smallest + 2nd_largest == largest; likely success

- EG
- SUMMA
-
- sort; i_start (smallest) + j_end (2nd_largest) = k_end (largest); likely success
-
- https://practice.geeksforgeeks.org/viewSol.php?subId=e42971255da045373e53e797d7618dec&pid=702805&user=figo2476
- https://practice.geeksforgeeks.org/problems/pythagorean-triplet3018/1

<br/>
<br/>
<br/>
<br/>
<br/>

## 3pt (i, i+1, i+2_con)

##### local_inv == global_inv; i, i+1, i+2_con; question_ask

- EG
- SUMMA
- brute_force (i_stable, j_loop); i, i+1 is local_inv and global_inv (neighbour); i, i+2.. is only global_inv (beyond neighbour)
-
- https://leetcode.com/submissions/detail/483848195/
- https://leetcode.com/problems/global-and-local-inversions

<br/>
<br/>
<br/>
<br/>
<br/>

## 3pt (i-1, i, i+1)

##### zig zag; [1, 2, 3, 4, 5] -> [1, 3_max, 2, 5_max, 4]; i-1, i, i+1; i max swap; max_top

- EG
- SUMMA
-
- i-1, i, i+1; i max swap; max_top
-
- https://practice.geeksforgeeks.org/problems/convert-array-into-zig-zag-fashion1638/1#

<br/>
<br/>
<br/>
<br/>
<br/>

## brute_force; i_stable, j_loop

##### find minimum platforms (train start, end time); cross_compare; deakin_experience

- EG
- SUMMA
-
- brute_force (1 train stable, other train loop); cross_compare (a_end vs b_start)
-
- https://practice.geeksforgeeks.org/problems/minimum-platforms-1587115620/1
- https://practice.geeksforgeeks.org/viewSol.php?subId=a5d446a873521478733111306c0e77dd&pid=701368&user=figo2476

##### my-calendar-ii; overlap_arr (check), overlap_arr (inject); remember_past

- EG
- SUMMA
-
- brute_force (loop overlap, loop event); overlap_arr (check), overlap_arr (inject)
-
- https://leetcode.com/problems/my-calendar-ii/discuss/1183353/Brute-force-and-built-in-sorted-dictionary

<br/>
<br/>
<br/>
<br/>
<br/>

## brute_force; i_stable, j_stable, k_loop

##### 3sum_less_k, count; i_stable, j_stable, k_loop

- EG
- SUMMA
- i_stable vs j_stable vs k_loop
-
- https://www.geeksforgeeks.org/count-triplets-with-sum-smaller-that-a-given-value

<br/>
<br/>
<br/>
<br/>
<br/>

## skip_loop (space, then char)

<br/>
<br/>
<br/>
<br/>
<br/>

## skip_loop (up_hill, down_hill)

##### valid mountain; skip_loop (up), skip_loop (up, backward); form mountain

- EG
- SUMMA
- method 1:
- skip_loop (all the way up); skip_loop (all the way down)
-
- method 2:
- skip_loop (all way up); skip_loop (all the way up, backward)
-
- https://leetcode.com/submissions/detail/497931700/
- https://leetcode.com/problems/valid-mountain-array

##### buy low (down_hill), sell high (up_hill);

- EG
- SUMMA
- buy low (skip_loop), sell high (skip_loop); greedy
- https://leetcode.com/submissions/detail/498288319/
- https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii

<br/>
<br/>
<br/>
<br/>
<br/>

## gap

##### [1, 2, 3, 4, 5, 10, 100, 1000], lo=5, hi=10 -> missing_range, [6->9]; gap -> missing_range

- EG
- SUMMA
-
- arr_ele <= c_res (no gap), arr_ele > c_res (gap)
-
- https://leetcode.com/problems/missing-ranges/
- https://medium.com/@rebeccahezhang/leetcode-163-missing-ranges-6ac21b477e96
- https://goodtecher.com/leetcode-163-missing-ranges/
- https://wentao-shao.gitbook.io/leetcode/array/163.missing-ranges

<br/>
<br/>
<br/>
<br/>
<br/>

## symmetric

##### all num sum == 0; symmetric

- EG
- SUMMA
- n%2 == 0; (-....) | (+.....)
- n%2 != 0; (-....) 0 (+.....)
-
- https://leetcode.com/problems/find-n-unique-integers-sum-up-to-zero

<br/>
<br/>
<br/>
<br/>
<br/>

## partition

##### [3, 3, 3, 1, 1, 1, 2, 2, 2]; sort; left_partition of first 3; smaller

- EG
- SUMMA
- [3, 3, 3, 1, 1, 1, 2, 2, 2] -> [1, 1, 1, 2, 2, 2, 3, 3, 3]; sort; left_partition of first 3; smaller
- https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number

<br/>
<br/>
<br/>
<br/>
<br/>

## deal with left, deal with right;

##### curr rating high > neighbours --> left neighbours, right neighbours; curr i

- EG
- SUMMA
- curr rating high > neighbours --> left neighbours (look_back, preserve prev), right neighbours (look_back, preserve prev); curr i max
- https://leetcode.com/problems/candy

##### trap rain water; max_hold_water (brute_force, left), max_hold_water (brute_force, right); curr i

- EG
- SUMMA
-
- max_hold_water (brute_force, left), max_most_water (brute_force, right); curr i min
-
- https://leetcode.com/submissions/detail/495366729/
- https://leetcode.com/problems/trapping-rain-water

##### trap rain water; max_hold_water (dp left), max_hold_water (dp right); curr i

- EG
- SUMMA
-
- max_hold_water (dp left), max_hold_water (dp right); curr i (max - curr)
-
- each_var_meaing;
- i: curr max so far
- i-1: prev..
- i+1: next..
- 0: init self
- n-1: last max
- dp[i]: curr max so far
- dp[i-1]: ..
- dp[i+1]: ..
- dp[0]: init self
- dp[n-1]: last ..
- f: max so far
-
- https://leetcode.com/submissions/detail/495366729/
- https://leetcode.com/problems/trapping-rain-water

##### curr i > left, curr i < right; left_max (dp left), right_max (dp right); curr i

- EG
- SUMMA
-
- left_max (dp left), right_max (dp right); curr i (compare left right, no curr i)
-
- https://practice.geeksforgeeks.org/viewSol.php?subId=a606567724872fdd52f0f7f36e3e68a0&pid=703327&user=figo2476
- https://practice.geeksforgeeks.org/problems/unsorted-array4925/1

#####

- EG
- SUMMA
-
- https://practice.geeksforgeeks.org/problems/leaders-in-an-array-1587115620/1

<br/>
<br/>
<br/>
<br/>
<br/>

## brute_force; dp[ind][can_buy][tran] = buy or no_action; dp[ind][can_buy][tran] = sell or no_action; k_tran = 1, 2, k, unlimit

##### dp[ind][can_buy][tran] = buy or no_action; dp[ind][can_buy][tran] = sell or no_action; k_tran = 1

- EG
- SUMMA
- dp[ind][can_buy][tran] = buy or no_action; dp[ind][can_buy][tran] = sell or no_action; k_tran = 1
- https://leetcode.com/problems/best-time-to-buy-and-sell-stock

##### dp[ind][can_buy][tran] = buy or no_action; dp[ind][can_buy][tran] = sell or no_action; k_tran = 2

- EG
- SUMMA
- dp[ind][can_buy][tran] = buy or no_action; dp[ind][can_buy][tran] = sell or no_action; k_tran = 2
- https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii

##### dp[ind][can_buy][tran] = buy or no_action; dp[ind][can_buy][tran] = sell or no_action; k_tran = k

- EG
- SUMMA
- dp[ind][can_buy][tran] = buy or no_action; dp[ind][can_buy][tran] = sell or no_action; k_tran = k
- https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv

##### dp[ind][can_buy] = buy or no_action; dp[ind][can_buy] = sell or no_action; k_tran = unlimit (no care)

- EG
- SUMMA
- dp[ind][can_buy] = buy or no_action; dp[ind][can_buy] = sell or no_action; k_tran = unlimit
- https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii

<br/>
<br/>
<br/>
<br/>
<br/>

# combo_sum; (1) i (2) i+1 (3) i+1 && len (4) draw_the_tree

## combo_sum; (1) i (2) i+1 (3) i+1 && len (4) draw_the_tree

##### combo_sum_1; i

- EG
- SUMMA
-
- combo_sum_1 (i; non_0 no_repeat; unlimit so i)
- https://leetcode.com/problems/combination-sum

##### combo_sum_2; i+1

- EG
- SUMMA
-
- combo_sum_2 (i+1; use_once)
- look_back, before_op
- https://leetcode.com/problems/combination-sum-ii

##### combo_sum_3; i+1 && len

- EG
- SUMMA
-
- combo_sum_3 (i+1 && len)
- https://leetcode.com/problems/combination-sum-iii

##### combo_sum_4; draw_the_tree

- EG
- SUMMA
-
- combo_sum_3 (draw_the_tree cache / dp)
- https://leetcode.com/problems/combination-sum-iv

<br/>
<br/>

## k_stable; i, j meet

##### 2_sum == 3rd_ele; k_stable; i, j meet;

- EG
- SUMMA
-
- sort
- k_stable; i, j meet;
- matched, still_chance; ++i (no skip_loop), --j (no skip_loop)
-
- https://practice.geeksforgeeks.org/problems/count-the-triplets4615/1
- https://practice.geeksforgeeks.org/viewSol.php?subId=7f960d672c005585e2c0324b5c6cce17&pid=702837&user=figo2476

##### 3sum; k_stable; i, j meet;

- EG
- SUMMA
-
- sort
- k_stable; i, j meet
- matched, still_chance; ++i (skip_loop), --j (skip_loop)
-
- https://leetcode.com/problems/3sum

##### 2sum_less_k; k_stable (no_such); i, j meet;

- EG
- SUMMA
-
- sort
- k_stable (no_such); i, j meet;
- < k (less_k)
- > = k
-
- https://gist.github.com/yitonghe00/76a5f3034c9c81ebf8be3433e6865eae

##### 3sum_less_k (count); k_stable; i, j meet

- EG
- SUMMA
-
- sort
- k_stable; i, j meet
- < k (less_k)
- > = k
-
- https://kennyzhuang.gitbooks.io/leetcode-lock/content/259_3sum_smaller.html
- https://leetcode.com/problems/3sum-smaller

##### 3sum_less_k (count); k_stable; i, j meet

- EG
- SUMMA
-
- sort
- k_stable; i, j meet
- < k (less_k)
- > = k
- https://www.geeksforgeeks.org/count-triplets-with-sum-smaller-that-a-given-value/

##### 3sum_less_k (absolute_distance); k_stable; i, j meet

- EG
- SUMMA
- sort
- k_stable; i, j meet
- < k (less_k)
- > = k
- https://leetcode.com/problems/3sum-closest

<br/>
<br/>
<br/>
<br/>
<br/>

## j_read (explode), i_write (correct_posi)

##### reverse words in str; rev_whole, rev_each, no_space; whole then small_modify

- EG
- SUMMA
- (1) rev_whole (later rev each_block)
- (2) rev_each_word (question ask); consume, stop
- (3) no_extra_space (trim_end, 1_each_word); j_read, i_write (non-move easily, write_at_correct_posi)
- https://leetcode.com/submissions/detail/410433342/
- https://leetcode.com/problems/reverse-words-in-a-string

##### reverse words in str; rev_whole, rev_each, no_space; whole then small_modifya good \_\_ example " -> "example good a"; rev_whole, rev_each_word, no_extra_space

- EG
- SUMMA
- same above
- (1) rev_whole
- (2) rev_each_word
- (3) no_extra_space
- https://www.programcreek.com/2014/05/leetcode-reverse-words-in-a-string-ii-java/
- https://leetcode.com/problems/reverse-words-in-a-string-ii

##### [1, 1, 2, 2, 3, 3] (sort) -> [1, 2, 3]; i_write (correct_posi), j_read (explode)

- EG
- SUMMA
- i_write (correct_posi), j_read (explode)
- https://leetcode.com/submissions/detail/420662665/
- https://leetcode.com/problems/remove-duplicates-from-sorted-array

##### rm ele, [3, 2, 2, 3] -> [x, 2, 2, x]; i_write (correct_posi), j_read (explode)

- EG
- SUMMA
- i_write (correct_posi), j_read (explode)
- https://leetcode.com/problems/remove-element

##### move zeros to end, [0,1,0,3,12] -> [1, 3, 12, 0, 0]; i_write (correct_posi), j_read (explode)

- EG
- SUMMA
- i_write (correct_posi), j_read (explode)
- https://leetcode.com/submissions/detail/493858027/
- https://leetcode.com/problems/move-zeroes

###### ns1 = [5, 6, 0, 0, 0], m = 2, ns2 = [1, 2, 3], n = 3 -> [1, 2, 3, 5, 6]; i_read (explode), j_read (explode), k_write (correct_posi)

- EG
- SUMMA
- i_read (backward_explode, won't overwrite), j_read (backward_explode, won't overwrite), k_write (non-move easily, write_at_correct_posi)
- https://leetcode.com/problems/merge-sorted-array

<br/>
<br/>
<br/>
<br/>
<br/>

## greedy

##### [2, 3]\_child, [1, 10]\_cookie; sort; can this cookie feed this child?

- EG
- SUMMA
- sort; can this cookie feed this child? then_next
- https://leetcode.com/problems/assign-cookies/

<br/>
<br/>
<br/>
<br/>
<br/>

## ind = num % len

##### distribute candy; candy_n = 10, [1, 2, 3]\_order -> [5, 2, 3]; ind = num % len; distribute

- EG
- SUMMA
- ind = num % len;
- https://leetcode.com/problems/distribute-candies-to-people

<br/>
<br/>
<br/>
<br/>
<br/>

## is_palindrome (1) compare now (2) compare later

##### is_palindrome; abba; (1) compare now

- EG
- SUMMA
- i_start == j_end
- https://leetcode.com/problems/valid-palindrome

##### is_palindrome; 121 -> 121; (2) compare later

- EG
- SUMMA
- 1 -> 12 -> 121 (build, then compare, compare later)
- prev_digit = input / 10; curr_digit = input % 10;
- https://leetcode.com/problems/palindrome-number

<br/>
<br/>
<br/>
<br/>
<br/>

## prev_digit = input / 10; curr_digit = input % 10;

##### sum of min num; prev_digit = input / 10; curr_digit = input % 10; brute_force

- EG
- SUMMA
- [99,77,33,66,55], 33 is min, sum is 6 (even_num);
- prev_digit = input / 10; curr_digit = input % 10;
- https://bloggie.io/@rugved/leetcode-1085-sum-of-digits-in-the-minimum-number-java-solution
- https://leetcode.com/problems/sum-of-digits-in-the-minimum-number

<br/>
<br/>
<br/>
<br/>
<br/>

## len / num = each, len % num = remain;

##### " this is a sentence " -> "this is a sentence\_\_"; len / num = each, len % num = remain; combine_words

- EG
- SUMMA
- len / num = each, len % num = remain; combine_words
- https://leetcode.com/problems/rearrange-spaces-between-words

<br/>
<br/>
<br/>
<br/>
<br/>

## full_len - ind == rest_len

##### 12345678 -> 12.345.678; full_len - ind == rest_len; rest_len % 3 == 0

- EG
- SUMMA
- full_len - ind == rest_len; rest_len % 3 == 0
- https://leetcode.com/problems/thousand-separator

<br/>
<br/>
<br/>
<br/>
<br/>

## chg_sth, become_old_question

##### 3sum; ele + 2sum_hash_prev (chg_sth, become_old_question)

- EG
- SUMMA
-
- sort
- sum - ele (chg_sth)
- become 2sum_hash_prev (become_old_question)
- matched, still_chance; 2sum_hash_prev
-
- https://leetcode.com/submissions/detail/470985485
- https://leetcode.com/problems/3sum

##### 3sum_less_k; ele + 2sum_less (chg_sth, become_old_question)

- EG
- SUMMA
-
- sort
- sum - ele (chg_sth)
- become 2sum_less_k (become_old_question)
-
- https://baihuqian.github.io/2018-07-28-3sum-smaller

##### 2part_equal; half_sum + combination_sum_2; (chg_sth, become_old_question)

- EG
- SUMMA
-
- sort
- half sum (change_sth)
- become combo_sum_2 (i+1) || combo_sum_3 (i+1, len)
-
- https://leetcode.com/problems/partition-equal-subset-sum

<br/>
<br/>
<br/>
<br/>
<br/>

## inverse_question; when saying true, false, yes, no; inverse

##### local_inv_num == global_inv_num; means only local_inv exist (inverse_question)

- EG
- SUMMA
-
- equal, means only local_inv exist (inverse_question)
- max_most_likely
-
- https://leetcode.com/submissions/detail/483848195/
- https://leetcode.com/problems/global-and-local-inversions

<br/>
<br/>
<br/>
<br/>
<br/>

# slide_window

## expand_win_right (1 by 1), shrink_win_left (condi)

##### subarray_sum (>=0) == k; expand_win_right (1 by 1), shrink_win_left (sum == k)

- EG
- SUMMA
-
- expand_win_right (1 by 1), shrink_win_left (sum == k)
-
- https://practice.geeksforgeeks.org/viewSol.php?subId=b70840393292ef97fdbe78121760d972&pid=701236&user=figo2476

##### subarray_product (>=0) less_than_k; expand_win_right (1 by 1), shrink_win_left (product >= k)

- EG
- SUMMA
-
- expand_win_right (1 by 1), shrink_win_left (product >= k)
-
- less_than_k === range
- orig_arr + income_ele -> 2 times more
-
- https://leetcode.com/problems/subarray-product-less-than-k
- https://leetcode.com/submissions/detail/469783113/

<br/>
<br/>
<br/>
<br/>
<br/>

## expand_win_right (by couple), shrink_win_left (condi)

##### longest non-repeated substr; (1) slide_win (shrink_left) (2) hash (val + posi) (3) brute_force (arr_contain?) (4) brute_force (substr.indexOf?)

- EG
- SUMMA
-
- method 1:
- slide_win (remove_repeated, expand_len); hash_check (repeated), shrink_win_left (until unique), expand_win_right (1 by 1)
-
- method 2:
- hash (same_char prev posi); hash_check (repeated + posi)
-
- method 3:
- brute_force (curr char stable, other char loop, arr_contain?)
-
- method 4:
- brute_force (curr char stable, other char loop, substr.indexOf?)
- https://leetcode.com/submissions/detail/483228011/
-
- https://leetcode.com/submissions/detail/482623234/
- https://leetcode.com/problems/longest-substring-without-repeating-characters

<br/>
<br/>
<br/>
<br/>
<br/>

## 2_slide_windows, same place

##### 1 pivot, left_sum == right_sum; 2_slide_windows

- EG
- SUMMA
-
- 2_slide_windows
-
- https://leetcode.com/problems/find-pivot-index

<br/>
<br/>
<br/>
<br/>
<br/>

## hash (check), then hash (inject); (1) met_before (2) related_met_before (3) hash (val, posi)

##### subarray_sum (+ / -) == k; future_sum - prev_sum = k; == k

- EG
- SUMMA
-
- hash (check), then hash (inject); hash(each_sum), future_sum - prev_sum = k
-
- https://leetcode.com/submissions/detail/469373460/
- https://leetcode.com/problems/subarray-sum-equals-k

##### 2sum (sort); hash (check), hash (inject); (2) related_met_before; sum_up

- EG
- SUMMA
- hash (check), hash (inject); hash (2) related_met_before
- https://leetcode.com/problems/two-sum-ii-input-array-is-sorted

##### 2sum; hash (check), hash (inject); (2) related_met_before; sum_up

- EG
- SUMMA
- hash (check), hash (inject); hash (2) related_met_before
- https://leetcode.com/problems/two-sum

##### longest non-repeat substr; hash (check), hash (inject); (3) hash(val, posi); posi

- EG
- SUMMA
- hash (check), hash (inject); (3) hash(val, posi)
- https://leetcode.com/submissions/detail/483336929/

<br/>
<br/>
<br/>
<br/>
<br/>

## ask resource; start_arr, end_arr, travel_each; overlap (++), non-overlap (--);

##### find minimum platforms (ask resource); ++i, --j; platform inc / desc

- EG
- SUMMA
-
- ask resource; start_arr, end_arr, travel_each; overlap (++), non-overlap (--);
-
- https://practice.geeksforgeeks.org/viewSol.php?subId=a5d446a873521478733111306c0e77dd&pid=701368&user=figo2476
- https://practice.geeksforgeeks.org/problems/minimum-platforms-1587115620

##### meeting room 2 (ask resource); ++i, --j; platform inc / desc

- EG
- SUMMA
-
- ask resouce; start_arr, end_arr, travel_each; overlap (++), non-overlap (--);
-
- https://osgoodgunawan.medium.com/meeting-room-ii-in-javascript-d478690dd432
- https://github.com/Seanforfun/Algorithm-and-Leetcode/blob/master/leetcode/253.%20Meeting%20Rooms%20II.md

<br/>
<br/>
<br/>
<br/>
<br/>

## treemap (ask_resource == state); sort, +1 / -1, state

##### find minimum platforms (ask resource); treemap (ask_resource == state); sort, +1 / -1, state

- EG
- SUMMA
-
- treemap (ask_resource == state); sort, +1 / -1, state;
- https://practice.geeksforgeeks.org/viewSol.php?subId=a5d446a873521478733111306c0e77dd&pid=701368&user=figo2476

##### meeting room 2 (ask resource); treemap (ask_resource == state); sort, +1 / -1, state

- EG
- SUMMA
-
- treemap (ask_resource == state); sort, +1 / -1, state
- look at my code

##### my-calendar-ii (ask resource); treemap (ask_resource == state); sort, +1 / -1, state

- EG
- SUMMA
-
- treemap (ask_resource == state); sort, +1 / -1, state; look_ahead (later remove)
-
- https://leetcode.com/problems/my-calendar-ii/discuss/1183353/Brute-force-and-built-in-sorted-dictionary

##### my-calendar-iii (ask resource); treemap (ask_resource == state); sort, +1 / -1, state

- EG
- SUMMA
-
- treemap (ask_resource == state); sort, +1 / -1, state
-
- https://leetcode.com/submissions/detail/492441640/
- https://leetcode.com/problems/my-calendar-iii/

##### car-pooling (ask resource); trip = [[2_person, 1_on, 5_off],[3,3,7]], cap = 4; treemap (ask_resource == state); sort, +1 / -1, state

- EG
- SUMMA
-
- treemap (ask_resource == state); sort, +1 / -1, state
-
- https://leetcode.com/problems/car-pooling/
-

<br/>
<br/>
<br/>
<br/>
<br/>

## a_end > b_start (detect overlap); end_pick (start_pick); overlap (merge / intersect / update_pick), non-overlap (new pick);

##### shooting max balloons; a_end > b_start; that is overlap

- EG
- SUMMA
-
- method 1:
- a_end > b_start (detect overlap);
- start_pt (asc), attach_to_small (math.min); end_pick; overlap (min end_pick), non-overlap (new end_pick);
-
- method 2:
- a_end > b_start (detect overlap);
- start_pt (desc), attach_to_big (math.max); start_pick; overlap (max start_pick), non-overlap (new start_pick);
-
- method 3:
- a_end > b_start (detect overlap);
- end_pt (asc), attach_to_small (math.min); end_pick; overlap (min end_pick), non-overlap (new end_pick);
-
- method 4:
- a_end > b_start (detect overlap);
- end_pt (desc), attach_to_big (math.big); start_pick; overlap (max start_pick), non-overlap (new start_pick);
-
- https://leetcode.com/submissions/detail/487741686/
- https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons

##### merge_interval, [[1,4],[4,5]] -> [[1, 5]]; merge; [a, longer]

- EG
- SUMMA
-
- merge (longer range); [start_pick, end_pick] (whole); overlap (merge), non-overlap (new end_pick)
-
- https://leetcode.com/submissions/detail/487860609/
- https://leetcode.com/problems/merge-intervals

##### non overlapping interval; inverse; overlap problem exist

- EG
- SUMMA
-
- method 1:
- inverse of merge_interval (non overlap)
-
- method 2:
- start_pt (asc); end_pick; overlap (min end_pick), non-overlap (new end_pick)
-
- https://leetcode.com/submissions/detail/488154801/
- https://leetcode.com/problems/non-overlapping-intervals

##### meeting room 1 (arr of [start, end], attend_all?); a_end > b_start; overlap

- EG
- SUMMA
-
- brute_force (loop events, a_end > b_start);
-
- https://www.programcreek.com/2014/07/leetcode-meeting-rooms-java/

##### meeting room 2 (ask resource); ++i, --j; room inc / desc

- EG
- SUMMA
-
- a_end > b_start (detect overlap in 2 arr); start_arr, end_arr, 2pt; overlap (++), non-overlap (--)
-
- https://osgoodgunawan.medium.com/meeting-room-ii-in-javascript-d478690dd432
- https://github.com/Seanforfun/Algorithm-and-Leetcode/blob/master/leetcode/253.%20Meeting%20Rooms%20II.md

##### meeting room 3; prepare, then query; fill_time_block; easier to understand

- EG
- SUMMA
-
- prepare, then query (incoming data); fill_time_block; easier to understand
-
- https://leetcode.com/discuss/interview-question/613816/Google-or-Onsite-or-Meeting-Rooms-3
- see my js file in code dir

##### my-calendar-i; (1) brute_force (loop event, a_end > b_start) (2) brute_force (loop event, diagram !no_intersect == intersect) (3) tree_map

- EG
- SUMMA
-
- method 1:
- brute_force (loop event, a_end > b_start)
-
- method 2:
- brute_force (loop event, diagram, !no_intersect == intersect)
-
- method 3:
- tree_map (sort, +/-, state); look_ahead (remove later)
-
- https://leetcode.com/submissions/detail/491628532/
- https://leetcode.com/problems/my-calendar-i

<br/>
<br/>
<br/>
<br/>
<br/>

# binary_search

## l < r, r=mid

##### search_insert_position; l < r, r=mid

- EG
- SUMMA
-
- method 1:
- l < r (r=len), l=mid+1, r=mid; == at_end (l < r, r=mid)
-
- method 2:
- l < r (r=len), l=mid+1, r=mid; == at_end (l < r, r=mid)
-
- method 3:
- l <= r (r=len), l=mid+1, r=mid-1; == at_end (l <= r, r=mid-1)
-
- method 4:
- l < r (r=len), l=mid+1, r=mid; == at_start (l < r, r=mid)
-
- method 5:
- l <= r (r=len-1), l = m + 1, r = m - 1; == at_end (l < r, r=mid)
-
- https://leetcode.com/submissions/detail/475070091/
- https://leetcode.com/problems/search-insert-position

##### sqrtx; mid\*mid == tar;

- EG
- SUMMA
- method 1:
- ele_equal; ele_round_down; ele_too_big; ele_too_small; mid\*mid == tar; == at_start
-
- method 2:
- mid\*mid == tar; == at_start
-
- https://leetcode.com/submissions/detail/475071694/
- https://leetcode.com/problems/sqrtx

##### perfect-square; l <= r, l = mid+1, r = mid-1

- EG
- SUMMA
- method 1:
- l <= r, l = mid+1, r = mid-1; == at_start (https://leetcode.com/problems/sqrtx)
-
- https://leetcode.com/submissions/detail/474581846/
- https://leetcode.com/problems/valid-perfect-square

##### good_version or bad_version; l < r, r=mid

- EG
- SUMMA
-
- method 1:
- l < r, r=mid
-
- https://leetcode.com/problems/first-bad-version

##### guess higher or lower num; l < r, r=mid

- EG
- SUMMA
-
- method 1:
- l < r, r=mid
-
- https://leetcode.com/problems/guess-number-higher-or-lower/

##### 2sum; i_stable, j_loop (i < r, r=mid)

- EG
- SUMMA
- i_stable, j_loop (i+1, len, tar-n[i])
- https://leetcode.com/submissions/detail/475853031/
- https://leetcode.com/problems/two-sum-ii-input-array-is-sorted

##### same_ele_in_both_arrs(unique); l < r, r=mid

- EG
- SUMMA
- set(arr1), sort(arr2); l < r, r=mid
- https://leetcode.com/submissions/detail/475860815/
- https://leetcode.com/problems/intersection-of-two-arrays/

##### same_ele_in_both_arrs(repeated); l < r, r=mid (sync_move, ind+1)

- EG
- SUMMA
- sort(ns1), sort(ns2); sync_move, ind+1
- https://leetcode.com/submissions/detail/476110174/
- https://leetcode.com/problems/intersection-of-two-arrays-ii/

##### partial sort arr; binary_search in sort_part

- EG
- SUMMA
- binary_search in sort_part
- https://leetcode.com/submissions/detail/476986990/
- https://leetcode.com/problems/search-in-rotated-sorted-array

##### sort arr of 0, 1, 2; lower (swap mid), mid (swap mid), high (swap mid)

- EG
- SUMMA
-
- lower (swap mid), mid (swap mid), high(swap mid)
- NOTE: not binary search, but mid (explode/detect/test)
-
- https://practice.geeksforgeeks.org/viewSol.php?subId=ef93198b6ad4ffc74cf627d7e52294e3&pid=702382&user=figo2476
- https://practice.geeksforgeeks.org/problems/sort-an-array-of-0s-1s-and-2s4231

<br/>
<br/>
<br/>
<br/>
<br/>

# 2_sort_subarr

## 2_sort_subarr

##### merge 2_sort_arr; i_forward_backward (r), j_forward_backward (r), k_forward_backward (w)

- EG
- SUMMA
-
- method 1:
- 2_sort_arr; i_f (r), j_f (r), k_f (w); together, anything left
-
- method 2:
- in_place
- 2_sort_subarr; i_b (r), j_b (r), k_b (w); else_catch_everything (i over-run)
-
- https://leetcode.com/submissions/detail/477449924/
- https://leetcode.com/problems/merge-sorted-array

##### sqt sort_arr; 2_sort_subarr; i_f_b (r), j_f_b (r), k_f_b (w)

- EG
- SUMMA
-
- method 1:
- 2_sort_subarr; i_f (r), j_b (r), else_catch_everything
-
- method 2:
- 2_sort_subarr; i_b (r), j_f (r); no_else_catch_everything, so complicated
-
- https://leetcode.com/problems/squares-of-a-sorted-array

<br/>
<br/>
<br/>
<br/>
<br/>

# build_from_ground

## build_from_ground

##### sort arr of 0, 1, 2; hash (0, 1, 2), build_from_ground

- EG
- SUMMA
-
- hash (0, 1, 2), build_from_ground
-
- https://practice.geeksforgeeks.org/viewSol.php?subId=ef93198b6ad4ffc74cf627d7e52294e3&pid=702382&user=figo2476

<br/>
<br/>
<br/>
<br/>
<br/>

## max represent entire subarr

##### [1, 2, 17, 1, 2], 17 is leader >= everything at right; max represent entire subarr

- EG
- SUMMA
-
- leader >= everything at right; max represent entire subarr
-
- https://practice.geeksforgeeks.org/problems/leaders-in-an-array-1587115620/1

##### [2,3,5,1,3]\_candy, extra = 3; a[i] + extra > max; max represent entire subarr

- EG
- SUMMA
-
- a[i] + extra > max; max represent entire subarr
-
- https://leetcode.com/problems/kids-with-the-greatest-number-of-candies

##### global_inv_num == local_inv_num; next_each....; max represent entire subarr

- EG
- SUMMA
-
- next_each....; max represent entire subarr
-
- https://leetcode.com/submissions/detail/485237779/
- https://leetcode.com/problems/global-and-local-inversions

<br/>
<br/>
<br/>
<br/>
<br/>

# comparator

## comparator; (1) 1 vs 1 (2) combine vs combine (3)

##### xxxx; a vs b (1 vs 1)

- EG
- SUMMA
-

##### [1, 20, ...] -> 120 vs 201; ba vs ab (combine vs combine)

- EG
- SUMMA
-
- ab, ba, ba vs ab; return ba-ab; diff better sort num
-
- https://leetcode.com/submissions/detail/477886109/
- https://leetcode.com/problems/largest-number
- https://practice.geeksforgeeks.org/problems/largest-number-formed-from-an-array1117/1

<br/>
<br/>
<br/>
<br/>
<br/>

# math

## swap, then equal

##### candy swap; swap, then equal

- A = A' + (x/2 + x/2)
- B = B' + (x/2)
- swap
- A' + (x/2) == B' + (x/2 + x/2)
-
- swap, then equal
-
- https://leetcode.com/problems/fair-candy-swap

<br/>
<br/>
<br/>
<br/>
<br/>

## straight line slope; dy / dx = (y1 - y) / (x1 - x)

##### straight line slope; dy / dx = (y1 - y) / (x1 - x)

- EG
- SUMMA
- loop ele (x, y)
- (dy / dx) == (y1 - y) / (x1 - x) (dy = y1-y0)
- dy \* (x1 - x) !== dx \* (y1 - y) (not straight line)
- https://leetcode.com/problems/check-if-it-is-a-straight-line

##### [0, 100] -> [0, 1]; diag to hor / ver (diag cover hor / ver); then straight_line; shortest;

- EG
- SUMMA
- diag to hor / ver (diag cover hor / ver), then straight_line; shortest
- https://leetcode.com/problems/minimum-time-visiting-all-points

<br/>
<br/>
<br/>
<br/>
<br/>

# sort

## bubble_sort

##### example 1; 1 iteration, push 1 bubble to end

- 1 iteration, push 1 bubble to end

##### example 2; if anything not sort, bubble continue

- if anything not sort, bubble continue

<br/>
<br/>
<br/>
<br/>
<br/>

# backtrack

## i vs (i+? and res_inds);

- i vs (i and res_inds);
- i vs (i+1 and res_inds);
- i vs (0 and res_inds);

##### combo_sum_1; i vs (i and res_inds);

- EG
- combo_sum_1, ns = [2,3,6,7], tar = 7, res = [[2,2,3],[7]]
- SUMMA
-
- sort_rm_dup
-
- bt(final_res, tmp_arr, ns_orig, curr_i, tar)
-
- recur_stop_check: tar_reach || tar_overconsume
-
- recur:
- single_loop (i vs i and res_inds)
- before_op, look_back, sort_rm_dup
-
- tmp_arr_new = tmp_arr.concat(ns[i]) (concat)
- bt (tar_desc) (0_repeat_entire_x; i-1_x; i_no_repeat + include_self; i+1_miss_self_x)
-
- https://leetcode.com/problems/combination-sum

##### combo_sum_2; i vs (i+1 and res_inds);

- EG
- combo_sum_2; ns = [2,5,2,1,2], tar = 5, res = [[1,2,2], [5]];
- SUMMA
-
- sort_rm_dup
-
- bt(final_res, tmp_arr, ns_orig, curr_i, tar)
-
- recur_stop_check: tar_reach || tar_overconsume
-
- recur:
- single_loop (i vs i+1 and res_inds)
- tmp_arr_new = tmp_arr.concat(ns[i]) (concat)
- bt_recur_abstract_return(tar_desc) (0_repeat_entire_x; i-1_x; i_repeat_self_x; i+1_avoid_self + res)
-
- https://leetcode.com/problems/combination-sum-ii

##### combo_sum_3; i vs (i+1 and res_inds);

- EG
- combo_sum_3; ns = [1, 2, 3, ... 9], k_len = 3, tar = 7, res = [[1,2,4];
- SUMMA
- sort_rm_dup
-
- ns_orig = [1, 2, 3, 4, 5, 6, 7, 8, 9] (new_part)
- bt(final_res, tmp_arr, ns_orig, curr_i, tar)
-
- recur_stop_check: tar_reach + len_reach || tar_overconsume or len_overconsume
-
- recur:
- single_loop (i vs i+1 and res_inds)
- tmp_arr_new = tmp_arr.concat(ns[i]) (concat)
- bt_recur_abstract_return(tar_desc) (0_repeat_entire_x; i-1_x; i_repeat_self_x; i+1_avoid_self + res)
-
- https://leetcode.com/problems/combination-sum-iii

##### combo_sum_4; i vs (i+1 and res_inds);

<br/>
<br/>
<br/>
<br/>
<br/>

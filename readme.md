# some solution

- https://github.com/lxztju/leetcode-algorithm
- https://my.oschina.net/znfang/blog/4314950
- https://darktiantian.github.io

# worth looking at

- https://cheatsheet.dennyzhang.com/cheatsheet-followup-A4
- https://code.dennyzhang.com/hexspeak

# similar question sets

- https://zhuanlan.zhihu.com/p/341176507

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
- [1, 6(i), 3, 4, 3, 5](a_no_chg) -> [1, 5, 3, 4, 3, 5](t_chg)
- [1, 6, 3(i), 4, 3, 5](a_no_chg) -> [1, 5, 4, 4, 3, 5](t_chg)
- [1, 6, 3, 4(i), 3, 5](..) -> [1, 4, 4, 3, 3, 5](..)
- [1, 6, 3, 4, 3(i), 5](..) -> [1, 4, 4, 3, 4, 5](..)
-
- 2nd cycle
- [1, 4(i), 4, 3, 4, 5](a_no_chg) -> [1, 4, 4, 3, 4, 5](t_chg)
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

## doing stuff, sudden reach condi, reset / max / count / etc

##### [-1, 1, -1, 1, -1, 1], 3_equal_parts; doing stuff, sudden reach condi; reset / count

- EG
- SUMMA
- loop eles
- s = s + ns[i] (doing stuff)
- if s === sum / 3, ++count, s=0 (sudden reach condi, reset / count);
- re count >= 3 (edge case, [-1, 1, -1, 1, -1, 1, -1, 1], sum=0, each_s=0, 4 times)
- https://leetcode.com/problems/partition-array-into-three-parts-with-equal-sum

##### slide_the_window; loop doing stuff, sudden reach condi; slide_the_window (add_head, rm_tail); max / etc

- EG
- SUMMA
- [2, 3, 4, 1, 5], k = 3; e.g. [2, 3, 4], range = k = 3
-
- head
- tail
- curr
- max
-
- loop eles
- curr = curr + ns[i] (loop doing stuff)
- if(head + range === tail) (sudden reach condi)
- max; add_head, rm_tail; (max / etc)
- ++head, ++tail
- https://leetcode.com/problems/maximum-average-subarray-i

<br/>
<br/>

## slide_the_window (1. add_head / rm_tail; 2. a[i] -> a[i+len])

##### slide_the_window (add_head / rm_tail); loop doing stuff, sudden reach condi; slide_the_window(add_head, rm_tail); max / etc

- EG
- SUMMA
- [2, 3, 4, 1, 5], k = 3; e.g. [2, 3, 4], range = k = 3
-
- head
- tail
- curr
- max
-
- loop eles
- curr = curr + ns[i] (loop doing stuff)
- if(head + range === tail) (sudden reach condi)
- max; add_head, rm_tail; (slide_the_window; max / etc)
- ++head, ++tail
- https://leetcode.com/problems/maximum-average-subarray-i

##### slide_the_window; i_start + len (a[i] -> a[i+len]); (loop_condi_reduce, arr_ind_inc; vice versa)

- EG
- [1, 1, 1, 2, 2], len = 5, quarter_len = 5/4 -> floor(1.25) -> 1
- e.g [1] ceil(1/4=0.25) = 1, outbound, so nono
- SUMMA
-
- loop(i=0; i<len - quarter_len; ..) (loop_condi_reduce, arr_ind_inc; vice versa)
- if a[i] == a[i + q_len], re a[i] (i_start + len)
- https://leetcode.com/problems/element-appearing-more-than-25-in-sorted-array

##### [2, 3, 1, 1, 1] -> [1, 1, 1, 2, 3]; slide_the_window; major_len (i_start + len)

- EG
- SUMMA
- major_len => 5_odd / 2 = 2.5, major_len >= 3 (half)
- major_len => 4_even / 2 = 2, major_len > 2 (half)
- loop(i=0; i < major; ++i)
- if a[i] == input && a[i + major_len] == input, re true (i_start + len)
- end_loop, re false
- https://www.geeksforgeeks.org/check-for-majority-element-in-a-sorted-array

##### l_res Pivot r_res; pivot_move, l_res_expand, r_res_shrink; arr_left_right_has_0

- EG
- a little bit like slide_window
- 0(l_res) [0(p), 0, 3(r_res)] 0 --> L: 0 | 0(p) | R: 0,3,0 (0 VS 3, bad)
- 0 [0(l_res), 0(p), 3(r_res)] 0 --> L: 0,0 | 0(p) | R: 3,0 (0 VS 3, bad)
- 0 [0, 0(l_res), 3(p)] 0(r_res) --> L: 0,0,0 | 3(p) | R: 0 (0 VS 0, good)
- SUMMA
- loop #
- pivot
- right_shrink, left_already_done
- l_res VS r_res
- left_ahead_expand
- https://leetcode.com/problems/find-pivot-index

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

## ask_for_n_max; m0, m1, m2; flow_backup + replace

##### ask_for_3_max; m0, m1, m2; [1, 1, 1, 2, 2, 3, 3, 3](distinct #); flow_backup + replace; 3rd largest;

- EG
- SUMMA
- hash[n] to skip num (by question)
-
- m0 (largest); m1 = 2nd_large; m2 = 3rd_large
-
- min to big
- if n > m0 (largest)
- m2 = m1 (flow_backup)
- m1 = m0 (flow_backup)
- m0 = n (replace)
-
- if n > m1
- m1 = m2 (flow_backup)
- m0 = n (replace)
-
- if n > m2
- m2 = n (replace)

- if m2 not set, re m1 (by question)
- https://leetcode.com/problems/third-maximum-number

##### ask_for_3_max; m0, m1, m2; [-4, -3, -2, 1]; flow_backup + replace; m0(+) \* m1(+) \* m2(+) VS m0 \* (-) \* (-)

- EG
- SUMMA
-
- m0(largest), m1, m2;
- mi0(smallest) = min, mi2 = min;
-
- if n > m0
- m2 = m1 (flow_backup)
- m1 = m0 (flow_backup)
- m0 = n (replace)
-
- if n > m1
- m2 = m1 (flow_backup)
- m1 = n (replace)
-
- if n > m2
- m2 = n (replace)
-
- max -> small
- if n < mi0
- mi1 = mi0 (flow_backup)
- mi0 = n (replace)
-
- if n < mi1
- mi1 = n (replace)
-
- return m0 \* m1 \* m2 VS m0 \* (-) \_ (-)
- https://leetcode.com/problems/maximum-product-of-three-numbers

##### largest # >=1 others ===> largest >= 2\*2nd_largest; ask_for_2_max; m0, m1; [4, 3, 2, 1], m0 = 4, m1 = 3; flow_backup + replace

- EG
- SUMMA
- flow_backup + replace
- if m0 !== MIN, m1 !== MIN, m0 >= 2\*m1, re true
- else re false
- https://leetcode.com/problems/largest-number-at-least-twice-of-others

##### ask_for_2_max; m0, m1; [4, 3, 2, 1]; m0 = 4, m1 = 3; flow_backup + replace

- EG
- SUMMA
- flow_backup + replace
- https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array

##### top 5 subject scores for each student; [1, 91], [1, 92], [2, 81], [1, 60];

- EG
- SUMMA
- loop arr
- hash[student_1] = [m0, m1, m2, m3, m4]
- hash[student_2] = [m0, m1, m2, m3, m4]
- [m0, m1, m2, m3, m4] (flow_backup + replace)
- https://www.cnblogs.com/cnoodle/p/13722300.html
- https://leetcode.com/problems/high-five

<br/>
<br/>

## 4 pt region, 3pt_trend; 2nd_last_too_low; 2nd_too_high

##### loop eles, build mem, counter >= 2; 4pt_region, 3pt_trend; [1, 2, -100(i, 2nd_last_too_low), 2]; [-10, 100( 2nd_too_high), 1(i), 2]

- EG
- SUMMA
- counter = 1
- loop eles, ns[i] < ns[i-1], build mem (DROP); remeber last drop ind
-
- count == 1, increasing, re true;
-
- count == 2, edge, re ture;
-
- count == 2, not_edge
- e.g. [ 1(i-2), 2(i-1), -100(i, DROP), 2(i+1) ]; ns[i+1] >= ns[i-1]; 4pt_regision, 3pt_trend, 2nd_last_too_low
- e.g. [ -1(i-2), 2(i-1), 1(i, DROP), 1(i+1) ]; ns[i] >= ns[i-2]; 4pt_regision, 3pt_trend 2nd_too_high
-
- https://leetcode.com/problems/non-decreasing-array

<br/>
<br/>

## skip_loop_up_highest, skip_loop_down_lowest;

##### [0, 1, 2, 3, 4, 3, 2, 1, 0]; skip_loop_up_highest; skip_loop_down_lowest; buy at 0, sell at 4

- EG
- SUMMA
- loop(i < ps.len-1) (loop_condi_reduce, arr_ind_inc; vice versa)
-
- skip_loop_down_lowest(i < ps.len - 1 && ps[i] >= ps[i+1]) (LOOK_AHEAD, i_stay; LOOK_BACK, i_already_move)
- end_loop, ps[i] (lowest)
-
- skip_loop_up_highest(i < ps.len - 1 && ps[i] < ps[i+1]) (LOOK_AHEAD, i_stay; LOOK_BACK, i_already_move)
- end_loop, ps[i] (highest)
-
- https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii

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

## 2pts, curr VS arr_ind; curr > ns[i]; curr == ns[i]; curr < ns[i]; end_loop, curr_print <= input_range

##### find missing range num; curr_print > ns[i]; curr_print == ns[i]; curr_print < ns[i]; end_loop, curr_print <= input_range

- EG
- SUMMA
-
- loop arr
-
- if curr_print > ns[i]
- e.g. [1, 2, 3, 4, 5, 10, 100, 1000]; low=10, high=100 (input_range);
- 1, 2, 3, 4, 5 skip;
-
- if curr_print == ns[i]
- e.g. [1, 2, 3, 4, 5, 10, 100, 1000]; low=10, high=100 (input_range);
- 10 aready there, curr_print + 1 (avoid_ns[i]);
-
- if curr_print < ns[i]
- e.g. [1, 2, 3, 4, 5, 10, 100, 1000]; low=10, high=100 (input_range);
- curr_print == 11, ns[i]-1 (avoid_ns[i])
-
- end_loop, curr_print <= input_range, print rest
-
- https://leetcode.com/problems/missing-ranges/
- https://medium.com/@rebeccahezhang/leetcode-163-missing-ranges-6ac21b477e96

<br/>
<br/>

## take_concept_diff, not thinking big/small

##### take_concept_diff, not thinking big/small

- EG
- [2, 4] VS [1, 2, 5]
- [2, 4] + x - y VS [1, 2, 5] - x + y (make both sum equal)
- 6 + x - y === 8 - x + y
- 2x - 2y === diff(2), so x - y = diff/2 (take_concept_diff, not thinking big/small)
- SUMMA
-
- loop A arr
- loop B arr
- if diff/2 === A[i] - B[i] (take_concept_diff, not thinking big/small)
- re [A[i], B[i]]
- https://leetcode.com/problems/fair-candy-swap

<br/>
<br/>

## INVERSE_QUESTION; matrix; most re_fail, else re_true; 2_ele_diag, upto_2nd_last

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

## i, then i+1 rest max

##### i, then i+1 rest max

- EG
- SUMMA
- [4(i), 3, 2, 1] -> [3(i), 3, 2, 1] ===> [3, 3(i), 2, 1] -> [3, 2(i), 2, 1] ===> [3, 2, 2(i), 1] -> [3, 2, 1(i), 1] ===> [3, 2, 2, -1(i)]
-
- loop eles
- a[i] = i+1 rest max
- end_loop a[a.len-1] = -1
-
- https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side

<br/>
<br/>
<br/>
<br/>
<br/>

# str

## rev_entire, rev_word, clean_space(i_write, j_read)

##### rev position, but no rev word; rev_entire(group_stay), rev_word(i_start, j_end), clean_space(i write, j read)

- EG
- SUMMA => rev_entire (group_stay); rev_word; clean_space (i_write, j_read)
- (1) rev_entire (group_stay)
- i, j cross over;
- (2) rev_word(i_start, j_end)
- i_start, j_end, i=new_cycle
- (3) clean_space (i write, j read)
- letf_good, right_waste
- front_space, copy, end_space, 1 space;
- https://leetcode.com/problems/reverse-words-in-a-string

##### rev position, but no rev word; rev_entire(group_stay), rev_word(i_start, j_end), clean_space(i_write, j_read)

- same as above
- except no extra space
- https://leetcode.com/problems/reverse-words-in-a-string-ii

##### rm duplicated ele; i_write, j_read;

- EG
- i=0 (write), j=0 (read)
- [1, 1, 2, 2, 3, 3], sort;
- e.g. i pt 1(ind_0), j pt 2(ind_2)
- SUMMA
- loop eles (j)
- if a[i_write] === a[j_read], ++j (equal val; j move only);
- if a[i_write] !== a[j_read], a[++i] = a[j] (!equal val; i pt good stuff, overwrite, j move);
- end_loop re ++i;
- https://leetcode.com/problems/remove-duplicates-from-sorted-array

##### rm particular ele; i_write, j_read;

- EG
- SUMMA
- loop eles (j)
- if a[j_read] === v, ++j (equal val; j move only)
- if a[j_read] !== v, a[i++] = a[j++] (!equal val; overwrite, i j move)
- https://leetcode.com/problems/remove-element

##### move zeros to the end; i_write, j_read;

- EG
- SUMMA
- loop eles (j)
- if a[j_read] === 0, ++j (equal val; j move only)
- if a[j_read] !== 0, a[i++] = a[j++] (!equal val; overwrite, i j move)
- fill rest of i_read, 0
- https://leetcode.com/problems/move-zeroes

###### n1: [1, 2, 3, 4(end_m_r), 0, 0(end_w)]; n2: [2, 2(end_n_r)]; 1_write, 2_reads

- EG
- SUMMA
- end_write, end_m_read, end_n_read (1_write, 2_reads)
- while(n>=0) (scan_from_right)
- n1[end_w--] = n1[end_m_r] > n2[end_n_r] ? n1[end_m_r--] (1_write, 2_reads)
- n1[end_w--] = n1[end_m_r] <= n2[end_n_r] ? n2[end_n_r--] (1_write, 2_reads)
- https://leetcode.com/problems/merge-sorted-array

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

## prev_num( total_len(s.len) - how_many(i_dy_total_width) ) % 3 ==== i_dy_total_width % width

##### 12345678 -> 12.345.678; prev_num( total_len(s.len) - how_many(i_dy_total_width) ) % 3 ==== i_dy_total_width % width

- EG
- SUMMA
- loop eles (forward)
- if i > 0, (s.len - i) % 3 == 0
- i>0, skip_1st_num; .1 == nono
- total_len(s.len) - how_many(ind) == new_total_len(%3)
- res = res + '.'
- res = res + ns[i]
- https://leetcode.com/problems/thousand-separator

<br/>
<br/>

## row_ind = floor(i_dynamic_total_width / new_col_width); col_ind = i_dy_total_width % width;

###### flat_arr -> fill_new_shap_arr; row_ind = floor(i_dy_total_width / new_col_width); col_ind = i_dy_total_width % new_col_width;

- EG
- SUMMA
- row \* col === new_w \* new_h
- i_total, flat_arr -> fill_new_shape_arr
-
- loop_row
- loop_col
- row_ind = floor(i_dy_total_width / new_col_width); keep_it_same_row
- if !res[row_ind] -> res[row_ind] = [];
- else res[row_ind].push( ns[r][c] );
- https://leetcode.com/problems/reshape-the-matrix

###### flat_arr -> fill_new_shap_arr; row_ind = floor(i_dy_total_width / new_col_width); col_ind = i_dy_total_width % new_col_width;

- EG
- SUMMA
- row \* col === new_w \* new_h
- i_total, flat_arr -> fill_new_shape_arr
-
- loop row \* col (all_eles)
- row_ind = floor(i_dy_total_width / new_col_width); keep_it_same_row;
- similar, prev_num = floor(num / 10)
-
- if !res[row_ind], res[row_ind] = [];
- else res[row_ind].push( ns[i_dy_total_width / new_col_width][i % new_col_width] );
- similar, anything_elft = floor(num / 10); last_digit = num % 10;
-
- https://leetcode.com/problems/reshape-the-matrix

##### is_palindrome; 121 -> 121(able_rebuild), 123 -> 321(not_able_rebuild); last_digit = input % 10; prev_num = input / 10

- EG
- SUMMA
- loop eles
- last_digit = input % 10 (last_digit)
- input = floor(input / 10) (prev_num)
- res = res\*10 + last_digit (rebuild)
- https://leetcode.com/problems/palindrome-number

<br/>
<br/>

## full_length == floor(s_len / width)\*width + (s_len % width)

##### \_a_b_c\_\_ -> a\_\_b\_\_c\_; 3 words, 5 spaces; full_length == floor(s_len / width)\*width + (s_len % width); full_length = floor(5 / 2)\*2 + (5 % 2)

- EG
- SUMMA
- edge_case (1_word)
- how_many_word
- how_many_space
- full_length = floor(s_len / width)\*width + (s_len % width)
- width = 3_words - 1; (3 words, use 2 spaces to separate)
- join
- https://leetcode.com/problems/rearrange-spaces-between-words

##### is_palindrome; 121 -> 121(able_rebuild), 123 -> 321(not_able_rebuild); full_num = floor(full_num / 10)\*10 + (full_num % 10)

- EG
- SUMMA
- loop eles
- last_digit = input % 10 (last_digit)
- input = floor(input / 10) (prev_num)
- res = res\*10 + last_digit (rebuild)
- https://leetcode.com/problems/palindrome-number

#####

- EG
- [99,77,33,66,55], 33 is min; sum 3+3=6; 6 is even; last_digit = input % 10; prev_num = floor(input / 10)
- SUMMA
- loop ele, find min
-
- sum digit;
- loop(min > 0) (e.g. 1/10 = floor(0.1) === 0; so min > 0)
- n = min % 10 (last_digit)
- sum = sum + n;
- min = floor(min / 10) (prev_num; e.g. 2.5, need 2)
- https://bloggie.io/@rugved/leetcode-1085-sum-of-digits-in-the-minimum-number-java-solution
- https://leetcode.com/problems/sum-of-digits-in-the-minimum-number

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

##### is palindrome; i(start), j(end); loop_skip_alph#

- EG
- SUMMA
- loop chars;
- i(start), j(end)
- sub_loop(skip_alph#) ++i
- sub_loop(skip_alph#) --j
- https://leetcode.com/problems/valid-palindrome

<br/>
<br/>

## subarray consecutive, subsequence !consecutive

##### baabb (only a, b); subseq palin == bbb, subseq palin == aa

- EG
- SUMMA
- s.len == 0, re 0
- s is palin, re 1 (remove 1 sebseq palin)
- s is not palin, rm a, rm b; re 2
- https://leetcode.com/problems/remove-palindromic-subsequences

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

<br/>
<br/>

## rm\*1_item; (len_reduce, --i && ++i_back_to_top)

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

## when_use_2_pts? palindrome / reverse / swap / sort / cross_over / i_start_j_end_form_str / i_start + len / fast_slow / xxxx

##### 2pts(i_start + len); search_in_parent; i_same_spd_pt_diff; j_same_spd_pt_diff(i_start + len); sudden_reach_condi

- EG
- SUMMA
- edge_case => parent_empty; child_empty; both_empty
-
- i_same_spd_pt_diff
- j_same_spd_pt_diff(j_as_len)
- loop parent_char ( p[i] )
-
- j = 0 (reset)
- loop child_char ( p[i+j(len)] == c[j(len)] )
- sudden_reach_condi, re ind
-
- https://leetcode.com/problems/implement-strstr

##### 2pts(fast_slow); " abc abc " -> " cba cba "; i_slow_pt_same (i_start_j_end_form_str); j_fast_pt_same (i_start_j_end_form_str); skip_loop_space(stop_is_non_space); skip_loop_non_space(stop_is_space)

- EG
- SUMMA
-
- i_slow_pt_same (i_j_strlen)
- j_fast_pt_same (i_j_strlen)
-
- loop eles
- skip_loop_space(stop_is_non_space)
- skip_loop_non_space(stop_is_space)
- rev(i_start, j_end-1)
- i = j; j = j+1 (inc)
- https://leetcode.com/problems/reverse-words-in-a-string-iii

##### 2pts(i_start + len); i_slow_pt_same, j_fast_pt_same(i_start + len); i = i+2k(segment), j = i+k(i_start + len)

- EG
- k=2(rev), 2k=4(segment)
- ab(op),ab(stay)|ab(op),a -> ba,ab|ba,a
-
- k=3(rev), 2k=6(segment)
- abc(op),def|abc(op),def|ab(op) -> cba,def|cba,def|ba
- SUMMA
-
- i_start (k_is_rev + rest_k_stay = 2k_is_segment; so next i=i+2k)
- j_end (i_start + k VS what_left = s.len)
-
- loop(i < s.len)
- rev(i_start, j_end-1)
- i_start = i_start + 2k (segment)
- j_end = i+k VS what_left (i_start + len = j_end)
- https://leetcode.com/problems/reverse-string-ii

##### 2pts(cross_over); [0, 1, 2, 3, 4, 3, 2, 1, 0]; i_same_spd_pt_same_start; j_same_spd_pt_same_end; skip_loop_up_highest(stop_same_posi); skip_loop_up_highest(stop_same_posi);

- EG
- SUMMA
-
- when_2_end; skip_loop_up_highest(forward); skip_loop_up_highest(backward)
-
- skip_loop_up_highest(forward) (i < a.len - 1 && a[i] < a[i+1]), ++i;
- skip_loop_up_highest(backward) (j > 1 && a[j] < a[j-1]), --j;
-
- re i > 0 (i_use) && j < a.len-1 (j_use) && i === j (meet)
- https://leetcode.com/problems/valid-mountain-array

##### 2pts(cross_over); [3(i_odd),1,2,4(j_even)] -> [4, 1(i_odd), 2(j_even), 3] -> [4, 2, 1, 3]; i_same_spd_pt_same_start; j_same_spd_pt_same_end; skip_loop_even(stop_is_odd); skip_loop_odd(stop_is_even)

- EG
- SUMMA
- i_odd
- j_even
- loop(i<j) (cross_over)
- skip_loop_even(stop_is_odd)
- skip_loop_odd(stop_is_even)
- swap(i, j)
- https://leetcode.com/problems/sort-array-by-parity

##### 2pts(cross_over); is palindrome; i_same_spd_pt_same_start; j_same_spd_pt_same_end; skip_loop_non_alph# (stop_is_alph#)

- EG
- SUMMA
- loop chars;
- i_same_spd_pt_same_start
- j_same_spd_pt_same_end

- skip_loop_non_alph# (stop_is_alph#)
- skip_loop_non_alphskip_loop_non_alph# (stop_is_alph#)
- check i_start, j_end
- https://leetcode.com/problems/valid-palindrome

##### 2pts(sort, cross_over); a[i] + a[j] < k; corss_over_only_1_direction; i_same_spd_pt_same_small; j_same_spd_pt_same_big;

- EG
- SUMMA
- sort
- loop(i < j) (sort, cross_over)
- if a[i] + a[j] < k, ++i_same_spd_pt_same_small (corss_over_only_1_direction)
- if a[i] + a[j] >= k, --j_same_spd_pt_same_big (corss_over_only_1_direction)
- https://gist.github.com/yitonghe00/76a5f3034c9c81ebf8be3433e6865eae

##### 2pts(sort, cross_over); a[i] + a[j] == k; corss_over_only_1_direction; i_same_spd_pt_same_small; j_same_spd_pt_same_big;

- EG
- SUMMA
- sort
- loop (i < j>) (sort, corss_over)
- if a[i] + a[j] < k, ++i_same_spd_pt_same_small (corss_over_only_1_direction)
- if a[i] + a[j] > k, --j_same_spd_pt_same_big (corss_over_only_1_direction)
- if a[i] + a[j] == k, return
- https://leetcode.com/problems/two-sum-ii-input-array-is-sorted

<br/>
<br/>

## what_diff_type_pt? (1) i_slow_pt_diff, j_fast_pt_diff(LOOK_BACK); (2) i_same_spd_pt_diff, j_same_spd_pt_diff(i_start + len); (3) i_same_spd_pt_diff, j_same_spd_pt_diff(tracking_var); (4) i_slow_spd_pt_same, j_fast_spd_pt_same(????);

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

##### i_same_spd_pt_diff, j_same_spd_pt_diff(i_start + len); search "def" in "abcdef"

- EG
- i_same_spd_pt_diff, j_same_spd_pt_diff(i_start + len); "abcdef" VS "def";
- SUMMA
- loop chars (long_str)
- long chars (short_str)
- i_same_spd_pt_diff, j_same_spd_pt_diff(i_start + len);
- ++j, if j == short_str.len, re posi;
- https://leetcode.com/problems/implement-strstr

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

## LOOK_BACK(continue; same OR inc) VS RESET(discontinue)

##### LLL(continue); absent_counter; late_counter, 'LLA'; LOOK_BACK(continue) VS RESET(discontinue)

- EG
- A (absent); L (late); P (present)
- e.g. 'APA'; 1_A, 1_P, 1_A; >= 2_A, so bad
- e.g. 'PPALLP'; 2_P, 1_A, 2_L, 1_P; < 2_A, <= 2_L, so good
- e.g. 'PPALLL'; 2_P, 1_A, 3_L; >= 3_L, so bad
- SUMMA
-
- absent_counter
- late_counter
-
- loop chars
- if absent_counter > 1, re false
- if late_counter
- e.g. 'LLL', 3_L; LOOK_BACK(continue)
- e.g. 'LLP', 2_L -> 0_L; RESET(discontinue)
- https://leetcode.com/problems/student-attendance-record-i

##### consecutive(continue), characters; aaabcc, 3a; LOOK_BACK(continue) VS RESET(discontinue)

- EG
- aaabcc, consecutive 3a, so max
- SUMMA
-
- max
- counter
-
- loop chars
- if s[i-1](look_back) === s[i], update_max, ++c; LOOK_BACK(continue)
- else c = 0; RESET(discontinue)
- https://leetcode.com/problems/consecutive-characters

##### count(count) binary substrings(continue, count); 000111, 3(0), 3(1); min(3, 3) -> 3; 01, 0011, 000111; LOOK_BACK(continue) VS RESET(discontinue)

- EG
- BUILD_MEM
- 001 -> [2, 1]; min(2, 1)
- 00011100 -> [3, 3, 2]; min(3, 3), min(3, 2); add_up
- 0101100 -> [1, 1, 1, 2, 2]; min(1, 1), min(1, 1), min(1, 2), min(2, 2); add_up
- SUMMA
-
- counter
-
- loop chars
- BUILD_MEM
- if s[i-1](look_back)==s[i], ++c; LOOK_BACK(continue)
- else arr.push(c), c = 0; RESET(discontinue)
- use_mem, loop arr
- https://leetcode.com/problems/count-binary-substrings

##### longest(max) continuous(counter) increasing subarray (continue); LOOK_BACK(continue) VS RESET(discontinue)

- EG
- SUMMA
-
- max = 0
- counter = 1 (look_back, 2 eles)
-
- loop chars
- if ns[i] > ns[i-1] LOOK_BACK(continue); ++c; ma = ma(ma, c)
- else c = 1 RESET(discontinue); if(ma == 0) ma = 1 (incase not enter)
- https://leetcode.com/problems/longest-continuous-increasing-subsequence

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

## a vs b -> res, res vs c -> res; (1) prefix (reduce non_useful); (2) common (reduce non_useful), w (reduce already_scan)

##### ["flower","flow","flight"]; flower as prefix; flower vs flow -> flow (reduce non_useful) vs flow; flow vs flight -> fl (reduce non_useful) vs fl

- EG
- SUMMA
-
- prefix = a[0]
- loop w

- loop prefix ("flower")
- flower.prefix(flow) -> flowe.prefix(flow) -> flow.prefix(flow); (reduce non_useful)
- flow.prefix(flight) -> .... (reduce non_useful)
-
- loop(w.indexOf(prefix) !==0); s.sub(0, prefix-1); (reduce non_useful)
- if prefix empty, re empty
- end_loop, re prefix
- https://leetcode.com/problems/longest-common-prefix
- https://www.geeksforgeeks.org/longest-common-prefix-using-character-by-character-matching (vertical w by w matching char)

##### ["cool", "lock", "cook"]; cook as common; cool vs lock -> co (reduce non_useful) vs lk (reduce already_scan); co vs cook

- EG
- SUMMA
-
- common = a[0]
- loop w

- loop common ("cool")
- "c"; keep in "cool" (common), rm in "lock" (w) ==> "cool" vs "lok" (reduce already_scan)
- "o"; keep in "cool", rm in "lok" ==> "cool" vs "lk" (reduce already_scan)
- "o"; rm in "cool" (reduce non_useful), none in "lk" ==> "col" vs "lk"
- "l"; rm in "col" (reduce non_useful), none in "lk" ==> "co" vs "lk"
-
- now loop char ("co")
- "co" vs "cook"
- ...
-
- w, reduce already_scan
- common, reduce non_useful
- https://leetcode.com/problems/find-common-characters

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

## loop 1 -> 1000; loop a -> b; xxxx; (bottom_up)

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
- loop 0->1000 (e.g. loop 1 -> 1000 or loop a -> z, bottom_up)
- use all freq
- res.push(build_from_ground)
-
- https://leetcode.com/problems/relative-sort-array

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

##### a2 in a1; a1 follows a2 order; res build_from_ground_rearrange(i_hash_fill_res + j_bottom_up_fill_res VS res_ind )

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
- loop 0->1000 (e.g. loop 1 -> 1000 or loop a -> z; j_bottom_up_fill_res)
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

##### build_from_ground_rearrange(i_orig_arr VS even_ind_pt_res + odd_ind_pt_res)

- EG
- [1, 2, 3, 4] -> [x(e), x(o), x, x] -> [x(e), 1, x, x(o)] -> [2, 1, x(e), x(o)] -> [2, 1, x(e), 3] -> [2, 1, 4, 3]
- SUMMA
- loop eles (i_orig_arr)
- if a[i] % 2 === 0, res[even] = a[i] (even_ind_pt_res)
- if a[i] % 2 !== 0, res[odd] = a[i] (odd_ind_pt_res)
- https://leetcode.com/problems/sort-array-by-parity-ii
-

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

##### two_sum, [0, 3, 4, 0], tar = 7; build hash_init_posi along (met_the_other / !met_the_other)

- EG
- SUMMA
- loop eles;
- if met_the_other, hash[tar - val], re [ hash[tar - val], ind ]
- if !met_the_other, hash[val] = posi (build hash_init_posi along)
- https://leetcode.com/problems/two-sum
- https://leetcode.com/problems/two-sum-ii-input-array-is-sorted

<br/>
<br/>

## multi_hash, multi_tracking_var

##### [1,2,2,3,1]; freq_hash, posi_hash; maxF (freq), minD (distance);

- EG
- SUMMA
- loop eles (const [ind, n] = arr.entries())
- build freq_hash
- build start_posi_hash (if 1st time)
-
- maxF can do in loop. (minD not easy)
- freq_hash[n] > maxF, force up minD
- freq_hash[n] === maxF, min(minD, end - start(posi_hash) +1)
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

##### two sum less than k; i=0, i+1 < a.len (save_for_j); j=i+1 (start_behind), j < a.len; pick ele stable, rest ele move

- EG
- SUMMA
- outloop: i=0, i+1 < a.len (save_for_j)
- inloop: j=i+1 (start_behind), j < a.len
- sort
- a[i] + a[j] < k && a[i] + a[j] > max, max = a[i] + a[j]
- https://gist.github.com/yitonghe00/76a5f3034c9c81ebf8be3433e6865eae

<br/>
<br/>

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

## sort, 2 same, 1 same, 0 same

##### w_log(lexico_order), d_log(orig_order); sort, 2 same, 1 same, 0 same

- EG
- (a, a), c VS (a, a); [2 same]
- (a), b, c VS (a), c, b; [1 same]
- c, a, c VS a, b, c; [0 same]
-
- w_log (lexico_order, localeCompare), d_log (orig_order) -> ["w1 b", "w2 a", "d1 5", "d2 1"] -> ["w1 a", "w2 b", "d1 5", "d2 1"]
- SUMMA
- w_log (lexico_order, localeCompare), d_log(orig_order)
- combine indexOf + substring, get 1st_content
- (a, a), c VS (a, a); [2 same]
- (a), b, c VS (a), c, b; [1 same]
- c, a, c VS a, b, c; [0 same]
- https://leetcode.com/problems/reorder-data-in-log-files

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

##### AAAA - AAA(rm_prefix) = A, (gcd); AAA - A(rm_prefix) = A, (gcd)

- EG
- AAAA - AAA = A;
- AAA - A = AA;
- AA - A = AA;
- AA - A = A;
- A - A = 0 (done)
- SUMMA
- long - short, keep going
- recur
- (1) long > short; (2) false_case(not_prefix); (3) good_case(short.empty); (4) con(rm_prefix)
- https://leetcode.com/problems/greatest-common-divisor-of-strings

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

# some kind of mem

- max/min
- hash
- dp ( dp[i] = dp[i-x] + val; dp[i] = max/min(dp[i-x]) )

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

## ??

##### aaabc -> ( aaa(3_char), aa(2_char), a(1_char); b(1_char); c(1_char) ) -> 3+2+1+1+1=8

- EG
- SUMMA
- loop chars
- aaabc -> dp: [1(init), 1, 1, 1(init), 1(init)]; s[i] == s[i-1], dp[i] = dp[i-1] + 1; each_col, dp add up
- https://helloacm.com/counting-substrings-with-only-one-distinct-letter-with-different-algorithms/

<br/>
<br/>

## continue max eles, dp and reset

##### [-2,1,-3,4,-1,2,1,-5,4]; continue max eles, dp and reset

- EG
- SUMMA
- arr.len+1 size
- dp[i] => AT this ind, FINAL max_val
- loop eles
- dp[i] = (dp[i-1] || 0) + ns[i-1]; why reset? !want less more
- https://leetcode.com/problems/maximum-subarray

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
- dp[j] === AT this ha, FINAL condi (question condi)
- init side == true (condi_press, so true; below_noval)
- loop ele (forward; NO_ORDER, 1+2, 2+1, same)
- loop ha (backward; gen_tar; dp_ind_constraint)
- direction
- dp[j] = dp[j](top, ele_1st; press_ele) || dp[j-i(ele)](diag, condi; press_ele; x+y=tar);
- https://leetcode.com/problems/partition-equal-subset-sum/discuss/90592/01-knapsack-detailed-explanation

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

# when_hash: ele spreads out + has own position

# when_knowledge: can simplify a problem

# when_2_pts: 2 parts

# when_invert_question: true, false; can simplify

# when_build_from_ground: fresh; rearrange

# binary search

# backtrack

- https://leetcode.com/problems/partition-to-k-equal-sum-subsets/discuss/180014/Backtracking-Thinking-Process

# BST - DFS

# b-tree, link

# important questions

https://aaronice.gitbook.io/lintcode/problem-solving-summary/

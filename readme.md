# same solution

- https://github.com/lxztju/leetcode-algorithm
- https://my.oschina.net/znfang/blog/4314950
- https://darktiantian.github.io/%E7%AE%97%E6%B3%95%E7%AF%87%E7%9B%AE%E5%BD%95%E6%B1%87%E6%80%BB/

# worth looking at

- https://cheatsheet.dennyzhang.com/cheatsheet-followup-A4
- https://code.dennyzhang.com/hexspeak

<br/>
<br/>
<br/>
<br/>
<br/>

# arr

## slide_window; acc; acc_end, rm_head, add_tail

##### slide_window; acc; acc_end, rm_head, add_tail

- EG
- SUMMA
- [2, 3, 4, 1, 5], k = 3;
- out_loop #
- acc
-
- acc_end? (end_ind == start_ind + k - 1)
- ops
- rm_head, add_tail
- ++start
- ++end
- https://leetcode.com/problems/maximum-average-subarray-i

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

## sort_arr, shrink i j. ++i_big, --j_small

##### two sum < k; sort_arr, shrink i j, find_max; if < k, ++i_for_big; if >= k, --j_for_small

- EG
- SUMMA
- sort_arr
- while loop; i_start, j_end
- if a[i] + a[j] < k, ++i_big
- if a[i] + a[j] >= k, --j_small
- https://gist.github.com/yitonghe00/76a5f3034c9c81ebf8be3433e6865eae

##### two sum == k; sort_arr, shrink i j; if < k, ++i_for_big; if > k, --j_for_small; if == k, return

- EG
- SUMMA
- sort_arr
- loop eles;
- if a[i] + a[j] < k, ++i_big
- if a[i] + a[j] > k, --j_small
- if a[i] + a[j] == k, return
- https://leetcode.com/problems/two-sum-ii-input-array-is-sorted

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

## arr.sort, len/2 major conver, index

##### [2, 3, 1, 1, 1] -> [1, 1, 1, 2, 3] -> 1: 3 times -> 1 majority

- EG
- SUMMA
- arr.sort
- arr[floor(arr.len/2)] (arr.sort, len/2 major index)
- https://leetcode.com/problems/majority-element

<br/>
<br/>

## min -> big; max -> small; flow_backup; replace

##### [1, 1, 1, 2, 2, 3, 3, 3](distinct #) -> m1(largest), m2, m3; 3rd largest; min -> big; flow_backup + replace

- EG
- SUMMA
- hash[n] to skip num (by question)
-
- m1(largest) = max; m2 = max; m3 = max
-
- min to big
- if n > m1(largest)
- m3 = m2 (flow_backup)
- m2 = m1 (flow_backup)
- m1 = n (replace)
-
- if n > m2
- m3 = m2 (flow_backup)
- m2 = n (replace)
-
- if n > m3
- m3 = n (replace)

- if m3 not set, re m2 (by question)
- https://leetcode.com/problems/third-maximum-number

##### [-4, -3, -2, 1]; 3 positive VS 1_max \* (-) \* (-)

- EG
- SUMMA
-
- m1(largest) = max; m2 = max; m3 = max;
- mi1(smallest) = min; mi2 = min;
-
- min -> big
- if n > m1
- m3 = m2 (flow_backup)
- m2 = m1 (flow_backup)
- m1 = n (replace)
-
- if n > m2
- m3 = m2 (flow_backup)
- m2 = n (replace)
-
- if n > m3
- m3 = n (replace)
-
-
-
- max -> small
- if n < mi1
- mi2 = mi1 (flow_backup)
- mi1 = n (replace)
-
- if n < mi2
- mi2 = n (replace)
-
- return 3 positive VS 1*max * (-) \_ (-)
- https://leetcode.com/problems/maximum-product-of-three-numbers

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

## UP_LOOP, DOWN_LOOP;

##### [4, 3, 2, 1, 2, 3, 4]; 4->3->2->1(DOWN_LOOP), 1->2->3->4(UP_LOOP); buy at 1, sell at 4

- EG
- SUMMA
- while(i < a.len-1), look_ahead(i_stay), last_ind
- loop eles
- DOWN_LOOP(p[i] <= p[i+1]); end_of_DOWN, start_of_UP;
- can't mv i, because look_ahead(i_stay) fail; UP_LOOP can mv i
-
- UP_LOOP(p[i] > p[i+1]); end_of_UP, start_of_DOWN;
- can't mv i, because look_ahead(i_stay) fail; DOWN_LOOP can mv i
- https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii

<br/>
<br/>

## num(exist), num(miss), potential_start

##### find missing range num; p_s > c_n (not_form); p_s == c_n (not_form); p_s < c_n (form), print; p_s < high, print

- EG
- [1, 10, 100, 1000], low=10, high=100; --> [11->999]
- [1, 10, 100, 1000], low=-1, high=1001; --> [-1->0, 11->99, 101->999, 1001]
- SUMMA
- loop eles
- s(miss) === potential_start
- curr_n(exist) === curr_num
- p_s = low
- p_s > c_n, not form range, c_n next
- p_s == c_n, p_s++
- p_s < c_n, form range, print(p_s, c_n-1); p_s = c_n+1
-
- end_loop, p_s < high, print(p_s, high)
- https://leetcode.com/problems/missing-ranges/
- https://medium.com/@rebeccahezhang/leetcode-163-missing-ranges-6ac21b477e96

<br/>
<br/>

## backward, IGNORE_CARRY (9) or ADD_ONE (0, 1, 2..8)

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

###### n1: [1, 2, 3, 4(m_r), 0, 0(end_w)]; n2: [2, 2(n_r)]; end_write, 2 reads

- EG
- SUMMA
- end_write, m_read, n_read
- end_write, 2 reads
- while(n>=0)
- n1[end_w--] = n1[m_r] > n2[n_r] ? n1[m_r--]
- n1[end_w--] = n1[m_r] <= n2[n_r] ? n2[n_r--]
- https://leetcode.com/problems/merge-sorted-array

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

##### ++++ -> [--++, +--+, ++--]; i=1(LOOK_BACK, i_move); insert: sub(0, i) + val + sub(i), BUILD_STR_PHILOSOPY

- EG
- SUMMA
- loop chars
- i=1(LOOK_BACK, i_move); s.sub(0, i-1, i_LOOK_BACK, i_move) + "--" + s.sub(i+1, 2_char), BUILD_STR_PHILOSOPY
- arr.push
- https://xiaoguan.gitbooks.io/leetcode/content/LeetCode/293-flip-game-easy.html

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

## i_start, j_start -> i_start, j_end(formular)

##### search_needle_in_parent; i_start, j_start -> i_start, j_end(w_len)

- EG
- SUMMA
- edge_case => parent_empty; child_empty; both_empty
- loop parent ( p[i] )
- loop child ( p[i+j(w_len)] == c[j(w_len)] )
- https://leetcode.com/problems/implement-strstr

##### keep position, rev word; i_start, j_start -> i_start, j_end(w_len)

- EG
- SUMMA
- loop chars
- i_start, j_start -> i_start, j_end(w_len), rev
- https://leetcode.com/problems/reverse-words-in-a-string-iii/

##### i op_k, i skip_k; i_start, j_start -> i_start, j_end(i+k || s.len)

- EG
- k = 2, ab(op_k)ab(skip_k)|ab(op_k)a; i_start=0, j_end(i+k || s.len); i_start=2\*k, j_end(i+k || s.len)
- SUMMA
- loop chars (i < s.len, i move)
- i_start=0, j_end(i+k || s.len); i_start=2\*k, j_end(i+k || s.len)
- https://leetcode.com/problems/reverse-string-ii

<br/>
<br/>

## 2 pt; i pt diff/same, j pt diff/same; move (sync + async) / (async + sync)

##### abc, aabbcc (a long press, b long press, c long press); i pt short, j pt long; move sync, then async

- EG
- abc, aabbcc (a long press, b long press, c long press)
- SUMMA
- i pt short (abc); j pt long (aabbcc)
- if match, move sync; if not_match, LOOK_BACK(i_move), move async
- https://leetcode.com/problems/long-pressed-name

##### search_needle_in_parent; i pt long_str, j pt short_str; move async, then sync

- EG
- SUMMA
- loop parent ( p[i] ), move async
- loop child ( p[i+j(w_len)] == c[j(w_len)] ), move sync
- https://leetcode.com/problems/implement-strstr

##### swap_2_char only; i pt diff, j pt diff; move sync

- EG
- abc -> ab; diff len, no swap
- abab -> a(swap)ba(swap)b; abab == abab, duplicated char, can swap
- abbc -> abc(swap)b(swap);
- SUMMA
- (1) diff len, no swap
- (2) A == B, duplicated char, can swap
- (3) A != B, vertical compare; found_remember
- https://leetcode.com/problems/buddy-strings

##### aaabc; i pt same, j pt same; move sync

- EG
- abc -> ab; diff len, no swap
- abab -> a(swap)ba(swap)b; abab == abab, duplicated char, can swap
- abbc -> abc(swap)b(swap);
- SUMMA
- (1) diff len, no swap
- (2) A == B, duplicated char, can swap
- (3) A != B, vertical compare; found_remember
- https://leetcode.com/problems/buddy-strings

<br/>
<br/>

## continue VS non_continue_reset_counter (with ops)

##### absent_counter; late_counter, 'LLA', continue VS non_continue_reset_counter (with ops)

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
- e.g. 'LLL', 3_L (continue)
- e.g. 'LLP', 2_L -> 0_L (non_continue_reset_counter)
- https://leetcode.com/problems/student-attendance-record-i

##### aaabcc, 3a; continue VS non_continue_reset_counter (with ops)

- EG
- aaabcc, consecutive 3a, so max
- SUMMA
-
- max
- counter
-
- loop chars
- if s[i-1](look_back) === s[i], update_max, ++c (continue)
- else c = 0 (non_continue_reset_counter)
- https://leetcode.com/problems/consecutive-characters

##### 000111, 3(0), 3(1); min(3, 3) -> 3; 01, 0011, 000111; continue VS non_continue_reset_counter

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
- if s[i-1](look_back)==s[i], ++c (continue)
- else arr.push(c), c = 0 (non_continue_reset_counter)
- use_mem, loop arr
- https://leetcode.com/problems/count-binary-substrings

##### [1, 3, 5, 4, 7], continue VS non_continue_reset_counter

- EG
- SUMMA
-
- max
- counter
-
- loop chars
- if ns[i] > ns[i-1], update_max, ++c (continue)
- else c = 1 (non_continue_reset_counter); non c=0, because cannot enter above
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

## start, end, start+1(LOOK_AHEAD, i_stay), end-1(LOOK_BACK, i_move); start <-> end-1 || start+1 <-> end; i move right, j move left

##### start, end, start+1(LOOK_AHEAD, i_stay), end-1(LOOK_BACK, i_move); start <-> end-1 (del_right) || start+1 <-> end (del_left); i move right, j move left

- EG
- c|abba -> c(s)a(s+1)bb(e-1)a(e) -> (s+1 <-> e) -> del_left
- abba|c -> a(s)b(s+1)ba(e-1)c(e) -> (s <-> e-1) -> del_right
- SUMMA
- loop chars
- (i, j; conid; ++i, --j) (combine ind, cross over)
- sub_loop; s+1 <-> e (del_left); i, j cross over
- sub_loop, s <-> e-1 (del_right); i, j cross over
- https://leetcode.com/problems/valid-palindrome-ii

<br/>
<br/>

## is_palindrome; hash / rebuild / i_start, j_end

##### aba -> a(end) + b(mid) + a(start), rebuild_palin; 121 -> 1(end) + 2(mid) + 1(start), rebuild_palin

- EG
- SUMMA
- 121 -> 1(end) + 2(mid) + 1(start)
- loop(input > 0); floor(input/10) -> less and less -> single_num -> 0
- a single num === xxxxlast_digit
- xxxx === left_digits, last_digit === last_digit
-
- last_digit = input % 10
- input = input / 10 (left_digits)
- res = res\*10 + last_digit
- https://leetcode.com/problems/palindrome-number

##### is palindrome; i_start, j_end; loop_skip_alph#

- EG
- SUMMA
- loop chars;
- i_start, j_end
- sub_loop(skip_alph#) ++i
- sub_loop(skip_alph#) --j
- https://leetcode.com/problems/valid-palindrome

<br/>
<br/>

## LOOK_BACK(i_move)

##### ++++ -> [--++, +--+, ++--]; i-1, i(LOOK_BACK, i_move); insert: sub(0, i) + val + sub(i), BUILD_STR_PHILOSOPY

- EG
- SUMMA
- loop chars
- i-1, i(LOOK_BACK); s.sub(0, i-1) + "--" + s.sub(i+1, 2_char), BUILD_STR_PHILOSOPY
- arr.push
- https://xiaoguan.gitbooks.io/leetcode/content/LeetCode/293-flip-game-easy.html

##### find_word_segment; letter space == word_segment; i-1, i(LOOK_BACK, i_move);

- EG
- ab\_\_\_cd\_\_efg\_\_; b\_, d\_, g\_ means 3 word_segment
- SUMMA => letter space == word_segment
- loop chars
- i-1, i(LOOK_BACK, i_move); if(s[i-1] == ' ', s[i] == letter), word_segment++
- https://leetcode.com/problems/number-of-segments-in-a-string

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

## hash_frequency, xxxx

##### hash_frequency; --hash_frequency[input_char]

- EG
- SUMMA
- hash_freq
- loop input_chars
- if(hash_freq[input_char] !== undef && --hash_freq[input_char] >= 0)
- https://leetcode.com/problems/ransom-note

##### 1st unique char in str; hash_frequency, lookup_in_order

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

## build HASH_POSI, prebuild_posi(self_ele) / build_posi_along(self_ele, update_ele) / build_posi_along(complementary_ele)

##### letter distance; build HASH_POSI (prebuild_posi, self_ele)

- EG
- keyboard: abcdefghijklmnopqrstuvwxyz, word: cba, that is 1 keyboard position (a-z)
- keyboard: pqrstuvwxyzabcdefghijklmno, word: pom, that is another keyboard position (p-o)
- SUMMA
- build HASH_POSI (prebuild_posi)
- loop chars
- i=1, look_back(i_move), distance = hash[i] - hash[i-1]
- https://codedestine.com/single-row-keyboard-string-problem

##### letter distance; build HASH_POSI (build_posi_along, self_ele)

- EG
- SUMMA
- loop chars;
- if met, cal max distance
- if !met, build_posi_along
- https://leetcode.com/problems/largest-substring-between-two-equal-characters

##### 2 same num distance <= k; build HASH_POSI (build_posi_along, update_ele)

- EG
- SUMMA
- loop eles
- build_posi_along(update_ele)
- remember latest_posi
- https://leetcode.com/problems/contains-duplicate-ii

##### two_sum, [0, 3, 4, 0], tar = 7; not_ele_directly, but_the_other_side

- EG
- SUMMA
- loop eles;
- not_ele_directly, but_the_other_side; if hash[tar - val](the_other_side), re [ hash[tar - val], ind ]
- if !hash[tar - val], build hash[val](ele_directly) = posi
- https://leetcode.com/problems/two-sum
- https://leetcode.com/problems/two-sum-ii-input-array-is-sorted

<br/>
<br/>

##### ?

- https://medium.com/@rebeccahezhang/leetcode-163-missing-ranges-6ac21b477e96

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

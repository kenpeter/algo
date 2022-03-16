https://leetcode.com/discuss/interview-question/1854513/Amazon-OA-amazon-prime-video-Solution


public static int minGroups(List<Integer> awards, int k){
    int n = awards.size();
    int groups = 1;

    Collections.sort(awards);

    int sMin = awards.get(0);
    for(int i = 1; i < n; i++){
        if(awards.get(i)-sMin > k){
            groups += 1;
            sMin = awards.get(i);
        }
    }

    return groups;
}
const countBinarySubstrings = (s) => {
  let res = 0;

  // i_stable, j_loop, exhaust
  for (let i = 0; i < s.length(); ++i) {
    for (let j = i + 1; j < s.length(); ++j) {
      const sub = s.substring(i, j + 1);
      if (valid(sub)) res++;
    }
  }
  return res;
};

//  private boolean valid(String str){
//       if(str.length()%2!=0) return false; // string length is odd

//      int low=0 , high=str.length()-1;
//        char ch1=str.charAt(low);
//        char ch2=str.charAt(high);

//        if(ch1==ch2) return false;  // end and start should be different

//       while(low<high){
//          if(str.charAt(low)!=ch1){
//            return false;
//          }else if(str.charAt(high)!=ch2){
//              return false;
//          }else{
//              low++;
//              high--;
//          }
//       }
//      return true;
//  }

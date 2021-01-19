// Clock shows h hours, m minutes and s seconds after midnight.
// Your task is to write a function which returns the time since midnight in milliseconds.

// 내 풀이 - 단순하게 풀어버림
function past(h,m,s) {
    let result = (h*60*60*1000)+(m*60*1000)+(s*1000);
    return result;
}

// 베스트 프랙티스
function past(h, m, s){
  return ((h*3600)+(m*60)+s)*1000;
}

// ES6+
const past = (h,m,s) => 1000 * (3600 * h + 60 * m + s);

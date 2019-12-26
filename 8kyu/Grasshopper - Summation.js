// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.
// summation(2) -> 3
// 1 + 2

// summation(8) -> 36
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8

// 내 풀이
// n부터 1까지 더해주면 된다고 생각해서 해당 단어로 검색해보니
// 재귀함수가 나왔다. 그걸 적당히 수정해서 해결.

var summation = function (num) {
  if (num > 1) {
    return num + summation(num -1);
  } else {
    return 1;
  }
}

// 베스트프랙티스
var summation = function (num) {
  let result = 0;
  for (var i = 1; i <= num; i++) {
    result += i;
  }
  
  return result;
}

// ES6+
const summation = n => n * (n + 1) / 2;

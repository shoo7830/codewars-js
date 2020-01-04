// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]

// For the beginner, try to use the map method - it comes in very handy quite a lot so is a good one to know.

// 내 풀이
// 배열을 선언하고 기존 배열의 원소들을 반복조건에 대입하고,
// 배열의 원소 자신을 한번 더 하고, 선언한 배열에 푸쉬하였다.
// 그런데 생각해보니까 * 2해도 되는데...
// map사용법은 생각도 못했다.

function maps(x){
  numArr = [];
  
  for(i = 0; x.length > i; i++) {
    let result = x[i] + x[i];    
    numArr.push(result);
  }
  return numArr;
}

// 베스트 답변
// map 사용법을 익히자
function maps(x){
  return x.map(n => n * 2);
}

// ES6+
maps = x => x.map(e => e * 2);

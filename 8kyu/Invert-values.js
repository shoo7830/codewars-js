// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []
// You can assume that all values are integers. Do not mutate the input array/list

// 내 풀이
// 1. null이거나 배열의 길이가 0이면 빈 배열 출력하게 처리
// 2. 새 배열을 선언하고, 기존 배열을 배열 길이만큼 순회하면서 -1을 곱한다.
// 3. 그 결과 값을 새 배열에 넣고 출력한다.

function invert(array) {
  if(array !== null || array.length !== 0) {
    let newArr = [];
    for (let i = 0; i < array.length; i++) {
       let result = array[i] * -1;
       newArr.push(+result);
    }
    return newArr;
  } else {
    return [];
  }
}

// 베스트 답변
// map을 사용하였다. map 사용법 좀 익히자 ㅠㅠ
function invert(array) {
   return array.map( x => x === 0 ? x : -x);
}

// ES6+
const invert = array => array.map(num => -num);

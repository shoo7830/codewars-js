// Write function avg which calculates average of numbers in given list.

// 내 풀이
// 1. 배열의 길이만큼 순회한다.
// 2. 결과값을 0으로 초기화 한다.
// 3. 결과값은 배열의 총 합.
// 4. 평균은 총 합을 배열의 갯수로 나눈것과 같다.

function find_average(array) {
  let result = 0;
  for(let i = 0; i < array.length; i++) {
    result += array[i];
  }
  return result/array.length;
}

// 베스트 답변
// reduce를 사용했다. 
function find_average(array) {
  var sum = array.reduce((a, b) => a + b, 0);
  return sum/array.length;
}

// ES6+
const find_average = numbers => numbers.reduce((number, memo) => memo + number, 0) / numbers.length

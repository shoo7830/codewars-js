// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

// 내 풀이
// 수식으로 Math.pow가 있어서 그것을 활용
// for문으로 순회하면서 결과값을 계속 더해감.

function squareSum(numbers){
  let result = 0;

  for (let i = 0; i < numbers.length; i++) {
   result += Math.pow(numbers[i], 2);
  }
  
  return result; 
}

// 베스트 답변
// reduce를 사용함. 진짜 어떻게 써야하는지 모르는 것 중 하나.

function squareSum(numbers){
  return numbers.reduce(function(sum, n){
    return (n*n) + sum;
  }, 0)
}

// ES6+
const squareSum = numbers => numbers.reduce((a, b) => a + b * b, 0)

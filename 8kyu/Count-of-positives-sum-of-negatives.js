// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.

// If the input array is empty or null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

// 내 풀이
// 배열의 원소로 들어갈 변수와 새 배열을 초기화 하고
// 주어진 배열의 원소가 0보다 크면 그 갯수를 세고
// 0보다 작으면 원소들의 합을 구하는 것까지는 대충 검색으로 해결했다.
// 배열 원소의 길이가 0이거나 null 값의 경우 빈 배열을 출력하는 부분이 조금 어려웠다.

function countPositivesSumNegatives(input) {
  let sum1 = 0;
  let sum2 = 0;
  let array =[];
  
  if(input == null || input.length == 0) {
    return array;
  } else {
    for (let i = 0; i < input.length; i++) {
      if (input[i] > 0) {
        sum1 ++;   
      } else if (input[i] < 0) {
        sum2 += input[i];
      }
    }
    array.push(sum1, sum2);
    return array;
  }
  
}

// 베스트 답변
// 내 답변과 다른 점은 굳이 배열을 변수처럼 선언하지 않고 바로 []로 선언했다.
// 그러므로 .push를 쓰지 않아도 됨.
function countPositivesSumNegatives(input) {
    if (input == null || input.length == 0)
      return [];
    
    var positive = 0;
    var negative = 0;
    
    for (var i=0, l=input.length; i<l; ++i)
    {
      if (input[i] > 0)
        ++ positive;
      else
        negative += input[i];
    }
    
    return [positive, negative];
}

// ES6+
// 조건문을 삼항 연산자를 사용하고,
// reduce를 써서 더 간략하게 풀이.
function countPositivesSumNegatives(input) {
    return input && input.length ? [input.filter(p => p > 0).length, input.filter(n => n < 0).reduce((a, b) => a + b, 0)] : [];
}

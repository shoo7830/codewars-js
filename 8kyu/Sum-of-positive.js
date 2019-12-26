// 배열의 모든 수를 합하라.
// 단, 0보다 작은 경우는 버린다.
// 이 합의 기본값은 0이다.

// 내 풀이
// 처음에는 forEach를 사용해서 어떤 배열이 있는지 확인하려고 하였으나, 배열의 요소끼리 더하는 식을 세우기 어려워서 포기
// 6개월 방치.
// 단순하게 생각해보면 0과 같거나 작으면 합치지 않으면 되는 것이였고, 배열 요소의 길이만큼 for문을 돌리면 되는 것이였음.

function positiveSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
      }
  }
  return sum;
}

// 영리하게 풀기
// reduce와 삼항연산자로 간단하게 풀이

function positiveSum(arr) {
   return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
}

// ES6+ 로 더 간단하게

const positiveSum = (arr) => arr.reduce((sum, n) => n > 0 ? sum + n : sum, 0);

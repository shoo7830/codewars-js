// Create a function isDivisible(n, x, y) that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero digits.

// Example:
// isDivisible(3,1,3)--> true because 3 is divisible by 1 and 3
// isDivisible(12,2,6)--> true because 12 is divisible by 2 and 6
// isDivisible(100,5,3)--> false because 100 is not divisible by 3
// isDivisible(12,7,5)--> false because 12 is neither divisible by 7 nor 5

// 내 풀이
// x, y둘다 n을 나눌수 있으려면 모듈러를 쓰면 될거라고 생각했다.
// 그러므로 AND연산자를 쓰고, 나눠서 나머지가 0이면 true, 아니면 false로 식을 세움

function isDivisible(n, x, y) {
  if(n % x == 0 && n % y == 0) {
    return true
  } else {
    return false
  }
}

// 베스트 답변
// 굳이 복잡하게 할 필요가 없었다.

function isDivisible(n, x, y) {
  return n % x === 0 && n % y === 0
}

// ES6+
const isDivisible = (n, x, y) => n%x==0 && n%y==0;

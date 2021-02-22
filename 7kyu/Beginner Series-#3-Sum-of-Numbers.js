// Given two integers a and b, which can be positive or negative, find the sum of all the integers between including them too and return it.If the two numbers are equal return a or b.

//     Note: a and b are not ordered!

// Examples
// GetSum(1, 0) == 1   // 1 + 0 = 1
// GetSum(1, 2) == 3   // 1 + 2 = 3
// GetSum(0, 1) == 1   // 0 + 1 = 1
// GetSum(1, 1) == 1   // 1 Since both are same
// GetSum(-1, 0) == -1 // -1 + 0 = -1
// GetSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2

// 내 풀이
// 두 수 사이의 숫자를 모두 더하는 식을 세운다.
// 먼저 두 수 중 큰 수와 작은 수를 판별하고
// i를 작은수에서 큰수까지 순차적으로 증가시킨 후
// 합계에 i를 더해준다.
function getSum(a, b) {
    if (a > b) {
        let temp = a;
        a = b;
        b = temp
    }

    let sum = 0;

    for (let i = a; i <= b; i++) {
        sum = sum + i
    }

    return sum;
}

// 베스트 답변 - https://en.wikipedia.org/wiki/Arithmetic_progression#Sum
const GetSum = (a, b) => {
    let min = Math.min(a, b),
        max = Math.max(a, b);
    return (max - min + 1) * (min + max) / 2;
}

// ES6+
const GetSum= (a, b, x=Math.min(a,b), y=Math.max(a,b)) => (y-x+1)*(x+y)/2
// Very simple, given a number, find its opposite.
// example
// 1: -1
// 14: -14
// -34: 34
// Fundamentals

// my solution
// 변수를 만들고 그 변수에 -1을 곱해주면 음수면 양수가 되고 양수면 음수가 될 것이라고 생각했음.
function opposite(number) {
    //your code here
    var oppositeResult = number * -1;
    return oppositeResult;
}

// best practice
// 간단하게 '-'붙여서 해결
function opposite(number) {
    return (-number);
}

// 혹은 ES6로 표현
const opposite = number => -number;
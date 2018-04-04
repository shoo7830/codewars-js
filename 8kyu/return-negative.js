// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
// Example: 
// makeNegative(1); // return -1
// makeNegative(-5); // return -5
// makeNegative(0); // return 0
// Fundamentals, Numbers

// my solution: if~else 조건으로 0보다 크면 -1을 곱하고 0보다 작으면 (또는 음수면) 그대로 반환
function makeNegative(num) {
    if (num > 0) {
        var resultNum = num * (-1);
        return resultNum;
    } else {
        return num;
    }
}

// best practice
function makeNegative(num) {
    return -Math.abs(num);
}

// ES6
makeNegative = n => -Math.abs(n)
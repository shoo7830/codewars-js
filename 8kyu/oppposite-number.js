// Very simple, given a number, find its opposite.
// example
// 1: -1
// 14: -14
// -34: 34
// Fundamentals

// my solution
function opposite(number) {
    //your code here
    var oppositeResult = number * -1;
    return oppositeResult;
}

// best practice
function opposite(number) {
    return (-number);
}
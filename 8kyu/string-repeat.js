// Write a function called repeatStr which repeats the given string string exactly n times.
// repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"
// Fundamentals

// my solution
// repeat()라는 메소드를 사용하여 해결
function repeatStr(n, s) {
    return s.repeat(n);
}

// best practice: 내가 푼 방식이 Best Practice

// ES6
repeatStr = (n, s) => s.repeat(n)
// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
// Fundamentals, Mathematics, Algorithms, Numbers

// my solution
// 2로 나눠서 나머지가 0이면 짝수, 그렇지 않으면 홀수로 판단하는 if~else구문을 사용
function even_or_odd(number) {
    if (number % 2 == 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

// best practice
// 조건부 삼항 연산자 사용
// 형식은 condition ? expr1 : expr2 
function even_or_odd(number) {
    return number % 2 ? "Odd" : "Even"
}

// ES6
var even_or_odd = n => n & 1 ? 'Odd' : 'Even'
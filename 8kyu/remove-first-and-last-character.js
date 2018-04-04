// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
// Fundamentals, Basic Language Features, Strings

// my solution: 변수를 만들고, 글자를 자른 후 인덱스 1부터 총 갯수에서 하나를 제거하여 반환
function removeChar(str) {
    //You got this!
    var resultRemove = str.slice(1, str.length - 1);
    return resultRemove;
};

// best practice
function removeChar(str) {
    return str.slice(1, -1);
}

// ES6
const removeChar = str => str.slice(1, -1)
// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

// 내 풀이
// 먼저 숫자를 문자열로 바꾸고, 배열로 만들어서 내림차순으로 정렬하고 문자열로 합친 후 숫자로 형 변환 하였다.
function descendingOrder(n) {
    let newArr = n.toString().split('').sort((a, b) => { return b - a });
    return Number(newArr.join(''));
}

// 베스트 답변
// 변수 선언 안하고 바로 return, 내림차순 정렬에는 reverse() 사용
function descendingOrder(n) {
    return parseInt(String(n).split('').sort().reverse().join(''))
}

// ES6+
const descendingOrder = (n, arr = [...String(n)]) => parseInt(arr.sort((a, b) => b - a).join(''));



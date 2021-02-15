// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example:

// persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
// // and 4 has only one digit

// persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
// // 1*2*6 = 12, and finally 1*2 = 2

// persistence(4) === 0 // because 4 is already a one-digit number

// 내 답변
// 검색해서 해결, 단순하게 자릿수 곱셈의 결과를 내보내는 줄 알았는데 알고보니 곱셉의 횟수를 세는 것이였음.
// 1. 한자릿수로 만드는 건 리듀스 사용
// 2. 리듀스 메소드를 사용하기 위해 숫자를 배열로 바꿈
// 3. 숫자를 String()을 사용하여 변환하고 split('')을 이용해서 배열로 변환
// 4. 문자열의 길이나 배열의 길이를 .length를 이용해서 2자리 수 이상의 경우 반복하는 반복문을 작성
// 5. 반복문이 종료될 때 count를 하는 변수를 선언하여 몇 번 반복했는지 카운트
function persistence(num) {
    //code me
    let count = 0;
    num = String(num);

    while (num.length >= 2) {
        count = count + 1;
        num = String(num.split('').reduce(function (acc, cur) {
            return acc * cur;
        }))
    }
    return count;
}

// 베스트 답변
function persistence(num) {
    var times = 0;

    num = num.toString();

    while (num.length > 1) {
        times++;
        num = num.split('').map(Number).reduce((a, b) => a * b).toString();
    }

    return times;
}

// ES6+
const persistence = num => {
    return `${num}`.length > 1
        ? 1 + persistence(`${num}`.split('').reduce((a, b) => a * +b))
        : 0;
}
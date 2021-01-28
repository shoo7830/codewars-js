// Welcome.In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

// 내 풀이 
// 1. num의 type을 확인해보니 Number. Number는 문자열로 형변환하여 배열로 만든다.
// 2. 형변환하고 제곱해서 배열에 넣는 것은 .map을 사용한다.
// 3. 결과는 String이므로 Number로 형변환 해준다.
function squareDigits(num) {
    const newArr = num.toString().split('').map(x => x * x);
    const result = parseInt(newArr.join(''));

    return result
}

// 베스트 답변
// 변수를 선언할 필요없이 바로 return해도 됨...
function squareDigits(num) {
    return Number(('' + num).split('').map(function (val) { return val * val; }).join(''));
}

// ES6+
const squareDigits = (num) => Number((num + '').split("").map(c => c * c).join(""));
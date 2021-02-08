// Check to see if a string has the same amount of 'x's and 'o's.The method must return a boolean and be case insensitive.The string can contain any char.

// Examples input / output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

// 내 풀이
// 정규표현식으로 x, o 각각 갯수를 구해서 비교하는 식으로 풀었다.
function XO(str) {
    let xlength = (str.match(/x/gi) || []).length;
    let olength = (str.match(/o/gi) || []).length;
    return (xlength === olength ? true : false)
}

// 베스트 답변
// 거의 나랑 비슷한데 차이가 있다면 나는 변수에 길이까지 포함해서 비교하였다.
function XO(str) {
    let x = str.match(/x/gi);
    let o = str.match(/o/gi);
    return (x && x.length) === (o && o.length);
}

// ES6+
const XO = str => {
    str = str.toLowerCase().split('');
    return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
}
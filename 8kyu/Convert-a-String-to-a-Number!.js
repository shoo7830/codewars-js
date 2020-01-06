// Note: This kata is inspired by (Convert a Number to a String!)[https://github.com/shoo7830/codewars-js/blob/master/8kyu/Convert-a-Number-to-a-String.js]. Try that one too.

// Description
// We need a function that can transform a string into a number. What ways of achieving this do you know?

// Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

// Examples
stringToNumber("1234") == 1234
stringToNumber("605" ) == 605
stringToNumber("1405") == 1405
stringToNumber("-7"  ) == -7

// 내 풀이 == 베스트 답변
// 간단하게 문자를 숫자로 형변환하면 된다고 생각했다.
// parseInt
var stringToNumber = function(str){
  return parseInt(str);
}

// ES6+
const stringToNumber = s => parseInt(s);

// We need a function that can transform a number into a string.

// What ways of achieving this do you know?

// Examples:
numberToString(123); // returns '123';`   
numberToString(999); // returns '999';`

// 내 풀이
// 오래전이라 기억이 잘 안나긴 하는데..
// 그냥 String으로 형변환이 가능할거라고 생각한 듯
// String 전역 객체는 문자열(문자의 나열)의 생성자, 문자열은 String 전역 객체를 직접 사용하여 생성할 수 있습니다.

function numberToString(num) {
  // Return a string of the number here!
  return String(num);
}

// 베스트 답변
//toString() 메서드는 특정한 Number 객체를 나타내는 문자열을 반환합니다.
function numberToString(num) {
  return num.toString();
}

// ES6+
const numberToString = num => `${num}`;

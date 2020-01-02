// Complete the solution so that it reverses the string value passed into it.

solution('world'); // returns 'dlrow'

// 내 풀이
// 여기서도 return에 바로 뒤집는 메소드를 작성해도 되었는데,
// 혹시나 에러가 나서 고쳐봤다. 
// split() 메서드는 String 객체를 지정한 구분자를 이용하여 여러 개의 문자열로 나눕니다. 빈 문자열은 ('')로 표현, 그냥 ()로 하면 배열을 반환함.
// reverse() 메서드는 배열의 순서를 반전합니다. 첫 번째 요소는 마지막 요소가 되며 마지막 요소는 첫 번째 요소가 됩니다.
// join() 메서드는 배열의 모든 요소를 연결해 하나의 문자열로 만듭니다.

function solution(str){
  let reverseStr = str.split("").reverse().join("");
  return reverseStr;
}

// 베스트 답변
function solution(str){
  return str.split('').reverse().join('');  
}

// ES6+
const solution = str => str.split('').reverse().join('');

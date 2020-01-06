// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// Patrick Feeney => P.F

// 내 풀이
// 공백을 기준으로 나눈 후, 각 나눈 것의 맨 앞 글자만 가져오면 된다고 생각했는데
// 소문자로 출력되는 것들이 있었다.
// 그래서 출력한 것들을 모두 대문자로 바꾸는 메소드를 사용.

function abbrevName(name){
  let result = name.split(" "),
      firstWord = result[0],
      secondWord = result[1]
  return (firstWord.substring(1, 0) + '.' + secondWord.substring(1, 0)).toUpperCase();
}

// 베스트 답변
// 내 풀이는 항상 변수 선언을 해버리는 것이 특징...
// 베스트 답변은 변수 선언을 적게 하는 편
// 나는 문자열의 첫번째를 잘랐는데 이 풀이는 배열로 나눈 것의 첫번째 원소를 불러왔다.
function abbrevName(name){
  var nameArray = name.split(" ");
  return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
}

// ES6+
// 정규표현식도 생각해봤는데 잘 안되서 포기.
const abbrevName = name => name.match(/\b\w/g).join('.').toUpperCase()

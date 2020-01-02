// Convert number to reversed array of digits
// Given a random number:

// You have to return the digits of this number within an array in reverse order.

// Example:
// 348597 => [7,9,5,8,4,3]

// 내 풀이
// 숫자형은 문자형처럼 자를 수 없다는 것을 알고
// 문자형으로 형변화 후 잘라서 뒤집었더니 ['3, 4, 8, 5, 9, 7']로 찍혀버린다.

// https://www.it-swarm.net/ko/javascript/javascript-%EC%88%AB%EC%9E%90%EB%8A%94-%EA%B0%9C%EB%B3%84-%EC%88%AB%EC%9E%90%EB%A1%9C-%EB%B6%84%ED%95%A0/939928640/
// 위의 링크를 참조해서 풀었다.
// 어렴풋이 .map을 사용하면 될것 같았는데 방법을 몰라서 삽질함.

function digitize(n) {
  let numArr = [],
      result = n.toString(); // 배열과 형변환 변수 선언
  
  for (let i = 0; i < result.length;i += 1) { // 각 자리수 마다 새 배열에 푸쉬
    numArr.push(+result.charAt(i));
  }
  
  return numArr.reverse(); // 배열 내의 원소 뒤집기
}

// 베스트 답변
// map() 메서드는 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환합니다.
function digitize(n) {
  return String(n).split('').map(Number).reverse()
}

// ES6+
digitize = n => [...String(n)].map(Number).reverse() 

// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
// 말그대로 훼이크 이진법, 5미만의 숫자는 0으로 5이상의 숫자는 1로 치환한다. 

// 내 풀이 - 너무 복잡하게 생각해서 복잡하게 풀었다...
function fakeBin(x){
  let newArray = [...x]; // 문자열을 배열로 전환
  let arrayOfNumbers = newArray.map( item => parseInt(item)) // 배열의 원소 숫자로 형변환
  
  const oddArray = []; // 또 배열 선언해서 forEach돌면서 새 배열에 조건에 맞게 원소 추가
  arrayOfNumbers.forEach(function(element) {
     let result = ''
     if (element < 5) {
       oddArray.push(0)
     } else {
       oddArray.push(1)
     }
   
  })
  
  let result =  oddArray.join(''); // 배열 문자로 변환
  return result
}

// 베스트 답변 - map과 split과 join을 섞으면 간단하게 풀림...
function fakeBin(x) {
    return x.split('').map(n => n < 5 ? 0 : 1).join('');
}

// ES6+ - reduce를 사용하여 정규표현식으로 표현.
const fakeBin=x=>[...x].reduce((a,b)=>a+(~~(+b/5)),"")

/* You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

#Examples:

Kata.getMiddle("test") should return "es"

Kata.getMiddle("testing") should return "t"

Kata.getMiddle("middle") should return "dd"

Kata.getMiddle("A") should return "A"
#Input

A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

#Output

The middle character(s) of the word represented as a string. */

// 내 풀이
function getMiddle(s)
{  
  let answer = '' // 값 초기화
  
  // 글자의 길이를 반으로 나눠서 0으로 나머지가 나오면 (=짝수이면) 가운데 위치에서 앞뒤 글자 가져오기
  if(s.length % 2 === 0) { 
    return answer = s[s.length / 2 - 1]+s[s.length / 2]
  
  // 나머지가 홀수이면 가운데 글자 가져오기
  } else {
    return answer = s[s.length / 2 - 0.5];
  }
}

// 베스트 답변
// 삼항 연산자를 if~else대신 사용
// Math.ceil() 함수 사용

function getMiddle(s)
{
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}

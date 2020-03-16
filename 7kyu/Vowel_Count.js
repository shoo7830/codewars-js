// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, and u as vowels for this Kata.

// The input string will only consist of lower case letters and/or spaces.

// 내 풀이
// 문자열을 변수로 변환하고, forEach로 돌려서 해당하는 조건이 있을때마다 vowelsCount를 하나씩 올려준다. 그리고 vowelsCount를 리턴한다.
function getCount(str) {
  var vowelsCount = 0;
  
  // enter your majic here
  let newArr = str.split('');
  let tmp = newArr.forEach(element => {
    if(element == 'a' || element == 'e' || element == 'i' || element == 'o' || element == 'u') {
      vowelsCount++;
    }
  })
  return vowelsCount;
}

// 베스트 답변
// 정규식으로 해당 문자열의 모음 갯수를 세어본다.
function getCount(str) {
  return (str.match(/[aeiou]/ig)||[]).length;
}

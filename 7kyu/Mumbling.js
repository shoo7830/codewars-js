/* This time no story, no theory. The examples below show you how to write function accum:

Examples:

accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z. */

// 내 풀이 - 풀긴 풀었는데 너무 복잡하게 풀었고, 뭔가 아쉬움...
function accum(s) {
  let splitArr = s.split(''); // 문자열을 일단 배열로 만들고
  let newStr = ''; 
  let conArr = [];
  
  // 각 배열의 원소를 순회하면서 첫번째 글자는 대문자 나머지는 소문자로 전환 후 각 원소를 다시 배열에 넣음
  splitArr.forEach(function (item, index, array) {
    let str = item.repeat(index+1);
    let str1 = str.charAt(0).toUpperCase();
    let str2 = str.substring(1).toLowerCase();
    newStr = str1 + str2;
    conArr.push(newStr);
  })
  
  // 배열의 원소를 '-' 로 연결하여 리턴.
  let result = conArr.join('-');
  return result;
}

// 베스트 답변, ES6+ - map을 사용하여 간단하게 해결...
function accum(s) {
  return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}

// Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
// should return "found the needle at position 5"

// 내 풀이
// 배열에서 특정 단어가 어디에 있는지 찾는 것을 검색해보았다.
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf

function findNeedle(haystack) {
  // your code here
  let countIndex = haystack.indexOf('needle');
  return `found the needle at position ${countIndex}`
}

// 베스트 답변
// 굳이 변수를 쓰지 않고 바로 해도 되었을듯. 근데 나는 + 쓰기 귀찮아서 그냥 변수로 선언해버림.
function findNeedle(haystack) {
  return "found the needle at position " + haystack.indexOf("needle");
}

// ES6+
const findNeedle = haystack => `found the needle at position ${haystack.indexOf('needle')}`;

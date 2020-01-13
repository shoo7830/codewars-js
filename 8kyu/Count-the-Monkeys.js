// You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.

// As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.

// For example:

// monkeyCount(10) // --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// monkeyCount(1) // --> [1]

// 내 풀이
// do~while쓰려다가 잘 안되서 for로 변경, mdn에서 for문 예시에서 힌트 얻음
function monkeyCount(n) {
  let numArr = [];
  for(let i = 1; i < n + 1; i++) {
    numArr.push(i);
  }
  return (numArr);
}

// 베스트 답변
// 별 차이가 없다!
function monkeyCount(n) {
 var monkeys = [];
 for(var i=1; i<n+1; i++){
   monkeys.push(i);
 }
 return monkeys;
}

// 현명한 답?
// Array.from이 뭔지 알아봐야겠다.
function monkeyCount(n) {
  return Array.from({length:n}, (_,i)=>i+1)
}

// ES6+
const monkeyCount = (n) => Array.from({length: n}, (item, index) => index + 1);

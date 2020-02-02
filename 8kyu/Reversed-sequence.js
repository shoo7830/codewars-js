//Get the number n (n>0) to return the reversed sequence from n to 1.

//Example : n=5 >> [5,4,3,2,1]

// 내 풀이
// 기존에 풀었던 원숭이 세기 문제로 그대로 해결, 
// 결과값에 reverse만 추가함

const reverseSeq = n => {
  var newSeq = [];
  for(var i=1; i<n+1; i++){
     newSeq.push(i);
   }
   return newSeq.reverse();
};

// 베스트 답변
// for구문에 대한 이해가 아직 부족함을 알수 있다. 
// 이렇게 풀었으면 굳이 reverse를 쓸 이유가?
const reverseSeq = n => {
let arr = [];
  for (let i=n; i>0; i--) {
    arr.push(i);
    } return arr;
};

// ES6+
const reverseSeq = length => Array.from({length}, () => length--)

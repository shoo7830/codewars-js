/* Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.

For example: ["3:1", "2:2", "0:1", ...]

Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:

if x>y - 3 points
if x<y - 0 point
if x=y - 1 point
Notes:

there are 10 matches in the championship
0 <= x <= 4
0 <= y <= 4 */

// 내 풀이 - 사실 어떻게 풀어야할지 감이 안와서 다른 해답을 참고하긴 했다. 배열 원소들도 각각 배열이므로 고유한 인덱스 값이 있다. x가 [0], :가 [1], y가 [2]이므로 
// 반복문으로 배열을 순회해서 비교해서 풀면 된다. 
function points(games) {
  let sum = 0
  for (let i=0; i<games.length; i++) {
    if(games[i][0] > games[i][2]) {
      sum = sum+3
    } else if(games[i][0] < games[i][2]){
      sum = sum
    } else {
      sum = sum+1
    }
  }
  return sum
}

// 베스트 답변 - map을 사용해서 간단하게 풀었다. 연산자에 대한 이해가 부족했다.
function points(games) {
  let total = 0;
  games.map(game => {
    if (game[0] === game[2]) {
      total += 1;
    } else if (game[0] > game[2]) {
      total += 3;
    }
  });
  return total;
}

// ES6+ reduce도 반복문에서 많이 쓰이는 듯.
const points=games=>games.reduce((output,current)=>{
    return output += current[0]>current[2] ? 3 : current[0]===current[2] ? 1 : 0;
},0)

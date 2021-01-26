/* In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Example:

highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
Notes:

All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first. */

// 내 풀이
// 먼저 주어진 문자열을 공백으로 분리해서 배열에 넣고, 오름차순으로 정렬해준다. 
// 배열의 첫번째 인덱스가 가장 작은 값, 배열의 마지막 인덱스가 가장 큰 값이다.
// 두 값을 변수선언해서 마지막에 문자열을 합쳐주고 리턴한다.

// 고쳐야 할 습관: 쌍따옴표 말고 홑따옴표, 배열 변환할때 map 사용할 것, 변수 적당히 선언할 것

function highAndLow(numbers){
  let newArr = numbers.split(" ");
  newArr.sort((a, b) => {
      return a-b; 
  });
  
  let highest = newArr[newArr.length - 1];
  let lowest = newArr[0];
  
  return highest+" "+lowest;
}

// 베스트 답변 - map으로 배열을 구성한 후 최대 최솟값을 구함
function highAndLow(numbers){
  numbers = numbers.split(' ').map(Number);
  return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
}

// ES6+
function highAndLow(numbers){
  numbers = numbers.split(' ');
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}

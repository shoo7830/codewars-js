// Sum all the numbers of the array (in F# and Haskell you get a list) except the highest and the lowest element (the value, not the index!).
// (The highest/lowest element is respectively only one element at each edge, even if there are more than one with the same value!)

// Example:

// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6

// If array is empty, null or None, or if only 1 Element exists, return 0.
// Note:In C++ instead null an empty vector is used. In C there is no null. ;-)

// 내 풀이
// 1. 먼저 sort를 이용해서 정렬을 한다. 단 ASCII 문자 순서로 정렬이 되므로 오름차순으로 정렬할 수 있게 함수를 작성한다.
// 2. 오름차순으로 정렬을 했으므로 맨 앞이 최소값, 맨 뒤가 최대값일 것이다. splice를 사용해서 첫번째 것을 제거, pop을 써서 맨뒤 하나를 제거
// 3. for문을 돌려서 배열 합을 구한다. 테스트 모두 통과

function sumArray(array) {
  if(array !== null) {
    array.sort(function(a, b) {
      return a - b;
    });
    
    array.splice(0, 1);
    array.pop();
    
    let result = 0;
    for (var i = 0; i < array.length; i++)
      result += array[i];
  
    return result;
  } else {
    return 0;
  }
}

// 베스트 답변
// 나는 최소와 최대를 빼고 배열의 원소가 1개일 경우를 예외처리 하지 않았는데 여기선 그렇게 했다.
// sort를 사용한 것은 동일하고, for문을 돌릴때 맨 앞과 맨 뒤는 합치지 않는 식을 세웠다. 

function sumArray(array) {
  if (array == null) {
    return 0;
  } else if (array.length < 2) {
    return 0;
  } else {
    array = array.sort(function(a,b) {return a - b;});
    var total = 0;
    for (var i = 1; i < array.length - 1; i++) {
      total += array[i];
    }
    return total;
  }
}

// ES6+
sumArray = a => a ? a.sort((x, y) => x - y).slice(1, -1).reduce((s, e) => s + e, 0) : 0

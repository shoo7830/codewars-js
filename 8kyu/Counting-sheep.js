// Consider an array of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
// [true,  true,  true,  false,
//  true,  true,  true,  true ,
//  true,  false, true,  false,
//  true,  false, false, true ,
//  true,  true,  true,  true ,
//  false, false, true,  true] 
//
// The correct answer would be 17.

// 내 풀이
// 새 배열을 만들고 그 배열의 갯수를 구하는 것으로 풀었다.
// 배열의 filter를 이용하고, length를 사용했다.

function countSheeps(arrayOfSheep) {
  let newArr = arrayOfSheep.filter(function(item) {
    return item == true;
  });
  
  return newArr.length;
}

// 베스트 프랙티스
// 주어진 값이 Boolean이라는 것을 활용해서 해결

function countSheeps(arrayOfSheeps) {
  return arrayOfSheeps.filter(Boolean).length;
}

// ES6+
const countSheeps = arrayOfSheeps => arrayOfSheeps.filter(s => s).length;

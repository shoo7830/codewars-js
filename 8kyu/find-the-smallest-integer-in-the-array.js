// Given an array of integers your solution should find the smallest integer.

// my solution
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sort 참고
class SmallestIntegerFinder {
  findSmallestInt(args) {
    let arraySort = args;
    arraySort.sort(function(a, b) {
      return a - b;
    });
    return arraySort[0];
    
  }
}

// best practice, ES6
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args)
  }
}

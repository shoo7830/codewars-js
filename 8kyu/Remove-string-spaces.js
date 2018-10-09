//Simple, remove the spaces from the string, then return the resultant string.

// my solution
// 정규표현식 참고, 필요없이 변수선언.
function noSpace(x){
  let removeSpace = x.replace(/(\s*)/g,'');
  return removeSpace;
}

// best practice
function noSpace(x){
  return x.replace(/\s/g, '');
}

// ES6
const noSpace = (str) => str.replace(/\s*/g, '');

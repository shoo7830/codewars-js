// The code does not execute properly. Try to figure out why.
// bug

var multiply = function (a, b){
  a * b
}

// my solution: return이 누락되었고, 변수로 선언해서 사용하면 안된다고 생각함.
function multiply(a, b){
  return a * b
}

// best practice
multiply = function (a, b) {
  return a * b;
}

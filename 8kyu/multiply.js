// The code does not execute properly. Try to figure out why.
var multiply = function (a, b){
  a * b
}

// my solution: return이 누락
function multiply(a, b){
  return a * b
}

// best practice
multiply = function (a, b) {
  return a * b;
}

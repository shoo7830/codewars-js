// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

// Examples
basicOp('+', 4, 7)         // Output: 11
basicOp('-', 15, 18)       // Output: -3
basicOp('*', 5, 5)         // Output: 25
basicOp('/', 49, 7)        // Output: 7

// 내 풀이
// https://stackoverflow.com/questions/13077923/how-can-i-convert-a-string-into-a-math-operator-in-javascript 참고.
// 인자에 따라서 사칙연산을 리턴해주면 간단한 것이였음.

function basicOp(operation, value1, value2)
{
  if(operation == "+"){
    return value1 + value2;
  }
  else if(operation == "-"){
    return value1 - value2;
  }
  else if(operation == "*"){
    return value1 * value2;
  }
  else{
    return value1 / value2;
  }
}

// 베스트 답변
// switch 사용도 생각을 했는데 정확한 사용법을 몰라서 못 풀음

function basicOp(operation, value1, value2) {
    switch (operation) {
        case '+':
            return value1 + value2;
        case '-':
            return value1 - value2;
        case '*':
            return value1 * value2;
        case '/':
            return value1 / value2;
        default:
            return 0;
    }
}

// ES6+
// eval도 있다는 것은 알았지만 switch처럼 방법을 몰라서 못풀음

const basicOp = (operation, value1, value2) => eval( `${value1} ${operation} ${value2}` )

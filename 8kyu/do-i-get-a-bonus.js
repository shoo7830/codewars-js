// It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is going to make the most money?

// Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.

// If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.

// Return the total figure the individual will receive as a string prefixed with "£" (= "\u00A3", JS, Go, and Java), "$" (C#, C++, Ruby, Clojure, Elixir, PHP and Python, Haskell, Lua) or "¥" (Rust).

// 내 풀이
// true일때 월급에 10을 곱하는데 당연히 수로 전환이 필요하다고 생각해서 parseInt붙임
// 값 리턴할때 '' 붙여야 하는 줄알았는데 없어도 풀림
// 보너스랑 불린값 비교 할때 == 안 쓰고 = 썼더니 에러남
function bonusTime(salary, bonus) {
    if(bonus === true) {
        let result = parseInt(salary) * 10;
        return "\u00A3"+result;
    } else {
        return "\u00A3"+salary;
    }
}

// 베스트 답변
// 조건절 알때 제발 삼항연산자를 사용하자.
function bonusTime(salary, bonus) {
    return bonus ? `£${10 * salary}` : `£${salary}`;
}

// ES6+
const bonusTime = (salary, bonus) => `£${salary * (bonus ? 10 : 1)}`;
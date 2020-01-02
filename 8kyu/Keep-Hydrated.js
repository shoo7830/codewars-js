// Nathan loves cycling.

// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

// For example:

// time = 3 ----> litres = 1

// time = 6.7---> litres = 3

// time = 11.8--> litres = 5

// 내 답변
// 시간마다 0.5리터를 마시니까 당연히 시간으로 곱하고, 
// 예제에서는 소숫점을 버려 버리니까 .Math.floor를 써야한다고 생각함.

function litres(time) {
  let drinkWater = Math.floor(0.5 * time);
  return drinkWater;
}

// 베스트 답변
// 내 습관은 일단 변수를 선언해서 사용하는데
// 답변들은 대부분 return값을 선언할때 바로 식을 써버린다.

function litres(time) {
  return Math.floor(time * 0.5);
}

// ES6+
const litres = time => Math.floor(time * 0.5);

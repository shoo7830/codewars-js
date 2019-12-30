// Introduction
// The first century spans from the year 1 up to and including the year 100, The second - from the year 101 up to and including the year 200, etc.

// Task :
// Given a year, return the century it is in.

// Input , Output Examples ::
// centuryFromYear(1705)  returns (18)
// centuryFromYear(1900)  returns (19)
// centuryFromYear(1601)  returns (17)
// centuryFromYear(2000)  returns (20)
// Hope you enjoy it .. Awaiting for Best Practice Codes

// Enjoy Learning !!!

// 내 풀이
// 검색에 의존해서 풀었음 고민 1도 안함
// Math.floor() 함수는 주어진 숫자와 같거나 작은 정수 중에서 가장 큰 수를 반환
// 만약 아래에 1978을 대입했다면 (1977 / 100) + 1 => 19 + 1 =>20세기

function century(year) {
  return Math.floor((year-1)/100)+1;
}

// 베스트 답변, ES6+
// Math.ceil() 함수는 주어진 숫자보다 크거나 같은 숫자 중 가장 작은 숫자를 integer 로 반환.

const century = year => Math.ceil(year/100)


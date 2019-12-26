// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

// 내 풀이
// 단순하게 bool을 변수로만 생각하고 조건을 작성하였다.
//Boolean은 기본이 true를 반환하니까 베스트 답변처럼 작성하면 되는거였다.

function boolToWord( bool ){
  if (bool == true) 
  {
    return 'Yes';
  } else {
    return 'No';
  };
};

// 베스트

function boolToWord( bool ){
  return bool ? 'Yes':'No';
}

// ES6+

const boolToWord = bool => bool ? 'Yes' : 'No';

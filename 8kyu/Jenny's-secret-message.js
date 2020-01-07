// Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.

// Can you help her?

// 내 풀이
// 단순하게 if~else로 수정

function greet(name){
  if(name === "Johnny")
    return "Hello, my love!";
  else
    return "Hello, " + name + "!";
}

// 베스트 답변
// 간단하게 삼항연산자를 사용.

function greet(name){
  return "Hello, " + (name == "Johnny" ? "my love" : name) + "!";
}

// ES6+
const greet = name => `Hello, ${name === 'Johnny' ? 'my love' : name}!`;

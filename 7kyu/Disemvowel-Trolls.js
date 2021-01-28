// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

//     Note: for this kata y isn't considered a vowel.

// 내 풀이
// 문자열을 map을 써서 배열로 만든다. 
// 각 원소에서 모음에 해당하는 a, i, u, e, o를 정규표현식을 사용하여 공백으로 치환한다.
// 마지막으로 배열을 문자열로 합치면 완료.
// 이번에는 변수 선언하지 않고 바로 return함.
function disemvowel(str) {
    //return str;
    return str.split('').map(x => x.replace(/[aiueo]/gi, '')).join('')
}

// 베스트 답변
function disemvowel(str) {
    return str.replace(/[aeiou]/gi, '');
}

// ES6+
disemvowel = str => str.replace(/[aeiou]/gi, '');
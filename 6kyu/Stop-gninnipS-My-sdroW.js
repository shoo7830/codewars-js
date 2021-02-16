// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed(Just like the name of this Kata).Strings passed in will consist of only letters and spaces.Spaces will be included only when more than one word is present.

//     Examples:

// spinWords("Hey fellow warriors") => returns "Hey wollef sroirraw"

// spinWords("This is a test") => returns "This is a test"

// spinWords("This is another test")=> returns "This is rehtona test"

// 내 풀이
// 먼저, 문자열을 공백으로 분리하여 배열로 바꾸고, 
// 배열에서 5글자 이상이면 또 배열로 쪼개고 글자 순서를 뒤집은 후 join으로 합쳤다.
// 4글자 이하면 원래의 원소를 리턴
// 마지막에 배열로 바꾼 문자열을 다시 문자열로 만들어서 리턴
// 아쉬운건 굳이 배열을 선언하지 않고 리턴해도 되는데 또 배열을 선언했다는 점, 삼항연산자를 사용 안했다는 점.
// 그런 이유로 식이 다소 복잡해짐.
function spinWords(word) {
    let newarr = word.split(' ').map(x => {
        if (x.length >= 5) {
            let reverse = x.split('').reverse().join('');
            return reverse;
        } else {
            return x;
        }
    })

    return newarr.join(' ');
}

// 베스트 답변
function spinWords(words) {
    return words.split(' ').map(function (word) {
        return (word.length > 4) ? word.split('').reverse().join('') : word;
    }).join(' ');
}

// 좀 신박하게 풀은것
// 정규표현식을 사용함.
function spinWords(string) {
    return string.replace(/\w{5,}/g, function (w) { return w.split('').reverse().join('') })
}
// Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid(2010) and After Earth(2013).Jaden is also known for some of his philosophy that he delivers via Twitter.When writing on Twitter, he is known for almost always capitalizing every word.For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

// Your task is to convert strings to how they would be written by Jaden Smith.The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

//     Example:

// Not Jaden - Cased: "How can mirrors be real if our eyes aren't real"
// Jaden - Cased: "How Can Mirrors Be Real If Our Eyes Aren't Real"
// Link to Jaden's former Twitter account @officialjaden via archive.org

// 내 풀이
// String.prototype.toJadenCase 이 부분을 어떻게 받는지 몰라서 조금 헷갈렸음.
// 단순하게 this로 받아서 배열로 만든 후 그 배열의 원소들의 첫 글자를 대문자로 만들고 다시 문자열로 합친다.
// 첫 글자만 대문자로 만들려면 str[0].toUpperCase() + str.slice(1) 을 사용한다.
String.prototype.toJadenCase = function () {
    return this.split(" ").map(x => x[0].toUpperCase() + x.slice(1)).join(" ");
};

// 베스트 답변 - 거의 유사하지만 첫 글자를 str.charAt(0)을 사용하였다.
String.prototype.toJadenCase = function () {
    return this.split(" ").map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(" ");
}

// 또는 정규표현식을 사용할 수도 있다.
String.prototype.toJadenCase = function () {
    return this.replace(/(^|\s)[a-z]/g, function (x) { return x.toUpperCase(); });
};
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// isIsogram("Dermatoglyphics") == true
// isIsogram("aba") == false
// isIsogram("moOse") == false // -- ignore letter case

// 내 풀이
// 일단 문자열을 소문자로 치환하고, 배열로 만든 다음
// Set 객체를 사용해서 배열 중복을 확인했다.
// Set은 중복을 허용하지 않는 점이 있다. 원본 배열의 크기와 원본 배열을 가지고 생성한 Set 객체의 크기를
// 비교하여 중복이 존재하는 지 확인 가능.
 
function isIsogram(str) {
    //...
    let s = str.toUpperCase()
    let newArr = s.split('')
    const set = new Set(newArr);

    if (newArr.length !== set.size) {
        return false;
    } else {
        return true;
    }
};

// 베스트 답변 - 간단하게 정규표현식으로 해결? 왜 이 생각을 못했을까..
function isIsogram(str) {
    return !/(\w).*\1/i.test(str)
}
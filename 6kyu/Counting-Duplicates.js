// Count the number of Duplicates
// Write a function that will return the count of distinct case -insensitive alphabetic characters and numeric digits that occur more than once in the input string.The input string can be assumed to contain only alphabets(both uppercase and lowercase) and numeric digits.

//     Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice(`b` and`B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

// 내 답변
// 먼저 대소문자 구분을 없애기 위해 문장을 소문자로 변환하고, 
// 중복 글자수를 reduce를 이용해서 확인
// 얻은 객체를 배열로 변환해서 2개 이상 중복되는 경우를 filter
// 배열의 길이에 따라 조건문 작성해서 리턴.
function duplicateCount(text) {
    text = text.toLowerCase();
    const result = text.split('').reduce((acc, cur) => {
        acc[cur] = (acc[cur] || 0) + 1
        return acc
    }, {})

    const asArray = Object.entries(result);
    const filterArray = asArray.filter(([key, value]) => value > 1);

    if (filterArray.length === 0) {
        return 0;
    } else if (filterArray.length === 1) {
        return 1;
    } else {
        return filterArray.length;
    }
}

// 베스트 답변
// 문장을 소문자로 변환후 배열로 만들고 정렬하고 다시 합쳐서 정규표현식으로 2개 이상 중복된 문자의 갯수 체크
function duplicateCount(text) {
    return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
}
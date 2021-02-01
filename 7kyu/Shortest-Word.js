// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

// 내 풀이
// 주어진 문자열을 공백으로 분리해서 배열로 만든 후 각 원소의 길이를 반환해서 오름차순으로 정렬
// 제일 앞에 있는 값을 반환
function findShort(s) {
    let result = s.split(" ").map(x => x.length).sort((a, b) => { return a - b });
    return result[0]
}

// 베스트 답변
// 배열에서 최대값과 최소값을 구하기 위해서 apply와 함께 Math.max/Math.min 을 사용한다.
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Function/apply
function findShort(s) {
    return Math.min.apply(null, s.split(' ').map(w => w.length));
}


// In this kata you will create a function that takes a list of non - negative integers and strings and returns a new list with the strings filtered out.

//     Example
// filter_list([1, 2, 'a', 'b']) == [1, 2]
// filter_list([1, 'a', 'b', 0, 15]) == [1, 0, 15]
// filter_list([1, 2, 'aasf', '1', '123', 123]) == [1, 2, 123]

// 내 풀이
// 처음에는 정규표현식으로 숫자만 걸러내보려고 했는데 잘 안되서 방법을 바꿈
// 배열의 원소 중에 정수인것만 뽑아서 다시 배열로 만들었다. 
function filter_list(l) {
    let arr = []
    l.forEach(x => {
        if (x % 1 === 0 && typeof (x) === 'number') {
            arr.push(x)
        }
    })
    return arr;
}

// 베스트 답변
// filter를 써서 number 타입인 것만 가져온다.
function filter_list(l) {
    return l.filter(function (v) { return typeof v == 'number' })
}

// ES6+
const filter_list = l => l.filter(c => typeof c === 'number');

// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// 내 풀이
// 일단 너무 복잡하게 생각해서 풀었다. 돌아가는 것에 의의를 두고 풀었음...
// 1. reduce를 사용해서 각 배열의 원소의 갯수를 표현하는 객체를 만들고
// 2. 객체를 배열로 변환해서 값이 홀수인 것을 필터링 한 후
// 3. 첫번째 배열의 첫번째 값을 가져온 후 숫자로 변환했다. 
// 결론: 코드 더럽...돌아는 감...
function findOdd(A) {
    const result = A.reduce((object, currentValue) => {
        if (!object[currentValue]) {
            object[currentValue] = 0;
        }
        object[currentValue]++;
        return object;
    }, {});

    const asArray = Object.entries(result);
    const oddArray = asArray.filter(([key, value]) => value % 2 === 1);
    let newArray = oddArray[0];
    return parseInt(newArray[0]);
}

// 베스트 답변
const findOdd = (xs) => xs.reduce((a, b) => a ^ b);
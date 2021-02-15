// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n.If that value has more than one digit, continue reducing in this way until a single - digit number is produced.The input will be a non - negative integer.

//     Examples
// 16  -- > 1 + 6 = 7
// 942  -- > 9 + 4 + 2 = 15  -- > 1 + 5 = 6
// 132189  -- > 1 + 3 + 2 + 1 + 8 + 9 = 24  -- > 2 + 4 = 6
// 493193  -- > 4 + 9 + 3 + 1 + 9 + 3 = 29  -- > 2 + 9 = 11  -- > 1 + 1 = 2

// 내 풀이
// 숫자를 문자열로 바꾸고 for문을 돌리면서 각 자리수 끼리 덧셈을 하였다.
// 이렇게 하면 두자리 답이 나오는 경우가 발생한다.
// 윗 부분은 쉽게 하였으나 다른 부분은 잘 몰라서 검색해서 도움을 받았다.
// 만약 두 자리인 경우 for를 한 번 더 돌려주고, 아니면 값을 리턴해준다.
function digital_root(n) {
    let answer = 0
    let m = String(n);

    for (let i = 0; i < m.length; i++) {
        answer += parseInt(m[i]);
    }

    if (answer > 9) {
        return digital_root(answer)
    } else {
        return answer
    }
}

// 베스트 답변
function digital_root(n) {
    return (n - 1) % 9 + 1;
}
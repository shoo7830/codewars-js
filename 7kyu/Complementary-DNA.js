// Deoxyribonucleic acid(DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G".You have function with one side of the DNA(string, except for Haskell); you need to get the other complementary side.DNA strand is never empty or there is no DNA at all(again, except for Haskell).

// More similar exercise are found here http://rosalind.info/problems/list-view/ (source)

// DNAStrand("ATTGC") // return "TAACG"

// DNAStrand("GTAT") // return "CATA" 

// 내 풀이
// 처음에 정규표현식으로 치환하려고 하였으나 한 글자에 하나씩만 매치된다고 생각해서 포기.
// 문자열을 배열로 만들고, 순회하면서 조건문을 거쳐서 새로운 배열을 생성하고, 다시 배열을 문자열로 변환
// 답은 맞았지만 뭔가 복잡한 느낌이다. 무조건 문자를 배열로 바꾸려고 하는 습관이 또 나와버림.
function DNAStrand(dna) {
    //your code here
    // A -> T
    // T -> A
    // G -> C
    // C -> G

    let arr = dna.split('');
    let newArr = []
    arr.forEach(element => {
        if (element === 'A') {
            newArr.push('T')
        } else if (element === 'T') {
            newArr.push('A')
        } else if (element === 'G') {
            newArr.push('C')
        } else {
            newArr.push('G')
        }
    })
    let result = newArr.join('');
    return result
}

// 베스트 답변
// 정규표현식으로 해결, /./ 는 개행 문자를 제외한 모든 단일 문자와 대응,

function DNAStrand(dna) {
    return dna.replace(/./g, function (c) {
        return DNAStrand.pairs[c]
    })
}

DNAStrand.pairs = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C',
}

// ES6+
let pairs = { A: 'T', T: 'A', C: 'G', G: 'C' };
const DNAStrand = dna => dna.replace(/./g, c => pairs[c]);
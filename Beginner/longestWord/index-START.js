/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/



function longestWord(text) {
    let wordArr = text.split(' ')
    let maxLength = 0
    let result = ''

    for (let i = 0; i < wordArr.length; i++){
        if (wordArr[i].length > maxLength) {
            maxLength = wordArr[i].length
            result = wordArr[i]
        }
    }

    return result
}

function longestWord(text) {
    let result = text.split(' ').reduce((maxLenWord, currentWord) => {
        if (currentWord.length > maxLenWord.length) {
            return currentWord
        } else {
            return maxLenWord
        }
    }, "")

    return result
}

function longestWord(text) {
    let sortedArr = text.split(' ').sort((wordA, WordB) => WordB.length - wordA.length)
    return sortedArr
}

module.exports = longestWord
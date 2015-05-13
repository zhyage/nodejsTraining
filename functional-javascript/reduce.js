function countWords(arr) {
    return arr.reduce(function(countMap, word) {
        console.info("countMap: ", countWords, "word :", word);
            countMap[word] = ++countMap[word] || 1 // increment or initialize to 1
            return countMap
        }, {}) // second argument to reduce initialises countMap to {}
}
module.exports = countWords

var inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian'];

console.info(countWords(inputWords));
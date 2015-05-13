function countWords(inputWords){
    var newObj = {};
    inputWords.reduce(function(pre, cur, index, arr){
        newObj[cur] = ++ newObj[cur] || 1 ;
        
    }, {})
    return newObj;
}


module.exports = countWords;
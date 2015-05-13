function arrayMap(arr, fn){
    var res = [];
    arr.reduce(function(prev, cur, index, arr){
        res.push(fn(cur));
    }, 0);
    return res;
}

module.exports = arrayMap;
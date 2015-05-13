function doubleAll(numbers){
    var res = numbers.map(function(i){
        //console.info(i);
        return i*2;
    })
    return res;
}

module.exports = doubleAll;
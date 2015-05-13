function duckCount(){
    var objArr = Array.prototype.slice.call(arguments, 0);
    var count = 0;
    objArr.map(function(curObj){
        if(Object.prototype.hasOwnProperty.call(curObj, 'quack')){
            count += 1;
        }
    })
    return count;
}

module.exports = duckCount;
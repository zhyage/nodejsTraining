function reduce(arr, fn, init){
    return (function reduceOnce(index, value){
        if (index > arr.length - 1){
            return value;
        }
        return reduceOnce(index + 1, fn(value, arr[index], index, arr));
    })(0, init)
}



module.exports = reduce;
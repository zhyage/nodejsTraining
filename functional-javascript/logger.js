function logger(namespace){
    return function(){
        var argList = [namespace].concat(Array.prototype.slice.call(arguments, 0));
        console.log.apply(console, argList);
    }
    
}

module.exports = logger;
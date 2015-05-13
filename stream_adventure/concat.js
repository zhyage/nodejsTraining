var concat = require('concat-stream')

process.stdin.pipe(concat(function(inStream){
    var str = inStream.toString().split('').reverse().join('');
    console.info(str);
}))
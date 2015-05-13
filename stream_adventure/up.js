var tr = require('through2');

process.stdin.pipe(tr(function(chunk, end, callback){
    //chunk.toString().toUpperCase();
    this.push(chunk.toString().toUpperCase());
    callback();
})).pipe(process.stdout);
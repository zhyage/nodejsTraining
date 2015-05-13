var fs = require('fs');

var buf = new Buffer(1024);

buf = fs.readFileSync(process.argv[2]);

var string = buf.toString('ascii');
// console.info(buf.toString('ascii'));

var lineArray = string.split('\n');

var lineNum = lineArray.length - 1;
console.info(lineNum);
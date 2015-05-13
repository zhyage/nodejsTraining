var fs = require('fs');

function readFileCallback(err, buf){
    var string = buf.toString('ascii');
    var lineNum = string.split('\n').length - 1;
    console.info(lineNum);
}

fs.readFile(process.argv[2], readFileCallback);
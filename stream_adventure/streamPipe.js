var fs = require('fs');

function writeToStdErr(stream){
    stream.pipe(process.stdout);
}

writeToStdErr(fs.createReadStream(process.argv[2]));
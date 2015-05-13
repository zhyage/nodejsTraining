var myModuleFn = require('./6_2.js');

var dirName = process.argv[2];
var extName = process.argv[3];

function printResult(err, data) {
    if (err) {
        console.info("error happens");
        return;
    }
    data.forEach(function(value, index, arr) {
        console.info(value);
    })

}

myModuleFn(dirName, extName, printResult);
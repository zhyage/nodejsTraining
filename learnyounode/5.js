var fs = require('fs');
var path = require('path');


function getExtNameFileOfDir(err, fileList){
    fileList.forEach(function(curVar, index, arr){
        //console.info(path.extname(curVar));
        if(path.extname(curVar) === "." + extName){
            console.info(curVar);
        }
    });
}

var dirName = process.argv[2];
var extName = process.argv[3];

fs.readdir(dirName, getExtNameFileOfDir);
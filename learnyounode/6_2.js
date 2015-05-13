var fs = require('fs');
var path = require('path');



module.exports = function(dirName, extName, returnResult) {
    var data = [];
    fs.readdir(dirName, function(err, fileList) {

        if (err) {
            return Result(err);
        } else {
            fileList.forEach(function(curVar, index, arr) {
                if (path.extname(curVar) == "." + extName) {
                    data.push(curVar);
                }

            })
            return Result(null, data);

        }
    })

}
var http = require('http');
var bl = require('bl');


var collection = [
                    {url: process.argv[2], content:'', status:false}, 
                    {url: process.argv[3], content:'', status:false}, 
                    {url: process.argv[4], content:'', status:false}, 
                ];

var completedNum = 0;

collection.forEach(function(curVal, index, arr){
    http.get(curVal.url, function(response){
        response.pipe(bl(function(err, data){
            curVal.content = data.toString('ascii');
            curVal.status = true;
            completedNum += 1;
            if(completedNum == collection.length){
                collection.forEach(function(curVal, index, arr){
                    console.info(curVal.content);
                })
            }
        }))
    })
})
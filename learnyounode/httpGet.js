var fs = require('fs');
var buf = new Buffer(1024);
var http = require('http');



function handleResponse(response)
{
    response.on('data', function(getData){
        console.info(getData.toString('ascii'));
    });

    // response.on('end', function(){
    //     console.info("all data completed");
    // });

}

http.get(process.argv[2], handleResponse);


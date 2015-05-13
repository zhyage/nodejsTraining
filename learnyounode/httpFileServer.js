var fs = require('fs');
var http = require('http');
var bl = require('bl');


var httpServer = http.createServer(function(req, res){
    req.pipe(bl(function(err, fileName){
        if(err){
            console.info("error happens");
            return;
        }
        res.writeHead(200, { 'content-type': 'text/plain' });
        fs.createReadStream(process.argv[3]).pipe(res);
    }));
});

httpServer.listen(Number(process.argv[2]));
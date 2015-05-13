var fs = require('fs');
var http = require('http');
var bl = require('bl');
var map = require('through2-map');


var httpServer = http.createServer(function(req, res){
    res.writeHead(200, { 'content-type': 'text/plain' });
    req.pipe(map(function (chunk){
        return chunk.toString().toUpperCase();
    })).pipe(res);
        
});

httpServer.listen(Number(process.argv[2]));
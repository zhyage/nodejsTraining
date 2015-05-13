var fs = require('fs');
var http = require('http');

// function handlRequireStream(req, res)
// {
//     console.info(req);
//     res.end(req.toString());
// }

httpServer = http.createServer(function(req, res){
    console.info(req.toString());
    res.end(req.toString());
});

httpServer.listen(8000);
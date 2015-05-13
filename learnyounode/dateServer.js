var http = require('http');
var net = require('net');

function fillZero(i){
    return (i < 10 ? '0':'') + i;
}

var server = net.createServer(function(socket){
    var date = new Date();
    var dateString = date.getFullYear() + '-' 
                    + fillZero(date.getMonth()+1) + '-' 
                    + fillZero(date.getDate()) + ' ' 
                    + fillZero(date.getHours()) + ':' 
                    + fillZero(date.getMinutes());
    socket.write(dateString);
    socket.end();
})

server.listen(Number(process.argv[2]));
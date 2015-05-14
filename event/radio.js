var utils = require('util');
var EventEmitter = require('events').EventEmitter;

var Radio = function(station){

    var self = this;

    setTimeout(function(){
        self.emit('open', station);
    }, 0);

    setTimeout(function(){
        self.emit('close', station);
    }, 5000);

    this.on('newListener', function(listener){
        console.log('Event listener : ', listener, 'count : ', EventEmitter.listenerCount(self, listener));
        
    })
}

utils.inherits(Radio, EventEmitter);

module.exports = Radio;
var EventEmitter = require('events').EventEmitter;
var Bacon = require('baconjs').Bacon;
var util = require('util');

var streamSrc = function(){

    var self = this;


    self.eventAGenerateStart = function(){
        var eventA = {eventName: 'a', type: 'INT', data: ''};
        var count = 0;
        Bacon.fromPoll(1000, function(){
            count += 1;
             eventA[data] = count * 2;
             self.emit(eventA[eventName], eventA); 
        })
    };

    var eventAGenerateStop = function(){

    };

    var eventBGenerateStart = function(){

    };

    var eventBGenerateStop = function(){

    };

};

util.inherits(streamSrc, EventEmitter);


var streamSource = new streamSrc();

streamSource.eventAGenerateStart();

streamSource.on('a', function(eventMsg){
    console.log("get event msg : ", eventMsg);


setTimeout(function(){
        console.log("close");
    }, 5000);

})
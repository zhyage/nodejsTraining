var EventEmitter = require('events').EventEmitter;
var Bacon = require('baconjs').Bacon;
var util = require('util');
var fs = require('fs');

var streamSrc = function(){

    var self = this;


    // self.eventAGenerateStart = function(){
    //     var eventA = {eventName: 'a', type: 'INT', data: ''};
    //     var count = 0;
    //     console.log('before event send');
    //      Bacon.fromPoll(1000, function(){
    //          count += 1;
    //          eventA[data] = count * 2;
    //          self.emit(eventA[eventName], eventA); 
    //          console.log("after send event");
    //     })
        
    // };

    var eventAGenerateStop = function(){

    };

    var eventBGenerateStart = function(){

    };

    var eventBGenerateStop = function(){

    };

    self.eventReadFs = function(){
        return Bacon.fromNodeCallback(fs.readFile, 'input.txt');
    }



};

util.inherits(streamSrc, EventEmitter);


var streamSource = new streamSrc();

readStream = streamSource.eventReadFs();

readStream.onError(function(error){
    console.log('read file error : ', error);
})

readStream.onValue(function(value){
    console.log('read file : ', value.toString('ascii'));
})

// streamSource.on('a', function(eventMsg){
//     console.log("get event msg : ", eventMsg);

// })



// var Bacon = require('baconjs').Bacon,
//     fs = require('fs');
// var read = Bacon.fromNodeCallback(fs.readFile, 'input.txt');
// read.onError(function(error) { console.log("Reading failed: " + error); });
// read.onValue(function(value) { console.log("Read contents: " + value); });
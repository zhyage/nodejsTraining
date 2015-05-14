var Radio = require('./radio.js');

var station = {
    freq: '80.12',
    name: 'rock and roll'
};

var radio = new Radio(station);

radio.on('open', function(station){
    console.log("hello it's open event from : ", station);
})

radio.on('close', function(station){
    console.log("bye bye, it's close event from : ", station);
})

radio.on('open', function(station){
    console.log("hello2 it's open event from : ", station);
})

radio.on('close', function(station){
    console.log("bye bye2, it's close event from : ", station);
})
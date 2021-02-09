const screenshot = require('screenshot-desktop')
var fs = require('fs');


var io = require('socket.io-client');
var socket = io.connect('http://localhost:3000', { reconnect: true });

socket.on('connect', function (socket) {
    console.log('Connected!');
});

socket.on('sensei', function (from, message) {
   
    screenshot().then((img) => {
        console.log("Image Taken")
        socket.emit("Response",img)
    })
})

//     screenshot().then((img) => {
//         img = img.toString('hex')
//         socket.emit("incomingImage", "MinerK9", img);

//     }).catch((err) => {
//         console.log("Error : ", err)
//     })
    
// });



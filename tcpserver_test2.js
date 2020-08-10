

var net = require("net");

var PORT = 3000;
var HOST = '127.0.0.1';

var server = net.createServer(function (socket) {
    socket.on('data',function (data) {
        console.log(data.toString());
    });
});

server.listen(PORT, HOST, function () {
    console.log("server is listensing!");
    console.log( server.address() );
});

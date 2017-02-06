var net=require('net')

var server=net.createServer( function(socket){
	console.log('connected');

	// console.log(socket);
	server.maxConnecions=2
	server.getConnections(function (err,count) {
		console.log('count',count);
	})
});

server.on('connection',function (socket) {
	console.log('socket address',socket.address());
	socket.on('data',function(data){
		console.log(data);
		console.log(socket.bytesRead);
		console.log(data.toString());
	})
	socket.on('end',function () {
		console.log('end closed');
	})
})

server.listen(8431,'localhost',function () {
	console.log('listening');
	console.log(this.address());
})


server.on('error',function(e){
	console.log(e);
	console.log(e.code);
})

var cls=function () {
	server.close(function () {
		console.log('closed');
	})
}
setTimeout(cls, 10000)
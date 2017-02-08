var net=require('net')

var server=net.createServer( function(socket){
	console.log('connected');

	// console.log(socket);
	server.maxConnecions=2
	server.getConnections(function (err,count) {
		console.log('count',count);
	})
	socket.on('end',function () {
		console.log(nth,' end closed');

	})
	server.unref()
});

server.listen(8431,'localhost',function () {
	console.log('listening');
	console.log(this.address());
})
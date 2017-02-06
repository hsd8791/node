var net=require('net')
var fs=require('fs')
var file=fs.createWriteStream('./message.txt');

var server=net.createServer( function(socket){
	console.log('connected');

	// console.log(socket);
	server.maxConnecions=2
	server.getConnections(function (err,count) {
		console.log('count',count);
	})
});
var num=0
server.on('connection',function (socket) {
	var nth=++num

	console.log('socket address',socket.address());
	socket.pause()
	//.
	socket.setTimeout(10*1000,function () {
		console.log(nth ,' connection time out');
		socket.resume()
		socket.pipe(file)
	});
	// setTimeout(function () {
	// 	socket.resume()
	// 	socket.pipe(file)
	// }, 10*1000);
	socket.on('data',function(data){
		 socket.pause()
		// setTimeout(function () {
		// 	socket.resume()
		// }, 10*1000);
		// console.log(data);
		// console.log(socket.bytesRead);
		console.log('data',data.toString());
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
//setTimeout(cls, 10000)
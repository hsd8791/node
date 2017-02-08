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
	var empty=0,reading=0
	var nth=++num
	// empty=1
	console.log('socket address',socket.address());
	socket.pause()
	console.log('paused');
	//.
	// socket.setTimeout(10*1000,function () {
	// 	console.log(nth ,' connection time out');
	// 	socket.resume()
	// 	empty=0
	// 	socket.pipe(file)
	// });
	// setTimeout(function () {
	// 	socket.resume()
	// 	socket.pipe(file)
	// }, 10*1000);
	socket.setTimeout(10*1000,function(){
		console.log(nth ,' connection time out');
		socket.resume()
		socket.pipe(file)

		setTimeout(function(){
			// socket.unpipe(file)
			console.log('unpipe');
			socket.on('data',function(data){
				console.log('data',data.toString());
				socket.pause()

				socket.setTimeout(10*1000,function(){
					console.log(nth ,' connection time out');
					socket.resume()
					socket.pipe(file)
				})	


			})
		},0)
	})
	socket.on('data',function(data){

	// 	socket.setTimeout(0)
	// 	socket.setTimeout(10*1000,function () {
	// 		console.log(nth ,' connection time out');
	// 		socket.resume()
	// 		socket.pipe(file)
	// 		setTimeout(function(){
	// 		}, 5*1000)

	// 	})

	console.log('data',data.toString());
})
	socket.on('end',function () {
		console.log(nth,' end closed');
	})
})

server.listen(8431,'localhost',function () {
	console.log('listening');
	console.log(this.address());
})


server.on('error',function(e){
	console.log('client error');
	console.log(e);
	console.log(e.code);
})

var cls=function () {
	server.close(function () {
		console.log('closed');
	})
}
//setTimeout(cls, 10000)
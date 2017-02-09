var net=require('net')
var fs=require('fs')

var server=net.createServer( function(socket){
	console.log('connected');
	var readStream=fs.createReadStream('./1.psd')
	readStream.on('data',function (data) {
		var flag=socket.write(data)
		console.log('write return',flag);
		console.log('buffer all ',socket.bufferSize);
	})
	// console.log(socket);
	server.maxConnecions=2
	server.getConnections(function (err,count) {
		console.log('count',count);
	})
	socket.on('end',function () {
		console.log(' end closed');

	})


	socket.on('close',function (err) {
		if (err) {
			console.log('close err',err);
			server.ref()
		}
		console.log('close error?',err);
			server.unref()

	})
	socket.on('error',function (err) {
		console.log('close err',err);
		socket.destroy()
	})
	socket.on('drain',function(){
		console.log('drain');
	})
});

server.listen(8431,'localhost',function () {
	console.log('listening');
	console.log(this.address());
})
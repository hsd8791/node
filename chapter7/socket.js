var net=require('net')
var client=new net.Socket()

client.connect(8431,'localhost',function () {
	console.log('client connected');
	client.write('I love you',function () {
		console.log('socket write in');
	})
	client.end()
})

client.on('data',function (data) {
	console.log('sent ',data);
})
client.on('error',function (err) {
	console.log('server error',err);
	this.distroy()
})


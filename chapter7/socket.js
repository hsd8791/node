var net=require('net')
var client=new net.Socket()


client.connect(8431,'localhost',function () {
	console.log('client connected');
	client.write('I love you',function () {
		console.log('socket write in');
	})
	setTimeout(function () {
	client.end(' it is end')
		
	}, 50*1000);

})

client.on('data',function (data) {
	console.log('sent ',data);
})
client.on('error',function (err) {
	console.log('server error',err);
	this.distroy()
})

		client.on('end',function () {
		console.log(' end closed');

	})
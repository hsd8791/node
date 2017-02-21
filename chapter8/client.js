var http=require('http')
var options={
	'method':'get',
	'path':'/',
	'hostname':'www.baidu.com',
	'port':80
}

var client=http.request(options,function(res){
	console.log('status code',res.statusCode);
	// console.log('res head:',res.headers);
		res.setEncoding('utf-8')
	res.on('data',function(chunk){
		console.log('res body',chunk);
	})
})













client.on('socket',function (socket) {
	// socket.setTimeout(1000,function(){
	// 	console.log('timeout');
	// });
})

client.setTimeout(500)
client.on('timeout',function () {
	console.log('req timeout');
	client.abort()
})

client.on('error',function (err) {
	console.log('err:',err);
})
client.end()
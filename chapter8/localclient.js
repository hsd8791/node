var http=require('http')
var options={
	hostname :'localhost',
	method :'POST',
	path :'/',
	port :8888
}

var client=http.request(options
	,function(res){
	// client.abort()
	console.log('status code',res.statusCode);
	// console.log('res head:',res.headers);
	res.on('data',function(chunk){
		res.setEncoding('utf-8')
		 console.log('res body',chunk);
	})
}
)
client.write('hello')

client.on('socket',function (socket) {
	// socket.setTimeout(1000,function(){
	// 	console.log('timeout');
	// });
})

// client.setTimeout(5000)
// client.on('timeout',function () {
// 	console.log('req timeout');
// 	client.abort()
// })

client.on('error',function (err) {
	console.log('err:',err);
})
client.end('byby')
var http=require('http')
var fs=require('fs')
var server=http.createServer();

server.on('request',function(req,res) {
	var file=fs.createWriteStream('./request.log');
	console.log('request');
	console.log(req.url);
	var head=JSON.stringify(req.headers)
	if(req.url!='/favicon.ico'){
		// res.writeHead(200,{'content-Type':'text/plain'})
		res.setHeader('Content-Type','text/plain')
		res.setHeader('Access-Control-Allow-Origin','*')
		res.sendDate=false
		res.statusCode=404
		file.write('url:'+req.url+'\n')
		res.write('url:'+req.url+'\n')
		// console.log(head);
		// console.log('write in');
		res.write('header:'+head+'\n')
		file.write('header:'+head+'\n')
		res.write('啊哈哈哈哈  you connect me')
		res.write(res.getHeader('Content-Type'))
	}
	req.on('data',function (data) {
		console.log('server get:',decodeURIComponent(data))
	})
	req.on('end',function () {
		console.log('data sent all');
	})

	res.end()
	// console.log();
})

server.listen(1337,'127.0.0.1',function () {
	console.log('running port 1337');

	// setTimeout(function () {
		// server.close()
	// }, 30*1000);
})

// server.setTimeout(10*1000,function (socket) {console.log(socket)});

server.on('close',function () {
	console.log('server closed');
})
server.on('error',function (err) {
	console.log('err',err.code);
})
var http=require('http')
var url=require('url')

var server=http.createServer(function (sreq,sres) {
	var urlReq=url.parse(sreq.url)
	// console.log('creq:', urlReq);
	console.log('agent get to:');
	// console.log('creq:', sreq.headers);
	var opts={

		'hostname':'www.baidu.com',
		// 'method':'get',
		'path':'/',
		headers:sreq.headers,
		'port':80
	}
	var client=http.get(opts,function (cres) {
		console.log('cres-------------------------------------------',cres.statusCode);
		// sres.writeHead(cres.statusCode,cres.Headers)
		console.log('agent working');
		// cres.pipe(sres)
	})
	// sreq.pipe(client)


	// var options={
	// 	'hostname':'www.baidu.com',
	// 	'method':'get',
	// 	'path':'/',
	// 	headers:sreq.headers,
	// 	'port':80
	// }

	// var client=http.request(options,function(res){
	// 	console.log('status code',res.statusCode);
	// 	console.log('cres-------------------------------------------',cres.statusCode);


	// 	res.setEncoding('utf-8')
	// 	res.on('data',function(chunk){
	// 		console.log('res body',chunk);
	// 	})
	// })

	client.on('error',function (err) {
		console.log('client error:',err);
	})

})
server.on('error',function (err) {
	console.log('server error:',err);
})
server.listen(1337,'127.0.0.1',function(){
	console.log('running');
})
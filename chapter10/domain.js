var http=require('http')

var domain=require('domain')

http.createServer(function (req,res) {
	var d=domain.create()

	d.once('error',function(err){
		console.log('err:',err.message);
		res.write(err.message)
		res.end()
	})
	d.run(function () {
		
		if (req.url!=='/favicon.ico'){
			res.writeHead(200,{'content-Type':'text/html'})
			noneexist()
			res.write('<head><meta charset="utf-8"></head>')
			res.write('你好\n')


		}
	})
}).listen(1337,'localhost',function(){
	console.log('running');
})

// process.on('uncaughtException',function (err) {
// 	console.log('err:', err);
// })
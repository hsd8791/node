var http=require('http')
var domain=require('domain')
http.createServer(function (req,res) {
	if (req.url!=='/favicon.ico'){
		noneexist()
		res.writeHead({'content-Type':'text/html'})
		res.write('<head><meta charset="utf-8"></head>')
		res.write('你好\n')

	}
}).listen(1337,'localhost',function(){
	console.log('running');
})

process.on('uncaughtException',function (err) {
	console.log('err:', err);
})
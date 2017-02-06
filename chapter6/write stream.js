var fs=require('fs')

var readFile=fs.createReadStream('./buffer_writing.txt');
var writeFile=fs.createWriteStream('./test write.txt');

readFile.on('data',function (data) {
	writeFile.write(data)
	
})

writeFile.on('open',function (data) {
	console.log('open');
})

readFile.on('end',function () {
	writeFile.end('goodbye',function () {
		console.log('writing finished');
		console.log('write '+ writeFile.bytesWritten);
	})
	console.log();
})
var fs=require('fs')

var readStream=fs.ReadStream('./test mk/test.txt', {'start':3,'end':12});
readStream.pause()
setTimeout(function () {
	readStream.resume()
}, 2000);
readStream.on('data',function (data) {
	console.log('get data');
	console.log(data);
	console.log(data.toString());
})

readStream.on('end',function () {
	console.log('end');
})

readStream.on('close',function () {
	console.log('closed');
})

readStream.on('error',function (err) {
	console.log(err);
})
process.stdin.resume()

process.stdin.on('data',function (chunk) {
	console.log('get data');
	// process.stdout.write('get '+chunk)
	console.log(chunk);
});

process.on('SIGINT',function () {
	console.log('get sigint signal');
})
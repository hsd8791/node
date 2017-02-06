var fs=require('fs')

fs.mkdir('./test mk', function (err) {
	if (err) {
		//console.log(err);
		console.log('err');
		return
	}
	else console.log('make successfully');	
});

fs.readdir('./test mk', function (err,files) {
	console.log(files);
});

fs.stat('./test mk', function (err,stats) {
	console.log(stats.isFile());
	var isDir = stats.isDirectory();
	var isFile = stats.isFile();
	console.log('isDir: ', isDir);
	console.log('isFile: ', isFile);
	//console.log(stats);
	// stats.isFile()
});

fs.exists('./test.txt', function (exists) {
	console.log('1',exists);
});

fs.exists('./test3.txt', function (exists) {
	console.log('2',exists);
});
var cache={'/chapter6':'/.'}
fs.realpath('./chapter6/test.txt', cache,function (err,resolvePath) {
	console.log(err);
	console.log(resolvePath);
});
fs.realpath('./test2.txt', function (err,resolvePath) {
	console.log(err);
	console.log(resolvePath);
});


var fs=require('fs')
var data=fs.readFileSync('./index.html','utf-8')


var buf=new Buffer('我喜爱编程  I love coding');
console.log(buf);
fs.open('./test2.txt','w',function(err,fd){
	if (err) {
		console.log(err);
	}
	console.log('successfully open');
	fs.write(fd, buf, 3, 9, 0, function(err){
		if (err) {console.log(err);}
		console.log('successfully write');
		fs.fsync(fd, function (err) {
			console.log(err);
			// body...
		});
		fs.close(fd, function(err){
			if (err) {console.log(err);}
			console.log('successfully closed');
		});
	});
})
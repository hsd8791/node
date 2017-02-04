var fs=require('fs')
var data=fs.readFileSync('./index.html','utf-8')

fs.readFile('./index.html',{encoding:'base64'},function(err,data){
	if(err){
		console.log(err);
	}
	console.log(data);
})
fs.writeFile('test.txt', '1st file writing ' ,function(err){
	if(err)console.log(err);
	console.log('success!');
});
var str=new Buffer('I love coding');
fs.writeFile('buffer_writing.txt',str, function(err){
	if(err)console.log(err);
	console.log('success!');
});
console.log(data)



fs.open('./test.txt','r',function(err,fd){
	console.log('----------- read from nominated position --------------');
	if(err){
		console.log(err);
	}
	console.log(fd);
	var buf=new Buffer(255)
	fs.read(fd, buf, 0,9, 3, function(err,bytesRead,buffer){
		console.log(buffer.slice(0,bytesRead).toString());
		console.log('----------- read from nominated position --------------');
	})
	fs.read(fd, buf, 0,1,null, function(err,bytesRead,buffer){
		console.log(buffer.slice(0,bytesRead).toString());
		console.log('----------- read from nominated position --------------');
	})
	console.log('buf',buf);
	console.log('----------- read from nominated position --------------');
})



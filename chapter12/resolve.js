var dns=require('dns')

dns.resolve('www.baidu.com','A',function (e,r) {
	console.log('Ipv4');
	if(e){
		console.log('err:',e);

	}else{
		console.log(r);
	}
})

dns.resolveMx('163.com',function (e,r) {
	console.log('Mx');
	if(e){
		console.log('err:',e);

	}else{
		console.log(r);
	}
})

dns.lookup('www.163.com',6,function(err,add){
		console.log('lookup');
	if(err){
		console.log('err:',err);

	}else{
		console.log(add);
	}
})
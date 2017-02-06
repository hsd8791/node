var fs=require('fs')

// var watcher=fs.watch('./test hard link.txt',function(e,fn){
// 	console.log(e);
// 	console.log(fn);
// });

fs.watchFile('./test hard link.txt', {'persistent':true}, function(cur,prev){
	if(Date.parse(prev.ctime)==0){
		console.log('create new');
	}else if(Date.parse(cur.ctime)==0){
		console.log('deleted');
	}if(Date.parse(cur.mtime)!=Date.parse(prev.mtime)){
		console.log('amended');
	}
	console.log(cur);
	console.log(Date.parse(cur.ctime));
	console.log(prev);
	console.log('---------end--------------');

});
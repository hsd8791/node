var fs=require('fs')

fs.link('./test mk/test.txt','./test hard link.txt',function(err){
	if (err) {console.log(err);return}
	console.log('success');
})

// fs.unlink('./test hard link.txt', function(err){
// 	if (err) {console.log(err);return}
// 	console.log('unlink success');
	
// });
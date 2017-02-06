var fs=require('fs')

fs.symlink('./test mk','./test mk2' , 'dir', function(err){
	if (err) {console.log(err);return}
	console.log('unlink success');
	});
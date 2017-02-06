var fs=require('fs')

fs.rename('./test2.txt', './test mk/test3.txt', function (err) {
	if (err) {console.log(err);}else console.log('success')
});
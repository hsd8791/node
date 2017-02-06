var fs=require('fs')

var date1=new Date()
console.log(date1+1);
fs.utimes('./test.txt', new Date(), new Date(), function (err) {
	fs.stat('./test.txt', function (err,stats) {
		console.log(err);
		console.log(stats);
	});
});
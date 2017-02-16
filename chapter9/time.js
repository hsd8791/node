function foo(){
	console.log('foo');
}

var time1=process.uptime();
var time=process.hrtime();
foo()
var time2=process.uptime();
var useT=process.hrtime(time);
console.log('1', time2-time1);
console.log(useT);

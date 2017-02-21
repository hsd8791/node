var readline=require('readline')
var fs=require('fs')

var file=fs.createReadStream('./message.txt');
var out=fs.createWriteStream('./newtext.txt');
var index=1
out.write('line'+index.toString()+':')
index++

var rl=readline.createInterface({
	input:file, 
	output:out,
	terminal:true
	//completer:completer
})

// function completer(line){
// 	var completions='aaa bbb ccc ddd text quit pause'.split(' ')
// 	var hits=completions.filter(function (c) {
// 		// body...
// 		return c.indexOf(line) ==0
// 	})
// 	return [hits.length?hits:completions,line]
// }

rl.on('line',function(line){
	// if(line==='quit'){
	// 	rl.close()
	// }else if(line==='pause'){
	// 	console.log('paused');
	// 	rl.pause()
	// 	setTimeout(function () {
	// 		rl.resume()	
	// 	},11000)
	// }else{
	// 	console.log('input:',line);
	// }
	out.write('line'+index.toString()+':')
	index++
})

rl.on('close',function () {
	console.log('closed');
})
// rl.on('pause',function () {
	
// })
// rl.on('resume',function () {
// 	console.log('resumed');
// })

file.on('end',function () {
	var buf=new Buffer("created on"+(new Date()).toLocaleString());
	rl.removeAllListeners('line');
	rl.write('\r\n')
	rl.write(buf)
})
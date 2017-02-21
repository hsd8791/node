var readline=require('readline')

var rl=readline.createInterface({
	input:process.stdin, 
	output:process.stdout,
	completer:completer
})

function completer(line){
	var completions='aaa bbb ccc ddd text quit pause'.split(' ')
	var hits=completions.filter(function (c) {
		// body...
		return c.indexOf(line) ==0
	})
	return [hits.length?hits:completions,line]
}

rl.on('line',function(line){
	if(line==='quit'){
		rl.close()
	}else if(line==='pause'){
		console.log('paused');
		rl.pause()
		setTimeout(function () {
			rl.resume()	
		},11000)
	}else{
		console.log('input:',line);
	}
})

rl.on('close',function () {
	console.log('closed');
})
// rl.on('pause',function () {
	
// })
// rl.on('resume',function () {
// 	console.log('resumed');
// })
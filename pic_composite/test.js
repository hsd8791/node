// var md5 = require('md5');
// var fs=require('fs')

// fs.readFile('package.json',function(err,buffer){
// 	if(err){console.log(err)}
// 	console.log(md5(buffer))
// })
// console.log(md5('package.json'));
// console.log(md5('message'));



var express=require('express')
var http=require('http')
var app=express()
var fs=require('fs')
var querystring=require('querystring')
//var gm = require('gm')
//, dir = __dirname + '/imgs'
//var imageMagick = gm.subClass({ imageMagick: true });
var fs = require('fs') 
//var Iconv = require('iconv').Iconv; 
var encoding = require('encoding');
var path=require('path')
var md5=require('md5')


app.use('/2017', express.static(__dirname + '/'));

var goToIndex=function(req,res){
	res.writeHead(200,{'content-Type':'text/html'})
	res.write('<head><meta charset="utf-8"><title>使用post方法向服务器端提交数据</title></head>')
	//console.trace(__dirname)
	var file=fs.createReadStream('index.html')  //??
	file.pipe(res) //??
	return;
	// res.end('你好\n')
}

app.get('/index.html',goToIndex)

app.listen(8080,'127.0.0.1')
console.log('running')

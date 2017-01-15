var express=require('express')
var http=require('http')
var app=express()
var fs=require('fs')
var querystring=require('querystring')
var querystring=require('querystring')
var mysql=require('mysql')

var pool = mysql.createPool({
	host:'localhost',
	port:8080,
	database:'mysql',
	user:'root',
	password:'root'
})

app.get('/index.html',function(req,res){
	res.writeHead(200,{'content-Type':'text/html'})
	res.write('<head><meta charset="utf-8"><title>使用post方法向服务器端提交数据</title></head>')
	console.log('running')
	var file=fs.createReadStream('index.html')  //??
	file.pipe(res) //??
	// res.end('你好\n')
})
app.post('/index.html',function(req,res){
	req.on('data',function(data){
		var obj=querystring.parse(data.toString())  //??
		pool.getConnection(function(err,connection){   
			if(err) {
				res.send('connect to mysql unsuccessfully')
			}
			else{
				var str;
				connection.query('INSERT INTO user SET ?',
					{username:obj.username,firstname:obj.firstname},
					function(err,result){
						if(err){
							str='fail to insert data'

						}
						else{
							str='succeed TO insert data'
						}
						connection.release();
						res.send(str)
					})
			}
		})
	})
})

app.listen(8080,'127.0.0.1')
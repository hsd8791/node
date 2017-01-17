var express=require('express')
var http=require('http')
var app=express()
var fs=require('fs')
var querystring=require('querystring')
var mysql=require('mysql')
var gm = require('gm')
, dir = __dirname + '/imgs'
var imageMagick = gm.subClass({ imageMagick: true });




var pool = mysql.createPool({
	host:'localhost',
	port:8080,
	database:'mysql',
	user:'root',
	password:'root'
})
app.use('/2017', express.static(__dirname + '/'));

app.get('/index.html',function(req,res){
	res.writeHead(200,{'content-Type':'text/html'})
	res.write('<head><meta charset="utf-8"><title>使用post方法向服务器端提交数据</title></head>')
	console.log('running')
	//console.trace(__dirname)
	var file=fs.createReadStream('index.html')  //??
	file.pipe(res) //??
	// res.end('你好\n')
})
app.post('/index.html',function(req,res){
	req.on('data',function(data){
		 var obj=querystring.parse(data.toString())  //??

		 console.log('data',data,obj.firstname)
		 imageMagick (300,300,dir + "/background.jpg")
		 // gm(dir + "/background.jpg")
		 .font( __dirname + '/fonts/msyhbd.ttc')
		 .drawText(1200, 1200, obj.firstname+'陆'+'123asd')
		// .draw('text  1700, 1700 '+obj.lastname)
		 .fontSize(616)
		 .stroke("#cccccc")
		 .gravity('Center')
		// .draw("text 100,150 '" + new String("China中文".getBytes("utf-8"),"gbk")+ "'")
		 .write(dir+"/drawing1.png", function (err) {
		 	if (!err) console.log('done');
		 	console.log(err)
		 });

		// pool.getConnection(function(err,connection){   
		// 	if(err){
		// 		res.send('connect to mysql unsuccessfully')
		// 	}
		// 	else{
		// 		var str;
		// 		connection.query('INSERT INTO user SET ?',
		// 			{username:obj.username,firstname:obj.firstname},
		// 			function(err,result){
		// 				if(err){
		// 					str='fail to insert data'
		// 				}
		// 				else{
		// 					str='succeed TO insert data'
		// 				}
		// 				connection.release();
		// 				res.send(str)
		// 			})
		// 	}
		// })
	})
})

app.listen(8080,'127.0.0.1')
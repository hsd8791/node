var express=require('express')
var http=require('http')
var app=express()
var fs=require('fs')
var querystring=require('querystring')
var gm = require('gm')
, dir = __dirname + '/imgs'
var imageMagick = gm.subClass({ imageMagick: true });
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
app.post('/index.html',function(req,res){
	req.on('data',function(data){
		var obj=querystring.parse(data.toString())  
		console.log('data',data,obj.firstname)
		var newPath=dir+"/drawing1"+md5(obj.lastname)+".jpg"
		console.log(newPath)
		if(fs.existsSync(newPath)){
			console.log('already exist') 
			res.write('<script>alert("already exist")</script>')
			//res.location('/index.html')
		//	res.end()
		res.write('<head><meta charset="utf-8"><title>使用post方法向服务器端提交数据</title></head>')
	var file=fs.createReadStream('index.html')  //??
	file.pipe(res) //??
		//goToIndex(req,res);


			return;
		}

		// var buffer = encoding.convert('aaa我是中文字', 'GBK','UTF-8')
		imageMagick (dir + "/background.jpg")
		.font( __dirname + '/fonts/msyhbd.ttc')
		.fontSize(616)
		.drawText(1200, 1200, obj.lastname+'123asd') 
		.stroke("#cccccc")
		.gravity('Center')
		.write(newPath, function (err) {
			if (!err) console.log('done');
			console.log(err)
		})
		res.end()


	})

})
app.listen(8080,'127.0.0.1')
console.log('running')

//gm(dir + "/background.jpg")

//gm(400, 400, '#ffffff') .font('simhei.ttf', 28) .drawText(20, 50, buffer)

// .draw('text  1700, 1700 '+obj.lastname)

// .draw("text 100,150 '" + new String("China中文".getBytes("utf-8"),"gbk")+ "'")

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
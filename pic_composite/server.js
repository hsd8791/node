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
var url = require('url');
var router = express.Router();

app.set('views', path.join(__dirname, 'views'));// ÉèÖÃ´æ·ÅÄ£°åÎÄ¼þµÄÄ¿Â¼
app.set('view engine', 'ejs');// ÉèÖÃÄ£°åÒýÇæÎª ejs

app.use( '/',express.static( __dirname+"/" ) )
app.use( '/2017/imgs',express.static( __dirname+"/imgs" ) )
app.use('/2017', router);

// var goToIndex=function(req,res){
// 	res.writeHead(200,{'content-Type':'text/html'})
// 	res.write('<head><meta charset="utf-8"><title>Ê¹ÓÃpost·½·¨Ïò·þÎñÆ÷¶ËÌá½»Êý¾Ý</title></head>')
// 	//console.trace(__dirname)
// 	var file=fs.createReadStream('index.html')  //??
// 	file.pipe(res) //??
// 	return;
// 	// res.end('ÄãºÃ\n')
// }

//app.get('/index.html',goToIndex)

router.get('/index.html/?',function(req,res){
	// var urlp=url.parse(req.url, true)
	// console.log('urlp',urlp)
	var queryData = url.parse(req.url, true).query;
	console.log(queryData,queryData.state)
	if(queryData.state==0||queryData.state===undefined||!queryData.state){
		console.log('test')
		var cacheControl=Math.random().toString(36).substr(2);
		res.render('index',{
			//path2:'/2017/imgs/try-egg.gif?'+cacheControl
		})
	}else{
		console.log('share')
//path 路径！
		res.render('index1', {
			// path:'#'
			path:"/2017/imgs/share-images/try-share"+queryData.index+".jpg"
		});
	}
	res.end();
})
// app.post('/index2.html',function(req,res){
// 	req.on('data',function(data){
// 		var obj=querystring.parse(data.toString())  
// 		console.log('data',data,obj.firstname)
// 		var newPath=dir+"/drawing1"+md5(obj.lastname)+".jpg"
// 		console.log(newPath)
// 		if(fs.existsSync(newPath)){
// 			console.log('already exist') 
// 			res.write('<script>alert("already exist")</script>')
// 			//res.location('/index.html')
// 		//	res.end()

// 		res.write('<head><meta charset="utf-8"><title>post</title></head>')
// 		var file=fs.createReadStream('index.html')  //??
// 		//file.pipe(res) //??
// 		//goToIndex(req,res);
// 		return;
// 	}

// 		// var buffer = encoding.convert('aaaÎÒÊÇÖÐÎÄ×Ö', 'GBK','UTF-8')
// 		imageMagick (dir + "/background.jpg")
// 		.font( __dirname + '/fonts/msyhbd.ttc')
// 		.fontSize(616)
// 		.drawText(1200, 1200, obj.lastname+'123asd') 
// 		.stroke("#cccccc")
// 		.gravity('Center')
// 		.write(newPath, function (err) {
// 			if (!err) {
// 				res.render('index1', {
// 					race:req.params.race,
// 					name: req.query.name,
// 					age: req.query.age,
// 					hobby:req.params.hobby,
// 					path:"/2017/imgs/drawing1"+md5(obj.lastname)+".jpg"
// 				});
// 				console.log('done');
// 				res.end()
// 			}
// 			console.log(err)
// 			res.end()
// 		})
// 		//Ìø×ª

// 		//res.location('http://www.baidu.com')





// 	})

// })
app.listen(8888,'127.0.0.1')
console.log('running')

//gm(dir + "/background.jpg")

//gm(400, 400, '#ffffff') .font('simhei.ttf', 28) .drawText(20, 50, buffer)

// .draw('text  1700, 1700 '+obj.lastname)

// .draw("text 100,150 '" + new String("ChinaÖÐÎÄ".getBytes("utf-8"),"gbk")+ "'")

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
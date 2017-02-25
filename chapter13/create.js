var mongo=require('mongodb')

//var port=mongodb.Connection.DEFAULT_PORT
var server=new mongo.Server('127.0.0.1',1337,{auto_reconnect:true})
var db=new mongo.Db('first-database',server,{safe:true})

//console.log(mongo.Connection);
db.open(function (err,db) {
	if(err) {
		throw err
	}
	else{
		console.log('create successfully');

		//db.close()
	}
})
db.on('close',function (err,db) {
	// body...
	if(err){
		throw err

	}else{
		console.log('closed');
	}
})
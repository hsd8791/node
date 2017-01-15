// var http = require('http');
// http.createServer(function(req,res){
// 	res.writeHead(200,{'content-Type':'text/plain'});
// 	res.end('hello world\n');
// }).listen(1337,'127.0.0.1');
// console.log('sever running at http://127.0.0.1:1337/');

// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World\n');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

// var http = require('http');

// http.createServer(function (request, response) {

// 	// 发送 HTTP 头部 
// 	// HTTP 状态值: 200 : OK
// 	// 内容类型: text/plain
// 	response.writeHead(200, {'Content-Type': 'text/plain'});

// 	// 发送响应数据 "Hello World"
// 	response.end('Hello World\n');
// }).listen(8888);

var http = require("http");
var url = require("url");
var querystring = require("querystring");
var formidable = require("formidable");
function start(route , handle) {
	function onRequest(request, response) {
		console.log("Request received.");
		// var postData = "";
		var pathname = url.parse(request.url).pathname;
		console.log("Request for " + pathname + " received.");
		//request.setEncoding("utf8");
		// request.addListener("data", function(postDataChunk) {
		// 	postData += postDataChunk;
		// 	console.log("Received POST data chunk '"+
		// 		postDataChunk + "'.");
		// });

		// request.addListener("end", function() {
			// console.log('postData',postData)
			// postData=querystring.parse(postData).text;

			// console.log('postData',postData)
			route(handle, pathname, response, request);
		// });

		//var content=
		// route(handle, pathname,response);

		// response.writeHead(200, {"Content-Type": "text/plain"});
		// response.write(content);
		// response.end();
	}

	http.createServer(onRequest).listen(8888);
	console.log("Server has started.");
  // console.log(onRequest);
  // console.log(start);
}

exports.start = start;


// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');

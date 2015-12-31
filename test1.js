var http = require("http");

http.createServer(function(request, reponse){
	reponse.writeHead(200,{"Content-Type":"text/plain"});
	reponse.end("Hellp wordd!");
	}).listen(8088);
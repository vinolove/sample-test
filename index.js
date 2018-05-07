var http = require("http");

http.createServer(function(req,res){
    res.end("This is server");
}).listen(8085);
var fs = require('fs');
var http = require('http');

var server = http.createServer(function(req, res){
    console.log('res was made ' + req.url);
    res.writeHead(200, {'Content-Type': 'text/html'});
    var myReadStream = fs.createReadStream(__dirname + '/index.html/', 'utf8');
    
    myReadStream.pipe(res);
});

server.listen(3000);
console.log('listening to port 3000')


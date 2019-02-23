var fs = require('fs');
var http = require('http');

var server = http.createServer(function(req, res){
    console.log('res was made ' + req.url);
    res.writeHead(200, {'Content-Type': 'application/json'});
    var myObj = {
        name: 'Yeshendra',
        age: '28',
        address: 'Lucknow'
    };

   res.end(JSON.stringify(myObj));
});

server.listen(3000);
console.log('listening to port 3000')


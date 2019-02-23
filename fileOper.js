var fs = require('fs');

//blocking code
var readMe = fs.readFileSync('readme.txt', 'utf8');
console.log(readMe)

//blocking code
fs.writeFileSync('writeme.txt',readMe);

//non blocking code (asynchronous)
fs.readFile('readme.txt', 'utf8', function(err, data){
    console.log(data)
})

//to delete a file
fs.unlink('writeme.txt');
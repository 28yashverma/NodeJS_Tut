var fs = require('fs');

//blocking code
// fs.mkdirSync('stuff')
// fs.rmdirSync('stuff')

//non blocking code
fs.mkdir('stuff', function(){
    fs.readFile('readme.txt', 'utf8', function(err, data){
        fs.writeFile('./stuff/writeme.txt', data)
    })
})

//to remove a directory
fs.rmdir('stuff');
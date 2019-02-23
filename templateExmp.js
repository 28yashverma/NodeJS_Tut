var express = require('express');

var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html')
    //res.render('profile');
})

app.get('/test', function(req, res){
    var data = {age: 23, address: 'Chinhat Lucknow', hobbies: ['eating', 'partying', 'biking']};
    res.render('test', {data: data});
})

app.get('/profile/:name', function(req, res){
    res.render('profile', {person: req.params.name});
})

app.listen(3000)
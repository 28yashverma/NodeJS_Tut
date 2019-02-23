var express = require('express');

var app = express();

app.get('/home', function(req, res) {
    res.send('Home page')
})


app.get('/', function(req, res){
    res.send('this is the homepage')
})

app.get('/profile', function(req, res){
    res.send('You requested to see profile with the id of ')
})

app.listen(3000);
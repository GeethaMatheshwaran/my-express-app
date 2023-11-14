var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var urlencodedParser = bodyparser.urlencoded({ extended: false });


app.get('/userform',function(req,res){
    res.sendFile(__dirname + "/"+"index.html");
});

app.get('/get_user_data', function(req, res) {
    const userName = req.query['user_name'];
    res.send('<h1>Welcome 123 ' + userName + '</h1>');
});

app.post('/post_user_data',urlencodedParser,function(req, res) {
    const userName = req.body.user_name;
    res.send('<h1>Welcome 123 ' + userName + '</h1>');
});

app.listen(8080);
var express = require('express');
var app = express();
var server = require('http').Server(app);
var bodyParser = require('body-parser');
var io = require('socket.io')(server);
var crypto = require('crypto');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));

var port = 80;

var users = {leo: 'test', leopold: 'test1'}

server.listen(port, function(){
  console.log('Listening on port: ${port}')
});

app.get('/', function(req, res){
  res.sendFile(__dirname + '/login.html');
});
app.get('/', function(req, res){
  res.sendFile(__dirname + '/login.html');
});
app.get('/js/lib/socket.io.js', function(req, res){
  res.sendFile('/js/lib/socket.io.js');
});
app.get('/js/lib/jquery-3.2.1.min.js', function(req, res){
  res.sendFile('/js/lib/jquery-3.2.1.min.js');
});
app.get('/js/main.js', function(req, res){
  res.sendFile('/js/main.js');
});
app.get('/css/main.css', function(req, res){
  res.sendFile('/css/main.css');
});
app.get('/css/login.css', function(req, res){
  res.sendFile('/css/login.css');
});

//login request received
app.post('/login', function(req, res){
  console.log('post received');
  /*if(hash == crypto.createHash('md5').update(req.body.pass).digest('hex')){
    res.sendFile(__dirname + '/main.html');
  }*/
  var username = req.body.user
  var userpass = req.body.pass
  console.log(username = userpass)

  /*if(username != nil){
    if(crypto.createHash('md5').update(userpass))
  }*/
});

io.on('connection', function(socket){

})

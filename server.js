var express = require('express');
var app = express();
var server = require('http').Server(app);
var bodyParser = require('body-parser');
var io = require('socket.io')(server);
var crypto = require('crypto');
var path = require('path')

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));

var port = 6985;

var users = {leo: '098f6bcd4621d373cade4e832627b4f6', leopold: 'test1'}

server.listen(port, function(){
  console.log('Listening on port: ' + port)
});

app.get('/', function(req, res){
  res.sendFile(__dirname + '/login.html');
});
app.get('/lib/jquery-3.2.1.min.js', function(req, res){
  res.sendFile(__dirname + '/lib/jquery-3.2.1.min.js');
});
app.get('/main.js', function(req, res){
  res.sendFile(__dirname + '/main.js');
});
app.get('/css/main.css', function(req, res){
  res.sendFile(__dirname + '/css/main.css');
});
app.get('/css/login.css', function(req, res){
  res.sendFile(__dirname + '/css/login.css');
});
app.get('/login.js', function(req, res){
  res.sendFile(__dirname + '/login.js');
});

//login request received
app.post('/login.html', function(req, res){
  var username = req.body.username
  var password = req.body.password
  var ip = req.connection.remoteAddress;if (ip.length >= 15) ip = ip.slice(7);
  if(users[username] != null){
    if(users[username].toString() == password.toString()){
      console.log('Successful login from ' + ip + ' as user ' + username)
      res.sendFile(path.join(__dirname + '/main.html'))
    }else{
      res.send('401')
      console.log('Unsuccessful login attempt from ' + ip + ' (wrong password)');
    }
  }else{
    res.send('401')
    console.log('Unsuccessful login attempt from ' + ip + ' (wrong username)');
  }
});

//connect users with ips after logins
io.on('connection', function(socket){

})

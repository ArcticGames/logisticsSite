var socket = io.connect();

socket.on('connected', function(data){
  console.log(data.message);
});

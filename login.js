$(document).ready(function(){
  var MD5 = new Hashes.MD5;
  $('#submit_button').click(function(){
    var username = $('#user').val();
    var password =  MD5.hex($('#pass').val());
    $.post('/login.html', {username: username, password: password}, function(data){
      console.log('posted')
      console.log(data);
      $('body').html(data)
    })
  });
})

$(document).ready(function(){
  if(localStorage.getItem('fail') == 'true'){
    $('#attempt').text('Wrong username or password');
    localStorage.setItem('fail', null);
  };
  var MD5 = new Hashes.MD5;
  $('#submit_button').click(function(){
    var username = $('#user').val();
    var password =  MD5.hex($('#pass').val());
    $.post('/login.html', {username: username, password: password}, function(data){
      console.log('posted')
      if(data == '401'){
        localStorage.setItem('fail', 'true')
        window.location.reload()
      }
      console.log(data);
      $('body').html(data)
    })
  });
})

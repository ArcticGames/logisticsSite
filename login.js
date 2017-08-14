var MD5 = new Hashes.MD5;
var username = $('#user').val();
var password =  MD5.hex($('#pass').val());

$('#submit_button').click(function(){
  $.post('/login.html', username: password, function(data, textStatus, xhr) {
    /*optional stuff to do after success */
  })
});

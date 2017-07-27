$(document)
  .on('input propertychange', '.elemForm' , function(e) {
    $(this).toggleClass('elemForm-filled',!! $(e.target).val());
  })
  .on('focus', '.elemForm', function() {
    $(this).addClass('elemForm-focused');
  })
  .on('blur', '.elemForm', function() {
    $(this).removeClass('elemForm-focused');
  });

$('#id_phone').mask('0 (000) 000 00 00');

$(document).on('input propertychange', '#connectMe', function() {
  var $name = $('#id_name');
  
  var str = $name
    .val()
    .toLowerCase()
    .split(' ')
    .map(fixWord)
    .join(' ');

  function fixWord( word ) {
     return word.replace(word.charAt(0), word.charAt(0).toUpperCase()); 
  }
  
  $name.val(str);
});

$(document).on('submit', '#connectMe', function(e) {
  e.preventDefault();
  
  $present.showLoading('#formWrapper', 'append');
  $(this).hide('fast');
  
  sendEmail();
});// end submit

function sendEmail() {
  var name = $('#id_name').val(),
      email = $('#id_email').val(),
      phone = $('#id_phone').val(),
      message = $('#id_message').val(),
      sendData = {
        'name': name,
        'email': email,
        'phone': phone,
        'message': message
      },
      csrftoken = Cookies.get('csrftoken'),
      $formWrapper = $('#formWrapper');
  
  function csrfSafeMethod(method) {
    return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
  }
  $.ajaxSetup({
      url: '/success/',
      type: 'POST',
      beforeSend: function(xhr, settings) {
          if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
              xhr.setRequestHeader("X-CSRFToken", csrftoken);
          }
      }
  });
  
  $.ajax({
    data: sendData,
    success: function(respond) {
      $formWrapper.html(respond);
    },
    error : function(xhr,errmsg,err) {
      $('#connectForm').show('fast');
      $formWrapper.find('img').remove();
    }
  });
}
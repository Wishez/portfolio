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

$('#phone').mask('0 (000) 000 00 00');

$(document).on('input propertychange', '#connectMe', function() {
  var $name = $('#name');
  
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
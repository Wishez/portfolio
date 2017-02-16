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

$(document).on('Change', '#name', function() {
  var words = [];
  var $this = $(this);
  var value = $this.val().toLowerCase();
  var result = "";
  
  words = value.split(' ');
  
  words.forEach( function( word, i) {
    var firstLetter = word.charAt(0).toUpperCase();
    result += firstLetter.concat(word.slice(1));
    if (i != words.length) {
      result += ' ';
    }
  });
  
  $this.val(result);
});